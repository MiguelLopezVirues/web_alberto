---
version: alpha
name: presencia-fluida
description: "Presencia humana integrada — foto de Alberto emerge del color de la sección, tipografía como bienvenida, organicismo en las transiciones, no en los elementos."

# ─── COLORES ────────────────────────────────────────────────────────────────
# Fuente de verdad: inputs/palettes/palette-v1.html
# Dirección: Presencia Orgánica · Sage greens neutros
colors:
  ground:        "#f9f9f7"
  ground-raised: "#ffffff"
  ground-soft:   "#f4f4f2"
  ground-deep:   "#2f3130"
  accent-light:  "#ccead3"
  accent:        "#476250"
  accent-deep:   "#607b68"
  border:        "#c2c8c1"
  ink:           "#1a1c1b"
  ink-muted:     "#424843"
  ink-ghost:     "#727973"
  ink-on-brand:  "#ffffff"
  feedback-error: "#b91c1c"

# ─── TIPOGRAFÍA ─────────────────────────────────────────────────────────────
# Trío confirmado por /font-selection (2026-05-28)
# Sin serifas. Sin geometrías marcadas. Alta x-height en body.
typography:

  # DISPLAY — Ysabeau — ADN Garamond + crispness sans, wide stride
  h1:
    fontFamily: "'Ysabeau', sans-serif"
    fontRole: display
    fontSize: "clamp(2.25rem, 4vw + 0.5rem, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
    # Italic selectivo: palabras con carga emocional en <em> — solo la palabra, no todo el titular
  h2:
    fontFamily: "'Ysabeau', sans-serif"
    fontRole: display
    fontSize: "clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.005em"
  h3:
    fontFamily: "'Ysabeau', sans-serif"
    fontRole: display
    fontSize: "clamp(1.2rem, 1.5vw + 0.25rem, 1.6rem)"
    fontWeight: 600
    lineHeight: 1.2

  # BODY — Atkinson Hyperlegible Next — accessibility-first, neurodivergentes
  body-lg:
    fontFamily: "'Atkinson Hyperlegible Next', sans-serif"
    fontRole: body
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  body-md:
    fontFamily: "'Atkinson Hyperlegible Next', sans-serif"
    fontRole: body
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.01em"
  body-sm:
    fontFamily: "'Atkinson Hyperlegible Next', sans-serif"
    fontRole: body
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65

  # UI — Open Sans — humanista, screen-optimizado
  label:
    fontFamily: "'Open Sans', sans-serif"
    fontRole: ui
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.08em"
    textTransform: "uppercase"
  label-lg:
    fontFamily: "'Open Sans', sans-serif"
    fontRole: ui
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.06em"
  nav:
    fontFamily: "'Open Sans', sans-serif"
    fontRole: ui
    fontSize: "0.875rem"
    fontWeight: 500
  button:
    fontFamily: "'Open Sans', sans-serif"
    fontRole: ui
    fontSize: "0.9375rem"
    fontWeight: 700
    letterSpacing: "0.02em"
  eyebrow-conv:
    fontFamily: "'Ysabeau', sans-serif"
    fontRole: display
    fontSize: "clamp(1rem, 1.5vw, 1.25rem)"
    fontWeight: 400
    letterSpacing: "0"
    # Usado en "Hola, soy Alberto." — conversacional, no label

# ─── GOOGLE FONTS EMBED ─────────────────────────────────────────────────────
fonts:
  embed:
    - "https://fonts.googleapis.com/css2?family=Ysabeau:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
    - "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;500;600&display=swap"
    - "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"

# ─── ESPACIADO ──────────────────────────────────────────────────────────────
spacing:
  xs:  "0.5rem"    #  8px
  sm:  "1rem"      # 16px
  md:  "1.5rem"    # 24px
  lg:  "2rem"      # 32px
  xl:  "3rem"      # 48px
  2xl: "5rem"      # 80px
  3xl: "7rem"      # 112px

  # Padding de sección
  section-y-primary:   "5rem"    # 80px — secciones primary
  section-y-secondary: "4.5rem"  # 72px — secciones secondary
  section-x:           "3rem"    # 48px desktop · 1.5rem mobile

  # Max-width del contenedor
  container: "1200px"
  container-narrow: "760px"   # para columnas de texto centradas (interpelación, contacto)

# ─── BORDES Y FORMAS ────────────────────────────────────────────────────────
borders:
  radius-sm:   "4px"
  radius-md:   "8px"
  radius-lg:   "12px"
  radius-pill: "9999px"
  # Sin radius extremo en botones — el brief pide "no pill extremo, no cuadrado"
  button-radius: "8px"

  # Imágenes y fotos: sin border-radius
  # El organicismo viene de los contenedores y transiciones, no de las imágenes
  image-radius: "0"

  width-default: "1px"
  color-default: "var(--border)"  # #c2c8c1

# ─── SOMBRAS ────────────────────────────────────────────────────────────────
shadows:
  # Sin sombras duras — solo elevación por opacidad y geometría
  card: "0 1px 3px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)"
  nav:  "0 1px 0 var(--border)"
  # Sin box-shadow en botones ni imágenes

# ─── MOTION ─────────────────────────────────────────────────────────────────
motion:
  duration-fast:   "200ms"
  duration-base:   "400ms"
  duration-slow:   "600ms"
  easing:          "cubic-bezier(0.0, 0.0, 0.2, 1)"  # ease-out
  # Fades como protagonistas — pausados y orgánicos, sin saltos ni velocidad
  fade-in:  "opacity 400ms cubic-bezier(0.0, 0.0, 0.2, 1)"
  fade-out: "opacity 300ms cubic-bezier(0.4, 0.0, 1, 1)"

# ─── LAYOUT ─────────────────────────────────────────────────────────────────
layout:
  # Ver inputs/layout.md para las decisiones de estructura por sección
  # Ver inputs/wireframe.html para referencia visual

  hero:
    columns-desktop: "58fr 42fr"
    photo-background: "var(--accent-light)"  # #ccead3 — integración por color con foto de Alberto
    photo-treatment: "sin contenedor, sin border-radius — tratamiento de borde en /screen"
    min-height: "480px"

  sobre-alberto:
    columns-desktop: "42fr 58fr"
    photo-side: "izquierda"
    photo-treatment: "sin contenedor — tratamiento de borde derecho en /screen"
    eyebrow-style: "eyebrow-conv — conversacional, no label"

  servicios:
    pattern: "lista editorial con borde izquierdo"
    border-left-color: "var(--accent)"
    featured-border-color: "var(--accent-deep)"
    featured-background: "rgba(71,98,80,0.04)"

  proceso:
    pattern: "timeline vertical left-aligned"
    line-color: "var(--border)"
    dot-background: "var(--ground-soft)"
    dot-border: "var(--border)"

  testimonios:
    pattern: "cita única con navegación"
    rotation: 3

  contacto:
    pattern: "columna centrada"
    form-width: "440px"
    nota-previa: true  # "No necesitas preparar nada. Solo cuéntame qué te ocurre."

# ─── CAPAS ORGÁNICAS ────────────────────────────────────────────────────────
organic:
  # Blobs ambient — en <body>, posición fixed, no por sección
  blobs:
    - position: "fixed top-right"
      size: "600px"
      blur: "100px"
      opacity: 0.4
      color: "var(--accent-light)"
    - position: "fixed bottom-left"
      size: "500px"
      blur: "90px"
      opacity: 0.35
      color: "var(--accent-light)"

  # Curve transitions — SVGs en inputs/shapes/
  curves:
    available:
      - "inputs/shapes/curve-section-in.svg"
      - "inputs/shapes/curve-section-out.svg"
    apply:
      - section: "hero"       placement: "bottom"  svg: "curve-section-out"
      - section: "interpelacion" placement: "top"   svg: "curve-section-in"
      - section: "interpelacion" placement: "bottom" svg: "curve-section-out"
      - section: "sobre-alberto" placement: "top"  svg: "curve-section-in"
      - section: "contacto"   placement: "top"     svg: "curve-section-in"

# ─── ALTERNANCIA DE FONDOS ──────────────────────────────────────────────────
section-backgrounds:
  nav:            "ground"
  hero:           "ground"
  interpelacion:  "ground-soft"
  sobre-alberto:  "ground-soft"
  servicios:      "ground"
  proceso:        "ground-raised"
  testimonios:    "ground-soft"
  contacto:       "accent-light"  # a opacidad 0.2 sobre ground — tinte muy sutil
  footer:         "ground-deep"

# ─── ACCESIBILIDAD ──────────────────────────────────────────────────────────
accessibility:
  contrast: "AA"
  dark-mode: false
  font-scale: false
  # Restricciones tipográficas para neurodivergentes: sin serifas, sin geometrías marcadas
  # Atkinson Hyperlegible Next como body — letterforms inequívocos
