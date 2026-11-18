import type { UsineDict } from './fr';

const usine: UsineDict = {
  meta: {
    title: 'Nuestra planta · TILAMED Pharma, Sèmè-Podji (Benín)',
    description: 'Una planta moderna de producción de soluciones inyectables en Sèmè-Podji: tratamiento del agua, soplado-llenado-sellado, esterilización, control al 100 % y laboratorio, según las BPF de la OMS.',
  },
  hero: {
    title: 'Nuestra planta',
    lead: 'Una unidad moderna y ampliable de producción de soluciones inyectables, construida en Sèmè-Podji según las buenas prácticas de fabricación de la OMS.',
    cta1: 'El proceso en 7 etapas',
    cta2: 'El sitio de Sèmè-Podji',
  },
  facts: [
    { value: '15', unit: 'M', code: 'LVP', label: 'soluciones de gran volumen al año' },
    { value: '35', unit: 'M', code: 'SVP', label: 'inyectables de pequeño volumen al año' },
    { value: '2', unit: 'ha', code: '', label: 'de sitio industrial en Sèmè-Podji' },
    { value: '100–1000', unit: 'ml', code: '', label: 'formatos de frascos de perfusión' },
    { value: 'C + A', unit: '', code: '', label: 'grados de limpieza de las zonas críticas' },
  ],
  site: {
    eyebrow: 'Un sitio integrado',
    title: 'Toda la cadena de fabricación reunida en un mismo sitio',
    text: 'Nuestra planta reúne el tratamiento del agua farmacéutica, la preparación de las soluciones, la fabricación de los frascos, la esterilización, la inspección, el laboratorio de control de calidad y el almacén. Está concebida para poder aumentar su capacidad.',
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
      { title: 'Tratamiento del agua', text: 'Una solución de perfusión contiene más de un 90 % de agua. Producimos en el sitio dos calidades de agua farmacéutica.', points: ['Doble ósmosis inversa y electrodesionización', 'Agua para inyectables por destilación', 'Conductividad y temperatura vigiladas en continuo'] },
      { title: 'Preparación de las soluciones', text: 'Cada solución se prepara por lotes, según una fórmula validada, en tanques de acero inoxidable.', points: ['Tanques con células de pesaje y agitadores', 'Controles en proceso: concentración, pH, aspecto', 'Filtración antes del llenado'] },
      { title: 'Soplado, llenado, sellado', text: 'Una sola máquina forma el frasco, lo llena y lo sella, sin ningún contacto humano.', points: ['Frasco fabricado en el mismo momento del llenado', 'Llenado bajo flujo de aire protegido', 'Cambio de formato en una media hora'] },
      { title: 'Esterilización', text: 'Cada frasco lleno se esteriliza en su envase final, en autoclave de aspersión de agua sobrecalentada.', points: ['Ciclos validados y registrados para cada carga', 'Calentamiento homogéneo que protege el plástico', 'Separación física antes y después de la esterilización'] },
      { title: 'Control al 100 %', text: 'Ningún frasco sale de la planta sin haber sido controlado.', points: ['Prueba de estanqueidad de cada frasco', 'Inspección visual bajo luz', 'Rechazo automático de las cajas no conformes'] },
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
    title: 'Una ubicación estratégica, entre Cotonú y Nigeria',
    items: [
      'En el municipio de Sèmè-Podji, departamento de Ouémé, al sur de Benín',
      'Junto a la frontera de Kraké, principal paso hacia Nigeria',
      'Cerca de Cotonú y de su puerto autónomo',
      'Dentro de una zona económica especial con ventajas aduaneras y fiscales',
    ],
    cta: 'El sitio de Sèmè-Podji',
    directions: 'Cómo llegar',
  },
};
export default usine;
