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
let currentSpread = 0;   // spread N = PDF pages 2N (left) + 2N+1 (right)
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
      id:           entry.id ?? i + 1,
      title:        entry.title,
      file:         entry.file,
      palette:      PALETTES[i % PALETTES.length],
      widthIdx:     i % WIDTHS.length,
      displayPages: null   // array of strings, one per PDF page — loaded on demand
    }));
  } catch (err) {
    console.error('Error cargando books.json:', err);
    library = [];
  }
  renderLibrary();
}

/* ==========================================
   LOAD PDF  →  one display page per PDF page
   ========================================== */
async function loadBookContent(book) {
  if (book.displayPages) return;

  const res = await fetch(book.file);
  if (!res.ok) throw new Error(`No se pudo cargar: ${book.file}`);
  const buffer = await res.arrayBuffer();

  const pdfDoc = await pdfjsLib.getDocument({ data: buffer }).promise;
  const pages = [];

  for (let i = 1; i <= pdfDoc.numPages; i++) {
    const page    = await pdfDoc.getPage(i);
    const content = await page.getTextContent();
    // Preserve line breaks: group items by their vertical position
    const lines = groupIntoLines(content.items);
    pages.push(lines);
  }

  book.displayPages = pages;  // pages[i] = text of PDF page i
}

/* ==========================================
   GROUP TEXT ITEMS INTO LINES
   Items on the same Y position belong to the same line.
   ========================================== */
function groupIntoLines(items) {
  if (!items.length) return '';

  // Sort by descending Y (PDF Y grows upward), then ascending X
  const sorted = [...items].sort((a, b) => {
    const dy = b.transform[5] - a.transform[5];
    if (Math.abs(dy) > 2) return dy;
    return a.transform[4] - b.transform[4];
  });

  const lineMap = [];
  let currentY  = null;
  let currentLine = [];

  for (const item of sorted) {
    const y = Math.round(item.transform[5]);
    if (currentY === null || Math.abs(y - currentY) > 4) {
      if (currentLine.length) lineMap.push(currentLine.join(' '));
      currentLine = [item.str];
      currentY    = y;
    } else {
      currentLine.push(item.str);
    }
  }
  if (currentLine.length) lineMap.push(currentLine.join(' '));

  return lineMap.join('\n');
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
    currentBook.displayPages = [`Error al cargar el PDF:\n${err.message}`];
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
   RENDER SPREAD
   Spread N  →  left = PDF page 2N,  right = PDF page 2N+1
   ========================================== */
function renderSpread() {
  if (!currentBook) return;
  const dp           = currentBook.displayPages;   // one entry per PDF page
  const totalPages   = dp.length;
  const totalSpreads = Math.ceil(totalPages / 2);
  const li = currentSpread * 2;       // left page index
  const ri = li + 1;                  // right page index

  const short = currentBook.title.length > 30
    ? currentBook.title.slice(0, 28) + '…'
    : currentBook.title;

  // Left
  document.getElementById('left-book-title').textContent = short.toUpperCase();
  document.getElementById('left-content').textContent    = dp[li] ?? '';
  document.getElementById('left-page-num').textContent   = li + 1;

  // Right
  document.getElementById('right-book-title').textContent = short.toUpperCase();
  document.getElementById('right-content').textContent    = ri < totalPages ? dp[ri] : '';
  document.getElementById('right-page-num').textContent   = ri < totalPages ? ri + 1 : '';

  const isLast = currentSpread >= totalSpreads - 1;
  document.getElementById('prev-btn').disabled            = currentSpread === 0;
  document.getElementById('next-btn').disabled            = isLast;
  document.getElementById('turn-hint').style.display      = isLast ? 'none' : 'flex';

  document.getElementById('progress-text').textContent =
    `Pág. ${li + 1}${ri < totalPages ? '–' + (ri + 1) : ''} de ${totalPages}`;
}

/* ==========================================
   PAGE TURNS
   ========================================== */
function turnPage() {
  if (isAnimating || !currentBook) return;
  const totalSpreads = Math.ceil(currentBook.displayPages.length / 2);
  if (currentSpread >= totalSpreads - 1) return;
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
