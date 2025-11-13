
import { GlossarySection } from '../types';
import {
  DataIcon, DatasetIcon, DatabaseIcon, SystemIcon, TableIcon, RowIcon, ColumnIcon, ValueIcon,
  CharIcon, ManageIcon, GenerateIcon, CollectIcon, StorageIcon, AnalysisIcon, ShareIcon, ExchangeIcon,
  PublishIcon, PreserveIcon, SqlIcon, GraphIcon, KeyValueIcon, DocumentIcon, TreeIcon, NetworkIcon,
  CubeIcon, ObjectIcon, StaticIcon, DynamicIcon, BookIcon, DirectoryIcon, BigDataIcon
} from '../components/icons';

export const glossaryData: GlossarySection[] = [
  {
    title: 'Conceptos Fundamentales: Los Cimientos del Universo de Datos',
    introduction: 'Dominar los conceptos básicos de la gestión de datos es de una importancia estratégica ineludible. Son los pilares conceptuales sobre los cuales se construyen todos los sistemas de información.',
    terms: [
      { id: 'dato', term: 'Dato', definition: 'La unidad más básica de información. Se define como una medición, registro u observación, ya sea numérica o textual, sobre algún atributo o característica.', Icon: DataIcon },
      { id: 'dataset', term: 'Conjunto de Datos (Dataset)', definition: 'Una colección de valores organizados de forma estructurada, comúnmente en formato de tablas, como una hoja de cálculo.', Icon: DatasetIcon },
      { id: 'database', term: 'Base de Datos (Banco de Datos)', definition: 'Una colección de datos interrelacionados almacenados de manera estructurada y sistematizada para su posterior recuperación, análisis y gestión.', Icon: DatabaseIcon },
      { id: 'info_system', term: 'Sistema de Información', definition: 'Un conjunto integrado de componentes y recursos tecnológicos diseñado para recolectar, almacenar y procesar datos con un fin específico.', Icon: SystemIcon },
    ]
  },
  {
    title: 'La Anatomía de una Base de Datos: Estructura y Componentes',
    introduction: 'La estructura de una base de datos es análoga a la anatomía de un organismo complejo. Cada componente tiene una función específica y se organiza de manera jerárquica.',
    terms: [
      { id: 'table', term: 'Tabla', definition: 'El principal contenedor de la información que organiza los datos en un formato de filas y columnas.', Icon: TableIcon },
      { id: 'record', term: 'Registro (u Observación)', definition: 'También conocido como fila, es una colección de campos relacionados que describen una única entidad u observación.', Icon: RowIcon },
      { id: 'field', term: 'Campo (o Atributo)', definition: 'También conocido como columna, es un área de almacenamiento que contiene datos del mismo tipo para todos los registros.', Icon: ColumnIcon },
      { id: 'value', term: 'Valor', definition: 'La unidad de información más pequeña y específica. Representa la característica registrada en la intersección de un registro y un campo.', Icon: ValueIcon },
      { id: 'character', term: 'Caracter', definition: 'El elemento más básico que compone los datos, como un dígito, una letra, un símbolo o un espacio en blanco.', Icon: CharIcon },
    ]
  },
  {
    title: 'Gestión y Ciclo de Vida de los Datos',
    introduction: 'Los datos no son entidades estáticas; poseen un ciclo de vida dinámico. La gestión de datos es el conjunto de disciplinas que aseguran su control, protección y aprovechamiento.',
    terms: [
      { id: 'data_management', term: 'Gestión de Datos', definition: 'El conjunto de prácticas y procesos para controlar, proteger, aprovechar e incrementar el valor de los activos de datos.', Icon: ManageIcon },
      { id: 'generation', term: 'Generación', definition: 'La acción de producir datos de forma deliberada, como en una encuesta o medición de un sensor.', Icon: GenerateIcon },
      { id: 'collection', term: 'Recolección', definition: 'La recopilación de datos que son un subproducto de otras actividades, como los registros de actividad de una aplicación.', Icon: CollectIcon },
      { id: 'storage', term: 'Almacenamiento', definition: 'La acción de albergar o guardar datos en medios digitales o virtuales para su conservación y acceso futuro.', Icon: StorageIcon },
      { id: 'analysis', term: 'Análisis de Datos', definition: 'Proceso iterativo para inspeccionar, limpiar, transformar y modelar datos con el objetivo de descubrir información útil.', Icon: AnalysisIcon },
      { id: 'sharing', term: 'Compartición', definition: 'La acción de transferir datos al interior de una misma organización o grupo.', Icon: ShareIcon },
      { id: 'exchange', term: 'Intercambio', definition: 'La transferencia de datos hacia miembros u organizaciones externas, cruzando las fronteras organizacionales.', Icon: ExchangeIcon },
      { id: 'publication', term: 'Publicación', definition: 'La acción de difundir datos para que estén disponibles públicamente para cualquier persona interesada.', Icon: PublishIcon },
      { id: 'preservation', term: 'Preservación', definition: 'La acción de salvaguardar la información a lo largo del tiempo para garantizar su uso futuro.', Icon: PreserveIcon },
    ]
  },
  {
    title: 'Clasificación de Bases de Datos: Modelos y Tipos',
    introduction: 'No existe un único tipo de base de datos perfecto para todas las situaciones. La elección del modelo correcto depende de la naturaleza de los datos y las operaciones a realizar.',
    terms: [
      { id: 'relational', term: 'Base de Datos Relacional (SQL)', definition: 'Organiza los datos en tablas que se conectan entre sí mediante valores clave. Se accede a ellos mediante SQL.', Icon: SqlIcon },
      { id: 'nosql', term: 'Base de Datos NoSQL', definition: 'Agrupa a bases de datos que no utilizan el modelo relacional, permitiendo un almacenaje flexible. Útiles para datos no estructurados.', Icon: SqlIcon },
      { id: 'graph', term: 'Base de Datos de Grafos', definition: 'Representa la información mediante nodos y aristas. Ideal para analizar redes complejas.', Icon: GraphIcon },
      { id: 'key-value', term: 'Base de Datos Llave-Valor', definition: 'El modelo más simple, donde cada dato se almacena como un par de "llave" y "valor". Eficientes para consultas rápidas.', Icon: KeyValueIcon },
      { id: 'document', term: 'Base de Datos Orientada a Documentos', definition: 'Almacena datos en documentos flexibles y semiestructurados, usualmente en formatos como JSON o XML.', Icon: DocumentIcon },
      { id: 'hierarchical', term: 'Base de Datos Jerárquica', definition: 'Organiza la información en una estructura de árbol ("padre-hijo"). Cada "hijo" solo puede tener un "padre".', Icon: TreeIcon },
      { id: 'network', term: 'Base de Datos de Red', definition: 'Similar al jerárquico, pero un nodo "hijo" puede tener múltiples "padres", ofreciendo mayor flexibilidad.', Icon: NetworkIcon },
      { id: 'multidimensional', term: 'Base de Datos Multidimensional', definition: 'Diseñada para grandes volúmenes de información (Business Intelligence), organiza datos en tablas de múltiples dimensiones.', Icon: CubeIcon },
      { id: 'object-oriented', term: 'Base de Datos Orientada a Objetos', definition: 'La información se representa y almacena en forma de "objetos", encapsulando datos y métodos.', Icon: ObjectIcon },
      { id: 'static', term: 'Base de Datos Estática', definition: 'Una base de datos de solo lectura. La información no se modifica con el tiempo, usada para almacenar datos históricos.', Icon: StaticIcon },
      { id: 'dynamic', term: 'Base de Datos Dinámica', definition: 'Permite que la información sea modificada constantemente a través de operaciones de inserción, actualización y borrado.', Icon: DynamicIcon },
      { id: 'bibliographic', term: 'Base de Datos Bibliográfica', definition: 'Contiene metadatos o información de referencia sobre publicaciones, pero no el texto completo.', Icon: BookIcon },
      { id: 'full-text', term: 'Base de Datos de Texto Completo', definition: 'Almacenan el contenido íntegro de los documentos, permitiendo búsquedas potentes sobre el texto.', Icon: DocumentIcon },
      { id: 'directory', term: 'Directorio', definition: 'Listados de datos personalizados y organizados para un propósito específico, como una guía telefónica.', Icon: DirectoryIcon },
    ]
  },
  {
    title: 'Herramientas y Conceptos de Alto Nivel',
    introduction: 'Las bases de datos no operan en el vacío. Su poder se materializa a través de software especializado que las gestiona y de conceptos que nos ayudan a enmarcar los desafíos a gran escala.',
    terms: [
      { id: 'dbms', term: 'DBMS', definition: 'El software que actúa como una interfaz entre el usuario, las aplicaciones y la base de datos. Permite definir, crear, consultar y administrar la base de datos.', Icon: ManageIcon },
      { id: 'big_data', term: 'Big Data', definition: 'Conjuntos de datos cuyo volumen, velocidad y variedad superan la capacidad de las herramientas tradicionales. Requieren sistemas hiperespecializados.', Icon: BigDataIcon },
    ]
  },
];
