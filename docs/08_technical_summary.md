# 08 — Technical Summary

> **Proyecto:** Tu Chofer Premium
> **Versión:** 1.0.0

## Arquitectura

Aplicación de página única (SPA-like) de demostración, completamente client-side. Sin backend, sin API, sin build step.

```
index.html (estructura semántica)
├── styles.css (CSS variables + theming)
└── script.js (manipulación DOM + eventos)
```

## Decisiones técnicas (ADRs)

| ADR | Decisión | Contexto |
|-----|----------|---------|
| ADR-01 | Sin framework | Proyecto demo ligero, sin estado complejo |
| ADR-02 | WhatsApp como único canal | Trato directo chofer-cliente |
| ADR-03 | CSS variables para theming | Tema oscuro/claro sin runtime |
| ADR-04 | Placeholders sin imágenes reales | Demo sin contenido real |
| ADR-05 | IntersectionObserver nativo | Scroll reveal sin librerías |
| ADR-06 | Tour interactivo propio | Sin dependencias externas |

## Estructura del proyecto

```
choferpremium/
├── index.html              # ~200 líneas, 8 secciones principales
├── script.js               # ~200 líneas, 6 módulos funcionales
├── styles.css              # ~800 líneas, 3 temas (light/dark/system)
├── demo_contact.vcf        # Tarjeta de contacto vCard 3.0
├── package.json            # nombre + versión
├── docs/                   # Documentación MVGN (12 archivos)
├── .mvgn/                  # Capas del sistema (7 archivos)
├── prompts/                # Workflow prompts (5 archivos)
├── templates/              # Templates (1 archivo)
└── tools/                  # Scripts MVGN (3 archivos)
```

## Dependencias principales

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| Google Fonts — Inter | CDN | Tipografía principal |
| Lucide Icons | CDN | Iconografía SVG |
| WhatsApp Web API | — | Enlaces de contacto |

Zero dependencias npm. Cero build step.
