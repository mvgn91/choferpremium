# Tu Chofer Premium

Landing page mobile-first de demostración para un servicio de chofer privado premium. Conecta conductores con clientes mediante WhatsApp, con modo oscuro, estadísticas animadas y tour interactivo.

Experiencia premium tipo Uber/Material Design, con micro-interacciones sutiles y un flujo de contacto directo sin intermediarios.

**Producción:** https://github.com/mvgn91/choferpremium

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Vanilla (sin framework) |
| Estilos | CSS3 con variables para theming |
| Lógica | JavaScript ES6+ |
| Fuentes | Google Fonts — Inter |
| Iconos | Lucide (CDN) |

## Estado del proyecto

| Fase | Progreso |
|------|----------|
| Fase 0: Fundación (documentación) | ✅ |
| Fase 1: Landing page completa | ✅ |
| Fase 2: Modo oscuro/claro | ✅ |
| Fase 3: Tour interactivo | ✅ |
| Fase 4: Documentación MVGN | ✅ |

`abrir index.html en navegador`: ✅

## MVGN

Este proyecto sigue el sistema MVGN (Model-View-Guardian-Nexus).
Documentación completa del ciclo de vida en `docs/`:

| Doc | Contenido |
|-----|-----------|
| `00_idea.md` | Idea original y filosofía del producto |
| `01_prd.md` | Product Requirements Document (RF + RNF) |
| `02_architecture.md` | Arquitectura, ADRs, stack, routing |
| `03_tasks.md` | Desglose de tareas |
| `04_changelog.md` | Historial de cambios |
| `05_lessons_learned.md` | Lecciones aprendidas |
| `06_state_report.md` | Estado actual del proyecto |

Capas del sistema MVGN en `.mvgn/`: contract, kernel, rules, engine, recovery, authority.

## Estructura

```
choferpremium/
├── index.html                   # Landing page completa
├── styles.css                   # Estilos + temas claro/oscuro
├── script.js                    # Lógica JS (WhatsApp, tour, animaciones)
├── demo_contact.vcf             # Tarjeta de contacto demo
├── package.json                 # Metadata del proyecto
├── docs/                        # Documentación MVGN
├── .mvgn/                       # Capas del sistema MVGN
├── .mvgn-context.json           # Contexto del sistema
├── prompts/                     # Prompts de workflow
├── templates/                   # Templates
└── tools/                       # Scripts MVGN
```

## Comandos

| Comando | Acción |
|---------|--------|
| `abrir index.html` | Abrir la app en el navegador |
| `git push` | Desplegar cambios al repositorio |

## Screens (MVP)

| Screen | Ruta | Prioridad |
|--------|------|-----------|
| Hero / Perfil | `index.html` #hero | P0 |
| Viajes Recurrentes | `index.html` #recurring | P1 |
| Zona y Horarios | `index.html` #zones | P1 |
| Vehículo y Ventajas | `index.html` #advantages | P1 |
| Testimonio | `index.html` #testimonial | P1 |
| Modalidades | `index.html` #services | P1 |
| Footer | `index.html` #footer | P1 |

## Licencia

MIT — MVGN Labs

Desarrollado con el sistema MVGN
