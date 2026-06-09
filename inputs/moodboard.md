# Moodboard
<!-- Generado por /moodboard el 2026-05-28 -->

## Brújula emocional
"Sala de espera cálida — madera clara, luz natural, espacio tranquilo. El profesional llega, te da la mano y ya confías. Acompañado, con esperanza, con seguridad de que alguien puede resolver lo que te ocurre."

## Referencias positivas
- `inputs/references/web2.jpg` (Haven) — referencia principal. Fondo crema caliente, verde salvia como color estructural en secciones completas, CTAs en verde. Roles: ground (crema), accent-deep (salvia estructural), secciones con fondo de color. Lo que NO llevar: tipografía serif del display (el brief la prohíbe).
- `inputs/references/mindfulspaces_psychotherapy.png` — confirma el ground: crema terrosa, superficies arena, blobs orgánicos a baja opacidad. Roles: ground, ground-raised, tratamiento de texture.
- `inputs/references/green_hill.png` — estado de ánimo: apertura, calma, naturaleza. El verde es demasiado saturado — tomar el H y la atmósfera, no la intensidad.
- `inputs/references/mindfulness.png` — calidad de composición y tratamiento de transparencias. Los azules de esta referencia están explícitamente rechazados.
- `inputs/references/the_ascent.png` — calidad de línea: orgánica, fluida, asimétrica. No es referencia de color.
- `inputs/references/color_verde_historias_destacadas.png` — verde usado por el cliente en redes sociales. Menta-salvia muy desaturado. Reservado como candidato alternativo para explorar en variantes, no como ancla principal.

## Anti-referencias
- `inputs/color-probe.png` — falta de armonía cromática: ground con subtono neutro mientras el verde estructural va por otro hue. El salto de contraste entre secciones es brusco y sin transición.
- Paleta de azules fríos — queda clínica, aleja del tono cálido y cercano
- Verde oscuro saturado en secciones (tipo forest/hunter green) — sin conexión con el ground cálido
- Bordes cuadrados en imágenes y botones — rompen la calidez orgánica
- Simetría estricta — buscar asimetría controlada en composición y shapes de fondo
- Geometrías marcadas o tipografías con serif — carga visual para usuarios neurodivergentes

## Assets de referencia
- `inputs/references/web2.jpg` — referencia principal de paleta y estructura · roles: ground, accent-deep, secciones estructurales
- `inputs/references/mindfulspaces_psychotherapy.png` — shapes orgánicos + paleta tierra · roles: ground, ground-raised, texture
- `inputs/references/green_hill.png` — estado de ánimo de calma y apertura · rol: dirección emocional
- `inputs/references/mindfulness.png` — tratamiento de opacidad y composición · rol: técnica de surfaces
- `inputs/references/the_ascent.png` — calidad de línea orgánica y asimétrica · rol: forma, no color
- `inputs/references/Foto del perfil de albertoaguadopsicologo.png` — foto real del cliente, integrar en hero

## Calibración visual

### Color
temperatura: cálido
luminosidad: claro
saturación: desaturada-moderada
ancla: Salvia oscura (H=105°, subtono amarillo-terroso) — elegida sobre Cedro por compartir familia cálida con el ground, evitando la desconexión cromática de la anti-referencia
descripción: Ground crema casi-blanca con tinte sutil (familia H=105°). El verde salvia oscuro entra como único color estructural — botones, secciones, footer. Los neutrales de la paleta (ground, raised, inks) están todos tintados con el mismo H, garantizando armonía aunque a S muy baja. La razón: si el ancla y el ground no comparten familia, las secciones de color se sienten injertadas, no integradas.
candidatos-sondeo: salvia dorada, cedro, hoja, menta apagada (eucalipto rechazado por subtono frío)
ancla-elegida: salvia oscura (salvia dorada oscurecida para tomar texto claro cómodamente)

### Textura
nivel: casi plana
nota: shapes blob orgánicos en fondo a 15-20% opacidad usando accent-light (#cdd9ca). Gradientes de opacidad suaves en surfaces. Sin sombras interiores ni grain.

### Densidad
espaciosa — público mixto con usuarios neurodivergentes + tono cálido. Aire generoso entre secciones reduce la carga cognitiva y transmite calma.

### Contraste
moderado — texto oscuro cromático (ink #20241e, tintado con H=105°) sobre ground claro. CTAs con fondo accent-deep (#335129) y texto ink-on-brand (#f7f6f4). Sin negro puro sobre blanco puro.

### Bordes de sección
organic-curve — las secciones usan transiciones SVG curvas (curve-section-in/out) en lugar de cortes rectos horizontales. Referencia: mindfulspaces_psychotherapy.png, que combina secciones con borde redondeado/orgánico con fotos de bordes completamente afilados.
imagen-style: sharp — imágenes y fotos sin border-radius. El organicismo viene de los contenedores (secciones, blobs de fondo), no de los elementos interiores. Esto permite el contraste sofisticado entre forma orgánica del layout y nitidez de las imágenes.

## Carácter tipográfico
display: humanista redondeada sin serif, con peso suficiente para transmitir autoridad — sin frialdad clínica ni geometría marcada. Vínculo con tono cálido + restricciones para neurodivergentes.
body: humanista de alta legibilidad, x-height generosa, cómoda en bloques largos — vínculo con contenido extenso (bio, servicios, informes) y accesibilidad.
ui: funcional y neutral, cómoda a tamaños pequeños — sin rasgos que distraigan, apoya sin protagonismo.

## Paleta por roles
<!-- Hex derivados matemáticamente con palette-science.ts · ancla #5A8A4A · modo mono -->
<!-- Fuente de verdad confirmada en inputs/palette.html — no editar hex aquí sin re-derivar -->
anchor:        #5A8A4A — color ancla original (H=105°, S=30%, L=42%) — conservar para re-derivación
harmony-mode:  mono
ground:        #f7f6f4 — fondo principal, crema cálida casi-blanca (tinte H=105° muy sutil)
ground-raised: #e8e9e7 — cards, superficies elevadas
ground-soft:   #e3eae1 — secciones de transición: testimonios, sobre mí, tarifas
border:        #d2d7d0 — separadores, bordes de card, inputs
accent-light:  #cdd9ca — blob shapes decorativos, chips, badges (baja opacidad en fondos)
accent:        #5b8b4b — iconos, detalles de marca, highlights — NO como fondo de botón (contraste insuficiente)
accent-deep:   #335129 — CTAs primarios, secciones estructurales, hover de botón
ink-ghost:     #8a9f84 — labels, eyebrows, metadata (solo a tamaño grande — 3.14:1 vs ground)
ink-muted:     #4e6147 — texto secundario, subtítulos, cuerpo descriptivo
ink:           #20241e — titulares, texto principal (14.45:1 vs ground — AAA)
ink-on-brand:  #f7f6f4 — texto sobre botones y secciones oscuras (= ground, 8.19:1 vs accent-deep)
ground-deep:   #1a2815 — footer, negro rico tintado con H=105° (15.46:1 vs ink-on-brand — AAA)

Nota CTA: botón primario usa accent-deep como fondo + ink-on-brand como texto. El accent medio (#5b8b4b) no alcanza 4.5:1 con ningún texto — reservado para roles decorativos (10% de pantalla).

## Assets de forma
<!-- Generados por /moodboard Paso 8 el 2026-05-28 — pendiente confirmación visual -->

| Archivo | Tipo | Rol | Procedencia | Opacidad recomendada |
|---|---|---|---|---|
| blob-bg-hero.svg | blob | Ornamento fondo hero | shape-gen seed=7 irregularity=0.62 | 0.16 |
| blob-bg-section.svg | blob | Ornamento sección secundaria (wide) | shape-gen seed=13 ratio=1.3:1 | 0.13 |
| mask-photo-organic.svg | mask soft | Máscara foto de perfil de Alberto | shape-gen seed=21 | — |
| curve-section-in.svg | curve in | Transición hero→primera sección | shape-gen seed=3 amplitude=0.13 | 1.0 |
| curve-section-out.svg | curve out | Salida de sección estructural | shape-gen seed=5 amplitude=0.11 | 1.0 |
| divider-subtle.svg | divider | Divisor orgánico fino entre bloques | shape-gen seed=9 | — |

## Tensiones y resoluciones
- **Ancla cálida vs. ancla neutra**: Cedro rechazado por subtono frío. Salvia oscura elegida por compartir H cálido con el ground, evitando la desconexión cromática que se ve en la anti-referencia (color-probe.png).
- **Verde cliente (menta apagada) vs. salvia oscura**: el verde de las historias del cliente (L≈72%) es demasiado claro para actuar como ancla con carácter. Reservado para explorar como variante alternativa si el cliente lo pide explícitamente.
- **accent vs. accent-deep en CTAs**: el ancla (L=42%) no alcanza contraste suficiente con ningún texto para botones. Resolución: accent-deep como fondo de CTA, accent como decoración. Esto alinea con la referencia Haven que también usa un verde más oscuro para sus botones.

## Señal accionable para generación
- Paleta: fondo crema cálida (#f7f6f4) con único verde estructural en dos valores — accent (#5b8b4b) para decoración y accent-deep (#335129) para acciones y secciones. Todos los neutrales tintados con H=105° para cohesión cromática.
- Textura: shapes blob orgánicos a 15-20% opacidad usando accent-light (#cdd9ca). Gradientes de opacidad suaves en surfaces. Plano sin sombras interiores ni grain.
- Densidad: espaciosa, máximo 3 elementos por fila, secciones con padding generoso (80px+).
- Contraste: texto ink (#20241e) sobre ground. CTAs siempre con accent-deep (#335129) + ink-on-brand (#f7f6f4). Nunca accent medio como fondo de botón.
- Bordes de sección: usar curve-section-in/out SVGs para todas las transiciones entre secciones. Imágenes y fotos siempre con bordes afilados (border-radius: 0) — la organicidad del layout se expresa en los contenedores, no en los elementos.
- Tipografía: humanistas redondeadas sin serif en los tres roles. Sin geometrías marcadas. Alta x-height en body.
- Evitar: verde oscuro saturado tipo forest/hunter en secciones (anti-referencia color-probe), bordes cuadrados, simetría estricta, paleta fría/azul, serifas, sombras duras, negro puro o gris neutro (usar siempre tintes de H=105°).
