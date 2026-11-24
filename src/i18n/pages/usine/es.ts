import type { UsineDict } from './fr';

const usine: UsineDict = {
  meta: {
    title: 'Nuestra planta · TILAMED Pharma, Sèmè-Podji (BENÍN)',
    description: 'Una planta moderna de producción de soluciones inyectables en Sèmè-Podji: tratamiento del agua, soplado-llenado-sellado, esterilización, control al 100 % y laboratorio.',
  },
  hero: {
    title: 'Nuestra planta',
    lead: 'Una unidad moderna y ampliable de producción de soluciones inyectables, en construcción en Sèmè-Podji.',
    cta1: 'El proceso en 7 etapas',
    cta2: 'El sitio de Sèmè-Podji',
  },
  facts: [
    { value: '15', unit: 'millones', code: 'LVP', label: 'soluciones de gran volumen al año' },
    { value: '35', unit: 'millones', code: 'SVP', label: 'inyectables de pequeño volumen al año' },
    { value: '2', unit: 'hectáreas', code: '', label: 'de sitio industrial en Sèmè-Podji' },
    { value: '100–1000', unit: 'mililitros', code: '', label: 'formatos de frascos de perfusión' },
  ],
  site: {
    eyebrow: 'Un sitio integrado',
    title: 'Toda la cadena de fabricación reunida en un mismo sitio',
    text: 'Nuestra planta reunirá el tratamiento del agua farmacéutica, la preparación de las soluciones, la fabricación de los frascos, la esterilización, la inspección, el laboratorio de control de calidad y el almacén. Está concebida para poder aumentar su capacidad.',
    badge: 'Concebida para aumentar su capacidad',
    imageAlt: 'Equipos de acero inoxidable en una planta farmacéutica',
  },
  process: {
    eyebrow: 'El proceso',
    title: 'Siete etapas, del agua a la entrega',
    intro: 'Cada etapa tiene su página detallada. Aquí está lo esencial de lo que ocurre entre la llegada del agua y la salida de las cajas.',
    more: 'Descubrir la etapa',
    docTitle: '¿Necesita los datos técnicos?',
    docText: 'Profesionales de la salud y compradores: soliciten las especificaciones de nuestros productos y de nuestro proceso.',
    docCta: 'Solicitar la documentación',
    steps: [
      { title: 'Tratamiento del agua', text: 'Una solución de perfusión contiene más de un 90 % de agua. Produciremos en el sitio dos calidades de agua farmacéutica.', points: ['Doble ósmosis inversa y electrodesionización', 'Agua para inyectables por destilación', 'Conductividad y temperatura vigiladas en continuo'] },
      { title: 'Preparación de las soluciones', text: 'Cada solución se prepara por lotes, según una fórmula validada, en tanques de acero inoxidable.', points: ['Tanques con células de pesaje y agitadores', 'Controles en proceso: concentración, pH, aspecto', 'Filtración antes del llenado'] },
      { title: 'Soplado, llenado, sellado', text: 'Una sola máquina forma el frasco, lo llena y lo sella, sin ningún contacto humano.', points: ['Frasco fabricado en el mismo momento del llenado', 'Llenado bajo flujo de aire protegido', 'Cambio de formato en una media hora'] },
      { title: 'Esterilización', text: 'Cada frasco lleno se esteriliza en su envase final, en autoclave de aspersión de agua sobrecalentada.', points: ['Ciclos validados y registrados para cada carga', 'Calentamiento homogéneo que protege el plástico', 'Separación física antes y después de la esterilización'] },
      { title: 'Control al 100 %', text: 'Ningún frasco saldrá de la planta sin haber sido controlado.', points: ['Prueba de estanqueidad de cada frasco', 'Inspección visual bajo luz', 'Rechazo automático de las cajas no conformes'] },
      { title: 'Laboratorio de control de calidad', text: 'Materias primas, aguas y lotes se analizan antes de cualquier liberación.', points: ['Cromatografía (HPLC) y espectrometría', 'Microbiología: esterilidad y endotoxinas', 'Liberación por el farmacéutico responsable'] },
      { title: 'Acondicionamiento y entrega', text: 'Almacenamiento según las buenas prácticas de distribución y entrega por nuestro propio servicio logístico.', points: ['Entrega según las necesidades reales de los clientes', 'Seguimiento de pedidos y existencias en tiempo real', 'Exportación por transitario o entrega organizada'] },
    ],
  },
  explore: {
    eyebrow: 'Más allá de la producción',
    title: 'Lo que hace posible la producción',
    intro: 'Zonas limpias, servicios técnicos, formación de los equipos y el propio emplazamiento: cada tema tiene su página.',
    more: 'Saber más',
  },
  green: {
    badge: 'Green building',
    title: 'Una planta pensada para limitar su impacto',
    text: 'Agua, energía, residuos: la planta está en proceso de certificación EDGE, el estándar de edificio verde de la IFC (Grupo Banco Mundial).',
    cta: 'Nuestro enfoque medioambiental',
    imageAlt: 'Tejados industriales equipados con paneles solares',
  },
  location: {
    eyebrow: 'El sitio de Sèmè-Podji',
    title: 'Una ubicación estratégica, entre Cotonú y NIGERIA',
    items: [
      'En el municipio de Sèmè-Podji, departamento de Ouémé, al sur de BENÍN',
      'Junto a la frontera de Kraké, principal paso hacia NIGERIA',
      'Cerca de Cotonú y de su puerto autónomo',
      'En la zona industrial de Sèmè-Podji',
    ],
    cta: 'El sitio de Sèmè-Podji',
    directions: 'Cómo llegar',
  },
  lines: {
    "eyebrow": "Dos líneas de producción",
    "title": "Grandes y pequeños volúmenes, dos líneas complementarias",
    "intro": "La fábrica contará con dos líneas distintas, abiertas desde el arranque: una para las soluciones de perfusión y otra para los inyectables en ampollas.",
    "labels": {
      "container": "Envase",
      "volumes": "Volúmenes",
      "capacity": "Capacidad prevista",
      "uses": "En el hospital"
    },
    "start": "Desde el arranque",
    "items": [
      {
        "code": "LVP",
        "name": "Grandes volúmenes",
        "sub": "Soluciones de perfusión",
        "container": "Frascos de plástico formados, llenados y sellados in situ",
        "volumes": "100 a 1000 mL",
        "capacity": "15 millones al año",
        "uses": "Perfusión, rehidratación, dilución de medicamentos",
        "link": "soufflage-remplissage-scellage",
        "cta": "El proceso de soplado-llenado-sellado"
      },
      {
        "code": "SVP",
        "name": "Pequeños volúmenes",
        "sub": "Inyectables en ampollas",
        "container": "Ampollas monodosis",
        "volumes": "1 a 20 mL",
        "capacity": "35 millones al año",
        "uses": "Inyección directa: urgencias, maternidad, paludismo grave, cuidados habituales",
        "link": "medicaments",
        "cta": "Los medicamentos previstos"
      }
    ]
  },
  flows: {
    "eyebrow": "Circulación en la fábrica",
    "title": "Cuatro flujos que no se cruzan",
    "intro": "La fábrica sigue el principio de marcha hacia adelante: materias, productos, personas y residuos tienen cada uno su camino, para que lo limpio nunca se cruce con lo que no lo es.",
    "zones": {
      "g": "Zona general",
      "c": "Zona limpia · grado C",
      "a": "Protección de grado A"
    },
    "all": "Todos los flujos",
    "show": "Mostrar el flujo",
    "items": [
      {
        "key": "mat",
        "icon": "box",
        "title": "Materias primas",
        "steps": [
          {
            "t": "Recepción",
            "z": "g"
          },
          {
            "t": "Cuarentena",
            "z": "g"
          },
          {
            "t": "Análisis en laboratorio",
            "z": "g"
          },
          {
            "t": "Pesaje",
            "z": "c"
          },
          {
            "t": "Preparación",
            "z": "c"
          }
        ]
      },
      {
        "key": "prod",
        "icon": "drop",
        "title": "Productos",
        "steps": [
          {
            "t": "Llenado",
            "z": "a"
          },
          {
            "t": "Esterilización",
            "z": "g"
          },
          {
            "t": "Inspección al 100 %",
            "z": "g"
          },
          {
            "t": "Liberación del lote",
            "z": "g"
          },
          {
            "t": "Expedición",
            "z": "g"
          }
        ]
      },
      {
        "key": "pers",
        "icon": "users",
        "title": "Personal",
        "steps": [
          {
            "t": "Vestuario",
            "z": "g"
          },
          {
            "t": "Esclusa de vestido",
            "z": "c"
          },
          {
            "t": "Zona limpia",
            "z": "c"
          },
          {
            "t": "Esclusa de salida",
            "z": "g"
          }
        ]
      },
      {
        "key": "waste",
        "icon": "recycle",
        "title": "Residuos",
        "steps": [
          {
            "t": "Recogida",
            "z": "c"
          },
          {
            "t": "Salida dedicada",
            "z": "g"
          },
          {
            "t": "Clasificación",
            "z": "g"
          },
          {
            "t": "Eliminación autorizada",
            "z": "g"
          }
        ]
      }
    ],
    "note": "Esquema de principio. La organización de los edificios se describe en la página del sitio de Sèmè-Podji.",
    "cta": "La organización del sitio"
  },
  products: {
    "eyebrow": "Nuestros futuros productos",
    "title": "Lo que saldrá de nuestras líneas",
    "intro": "Se fabricarán tres gamas en Sèmè-Podji. Entrarán en producción a medida que se abran las líneas y se obtengan las autorizaciones.",
    "badge": "Aún no disponible",
    "items": [
      {
        "slug": "serums",
        "icon": "drop",
        "tag": "Línea LVP · arranque",
        "text": "Soluciones básicas y específicas para la perfusión y la rehidratación.",
        "examples": [
          "Cloruro de sodio 0,9 %",
          "Glucosa 5 %",
          "Ringer lactato"
        ]
      },
      {
        "slug": "medicaments",
        "icon": "vial",
        "tag": "Línea SVP · tres fases",
        "text": "Inyectables en ampollas desde el arranque y, después, antibióticos inyectables, vacunas y sueros, soluciones orales.",
        "examples": [
          "Oxitocina 10 UI",
          "Quinina inyectable",
          "Ceftriaxona 1 g"
        ]
      },
      {
        "slug": "solutions-nutritionnelles",
        "icon": "flask",
        "tag": "Líneas LVP y SVP · arranque",
        "text": "Glucosa concentrada y vitaminas para el aporte calórico y la corrección de carencias.",
        "examples": [
          "Glucosa 10 %",
          "Glucosa 30 %",
          "Vitaminas del complejo B"
        ]
      }
    ],
    "more": "Ver la gama",
    "cta": "Todo el catálogo",
    "doc": "Recibir aviso de disponibilidad"
  },
  jobs: {
    "eyebrow": "Los equipos",
    "title": "Los oficios de la fábrica",
    "text": "Hacer funcionar una fábrica farmacéutica exige competencias especializadas. Contrataremos localmente y formaremos a nuestros equipos, con una transferencia de competencias durante cinco años.",
    "value": "150",
    "unit": "empleos directos previstos",
    "split": [
      {
        "v": 70,
        "l": "puestos técnicos"
      },
      {
        "v": 30,
        "l": "puestos administrativos"
      }
    ],
    "familiesTitle": "Seis familias de oficios",
    "cta1": "Descubrir nuestros oficios",
    "cta2": "Candidatura espontánea"
  },
  faq: {
    "eyebrow": "Preguntas frecuentes",
    "title": "La fábrica en preguntas",
    "more": "Más información",
    "items": [
      {
        "q": "¿Cuándo arrancará la fábrica?",
        "a": "La fábrica está en construcción. La producción comenzará tras la instalación y la cualificación de los equipos, la validación de los primeros lotes y la obtención de las autorizaciones. Anunciaremos cada etapa en nuestras noticias.",
        "link": "actualites"
      },
      {
        "q": "¿Podrá aumentar la capacidad?",
        "a": "Sí. La fábrica está diseñada para aumentar su capacidad y se prevén nuevas producciones: antibióticos inyectables y, después, vacunas, sueros y soluciones orales.",
        "link": "medicaments"
      },
      {
        "q": "¿Por qué frascos de plástico y no de vidrio?",
        "a": "El frasco de plástico es ligero e irrompible, y se vacía sin entrada de aire, lo que limita los riesgos de contaminación. Se fabrica en el mismo momento del llenado, sin contacto humano.",
        "link": "soufflage-remplissage-scellage"
      },
      {
        "q": "¿Cómo se garantizará la esterilidad?",
        "a": "Llenado bajo protección de grado A, esterilización de cada frasco en su envase final, control del 100 % de los frascos y análisis en laboratorio: ningún lote se liberará sin el visto bueno del farmacéutico responsable.",
        "link": "sterilisation"
      },
      {
        "q": "¿Se puede visitar la fábrica?",
        "a": "Sí, con cita previa. Las visitas se ofrecen a socios, inversores, autoridades y profesionales de la salud, respetando las normas de acceso a las zonas limpias.",
        "link": "contact"
      },
      {
        "q": "¿Cómo ser proveedor de la fábrica?",
        "a": "Materias primas, envases, equipos, servicios: presente su empresa desde la página Proveedores. Nuestro servicio de compras estudiará su oferta según nuestros criterios de calidad.",
        "link": "fournisseurs"
      }
    ]
  },
  visit: {
    "badge": "Visitas con cita previa",
    "title": "Venga a ver cómo toma forma la fábrica",
    "text": "Inversores, autoridades sanitarias, socios técnicos o futuros clientes: organicemos una visita al sitio de Sèmè-Podji o una reunión con nuestro equipo.",
    "cta1": "Solicitar una visita",
    "cta2": "Ser distribuidor"
  },
};
export default usine;
