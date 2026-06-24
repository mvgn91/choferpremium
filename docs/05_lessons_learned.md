# 05 — Lessons Learned

> **Proyecto:** Tu Chofer Premium — Demo App

---

## I-BOOTSTRAP — 2026-06-24

**Qué:** MVGN inicializado en proyecto con código existente

**Causa:** Proyecto ya tenía código funcional pero sin documentación formal MVGN

**Acción:** Se bootstrapó MVGN retroactivamente: docs, .mvgn layers, prompts, templates

**Prevención:** Iniciar MVGN al comienzo del proyecto, no después de tener código

---

## I-G01 EXCEPCIÓN — 2026-06-24

**Qué:** Código existente sin PRD aprobado

**Causa:** El proyecto fue creado antes de adoptar MVGN

**Acción:** Se documentó el PRD retroactivamente con firma humana autorizada

**Prevención:** Aplicar G01 (no código sin PRD) desde el inicio en futuros proyectos

---

## Arbitraje: 2026-06-24 — EX-001

**Conflicto:** System-rules G01 (PRD requerido antes de código) vs instrucción humana de avanzar

**Origen:** Proyecto con código preexistente

**Decisión:** Instrucción humana tiene prioridad (override registrado)

**Justificación:** El código existente es válido y funcional; la documentación MVGN es retroactiva

**Impacto:** PRD y arquitectura creados como documentación del estado actual, no como requisito previo
