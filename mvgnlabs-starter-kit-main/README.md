# MVGN Starter Kit

Framework de desarrollo asistido por IA para convertir ideas en productos. Sistema estructurado que fuerza disciplina de ingeniería mediante documentos obligatorios, prompts especializados, una máquina de estados formal y un runtime operativo con CLI.

Cada interacción con el sistema debe sentirse intencional, trazable y controlada.
Cada decisión de diseño e ingeniería debe apoyar este objetivo.

**Producción:** (próximamente)

## Stack

| Capa | Tecnología |
|------|-----------|
| Runtime | PowerShell 7+ (CLI) |
| Kernel | MVGN Orchestrator v2.1 |
| Documentación | Markdown estructurado + frontmatter |
| Estado | JSON (`.mvgn-context.json`) |
| Persistencia | Archivos planos + sesión |

## Estado del proyecto

| Fase | Progreso |
|------|----------|
| Fase 0: Fundación (documentación del sistema) | ✅ 100% |
| Fase 1: Kernel + CLI | ✅ 100% |
| Fase 2: Session Contract + Authority Map | ✅ 100% |
| Fase 3: Finalization Protocol | ✅ 100% |
| Fase 4: Prompts + Templates | ✅ 100% |
| Fase 5: Documentación de proyectos | ✅ 100% |
| Fase 6: Post-MVP | ⬜ Pendiente |

`mvgn validate`: 0 errores ✅

## MVGN

Este proyecto sigue el sistema MVGN (Model-View-Guardian-Nexus).
Documentación completa del ciclo de vida en `docs/` (generada por cada proyecto):

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
/
├── .mvgn/                     # Capas del sistema MVGN
│   ├── session-contract.md    # Comportamiento de la IA (P1)
│   ├── kernel-spec.md         # Orquestación (P2)
│   ├── recovery-protocol.md   # Resiliencia (P3)
│   ├── finalization-protocol.md # Cierre y release (P4)
│   ├── system-rules.md        # Políticas y gates (P5)
│   ├── execution-engine.md    # Ejecución de tareas (P6)
│   └── authority-map.md       # Prioridad absoluta
├── tools/                     # CLI y utilidades
│   ├── mvgn.ps1               # CLI principal
│   ├── mvgn-loader.ps1        # Loader de contexto
│   └── mvgn-context.json      # Template de contexto
├── prompts/                   # Prompts especializados para IA
│   ├── master-prompt.md       # Prompt raíz de sesión
│   ├── task-execution.md      # Ejecución de tareas
│   ├── bugfix-prompt.md       # Depuración
│   └── component-prompt.md    # Generación de componentes
├── templates/                  # Templates para proyectos MVGN
│   └── project-readme.md      # Template de README para proyectos
├── install-mvgn.ps1           # Instalador global (PATH)
├── NYX.md                     # Entry point para IA runtime
└── README.md
```

## Comandos

| Comando | Acción |
|---------|--------|
| `.\install-mvgn.ps1` | Instalar MVGN CLI globalmente |
| `mvgn start` | Bootstrap completo del sistema |
| `mvgn resume` | Retomar sesión anterior |
| `mvgn state` | Mostrar estado actual |
| `mvgn context` | Exportar contexto máquina-legible |
| `mvgn validate` | Ejecutar checks de integridad (K-01 a K-07) |

## Screens (MVP)

El MVGN Starter Kit no tiene interfaz gráfica. Toda la interacción es vía CLI o IA.

| Interfaz | Descripción | Prioridad |
|----------|-------------|-----------|
| CLI (`mvgn.ps1`) | Terminal PowerShell | P0 |
| IA Runtime (NYX.md) | Asistente IA integrado | P0 |
| Context JSON | Exportación máquina-legible | P0 |
| (Futuro) MVGN UI | Dashboard visual | P2 |

## Licencia

MIT — MVGN Labs

Desarrollado con el sistema MVGN
