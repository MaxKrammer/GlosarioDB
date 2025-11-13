document.addEventListener('DOMContentLoaded', () => {

  // --- DATA ---
  const icons = {
    DataIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/></svg>`,
    DatasetIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z"/></svg>`,
    DatabaseIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7a8 8 0 0116 0M12 21a8 8 0 000-14 8 8 0 000 14z"/></svg>`,
    SystemIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    TableIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18M3 6h18M3 18h18M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z"/></svg>`,
    RowIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18M3 6h18M3 18h18"/></svg>`,
    ColumnIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 4v16m-6-16v16m12-16v16m6-16v16M4 20h16M4 4h16"/></svg>`,
    ValueIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9l7 7 7-7"/></svg>`,
    CharIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M7 4h2M7 4H5m7 0v16m0-16h2m-2 0h-2m7 0v16m0-16h2m-2 0h-2"/></svg>`,
    ManageIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    GenerateIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    CollectIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>`,
    StorageIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>`,
    AnalysisIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/></svg>`,
    ShareIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.002l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/></svg>`,
    ExchangeIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`,
    PublishIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293a1 1 0 010 1.414L5.414 8h13.172a1 1 0 010 2H5.414l2.293 2.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/></svg>`,
    PreserveIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`,
    SqlIcon: `<svg class="card-icon" viewBox="0 0 24 24" fill="currentColor"><text x="2" y="18" font-family="monospace" font-size="14" font-weight="bold">SQL</text></svg>`,
    GraphIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12a5 5 0 015-5m0 0a5 5 0 015 5m-5-5v5m-5 0a5 5 0 005 5m0 0a5 5 0 005-5m-5 5v5m-5-5H2m15 0h5M7 7l-5 5m15-5l5 5m-5 5l5-5m-15 5l-5-5"/></svg>`,
    KeyValueIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 016-6h4a6 6 0 016 6z"/></svg>`,
    DocumentIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
    TreeIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-14.66l-.707.707M4.05 19.95l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8zm0 0V3m0 5a4 4 0 100 8m-4.243-.757A4.01 4.01 0 018 12m8 0a4.01 4.01 0 01-.243 1.243M4.05 4.05L7.1 7.1m9.8 9.8l3.05 3.05"/></svg>`,
    NetworkIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    CubeIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7v10l8 4m0-14v10"/></svg>`,
    ObjectIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7v10l8 4m0-14v10"/></svg>`,
    StaticIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    DynamicIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h5M20 20v-5h-5M4 20h5v-5M20 4h-5v5"/></svg>`,
    BookIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
    DirectoryIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>`,
    BigDataIcon: `<svg class="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7a8 8 0 0116 0m-8 7a4 4 0 100-8 4 4 0 000 8z"/></svg>`,
  };

  const glossaryData = [
    {
        title: 'Conceptos Fundamentales: Los Cimientos del Universo de Datos',
        introduction: 'Dominar los conceptos básicos de la gestión de datos es de una importancia estratégica ineludible. Son los pilares conceptuales sobre los cuales se construyen todos los sistemas de información.',
        terms: [
            { id: 'dato', term: 'Dato', definition: 'La unidad más básica de información. Se define como una medición, registro u observación, ya sea numérica o textual, sobre algún atributo o característica.', iconName: 'DataIcon' },
            { id: 'dataset', term: 'Conjunto de Datos (Dataset)', definition: 'Una colección de valores organizados de forma estructurada, comúnmente en formato de tablas, como una hoja de cálculo.', iconName: 'DatasetIcon' },
            { id: 'database', term: 'Base de Datos (Banco de Datos)', definition: 'Una colección de datos interrelacionados almacenados de manera estructurada y sistematizada para su posterior recuperación, análisis y gestión.', iconName: 'DatabaseIcon' },
            { id: 'info_system', term: 'Sistema de Información', definition: 'Un conjunto integrado de componentes y recursos tecnológicos diseñado para recolectar, almacenar y procesar datos con un fin específico.', iconName: 'SystemIcon' },
        ]
    },
    {
        title: 'La Anatomía de una Base de Datos: Estructura y Componentes',
        introduction: 'La estructura de una base de datos es análoga a la anatomía de un organismo complejo. Cada componente tiene una función específica y se organiza de manera jerárquica.',
        terms: [
            { id: 'table', term: 'Tabla', definition: 'El principal contenedor de la información que organiza los datos en un formato de filas y columnas.', iconName: 'TableIcon' },
            { id: 'record', term: 'Registro (u Observación)', definition: 'También conocido como fila, es una colección de campos relacionados que describen una única entidad u observación.', iconName: 'RowIcon' },
            { id: 'field', term: 'Campo (o Atributo)', definition: 'También conocido como columna, es un área de almacenamiento que contiene datos del mismo tipo para todos los registros.', iconName: 'ColumnIcon' },
            { id: 'value', term: 'Valor', definition: 'La unidad de información más pequeña y específica. Representa la característica registrada en la intersección de un registro y un campo.', iconName: 'ValueIcon' },
            { id: 'character', term: 'Caracter', definition: 'El elemento más básico que compone los datos, como un dígito, una letra, un símbolo o un espacio en blanco.', iconName: 'CharIcon' },
        ]
    },
    {
        title: 'Gestión y Ciclo de Vida de los Datos',
        introduction: 'Los datos no son entidades estáticas; poseen un ciclo de vida dinámico. La gestión de datos es el conjunto de disciplinas que aseguran su control, protección y aprovechamiento.',
        terms: [
            { id: 'data_management', term: 'Gestión de Datos', definition: 'El conjunto de prácticas y procesos para controlar, proteger, aprovechar e incrementar el valor de los activos de datos.', iconName: 'ManageIcon' },
            { id: 'generation', term: 'Generación', definition: 'La acción de producir datos de forma deliberada, como en una encuesta o medición de un sensor.', iconName: 'GenerateIcon' },
            { id: 'collection', term: 'Recolección', definition: 'La recopilación de datos que son un subproducto de otras actividades, como los registros de actividad de una aplicación.', iconName: 'CollectIcon' },
            { id: 'storage', term: 'Almacenamiento', definition: 'La acción de albergar o guardar datos en medios digitales o virtuales para su conservación y acceso futuro.', iconName: 'StorageIcon' },
            { id: 'analysis', term: 'Análisis de Datos', definition: 'Proceso iterativo para inspeccionar, limpiar, transformar y modelar datos con el objetivo de descubrir información útil.', iconName: 'AnalysisIcon' },
            { id: 'sharing', term: 'Compartición', definition: 'La acción de transferir datos al interior de una misma organización o grupo.', iconName: 'ShareIcon' },
            { id: 'exchange', term: 'Intercambio', definition: 'La transferencia de datos hacia miembros u organizaciones externas, cruzando las fronteras organizacionales.', iconName: 'ExchangeIcon' },
            { id: 'publication', term: 'Publicación', definition: 'La acción de difundir datos para que estén disponibles públicamente para cualquier persona interesada.', iconName: 'PublishIcon' },
            { id: 'preservation', term: 'Preservación', definition: 'La acción de salvaguardar la información a lo largo del tiempo para garantizar su uso futuro.', iconName: 'PreserveIcon' },
        ]
    },
    {
        title: 'Clasificación de Bases de Datos: Modelos y Tipos',
        introduction: 'No existe un único tipo de base de datos perfecto para todas las situaciones. La elección del modelo correcto depende de la naturaleza de los datos y las operaciones a realizar.',
        terms: [
            { id: 'relational', term: 'Base de Datos Relacional (SQL)', definition: 'Organiza los datos en tablas que se conectan entre sí mediante valores clave. Se accede a ellos mediante SQL.', iconName: 'SqlIcon' },
            { id: 'nosql', term: 'Base de Datos NoSQL', definition: 'Agrupa a bases de datos que no utilizan el modelo relacional, permitiendo un almacenaje flexible. Útiles para datos no estructurados.', iconName: 'SqlIcon' },
            { id: 'graph', term: 'Base de Datos de Grafos', definition: 'Representa la información mediante nodos y aristas. Ideal para analizar redes complejas.', iconName: 'GraphIcon' },
            { id: 'key-value', term: 'Base de Datos Llave-Valor', definition: 'El modelo más simple, donde cada dato se almacena como un par de "llave" y "valor". Eficientes para consultas rápidas.', iconName: 'KeyValueIcon' },
            { id: 'document', term: 'Base de Datos Orientada a Documentos', definition: 'Almacena datos en documentos flexibles y semiestructurados, usualmente en formatos como JSON o XML.', iconName: 'DocumentIcon' },
            { id: 'hierarchical', term: 'Base de Datos Jerárquica', definition: 'Organiza la información en una estructura de árbol ("padre-hijo"). Cada "hijo" solo puede tener un "padre".', iconName: 'TreeIcon' },
            { id: 'network', term: 'Base de Datos de Red', definition: 'Similar al jerárquico, pero un nodo "hijo" puede tener múltiples "padres", ofreciendo mayor flexibilidad.', iconName: 'NetworkIcon' },
            { id: 'multidimensional', term: 'Base de Datos Multidimensional', definition: 'Diseñada para grandes volúmenes de información (Business Intelligence), organiza datos en tablas de múltiples dimensiones.', iconName: 'CubeIcon' },
            { id: 'object-oriented', term: 'Base de Datos Orientada a Objetos', definition: 'La información se representa y almacena en forma de "objetos", encapsulando datos y métodos.', iconName: 'ObjectIcon' },
            { id: 'static', term: 'Base de Datos Estática', definition: 'Una base de datos de solo lectura. La información no se modifica con el tiempo, usada para almacenar datos históricos.', iconName: 'StaticIcon' },
            { id: 'dynamic', term: 'Base de Datos Dinámica', definition: 'Permite que la información sea modificada constantemente a través de operaciones de inserción, actualización y borrado.', iconName: 'DynamicIcon' },
            { id: 'bibliographic', term: 'Base de Datos Bibliográfica', definition: 'Contiene metadatos o información de referencia sobre publicaciones, pero no el texto completo.', iconName: 'BookIcon' },
            { id: 'full-text', term: 'Base de Datos de Texto Completo', definition: 'Almacenan el contenido íntegro de los documentos, permitiendo búsquedas potentes sobre el texto.', iconName: 'DocumentIcon' },
            { id: 'directory', term: 'Directorio', definition: 'Listados de datos personalizados y organizados para un propósito específico, como una guía telefónica.', iconName: 'DirectoryIcon' },
        ]
    },
    {
        title: 'Herramientas y Conceptos de Alto Nivel',
        introduction: 'Las bases de datos no operan en el vacío. Su poder se materializa a través de software especializado que las gestiona y de conceptos que nos ayudan a enmarcar los desafíos a gran escala.',
        terms: [
            { id: 'dbms', term: 'DBMS', definition: 'El software que actúa como una interfaz entre el usuario, las aplicaciones y la base de datos. Permite definir, crear, consultar y administrar la base de datos.', iconName: 'ManageIcon' },
            { id: 'big_data', term: 'Big Data', definition: 'Conjuntos de datos cuyo volumen, velocidad y variedad superan la capacidad de las herramientas tradicionales. Requieren sistemas hiperespecializados.', iconName: 'BigDataIcon' },
        ]
    },
];

  // --- DOM Elements ---
  const glossaryView = document.getElementById('glossary-view');
  const quizView = document.getElementById('quiz-view');
  const btnGlossary = document.getElementById('btn-glossary');
  const btnQuiz = document.getElementById('btn-quiz');
  const quizContainer = document.getElementById('quiz-container');

  // --- State ---
  let currentView = 'glossary';
  const QUIZ_SIZE = 6;
  let quizState = {};

  // --- Functions ---

  // View Switching
  const switchView = (view) => {
    if (view === currentView) return;
    currentView = view;

    if (view === 'glossary') {
      glossaryView.classList.add('active');
      quizView.classList.remove('active');
      btnGlossary.classList.add('active');
      btnQuiz.classList.remove('active');
    } else {
      glossaryView.classList.remove('active');
      quizView.classList.add('active');
      btnGlossary.classList.remove('active');
      btnQuiz.classList.add('active');
      setupQuiz();
    }
  };

  // Glossary Rendering
  const renderGlossary = () => {
    let content = '';
    for (const section of glossaryData) {
      content += `
        <section class="glossary-section">
          <div class="section-header">
            <h2 class="section-title">${section.title}</h2>
            <p class="section-intro">${section.introduction}</p>
          </div>
          <div class="terms-grid">
            ${section.terms.map(term => `
              <div class="glossary-card">
                <div class="card-header">
                  <div class="card-icon-wrapper">${icons[term.iconName]}</div>
                  <h3 class="card-term">${term.term}</h3>
                </div>
                <p class="card-definition">${term.definition}</p>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }
    glossaryView.innerHTML = content;
  };
  
  // Quiz Logic
  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const setupQuiz = () => {
    const allTerms = glossaryData.flatMap(section => section.terms);
    const selectedTerms = shuffleArray(allTerms).slice(0, QUIZ_SIZE);
    
    quizState = {
      terms: selectedTerms,
      shuffledDefinitions: shuffleArray(selectedTerms),
      dropStates: selectedTerms.reduce((acc, term) => {
        acc[term.id] = { termId: null, status: 'empty' };
        return acc;
      }, {}),
      score: 0
    };
    renderQuiz();
  };
  
  const renderQuiz = () => {
    const { terms, shuffledDefinitions, dropStates, score } = quizState;

    const placedTermIds = new Set(Object.values(dropStates).map(s => s.termId).filter(Boolean));
    const isComplete = score === QUIZ_SIZE;

    const draggableTermsHTML = terms.map(term => {
      const isPlaced = placedTermIds.has(term.id);
      const iconSVG = icons[term.iconName].replace('card-icon', 'term-icon');
      return `
        <div 
          class="draggable-term ${isPlaced ? 'is-placed' : ''}" 
          draggable="${!isPlaced}" 
          data-term-id="${term.id}"
        >
          ${iconSVG}
          <span>${term.term}</span>
        </div>
      `;
    }).join('');

    const definitionsHTML = shuffledDefinitions.map(defTerm => {
      const state = dropStates[defTerm.id];
      const droppedTerm = state.termId ? terms.find(t => t.id === state.termId) : null;
      const iconSVG = droppedTerm ? icons[droppedTerm.iconName].replace('card-icon', 'term-icon') : '';
      
      return `
        <div class="drop-zone-wrapper">
          <div class="drop-target ${state.status}" data-definition-id="${defTerm.id}">
            ${droppedTerm 
              ? `<div class="draggable-term" data-term-id="${droppedTerm.id}">${iconSVG}<span>${droppedTerm.term}</span></div>`
              : `<span class="placeholder">Arrastra aquí</span>`
            }
          </div>
          <div class="definition-text-container">
            <p class="definition-text">${defTerm.definition}</p>
          </div>
        </div>
      `;
    }).join('');

    const quizHTML = `
      <div class="quiz-top-bar">
        <div class="draggable-terms-container">${draggableTermsHTML}</div>
        <div class="score-container">
          <div class="score-label">Puntuación</div>
          <div class="score-value" id="score-value">${score} / ${QUIZ_SIZE}</div>
        </div>
      </div>
      <div class="definitions-area">${definitionsHTML}</div>
      <div class="quiz-controls">
        ${isComplete ? `<div class="quiz-feedback">¡Felicidades! Has completado el cuestionario.</div>` : ''}
        <button class="restart-button">Reiniciar Cuestionario</button>
      </div>
    `;
    quizContainer.innerHTML = quizHTML;
    addQuizEventListeners();
  };

  const updateScore = () => {
    const newScore = Object.values(quizState.dropStates).filter(s => s.status === 'correct').length;
    if (newScore > quizState.score) {
      const scoreEl = document.getElementById('score-value');
      if(scoreEl) {
        scoreEl.classList.add('score-updated');
        setTimeout(() => scoreEl.classList.remove('score-updated'), 300);
      }
    }
    quizState.score = newScore;
  }
  
  const handleDrop = (definitionId, droppedTermId) => {
    // Check if the target slot is already correctly filled
    if (quizState.dropStates[definitionId]?.status === 'correct') {
      return;
    }

    // Find if the dropped term was previously in another slot and clear it
    const previousSlotId = Object.keys(quizState.dropStates).find(
      id => quizState.dropStates[id].termId === droppedTermId
    );
    if (previousSlotId) {
        quizState.dropStates[previousSlotId] = { termId: null, status: 'empty' };
    }

    const isCorrect = definitionId === droppedTermId;
    quizState.dropStates[definitionId] = {
        termId: droppedTermId,
        status: isCorrect ? 'correct' : 'incorrect',
    };
    
    updateScore();
    renderQuiz();
  };

  // Event Listeners
  const addQuizEventListeners = () => {
    quizContainer.querySelector('.restart-button').addEventListener('click', setupQuiz);

    let draggedEl = null;

    quizContainer.querySelectorAll('.draggable-term').forEach(termEl => {
        if (!termEl.classList.contains('is-placed')) {
            termEl.addEventListener('dragstart', (e) => {
                draggedEl = e.target.closest('.draggable-term');
                e.dataTransfer.setData('termId', draggedEl.dataset.termId);
                setTimeout(() => draggedEl.classList.add('dragging'), 0);
            });
            termEl.addEventListener('dragend', () => {
                draggedEl.classList.remove('dragging');
                draggedEl = null;
            });
        }
    });

    quizContainer.querySelectorAll('.drop-target').forEach(target => {
        target.addEventListener('dragover', (e) => {
            e.preventDefault();
            if (target.classList.contains('correct')) return;
            target.classList.add('drag-over');
        });
        target.addEventListener('dragleave', (e) => {
            target.classList.remove('drag-over');
        });
        target.addEventListener('drop', (e) => {
            e.preventDefault();
            target.classList.remove('drag-over');
            const droppedTermId = e.dataTransfer.getData('termId');
            const definitionId = target.dataset.definitionId;
            if (droppedTermId) {
                handleDrop(definitionId, droppedTermId);
            }
        });
    });
  };

  // --- Initial Load ---
  btnGlossary.addEventListener('click', () => switchView('glossary'));
  btnQuiz.addEventListener('click', () => switchView('quiz'));

  renderGlossary();
});
