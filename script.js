/* ==========================================
   BOOKS DATA

   Para agregar un libro PDF, usa este formato:
   {
     id: 9,
     title: "Nombre del Libro",
     color: "#2a3d5c",   // color de la portada (hex)
     accent: "#4a6a8c",  // color de acento
     pdfUrl: "https://tu-servidor.com/libro.pdf"  // ← solo esto es necesario para PDFs
   }

   Para libros con texto HTML (como los existentes), usa:
   {
     id: 10,
     title: "Otro Libro",
     color: "#5c1a2e",
     accent: "#a03050",
     pages: [ ... ]  // array de páginas con left/right
   }
   ========================================== */
const BOOKS = [
  {
    id: 1,
    title: "Prueba Uno",
    color: "#5c1a2e",   // burgundy
    accent: "#a03050",
    pages: [
      {
        left: {
          heading: "Prueba Uno",
          body: `<p class="drop-cap">Este es el contenido de prueba del Libro Número Uno. Las páginas de este volumen han sido escritas con el único propósito de demostrar el funcionamiento del lector. Cada palabra aquí es un testigo silencioso de que el sistema opera con elegancia y precisión.</p><p>Las líneas se suceden con natural cadencia, como el agua sobre las piedras del río, sin prisa, sin pausa, dejando que el ojo del lector descanse en la anchura de la prosa.</p>`,
          pageNum: null
        },
        right: {
          body: `<p>El segundo párrafo de esta primera apertura nos recuerda que toda biblioteca es, ante todo, una promesa. Promesa de mundos por descubrir, de ideas que aún no han tomado forma en la mente del lector, de emociones que aguardan pacientes entre las cubiertas.</p><p>Así, el Libro Uno comienza su viaje hacia el entendimiento del visitante que hoy lo ha abierto por primera vez.</p>`,
          pageNum: 2
        }
      },
      {
        left: {
          body: `<p>En las páginas siguientes el lector encontrará más texto de prueba, dispuesto con cuidado para llenar el espacio de manera verosímil. Cada párrafo sigue al anterior como los eslabones de una cadena forjada en el silencio del taller.</p><p>La segunda apertura del Libro Uno continúa la exploración de su contenido, tan ficticio como necesario para ilustrar la mecánica del sistema de lectura implementado.</p>`,
          pageNum: 3
        },
        right: {
          body: `<p>Y así llegamos al final de este breve volumen de prueba. Las palabras se despiden sin ceremonia excesiva, sabiendo que su misión ha sido cumplida: demostrar que el lector funciona, que las páginas se pasan, que la experiencia es grata.</p><p>Gracias por abrir el Libro Número Uno.</p>`,
          pageNum: 4
        }
      }
    ]
  },
  {
    id: 2,
    title: "Prueba Dos",
    color: "#1a2740",   // navy
    accent: "#2a4a70",
    pages: [
      {
        left: {
          heading: "Prueba Dos",
          body: `<p class="drop-cap">El segundo libro de la colección despliega ante nosotros un horizonte de posibilidades igualmente ficticias pero no por ello menos evocadoras. Su contenido, nacido de la necesidad de prueba, adquiere en la lectura una dignidad propia.</p><p>Las páginas se suceden en perfecto orden, cada una sosteniendo a la siguiente como los arcos de una catedral sostienen la bóveda que cobija a los fieles.</p>`,
          pageNum: null
        },
        right: {
          body: `<p>El azul profundo de su cubierta invita a la reflexión y a la calma. Es un libro que parece preferir los atardeceres tardíos, cuando la luz se vuelve dorada y el mundo exterior pierde su urgencia.</p><p>Aquí, en estas páginas, el tiempo fluye de manera diferente: más lento, más consciente, más dispuesto a detenerse en los detalles pequeños que la vida cotidiana suele ignorar.</p>`,
          pageNum: 2
        }
      },
      {
        left: {
          body: `<p>La segunda apertura del Libro Dos nos sumerge aún más en su naturaleza contemplativa. Cada línea es un horizonte que se aleja suavemente, prometiendo siempre algo más allá sin jamás revelar su secreto por completo.</p><p>Es la cualidad esencial de los buenos libros: mantener vivo el deseo sin agotarlo, alimentar la curiosidad sin saciarla del todo.</p>`,
          pageNum: 3
        },
        right: {
          body: `<p>Con esta última página el Libro Dos concluye su breve estancia en las manos del lector. Parte sin estridencias, con la misma serenidad azul con la que llegó, dejando quizás una leve melancolía, señal de que algo genuino ha ocurrido en el espacio entre las palabras.</p>`,
          pageNum: 4
        }
      }
    ]
  },
  {
    id: 3,
    title: "Prueba Tres",
    color: "#2a4a2e",   // forest
    accent: "#4a7a50",
    pages: [
      {
        left: {
          heading: "Prueba Tres",
          body: `<p class="drop-cap">Verde como los bosques que inspiran sus páginas, el tercer libro de esta colección lleva consigo el aroma de la tierra húmeda y las hojas que caen en silencio. Su contenido de prueba no es obstáculo para que el lector imagine frondas y claros y rayos de sol filtrándose entre las ramas.</p><p>Todo libro es una naturaleza en miniatura, un ecosistema de ideas donde cada palabra ocupa su nicho preciso.</p>`,
          pageNum: null
        },
        right: {
          body: `<p>Los árboles que pueblan las páginas del Libro Tres no son de papel sino de tinta, pero crecen con la misma determinación silenciosa que los robles centenarios. Sus raíces se hunden en la tradición literaria; sus ramas alcanzan hacia futuros lectores que aún no han nacido.</p><p>Así es la naturaleza de los libros: sobreviven a sus autores y aguardan con paciencia infinita.</p>`,
          pageNum: 2
        }
      },
      {
        left: {
          body: `<p>La segunda apertura del Libro Tres nos lleva más adentro del bosque textual. Las palabras se aprietan como árboles en un claro, formando una espesura que, sin embargo, deja pasar la luz del significado entre sus intersticios.</p><p>Leer es, en esencia, abrirse paso por un bosque de signos hacia el claro donde reside el sentido.</p>`,
          pageNum: 3
        },
        right: {
          body: `<p>El Libro Tres cierra sus páginas como un bosque cierra sus senderos al anochecer. No por hostilidad, sino por respetar el ciclo natural del descanso. Mañana los senderos volverán a abrirse para quien quiera recorrerlos de nuevo.</p>`,
          pageNum: 4
        }
      }
    ]
  },
  {
    id: 4,
    title: "Prueba Cuatro",
    color: "#6b3a1a",   // rust-brown
    accent: "#a05a2a",
    pages: [
      {
        left: {
          heading: "Prueba Cuatro",
          body: `<p class="drop-cap">El cuarto volumen llega con el calor del otoño tardío, ese momento preciso en que el año comienza su lenta retirada sin por ello perder su dignidad. Sus páginas de prueba son tierras ocres y sienas, colores que recuerdan la madera antigua y el cuero curtido.</p><p>Un libro de otoño es siempre un libro de despedidas y comienzos, de ciclos que se cierran para que otros puedan abrirse.</p>`,
          pageNum: null
        },
        right: {
          body: `<p>En las páginas del Libro Cuatro conviven la nostalgia y la esperanza con esa serenidad característica de quien ha vivido suficiente para saber que los finales son siempre relativos. Nada termina del todo; todo se transforma.</p><p>El texto de prueba adquiere aquí una dimensión casi filosófica, como si las palabras supieran que son pasajeras y quisieran dejar constancia de su paso.</p>`,
          pageNum: 2
        }
      },
      {
        left: {
          body: `<p>Las páginas centrales del Libro Cuatro son las más cálidas de la colección. En ellas la luz parece proceder de dentro, como si las palabras mismas fueran brasas que conservan el calor de todo lo que ha sido escrito antes.</p><p>Es el calor de la tradición, del largo linaje de lectores y escritores que han mantenido viva la llama de la palabra.</p>`,
          pageNum: 3
        },
        right: {
          body: `<p>El Libro Cuatro se despide con la gracia del otoño que sabe ceder su lugar al invierno sin resistencia ni amargura. Ha dicho lo que tenía que decir. Ahora descansa entre sus hermanos en el estante, esperando la próxima visita.</p>`,
          pageNum: 4
        }
      }
    ]
  },
  {
    id: 5,
    title: "Prueba Cinco",
    color: "#1a3d3d",   // teal dark
    accent: "#2a6060",
    pages: [
      {
        left: {
          heading: "Prueba Cinco",
          body: `<p class="drop-cap">Como las profundidades del océano, el quinto libro guarda sus secretos con celosía. Su superficie refleja la luz de manera enigmática, invitando al descenso sin revelar lo que aguarda en las profundidades de sus páginas.</p><p>Todo gran libro es un océano: sus aguas superficiales son accesibles a cualquiera, pero sus abismos solo se revelan al lector que se atreve a sumergirse por completo.</p>`,
          pageNum: null
        },
        right: {
          body: `<p>Las corrientes del Libro Cinco arrastran al lector hacia territorios inesperados. No es un libro que se lea sentado cómodamente; es un libro que requiere movimiento, adaptación, la disposición de dejarse llevar por aguas que no siempre fluyen en la dirección prevista.</p><p>Pero quienes se abandonan a sus corrientes siempre llegan a algún lugar interesante.</p>`,
          pageNum: 2
        }
      },
      {
        left: {
          body: `<p>En las páginas intermedias el tono oceánico cede paso a algo más sereno: la calma de las aguas profundas, donde el movimiento existe pero es imperceptible desde la superficie. Aquí el tiempo no transcurre, simplemente es.</p><p>Es el estado al que todo buen libro aspira llevar al lector: esa suspensión del tiempo ordinario que llamamos absorción.</p>`,
          pageNum: 3
        },
        right: {
          body: `<p>El quinto libro emerge finalmente a la superficie, devolviéndonos a la orilla con los pulmones llenos de aire salado y la visión ligeramente alterada por la presión de las profundidades. Nada malo. Al contrario: enriquecedor.</p>`,
          pageNum: 4
        }
      }
    ]
  },
  {
    id: 6,
    title: "Prueba Seis",
    color: "#4a3a6e",   // purple-dark
    accent: "#7060a0",
    pages: [
      {
        left: {
          heading: "Prueba Seis",
          body: `<p class="drop-cap">El sexto libro de la colección pertenece al género de los sueños lúcidos: uno sabe que está dentro de una ficción pero esa conciencia no disminuye sino que intensifica la experiencia. Sus páginas de prueba vibran con una frecuencia que el ojo no ve pero el interior siente.</p><p>Hay libros que se leen con los ojos y otros que se leen con algo más difícil de nombrar. Este pertenece a la segunda categoría.</p>`,
          pageNum: null
        },
        right: {
          body: `<p>Los colores de su cubierta evocan las horas entre la medianoche y el amanecer, ese tiempo sin nombre que los místicos consideran propicio para la revelación. No es casualidad: el Libro Seis prefiere los márgenes, los umbrales, los momentos en que una cosa está a punto de convertirse en otra.</p>`,
          pageNum: 2
        }
      },
      {
        left: {
          body: `<p>La segunda mitad del Libro Seis nos devuelve a algo más firme, como si tras el viaje nocturno los pies necesitaran sentir suelo sólido. La prosa se asienta, las ideas toman forma más concreta, los sueños se sedimentan en memoria.</p><p>Porque eso son también los libros: la memoria de sueños que alguien tuvo y tuvo la generosidad de compartir.</p>`,
          pageNum: 3
        },
        right: {
          body: `<p>El Libro Seis cierra sus páginas en el momento preciso en que el cielo empieza a clarear. Ha cumplido su función nocturna. Ahora es el turno del día y sus certezas más toscas pero necesarias. El libro espera el anochecer siguiente.</p>`,
          pageNum: 4
        }
      }
    ]
  },
  {
    id: 7,
    title: "Prueba Siete",
    color: "#5c4a1a",   // amber-dark
    accent: "#8b6a20",
    pages: [
      {
        left: {
          heading: "Prueba Siete",
          body: `<p class="drop-cap">El séptimo libro es de aquellos que uno encuentra por accidente en una librería de viejo y que acaban cambiando algo difícil de precisar en la manera de ver el mundo. Su contenido de prueba tiene, a pesar de su naturaleza experimental, esa cualidad de lo encontrado por azar.</p><p>No hay libro que no sea, en alguna medida, un hallazgo. Incluso los más buscados sorprenden cuando finalmente se abren.</p>`,
          pageNum: null
        },
        right: {
          body: `<p>El dorado envejecido de sus páginas sugiere que este libro ha pasado ya por muchas manos, que su texto ha sido leído en habitaciones diferentes bajo lamparillas de distintas épocas. Esa acumulación de lecturas le da una densidad particular, un peso que no es del papel sino de la atención acumulada.</p>`,
          pageNum: 2
        }
      },
      {
        left: {
          body: `<p>Seguir leyendo el Libro Siete es como continuar una conversación comenzada mucho antes de que uno llegara. Los interlocutores previos han dejado sus huellas en los márgenes, en las esquinas dobladas, en el desgaste selectivo de ciertas páginas más amadas que otras.</p><p>Leer es siempre entrar en una cadena de lectores que nos preceden y nos seguirán.</p>`,
          pageNum: 3
        },
        right: {
          body: `<p>El Libro Siete se cierra como se cierran las conversaciones más ricas: no porque se haya agotado el tema sino porque ha llegado el momento natural de la pausa. Se retomará. Siempre se retoma lo que vale la pena.</p>`,
          pageNum: 4
        }
      }
    ]
  },
  {
    id: 8,
    title: "Prueba Ocho",
    color: "#3d1a1a",   // deep crimson
    accent: "#6a2a2a",
    pages: [
      {
        left: {
          heading: "Prueba Ocho",
          body: `<p class="drop-cap">El octavo y último libro de esta colección de prueba llega con la solemnidad de los cierres bien ejecutados. No es un final triste sino un final completo, de los que dejan la satisfacción de haber recorrido un camino hasta su término natural.</p><p>Ocho libros componen esta biblioteca inicial. Ocho puertas a ocho mundos igualmente ficticios e igualmente reales, según la disposición del lector.</p>`,
          pageNum: null
        },
        right: {
          body: `<p>El rojo oscuro de su cubierta es el color de la tinta más antigua, de los textos que sobrevivieron siglos porque alguien consideró que merecían sobrevivir. El Libro Ocho lleva ese color como insignia de permanencia, de la voluntad de durar más allá de su momento.</p><p>Todo libro es, en el fondo, una apuesta contra el olvido.</p>`,
          pageNum: 2
        }
      },
      {
        left: {
          body: `<p>Las penúltimas páginas del Libro Ocho son un lugar de reflexión. Desde aquí, casi al final, se puede mirar atrás y ver el camino recorrido a través de los siete volúmenes anteriores. Cada uno ha dejado su huella, su color particular en el espectro de esta pequeña biblioteca.</p><p>Una colección es siempre más que la suma de sus partes: es una conversación entre libros.</p>`,
          pageNum: 3
        },
        right: {
          body: `<p>El Libro Ocho cierra sus páginas y con ellas cierra también el círculo de esta colección. Pero los finales de los libros son siempre comienzos: de reflexiones, de conversaciones, de nuevas lecturas. La biblioteca espera. Los libros esperan. El lector también.</p>`,
          pageNum: 4
        }
      }
    ]
  }
  ,
  {
    id: 9,
    title: "Ensayo Gran Turismo — Mardenborough",
    color: "#1a1a2e",   // midnight blue (racing night)
    accent: "#c0392b",  // racing red
    pdfUrl: "./Books/ensayo_gran_turismo_mardenborough.pdf"
  }
];

/* ==========================================
   BOOK COLORS (for shelf display)
   ========================================== */
const BOOK_WIDTHS = [72, 80, 68, 85, 75, 78, 70, 82, 76]; // varied widths px

/* ==========================================
   RENDER LIBRARY
   ========================================== */
function renderLibrary() {
  const shelf = document.getElementById('shelf');
  shelf.innerHTML = '';

  BOOKS.forEach((book, i) => {
    const w = BOOK_WIDTHS[i];
    const item = document.createElement('div');
    item.className = 'book-item';
    item.setAttribute('title', book.title);
    item.onclick = () => openBook(book.id);

    item.innerHTML = `
      <div class="book-3d" style="width:${w}px">
        <div class="book-spine-shelf" style="background: linear-gradient(to right, ${darken(book.color, 30)}, ${book.color})"></div>
        <div class="book-front" style="background: linear-gradient(160deg, ${book.accent} 0%, ${book.color} 100%)">
          <span class="book-front-title">${book.title}</span>
          <span class="book-front-num">${romanize(book.id)}</span>
        </div>
      </div>
      <span class="book-item-title">${book.title}</span>
    `;

    shelf.appendChild(item);
  });
}

function darken(hex, amount) {
  const num = parseInt(hex.replace('#',''), 16);
  const r = Math.max(0, (num >> 16) - amount);
  const g = Math.max(0, ((num >> 8) & 0xff) - amount);
  const b = Math.max(0, (num & 0xff) - amount);
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

function romanize(n) {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let result = '';
  vals.forEach((v, i) => { while (n >= v) { result += syms[i]; n -= v; } });
  return result;
}

/* ==========================================
   BOOK READER STATE
   ========================================== */
let currentBook = null;
let currentSpread = 0; // 0 = first opening (cover + page 1)
let isAnimating = false;

// PDF state
let pdfDoc = null;
let pdfTotalPages = 0;
let pdfCurrentPage = 1; // current left page number (1-based)
let isPdfMode = false;

/* ==========================================
   PDF RENDERING
   ========================================== */
// Configure PDF.js worker
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

async function loadPdf(url) {
  showPdfLoading(true);
  try {
    pdfDoc = await pdfjsLib.getDocument(url).promise;
    pdfTotalPages = pdfDoc.numPages;
    pdfCurrentPage = 1;
    await renderPdfSpread();
  } catch (err) {
    console.error('Error cargando PDF:', err);
    showPdfError();
  } finally {
    showPdfLoading(false);
  }
}

async function renderPdfSpread() {
  if (!pdfDoc) return;

  const leftPageNum  = pdfCurrentPage;
  const rightPageNum = pdfCurrentPage + 1;

  // Update book title headers
  document.getElementById('left-book-title').textContent  = currentBook.title.toUpperCase();
  document.getElementById('right-book-title').textContent = currentBook.title.toUpperCase();

  // Page numbers in footer
  document.getElementById('left-page-num').textContent  = leftPageNum;
  document.getElementById('right-page-num').textContent = rightPageNum <= pdfTotalPages ? rightPageNum : '';

  // Render left PDF page
  await renderPdfPage(leftPageNum, 'left-pdf-canvas', 'left-content');

  // Render right PDF page (may not exist on last odd page)
  if (rightPageNum <= pdfTotalPages) {
    await renderPdfPage(rightPageNum, 'right-pdf-canvas', 'right-content');
  } else {
    // Blank right page if total pages is odd
    const rightCanvas = document.getElementById('right-pdf-canvas');
    const ctx = rightCanvas.getContext('2d');
    ctx.clearRect(0, 0, rightCanvas.width, rightCanvas.height);
    document.getElementById('right-content').innerHTML = '';
    document.getElementById('right-pdf-canvas').classList.remove('hidden');
  }

  updatePdfNav();
}

async function renderPdfPage(pageNum, canvasId, contentId) {
  const canvas = document.getElementById(canvasId);
  const contentEl = document.getElementById(contentId);

  // Clear text content, show canvas
  contentEl.innerHTML = '';
  contentEl.appendChild(canvas);
  canvas.classList.remove('hidden');

  const page = await pdfDoc.getPage(pageNum);

  // Fit page to content area size
  const contentRect = contentEl.getBoundingClientRect();
  const availW = contentRect.width  || 280;
  const availH = contentRect.height || 380;

  const viewport = page.getViewport({ scale: 1 });
  const scaleW = availW / viewport.width;
  const scaleH = availH / viewport.height;
  const scale  = Math.min(scaleW, scaleH);

  const scaledViewport = page.getViewport({ scale });

  canvas.width  = scaledViewport.width;
  canvas.height = scaledViewport.height;

  await page.render({
    canvasContext: canvas.getContext('2d'),
    viewport: scaledViewport
  }).promise;
}

function updatePdfNav() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const progressText = document.getElementById('progress-text');
  const turnHint = document.getElementById('turn-hint');

  prevBtn.disabled = pdfCurrentPage <= 1;
  nextBtn.disabled = pdfCurrentPage + 1 >= pdfTotalPages;

  const rightPage = Math.min(pdfCurrentPage + 1, pdfTotalPages);
  progressText.textContent = `Páginas ${pdfCurrentPage}–${rightPage} de ${pdfTotalPages}`;

  if (pdfCurrentPage + 1 >= pdfTotalPages) {
    turnHint.style.display = 'none';
  } else {
    turnHint.style.display = 'flex';
  }
}

function showPdfLoading(visible) {
  let overlay = document.getElementById('pdf-loading-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'pdf-loading-overlay';
    overlay.innerHTML = `
      <div class="pdf-loading-inner">
        <div class="pdf-loading-spinner"></div>
        <p>Abriendo volumen…</p>
      </div>`;
    document.getElementById('reader-view').appendChild(overlay);
  }
  overlay.style.display = visible ? 'flex' : 'none';
}

function showPdfError() {
  const leftContent = document.getElementById('left-content');
  leftContent.innerHTML = `<p class="pdf-error">No fue posible cargar el PDF.<br>Verifica la URL y los permisos CORS.</p>`;
}

async function pdfTurnPage() {
  if (isAnimating) return;
  if (pdfCurrentPage + 1 >= pdfTotalPages) return;

  isAnimating = true;
  const rightPage = document.getElementById('page-right');
  const leftPage  = document.getElementById('page-left');

  rightPage.classList.add('flipping-out');
  leftPage.classList.add('flipping-out');

  setTimeout(async () => {
    rightPage.classList.remove('flipping-out');
    leftPage.classList.remove('flipping-out');
    pdfCurrentPage += 2;
    await renderPdfSpread();

    rightPage.classList.add('flipping-in');
    leftPage.classList.add('flipping-in');

    setTimeout(() => {
      rightPage.classList.remove('flipping-in');
      leftPage.classList.remove('flipping-in');
      isAnimating = false;
    }, 300);
  }, 300);
}

async function pdfPrevPage() {
  if (isAnimating) return;
  if (pdfCurrentPage <= 1) return;

  isAnimating = true;
  const rightPage = document.getElementById('page-right');
  const leftPage  = document.getElementById('page-left');

  rightPage.classList.add('flipping-out');
  leftPage.classList.add('flipping-out');

  setTimeout(async () => {
    rightPage.classList.remove('flipping-out');
    leftPage.classList.remove('flipping-out');
    pdfCurrentPage = Math.max(1, pdfCurrentPage - 2);
    await renderPdfSpread();

    rightPage.classList.add('flipping-in');
    leftPage.classList.add('flipping-in');

    setTimeout(() => {
      rightPage.classList.remove('flipping-in');
      leftPage.classList.remove('flipping-in');
      isAnimating = false;
    }, 300);
  }, 300);
}

/* ==========================================
   OPEN / CLOSE BOOK
   ========================================== */
function openBook(id) {
  currentBook = BOOKS.find(b => b.id === id);
  currentSpread = 0;
  document.getElementById('library-view').classList.add('hidden');
  document.getElementById('reader-view').classList.remove('hidden');

  if (currentBook.pdfUrl) {
    // PDF mode
    isPdfMode = true;
    pdfDoc = null;
    pdfCurrentPage = 1;
    loadPdf(currentBook.pdfUrl);
  } else {
    // Text mode
    isPdfMode = false;
    pdfDoc = null;
    renderSpread(false);
  }
}

function closeBook() {
  document.getElementById('reader-view').classList.add('hidden');
  document.getElementById('library-view').classList.remove('hidden');
  currentBook = null;
  isPdfMode = false;
  pdfDoc = null;
  // Hide any canvases
  document.querySelectorAll('.pdf-canvas').forEach(c => c.classList.add('hidden'));
}

/* ==========================================
   RENDER SPREAD
   ========================================== */
function renderSpread(animate, direction) {
  if (!currentBook) return;

  const spread = currentBook.pages[currentSpread];
  const totalSpreads = currentBook.pages.length;

  // LEFT PAGE
  const leftTitle = document.getElementById('left-book-title');
  const leftContent = document.getElementById('left-content');
  const leftNum = document.getElementById('left-page-num');

  leftTitle.textContent = currentBook.title.toUpperCase();

  if (spread.left.heading) {
    leftContent.innerHTML = `<h2>${spread.left.heading}</h2>${spread.left.body}`;
  } else {
    leftContent.innerHTML = spread.left.body;
  }

  leftNum.textContent = spread.left.pageNum ? spread.left.pageNum : '';

  // RIGHT PAGE
  const rightTitle = document.getElementById('right-book-title');
  const rightContent = document.getElementById('right-content');
  const rightNum = document.getElementById('right-page-num');

  rightTitle.textContent = currentBook.title.toUpperCase();
  rightContent.innerHTML = spread.right.body;
  rightNum.textContent = spread.right.pageNum;

  // Navigation buttons
  document.getElementById('prev-btn').disabled = currentSpread === 0;
  document.getElementById('next-btn').disabled = currentSpread === totalSpreads - 1;

  // Show/hide turn hint
  const turnHint = document.getElementById('turn-hint');
  if (currentSpread === totalSpreads - 1) {
    turnHint.style.display = 'none';
  } else {
    turnHint.style.display = 'flex';
  }

  // Progress
  const rightP = spread.right.pageNum || ((currentSpread + 1) * 2);
  const totalP = currentBook.pages[totalSpreads - 1].right.pageNum || totalSpreads * 2;
  document.getElementById('progress-text').textContent =
    `Páginas ${currentSpread * 2 + 1}–${currentSpread * 2 + 2} de ${totalP}`;
}

/* ==========================================
   PAGE TURN
   ========================================== */
function turnPage() {
  if (isPdfMode) { pdfTurnPage(); return; }
  if (isAnimating) return;
  if (currentSpread >= currentBook.pages.length - 1) return;

  isAnimating = true;
  const rightPage = document.getElementById('page-right');
  const leftPage  = document.getElementById('page-left');

  rightPage.classList.add('flipping-out');
  leftPage.classList.add('flipping-out');

  setTimeout(() => {
    rightPage.classList.remove('flipping-out');
    leftPage.classList.remove('flipping-out');
    currentSpread++;
    renderSpread(true, 'next');

    rightPage.classList.add('flipping-in');
    leftPage.classList.add('flipping-in');

    setTimeout(() => {
      rightPage.classList.remove('flipping-in');
      leftPage.classList.remove('flipping-in');
      isAnimating = false;
    }, 300);
  }, 300);
}

function prevPage() {
  if (isPdfMode) { pdfPrevPage(); return; }
  if (isAnimating) return;
  if (currentSpread <= 0) return;

  isAnimating = true;
  const rightPage = document.getElementById('page-right');
  const leftPage  = document.getElementById('page-left');

  rightPage.classList.add('flipping-out');
  leftPage.classList.add('flipping-out');

  setTimeout(() => {
    rightPage.classList.remove('flipping-out');
    leftPage.classList.remove('flipping-out');
    currentSpread--;
    renderSpread(true, 'prev');

    rightPage.classList.add('flipping-in');
    leftPage.classList.add('flipping-in');

    setTimeout(() => {
      rightPage.classList.remove('flipping-in');
      leftPage.classList.remove('flipping-in');
      isAnimating = false;
    }, 300);
  }, 300);
}

/* ==========================================
   KEYBOARD NAVIGATION
   ========================================== */
document.addEventListener('keydown', (e) => {
  if (!currentBook) return;
  if (e.key === 'ArrowRight' || e.key === ' ') turnPage();
  if (e.key === 'ArrowLeft') prevPage();
  if (e.key === 'Escape') closeBook();
});

/* ==========================================
   INIT
   ========================================== */
renderLibrary();
