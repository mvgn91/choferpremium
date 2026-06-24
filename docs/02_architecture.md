# 02 — Architecture Document

> **Proyecto:** Tu Chofer Premium — Demo App
> **Versión:** 1.0.0
> **Fecha:** 2026-06-24
> **Estado:** BORRADOR — Pendiente de aprobación humana

---

## 1. Stack tecnológico

| Capa | Tecnología | Versión | Justificación |
|------|-----------|---------|--------------|
| Presentación | HTML5 | — | Semántica moderna, compatibilidad universal |
| Estilos | CSS3 (Vanilla) | — | Variables CSS para theming, sin dependencias |
| Lógica | JavaScript ES6+ | — | IntersectionObserver, módulos, eventos modernos |
| Tipografía | Google Fonts — Inter | v3 | Estándar Uber/Material, legible en pantallas |
| Iconografía | Lucide (CDN) | latest | SVG inline, tree-shakeable via CDN |
| Contacto | WhatsApp Web API | — | wa.me links con mensajes predefinidos |
| Contacto | VCF (vCard) | 3.0 | Estándar de libreta de direcciones |

**Decisión clave:** Sin framework, sin bundler, sin build step. El proyecto funciona abriendo `index.html` directamente.

---

## 2. Arquitectura de componentes

```
index.html
├── Splash Screen
│   └── Logo animado con icono de auto
│
├── Hero Section
│   ├── Banner con gradiente animado
│   ├── Availability Badge (pulsing dot)
│   ├── Profile (placeholder avatar + rating badge)
│   ├── Stats Dropdown (viajes, años, puntualidad)
│   ├── Hero Title + Emotional Layer
│   ├── WhatsApp CTA (botón principal)
│   ├── VCF Download Button + Instructions
│   └── Theme Toggle (esquina superior izquierda)
│
├── Recurring Trips Section
│   └── Content Card con CTA a WhatsApp
│
├── Zones & Schedules Section
│   ├── Map Placeholder (gradiente + icono)
│   └── Schedule Grid (área diaria + horarios)
│
├── Vehicle & Experience Section
│   ├── Vehicle Image Placeholder (Unsplash)
│   └── Advantages List (3 cards con iconos)
│
├── Testimonial Section
│   └── Testimonial Card (quote, avatar, estrellas)
│
├── Services Grid Section
│   └── 2x2 Grid (4 modalidades de servicio)
│
├── Footer
│   ├── CTA WhatsApp
│   ├── Copyright
│   └── MVGN Labs credit
│
├── Floating WhatsApp Button (FAB)
│
├── Presentation Tour
│   ├── Tour Toggle Button
│   └── Tour Tooltip (navegación + highlight)
│
└── Demo Banner (sticky top)
```

---

## 3. Flujo de datos

```
Usuario → index.html
  ├── Click "Pedir auto ahora"
  │     └── window.open(`https://wa.me/{phone}?text={mensaje}`)
  │
  ├── Click "Guardar Contacto Demo"
  │     └── download demo_contact.vcf
  │
  ├── Toggle Tema
  │     └── localStorage.setItem('theme') → CSS variables swap
  │
  ├── Scroll
  │     └── IntersectionObserver → .visible class → CSS transition
  │
  └── Tour Mode
        └── data-tour attributes → tooltip + highlight + keyboard nav
```

No hay backend, API, ni base de datos. Toda la lógica es client-side.

---

## 4. ADRs (Architecture Decision Records)

### ADR-01: Sin framework

**Contexto:** Proyecto demo ligero, sin necesidad de estado complejo ni routing.

**Decisión:** Usar HTML5 + CSS3 + JavaScript vanilla.

**Consecuencia:** 0 dependencias, 0 build step, funciona sin servidor.

**Alternativas consideradas:** React, Vue, Astro — descartadas por sobreingeniería.

---

### ADR-02: WhatsApp como canal único de contacto

**Contexto:** El servicio opera con trato directo chofer-cliente.

**Decisión:** Único CTA via WhatsApp con mensajes predefinidos.

**Consecuencia:** Sin formularios, sin backend de contacto, sin captura de datos.

**Alternativas consideradas:** Formulario de contacto email — descartado por friction.

---

### ADR-03: Tema oscuro/claro con CSS variables

**Contexto:** Experiencia premium adaptable a cualquier entorno.

**Decisión:** Variables CSS custom properties + media query prefers-color-scheme + localStorage.

**Consecuencia:** Sin runtime de theming, persistencia cross-session, respeta preferencia del sistema.

**Alternativas consideradas:** JavaScript runtime theming — descartado por simplicidad.

---

### ADR-04: Placeholders visuales sin imágenes reales

**Contexto:** Demo sin contenido real del chofer ni vehículo.

**Decisión:** Todos los assets visuales son placeholders CSS (gradientes, emojis, Unsplash demo image).

**Consecuencia:** Sin assets pesados, carga rápida, privacidad del demo.

**Alternativas consideradas:** Imágenes reales — descartado por privacidad y peso.

---

### ADR-05: Scroll reveal con IntersectionObserver

**Contexto:** Animaciones de entrada elegantes sin librerías externas.

**Decisión:** API nativa IntersectionObserver + CSS transitions con cubic-bezier personalizado.

**Consecuencia:** Sin AOS ni librerías de animación, rendimiento nativo, 0kb extra.

---

### ADR-06: Tour interactivo integrado

**Contexto:** Necesidad de presentar la demo a clientes/reclutadores.

**Decisión:** Sistema propio de tour con atributos `data-tour`, tooltip flotante, highlight CSS y navegación por teclado.

**Consecuencia:** Sin librerías de tour (driver.js, intro.js), control total del diseño y comportamiento.

---

## 5. Estructura de archivos

```
choferpremium/
├── index.html             # Landing page completa
├── script.js              # Toda la lógica JS
├── styles.css             # Todos los estilos + temas
├── demo_contact.vcf       # Tarjeta de contacto demo
├── package.json           # Metadata del proyecto
├── docs/                  # Documentación MVGN
│   ├── 00_idea.md
│   ├── 01_prd.md
│   ├── 02_architecture.md
│   ├── 03_tasks.md
│   ├── 04_changelog.md
│   ├── 05_lessons_learned.md
│   └── 06_state_report.md
├── .mvgn/                 # Capas del sistema MVGN
├── prompts/               # Prompts de workflow
├── templates/             # Templates
└── tools/                 # Scripts MVGN
```

---

## 6. Responsive Design

| Breakpoint | Layout | Comportamiento |
|-----------|--------|---------------|
| < 640px | Mobile | Full-width, sin contenedor |
| ≥ 640px | Desktop | Contenedor centrado con sombra, fondo gris |

---

## 7. Rendimiento

| Aspecto | Estrategia |
|---------|-----------|
| Carga inicial | Sin dependencias npm, CDN mínimo (Google Fonts + Lucide) |
| Animaciones | CSS transforms + opacity (compositor-only) |
| Imágenes | 1 imagen Unsplash (vehicle) + placeholders CSS |
| JavaScript | ~200 líneas, sin librerías |

---

## Historial de cambios

| Fecha | Versión | Cambio | Autor |
|------|---------|--------|-------|
| 2026-06-24 | v1 | Creación inicial de arquitectura | IA (borrador) |

---

**Firma humana:** Armando Ibañez ✓  
**Nombre:** Armando Ibañez — CEO de MVGN Labs  
**Fecha:** 2026-06-24  
**[✓]** Aprobado
