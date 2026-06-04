/* ==========================================
   PDF.js SETUP
   ========================================== */
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

/* ==========================================
   PALETTES & WIDTHS
   ========================================== */
const PALETTES = [
  { color: '#5c1a2e', accent: '#a03050' },
  { color: '#1a2740', accent: '#2a4a70' },
  { color: '#2a4a2e', accent: '#4a7a50' },
  { color: '#6b3a1a', accent: '#a05a2a' },
  { color: '#1a3d3d', accent: '#2a6060' },
  { color: '#4a3a6e', accent: '#7060a0' },
  { color: '#5c4a1a', accent: '#8b6a20' },
  { color: '#3d1a1a', accent: '#6a2a2a' },
];
const WIDTHS = [72, 80, 68, 85, 75, 78, 70, 82, 74, 76, 88, 66];

/* ==========================================
   STATE
   ========================================== */
let library       = [];
let currentBook   = null;
let currentSpread = 0;
let isAnimating   = false;

/* ==========================================
   LOAD BOOKS.JSON
   ========================================== */
async function loadBooksJson() {
  try {
    const res = await fetch('books.json');
    if (!res.ok) throw new Error('No se encontró books.json');
    const manifest = await res.json();
    library = manifest.map((entry, i) => ({
      id:       entry.id ?? i + 1,
      title:    entry.title,
      file:     entry.file,
      palette:  PALETTES[i % PALETTES.length],
      widthIdx: i % WIDTHS.length,
      images:   null   // array of dataURLs, one per PDF page
    }));
  } catch (err) {
    console.error('Error cargando books.json:', err);
    library = [];
  }
  renderLibrary();
}

/* ==========================================
   LOAD PDF → render each page to image
   ========================================== */
async function loadBookContent(book) {
  if (book.images) return;

  const res = await fetch(book.file);
  if (!res.ok) throw new Error(`No se pudo cargar: ${book.file}`);
  const buffer = await res.arrayBuffer();

  const pdfDoc = await pdfjsLib.getDocument({ data: buffer }).promise;
  const images = [];

  // Render at 2× for sharpness on retina screens
  const SCALE = 2;

  for (let i = 1; i <= pdfDoc.numPages; i++) {
    const page     = await pdfDoc.getPage(i);
    const viewport = page.getViewport({ scale: SCALE });

    const canvas  = document.createElement('canvas');
    canvas.width  = viewport.width;
    canvas.height = viewport.height;

    await page.render({
      canvasContext: canvas.getContext('2d'),
      viewport
    }).promise;

    images.push(canvas.toDataURL('image/jpeg', 0.92));
    canvas.remove();
  }

  book.images = images;
}

/* ==========================================
   RENDER LIBRARY
   ========================================== */
function renderLibrary() {
  const shelf      = document.getElementById('shelf');
  const shelfWrap  = document.getElementById('shelf-wrap');
  const emptyState = document.getElementById('empty-state');

  shelf.innerHTML = '';

  if (library.length === 0) {
    emptyState.classList.remove('hidden');
    shelfWrap.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  shelfWrap.classList.remove('hidden');

  library.forEach((book) => {
    const w = WIDTHS[book.widthIdx];
    const { color, accent } = book.palette;
    const item = document.createElement('div');
    item.className = 'book-item';
    item.innerHTML = `
      <div class="book-3d" style="width:${w}px">
        <div class="book-spine-shelf"
             style="background:linear-gradient(to right,${darken(color,30)},${color})"></div>
        <div class="book-front"
             style="background:linear-gradient(160deg,${accent} 0%,${color} 100%)">
          <span class="book-front-title">${book.title}</span>
        </div>
      </div>
      <span class="book-item-title">${book.title}</span>
    `;
    item.addEventListener('click', () => openBook(book.id));
    shelf.appendChild(item);
  });
}

function darken(hex, amount) {
  const n = parseInt(hex.replace('#',''), 16);
  const r = Math.max(0, (n >> 16) - amount);
  const g = Math.max(0, ((n >> 8) & 0xff) - amount);
  const b = Math.max(0, (n & 0xff) - amount);
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

/* ==========================================
   OPEN / CLOSE BOOK
   ========================================== */
async function openBook(id) {
  currentBook = library.find(b => b.id === id);
  if (!currentBook) return;

  document.getElementById('library-view').classList.add('hidden');
  document.getElementById('reader-view').classList.remove('hidden');
  document.getElementById('loading-overlay').classList.remove('hidden');

  try {
    await loadBookContent(currentBook);
  } catch (err) {
    currentBook.images = [null];
    console.error(err);
  }

  currentSpread = 0;
  document.getElementById('loading-overlay').classList.add('hidden');
  renderSpread();
}

function closeBook() {
  document.getElementById('reader-view').classList.add('hidden');
  document.getElementById('library-view').classList.remove('hidden');
  currentBook = null;
}

/* ==========================================
   RENDER SPREAD  (image per face)
   ========================================== */
function setFace(contentId, titleId, numId, imgSrc, pageNum, title) {
  const content = document.getElementById(contentId);
  const titleEl = document.getElementById(titleId);
  const numEl   = document.getElementById(numId);

  titleEl.textContent = title;
  numEl.textContent   = pageNum !== null ? pageNum : '';

  if (imgSrc) {
    content.innerHTML = `<img src="${imgSrc}" alt="Página ${pageNum}" />`;
  } else {
    content.innerHTML = '';
  }
}

function renderSpread() {
  if (!currentBook) return;
  const imgs        = currentBook.images;
  const total       = imgs.length;
  const totalSpreads = Math.ceil(total / 2);
  const li = currentSpread * 2;
  const ri = li + 1;

  const short = currentBook.title.length > 30
    ? currentBook.title.slice(0, 28) + '…'
    : currentBook.title;

  setFace('left-content',  'left-book-title',  'left-page-num',
          imgs[li] ?? null, li + 1, short.toUpperCase());

  setFace('right-content', 'right-book-title', 'right-page-num',
          ri < total ? imgs[ri] : null,
          ri < total ? ri + 1 : null,
          short.toUpperCase());

  const isLast = currentSpread >= totalSpreads - 1;
  document.getElementById('prev-btn').disabled       = currentSpread === 0;
  document.getElementById('next-btn').disabled       = isLast;
  document.getElementById('turn-hint').style.display = isLast ? 'none' : 'flex';

  document.getElementById('progress-text').textContent =
    `Pág. ${li + 1}${ri < total ? '–' + (ri + 1) : ''} de ${total}`;
}

/* ==========================================
   PAGE TURNS
   ========================================== */
function turnPage() {
  if (isAnimating || !currentBook) return;
  if (currentSpread >= Math.ceil(currentBook.images.length / 2) - 1) return;
  animate(1);
}

function prevPage() {
  if (isAnimating || !currentBook || currentSpread <= 0) return;
  animate(-1);
}

function animate(dir) {
  isAnimating = true;
  const rp = document.getElementById('page-right');
  const lp = document.getElementById('page-left');
  rp.classList.add('flipping-out');
  lp.classList.add('flipping-out');
  setTimeout(() => {
    rp.classList.remove('flipping-out');
    lp.classList.remove('flipping-out');
    currentSpread += dir;
    renderSpread();
    rp.classList.add('flipping-in');
    lp.classList.add('flipping-in');
    setTimeout(() => {
      rp.classList.remove('flipping-in');
      lp.classList.remove('flipping-in');
      isAnimating = false;
    }, 300);
  }, 300);
}

/* ==========================================
   KEYBOARD NAV
   ========================================== */
document.addEventListener('keydown', (e) => {
  if (!currentBook) return;
  if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); turnPage(); }
  if (e.key === 'ArrowLeft')  { e.preventDefault(); prevPage(); }
  if (e.key === 'Escape') closeBook();
});

/* ==========================================
   INIT
   ========================================== */
loadBooksJson();
