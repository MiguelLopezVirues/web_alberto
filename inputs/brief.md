# Design Brief
<!-- Generado por /brief el 2026-05-26 -->

## Producto / Marca
Alberto Aguado Calvo — Psicólogo General Sanitario y Neuropsicólogo Clínico. Página web de presentación personal para promocionar su consulta privada. Ofrece terapia psicológica general (ansiedad, depresión, desregulación emocional, conducta suicida, entre otros), intervención neuropsicológica (infantojuvenil y adultos con daño neurológico) e informes clínicos psicológicos y neuropsicológicos. Atención online.

## Público objetivo
Perfil mixto: adultos que buscan terapia para sí mismos y padres que buscan ayuda para sus hijos. Incluye usuarios neurodivergentes (TDAH, altas capacidades, dislexia). Acceso tanto desde móvil como escritorio. Usuario en modo de búsqueda activa — ya sabe que quiere terapia y está comparando profesionales. Carga emocional alta en el momento de la visita.

## Contenido e intención
primary-action: Enviar el formulario de contacto. El CTA debe reducir la fricción emocional, no solo funcional — orientado a resolver el problema del paciente, no a "contactar".
content-inventory: 2+ fotos del psicólogo (en proceso de recopilar). Sin testimonios de momento (esperados próximamente). Textos de servicios completos entregados por el cliente. Sin vídeo ni blog por ahora — blog previsto a medio plazo.

## Tono y personalidad
tone: cálido y cercano
adjectives: pausado, humano, seguro, accesible, con autoridad sin frialdad clínica, como una mano amiga que se tiende

brand-dimensions:
  cálido-profesional: 3
  cercano-experto:    3
  simple-rico:        3
  moderno-atemporal:  2

## Referencias
- `inputs/references/mindfulspaces_psychotherapy.png` — formas orgánicas blob de fondo, armonía crema/tierra. Lo que no usar: bordes cuadrados, simetría estricta.
- `inputs/references/mindfulness.png` — gradientes de opacidad, formas redondeadas con personalidad, armonía tipografía-color. No usar: paleta azul fría.
- `inputs/references/color_verde_historias_destacadas.png` — referencia directa del tono del accent (verde menta-salvia desaturado).
- `inputs/references/green_hill.png` — confirma la familia de verdes con profundidad atmosférica.
- https://aletheiapsicologos.com — referencia de cercanía, pero le falta autoridad — el diseño debe añadir más peso visual y jerarquía.

visual-direction: → inputs/moodboard.md

## Palette intent
El fondo debe dar calma pero puede tener formas orgánicas no invasivas que aporten cercanía y juego tranquilo. El acento debe aportar la seguridad de una mano amiga. El texto debe transmitir cercanía con la profesionalidad que genera confianza.

## Recorrido emocional
- Hero: alivio inmediato — "alguien me entiende, estoy en el lugar correcto". Calma, no impacto.
- Servicios: reconocimiento — "esto es lo que me pasa". El visitante debe verse reflejado sin sentirse etiquetado.
- Sobre Alberto: confianza — credenciales + humanidad en equilibrio. "Esta persona sabe lo que hace y puedo contarle lo mío."
- Contacto: facilidad — el formulario debe sentirse como el paso más pequeño posible, no como una decisión enorme.

## Lenguaje de forma
language: organic con asimetría controlada — bordes suaves en botones (no pill extremo, no cuadrado), mezcla según elemento
density: spacious — responsive obligatorio
containers: card con elevación visual por opacidad y geometría orgánica, sin sombras duras
surfaces: planas + blob shapes orgánicos de fondo a 15-20% opacidad, gradientes de opacidad suaves. Sin grain ni sombras interiores.

La densidad espaciosa y las formas orgánicas reducen la carga cognitiva para usuarios neurodivergentes y refuerzan el tono de calma y acogida.

## Motion
duration: slow 400ms+
easing: ease-out
reduced: false (de momento — widget de accesibilidad con prefer-reduced-motion previsto como feature futura)

Las animaciones deben sentirse como una gota o una caricia — pausadas y orgánicas. Fades como protagonistas (fade-in, fade-out o mezcla con movimiento sutil) para suavizar transiciones sin interrumpir. Sin saltos, sin velocidad, sin energía que genere ansiedad.

## Accesibilidad
contrast: AA
dark-mode: false (de momento)
font-scale: false (de momento)

Público parcialmente neurodivergente — restricciones tipográficas aplicadas (sin serif, sin geometrías marcadas). Widget de accesibilidad adaptativa (AAA, modo oscuro, OpenDyslexic) previsto como feature futura — deferred.

## Restricciones
- Sin serifas en ningún rol tipográfico
- Sin geometrías marcadas — humanistas redondeadas únicamente
- Sin paleta azul fría
- Sin sombras duras
- Sin bordes cuadrados en imágenes y botones
- Sin simetría estricta — asimetría controlada en composición

## Tipografía
<!-- ✅ Confirmado con /font-selection + RAG (2026-05-28). Pipeline completo: brief analysis → retrieval → pre-filter textual → render HTML → screenshot → juicio visual con subagente. -->

display: "Ysabeau" (Google Fonts) — ADN Garamond + crispness de sans limpio, wide stride, reading comfort, pesos 100–900
body: "Atkinson Hyperlegible Next" (Google Fonts) — accessibility-first, letterforms inequívocos para neurodivergentes, pesos 200–800
ui: "Open Sans" (Google Fonts) — humanista, upright stress, open forms, neutral yet friendly, screen-optimizado, pesos 300–800

Notas de implementación:
- Display: Ysabeau 700 para h1/hero, 600 para h2/h3
- Body: Atkinson Hyperlegible Next 400 para párrafos, 600 para énfasis
- UI: Open Sans 500 para labels y nav, 700 para botones
- Embed Google Fonts:
  - https://fonts.googleapis.com/css2?family=Ysabeau:wght@400;600;700;800
  - https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;500;600;700
  - https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700

Alternativa A (RAG primera ronda):
- display: "Alegreya Sans" (Google Fonts) — humanista calligráfica, pesos 100–900
- body: "Atkinson Hyperlegible Next" (Google Fonts)
- ui: "Merriweather Sans" (Google Fonts) — traditional, screen-optimizado, pesos 300–800

Alternativa B (pre-RAG, conocimiento de entrenamiento):
- display: "General Sans" (Fontshare)
- body: "Atkinson Hyperlegible" (Google Fonts) — solo 400/700
- ui: "Inter" (Google Fonts)

Opciones Adobe Fonts pendientes de evaluar (requieren kit):
- "Gesta" — warm, friendly, moderno — candidato display o UI
- "Brandon Grotesque" — functional look with warm touch — candidato UI

## Contexto técnico
Next.js + Tailwind v4 + React. Responsive obligatorio. Formulario de contacto integrado (sin servidor externo de momento). Blog previsto a medio plazo — razón para elegir Next.js desde el inicio.

## Composición
<!-- Extraído de análisis de referencias (web1-1.jpg, web1-2.jpg, Haven/web2.jpg) — 2026-05-30 -->

ritmo-secciones: alternancia cream ↔ sage suave — nunca fondo blanco uniforme a lo largo de toda la página. Las secciones neutras usan ground-raised (#e8e9e7) en vez de ground puro. El único momento de verde saturado se reserva para una sección estructural clave (servicios o interpelación). Ver patrón Cassandra (web1-1, web1-2).

textura-ambiental: blobs de gran escala en posición fixed, blur 80-120px, opacidad 0.35-0.5, color accent-light. Crean profundidad orgánica continua sin añadir formas por sección. Anti-patrón: blobs pequeños en esquinas de sección — se sienten decorativos y cosméticos, no estructurales.

fotos: sin border-radius — las fotos sangran hasta el borde del contenedor. El organicismo viene de los contenedores (clip-path, blob shapes), no de las imágenes recortadas con border-radius. Las fotos con borde redondeado señalizan "friendly-generic" (ver anti-referencia web3).

relacion-foto-color: la foto no flota sobre un fondo blanco — está integrada en el color de la sección. En el hero, la mitad derecha tiene un background-color (ground-soft / gradient) que acompaña a la foto sin romper.

densidad: variable por sección. La interpelación directa (¿Llevas tiempo sintiéndote así?) necesita mucho espacio — al menos 4rem de padding vertical. Los servicios pueden ser más densos (lista vertical).

anti-patrones: grid de cards con iconos (SaaS), flechas → como bullets (conflicto con rounded corners), secciones todas al mismo nivel de densidad visual, fondo blanco uniforme sin diferenciación de superficie.

## Voz
<!-- Extraído de inputs/content.md y brief del cliente — 2026-05-30 -->

cta-principal: "Cuéntame qué te ocurre" — en primera persona, orientado al problema del paciente, no al acto de "contactar". Nunca "Enviar mensaje", "Begin your path", "Contacto".

eyebrow-presentacion: "Hola, soy Alberto." — conversacional, sin título formal. El nombre de pila primero. Anti-patrón: "Sobre el Dr. Alberto Aguado Calvo, Psicólogo General Sanitario".

interpelacion-directa: el diseño debe incluir al menos una sección que interpele al lector directamente en segunda persona y tono empático — "¿Llevas tiempo sintiéndote así?", "¿Te suena familiar?" No se describe el servicio — se reconoce la experiencia del visitante.

registro: cercano y pausado, nunca clínico ni corporativo. Alberto no habla de "intervenciones" o "tratamientos" en el copy visible — habla de "acompañar", "comprender", "construir". El copy técnico (Psicólogo General Sanitario, Neuropsicólogo Clínico) aparece solo en metadata y credenciales, no en titulares.

anti-copia: ningún copy genérico del tipo "Espacio seguro para tu bienestar", "Tu salud mental importa", "Damos el primer paso juntos". Son frases que podría usar cualquier psicólogo — no identifican a Alberto.

## Notas adicionales
- Widget de accesibilidad adaptativa (AAA, dark mode, OpenDyslexic, etc.) previsto como feature futura — no en scope inicial.
- Testimonios de pacientes (anonimizados) esperados próximamente — el layout debe prever su incorporación.
- Blog en hoja de ruta — Next.js elegido anticipando SSG/SSR por esta razón.
- La tipografía provisional debe reconfirmarse con /font-selection cuando se solucione la compatibilidad de better-sqlite3 con Node v26.2.0.
