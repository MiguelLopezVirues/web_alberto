// Run once: node scripts/seed-cms.mjs
// Requires SANITY_API_WRITE_TOKEN in .env.local
import { createClient } from 'next-sanity';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local manually (no dotenv dependency needed)
const envPath = resolve(__dirname, '../.env.local');
const env = Object.fromEntries(
  readFileSync(envPath, 'utf8')
    .split('\n')
    .filter(l => l && !l.startsWith('#'))
    .map(l => l.split('=').map((p, i) => (i === 0 ? p.trim() : l.slice(l.indexOf('=') + 1).trim())))
);

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

// Helper: unique key for PT blocks
let _k = 0;
const key = () => `k${++_k}`;

// Portable Text helpers
const block = (text, style = 'normal', marks = []) => ({
  _type: 'block', _key: key(), style,
  children: [{ _type: 'span', _key: key(), text, marks }],
  markDefs: [],
});
const h2 = text => block(text, 'h2');
const h3 = text => block(text, 'h3');
const p = text => block(text, 'normal');
const strong = text => ({ _type: 'span', _key: key(), text, marks: ['strong'] });
const pSpans = (...spans) => ({ _type: 'block', _key: key(), style: 'normal', children: spans.map(s => typeof s === 'string' ? { _type: 'span', _key: key(), text: s, marks: [] } : s), markDefs: [] });
const ul = items => items.map(text => ({ _type: 'block', _key: key(), style: 'normal', listItem: 'bullet', level: 1, children: [{ _type: 'span', _key: key(), text, marks: [] }], markDefs: [] }));
const ol = items => items.map(text => ({ _type: 'block', _key: key(), style: 'normal', listItem: 'number', level: 1, children: [{ _type: 'span', _key: key(), text, marks: [] }], markDefs: [] }));

// ─── Documents ───────────────────────────────────────────────────────────────

const docs = [

  // ── siteSettings ──────────────────────────────────────────────────────────
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'Alberto Aguado Calvo',
    seoTitle: 'Alberto Aguado Calvo — Psicólogo y Neuropsicólogo',
    seoDescription: 'Psicólogo General Sanitario y Neuropsicólogo Clínico. Atención online y presencial en Madrid.',
    copyright: '© 2025 · Col. [número pendiente]',
  },

  // ── hero ──────────────────────────────────────────────────────────────────
  {
    _id: 'hero',
    _type: 'hero',
    eyebrow: 'Psicólogo General Sanitario · Neuropsicólogo Clínico',
    headlineLead: 'Acompañándote a comprender lo que te ocurre y a construir una vida con mayor bienestar y',
    headlineEmphasis: 'sentido',
    tagline: 'Atención online y presencial en Madrid.',
    cta: 'Cuéntame qué te ocurre',
    preguntaQuestion: 'A veces cuesta poner en palabras lo que nos pasa.',
    preguntaResponseLead: 'Te acompaño a comprenderlo y a construir una vida con',
    preguntaResponseEmphasis: 'sentido',
  },

  // ── sobreMi ───────────────────────────────────────────────────────────────
  {
    _id: 'sobreMi',
    _type: 'sobreMi',
    greeting: 'Hola, soy Alberto.',
    heading: 'Un neuropsicólogo que ayuda a comprenderte y transformar los patrones que limitan tu bienestar.',
    body: [
      p('Trabajo con población infantojuvenil, adulta y personas mayores. Mi enfoque se basa en el análisis funcional de la conducta y las terapias contextuales de tercera generación — entender el origen y mantenimiento del malestar para intervenir de forma eficaz y personalizada.'),
      { _type: 'block', _key: key(), style: 'normal', children: [{ _type: 'span', _key: key(), text: 'Un espacio cercano, seguro y libre de juicios, donde el objetivo es que entiendas lo que te ocurre y aprendas a relacionarte con ello de otra manera.', marks: ['em'] }], markDefs: [] },
    ],
    credentials: [
      'Graduado en Psicología · UPSA',
      'Máster Psicólogo General Sanitario · UNIE',
      'Neuropsicólogo Clínico · UNIR',
      'Neurocientífico Clínico · UCM',
    ],
  },

  // ── servicios ─────────────────────────────────────────────────────────────
  {
    _id: 'servicios',
    _type: 'servicios',
    eyebrow: 'Cómo puedo ayudarte',
    heading: 'Especialidades',
    items: [
      {
        _key: key(),
        featured: true,
        titulo: 'Terapia psicológica',
        desc: 'Trabajo desde el análisis funcional de la conducta, entendiendo cada dificultad en su contexto para intervenir de forma personalizada. Me baso en terapias contextuales y de tercera generación, centradas en ayudarte a relacionarte de forma más flexible con tus pensamientos y emociones, y avanzar hacia una vida con sentido.',
        tags: ['Ansiedad', 'Depresión', 'Conducta suicida', 'Desregulación emocional', 'Pánico', 'Autoestima', 'Rumiación', 'Dependencia emocional', 'Relaciones afectivas', 'Insatisfacción vital', 'Bullying', 'Obsesiones'],
      },
      {
        _key: key(),
        titulo: 'Intervención neuropsicológica',
        desc: 'Neuroestimulación en población infantil, favoreciendo el desarrollo cognitivo y atencional, y neurorrehabilitación en adultos dirigida a la recuperación y compensación de funciones tras daño neurológico.',
        tags: ['TDAH', 'Altas Capacidades', 'Problemas de conducta', 'Ictus', 'TCE', 'Demencias', 'Deterioro cognitivo', 'Tumores cerebrales'],
      },
      {
        _key: key(),
        titulo: 'Informes clínicos',
        desc: 'Evaluaciones psicológicas y neuropsicológicas completas para la elaboración de informes clínicos rigurosos, útiles en contextos sanitarios, educativos o legales.',
        tags: ['Informe psicológico', 'Informe neuropsicológico'],
      },
    ],
  },

  // ── proceso ───────────────────────────────────────────────────────────────
  {
    _id: 'proceso',
    _type: 'proceso',
    eyebrow: 'Cómo trabajaríamos juntos',
    heading: 'El proceso terapéutico',
    steps: [
      { _key: key(), sub: 'Sesión inicial', titulo: 'Nos conocemos', desc: 'En la primera sesión exploramos qué te trae, cómo estás viviendo la situación y qué esperas del proceso. No hay agenda ni preguntas correctas. Es un espacio para que puedas contar lo que quieras, a tu ritmo.' },
      { _key: key(), sub: 'Evaluación y metas', titulo: 'Entendemos el contexto', desc: 'Identificamos las áreas de trabajo y definimos metas concretas y alcanzables a corto plazo. El objetivo no es resolver todo de golpe — es saber hacia dónde vamos y por qué.' },
      { _key: key(), sub: 'Proceso terapéutico', titulo: 'Avanzamos juntos', desc: 'Trabajamos sesión a sesión con herramientas adaptadas a ti. Cada intervención parte de tu contexto específico, no de un protocolo genérico.' },
      { _key: key(), sub: 'Revisión de progreso', titulo: 'Cada 3 meses', desc: 'Revisamos cómo ha evolucionado el trabajo: qué ha cambiado, qué sigue siendo difícil y si hay que ajustar el rumbo. También si hay un cambio importante en tu vida que lo requiera.' },
    ],
  },

  // ── testimonios ───────────────────────────────────────────────────────────
  {
    _id: 'testimonios',
    _type: 'testimonios',
    eyebrow: 'Experiencias de pacientes',
    items: [
      { _key: key(), cita: 'Por fin encontré a alguien que no me hizo sentir raro por lo que me pasaba. Alberto escucha de verdad y las sesiones se sienten como un espacio seguro, sin prisas.', autor: 'Marcos T.' },
      { _key: key(), cita: 'Llevaba años con ansiedad pensando que era mi forma de ser. En pocos meses entendí qué la mantenía y cómo cambiar mi relación con ella.', autor: 'Laura G.' },
      { _key: key(), cita: 'Mi hijo tiene TDAH y las sesiones con Alberto han sido un punto de inflexión. Nos ha dado herramientas a él y a nosotros como familia.', autor: 'Carmen R.' },
    ],
  },

  // ── contacto ──────────────────────────────────────────────────────────────
  {
    _id: 'contacto',
    _type: 'contacto',
    heading: '¿Hablamos?',
    intro: 'No necesitas preparar nada.\nSolo cuéntame qué te ocurre.',
    ctaButton: 'Cuéntame qué te ocurre',
    successMsg: 'Mensaje enviado. Te responderé lo antes posible.',
    errorMsg: 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente.',
    subtext: 'Te responderé lo antes posible.',
  },

  // ── legalPage: Aviso legal ─────────────────────────────────────────────────
  {
    _id: 'legalPage-aviso-legal',
    _type: 'legalPage',
    title: 'Aviso legal',
    slug: { _type: 'slug', current: 'aviso-legal' },
    body: [
      h2('1. Datos identificativos del responsable'),
      p('En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa:'),
      ...ul([
        'Titular: Alberto Aguado Calvo',
        'NIF: [pendiente de completar]',
        'Domicilio profesional: Madrid, España',
        'Correo electrónico: [correo de contacto]',
        'Colegio profesional: [número de colegiado pendiente]',
      ]),

      h2('2. Objeto y ámbito de aplicación'),
      p('El presente Aviso Legal regula el acceso y uso del sitio web albertoaguadocalvo.es (en adelante, "el Sitio"), titularidad de Alberto Aguado Calvo, Psicólogo General Sanitario y Neuropsicólogo Clínico.'),
      p('El acceso al Sitio implica la aceptación plena y sin reservas de las presentes condiciones. El titular se reserva el derecho a modificar este Aviso Legal en cualquier momento; los cambios serán efectivos desde su publicación en el Sitio.'),

      h2('3. Propiedad intelectual e industrial'),
      p('Todos los contenidos del Sitio —textos, imágenes, diseño gráfico, logotipos y código fuente— son propiedad de Alberto Aguado Calvo o de terceros que han autorizado su uso. Quedan prohibidas la reproducción, distribución, comunicación pública o transformación sin autorización expresa y por escrito del titular.'),

      h2('4. Responsabilidad'),
      p('Alberto Aguado Calvo no se responsabiliza de los daños que pudieran derivarse del uso del Sitio, de la imposibilidad de acceso, de la presencia de virus informáticos ni de las decisiones tomadas basándose en la información publicada, que tiene carácter meramente informativo y no constituye consejo médico o psicológico.'),

      h2('5. Legislación aplicable y jurisdicción'),
      p('Este Aviso Legal se rige por la legislación española. Para cualquier controversia derivada de su interpretación o aplicación, las partes se someten a los Juzgados y Tribunales de Madrid, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.'),
    ],
  },

  // ── legalPage: Política de privacidad ─────────────────────────────────────
  {
    _id: 'legalPage-privacidad',
    _type: 'legalPage',
    title: 'Política de privacidad',
    slug: { _type: 'slug', current: 'privacidad' },
    body: [
      p('En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), te informamos sobre el tratamiento de tus datos personales.'),

      h2('1. Responsable del tratamiento'),
      ...ul([
        'Nombre: Alberto Aguado Calvo',
        'NIF: [pendiente de completar]',
        'Dirección: Madrid, España',
        'Correo electrónico: [correo de contacto]',
      ]),

      h2('2. Finalidad del tratamiento'),
      p('Los datos personales que nos facilites a través del formulario de contacto (nombre, dirección de correo electrónico, teléfono y mensaje) se tratan exclusivamente para:'),
      ...ul([
        'Gestionar y responder a tu consulta o solicitud de información.',
        'Contactar contigo en relación con los servicios psicológicos solicitados.',
      ]),
      p('No se utilizan para elaborar perfiles comerciales ni se ceden a terceros, salvo obligación legal.'),

      h2('3. Base jurídica'),
      p('El tratamiento se basa en el consentimiento que prestas al enviar el formulario (art. 6.1.a RGPD). Puedes retirar tu consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento previo.'),

      h2('4. Plazo de conservación'),
      p('Los datos se conservarán durante el tiempo necesario para gestionar tu consulta y, en su caso, durante el período de prescripción de las responsabilidades legales que pudieran derivarse de la relación establecida.'),

      h2('5. Destinatarios'),
      p('Los datos no se ceden a terceros, salvo que exista obligación legal. El Sitio no cuenta con servicios de análisis de terceros que recopilen datos personales identificables.'),

      h2('6. Tus derechos'),
      p('Puedes ejercer en cualquier momento los siguientes derechos frente al responsable del tratamiento:'),
      ...ul([
        'Acceso: conocer qué datos tuyos tratamos.',
        'Rectificación: corregir datos inexactos o incompletos.',
        'Supresión: solicitar la eliminación de tus datos cuando ya no sean necesarios.',
        'Limitación: solicitar que suspendamos el tratamiento en determinadas circunstancias.',
        'Portabilidad: recibir tus datos en formato estructurado.',
        'Oposición: oponerte al tratamiento por motivos relacionados con tu situación particular.',
      ]),
      p('Para ejercer estos derechos, dirígete por escrito a [correo de contacto], identificándote y especificando tu solicitud.'),
      p('Si consideras que el tratamiento de tus datos no es conforme a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).'),

      h2('7. Seguridad'),
      p('Alberto Aguado Calvo adopta las medidas técnicas y organizativas adecuadas para garantizar la confidencialidad e integridad de los datos personales tratados y prevenir su acceso no autorizado, pérdida o alteración.'),
    ],
  },

  // ── legalPage: Política de cookies ────────────────────────────────────────
  {
    _id: 'legalPage-cookies',
    _type: 'legalPage',
    title: 'Política de cookies',
    slug: { _type: 'slug', current: 'cookies' },
    body: [
      h2('¿Qué son las cookies?'),
      p('Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo cuando los visitas. Permiten que el sitio recuerde información sobre tu visita para mejorar la experiencia de navegación.'),

      h2('Cookies que utiliza este sitio'),
      p('Este sitio web utiliza únicamente cookies técnicas estrictamente necesarias para su funcionamiento. No utiliza cookies de análisis, publicidad ni seguimiento de terceros.'),

      h3('Cookies técnicas (necesarias)'),
      ...ul([
        'Cookies de sesión del servidor Next.js: gestionan la sesión de navegación y son eliminadas al cerrar el navegador.',
        'Cookies de preferencias: almacenan configuraciones de visualización durante la sesión.',
      ]),
      p('Estas cookies no requieren tu consentimiento al amparo del art. 22.2 de la LSSI-CE, ya que son necesarias para la prestación del servicio solicitado.'),

      h2('Cookies de terceros'),
      p('En la actualidad, este sitio no incorpora servicios de terceros que instalen cookies en tu dispositivo (no se utiliza Google Analytics, Google Fonts con seguimiento, redes sociales ni publicidad).'),

      h2('Cómo gestionar o desactivar las cookies'),
      p('Puedes configurar tu navegador para rechazar o eliminar cookies en cualquier momento. Ten en cuenta que desactivar las cookies técnicas puede afectar al correcto funcionamiento del sitio.'),
      p('Instrucciones según tu navegador:'),
      ...ul([
        'Chrome: Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.',
        'Firefox: Opciones → Privacidad y seguridad → Cookies y datos del sitio.',
        'Safari: Preferencias → Privacidad → Gestionar datos de sitios web.',
        'Edge: Configuración → Privacidad, búsqueda y servicios → Cookies.',
      ]),

      h2('Actualización de esta política'),
      p('Esta Política de cookies puede actualizarse para reflejar cambios en el Sitio o en la legislación aplicable. Te recomendamos revisarla periódicamente. La fecha de la última actualización figura al pie de esta página.'),
    ],
  },

];

// ─── Seed ────────────────────────────────────────────────────────────────────

async function seed() {
  console.log(`Seeding ${docs.length} documents to ${env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${env.NEXT_PUBLIC_SANITY_DATASET}…\n`);

  const tx = client.transaction();
  for (const doc of docs) {
    tx.createOrReplace(doc);
  }

  const result = await tx.commit({ visibility: 'sync' });
  console.log(`✓ Done. ${result.results.length} documents created/replaced.`);
  result.results.forEach(r => console.log(`  ${r.operation} ${r.id}`));
}

seed().catch(err => { console.error(err); process.exit(1); });
