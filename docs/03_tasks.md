# 03 — Tasks

> **Proyecto:** Tu Chofer Premium — Demo App
> **Versión:** 1.0.0
> **Fecha:** 2026-06-24

---

## Resumen

| Total | Completadas | Pendientes | Progreso |
|-------|------------|------------|----------|
| 20 | 20 | 0 | 100% ✅ |

---

## Tareas

### T-001: Estructura base HTML
- **Estado:** Completada ✅
- **PRD Ref:** RF-02, RF-21, RF-22
- **Archivos:** `index.html`
- **Criterios:** Documento HTML semántico, meta tags, Google Fonts, Lucide CDN, estructura mobile-first

### T-002: Splash Screen
- **Estado:** Completada ✅
- **PRD Ref:** RF-01
- **Archivos:** `index.html`, `styles.css`
- **Criterios:** Animación de entrada con logo, fade out a los 2s, z-index 9999

### T-003: Hero Section con perfil
- **Estado:** Completada ✅
- **PRD Ref:** RF-02, RF-03
- **Archivos:** `index.html`, `styles.css`
- **Criterios:** Banner con gradiente, badge disponibilidad, avatar placeholder, calificación 5.0

### T-004: Estadísticas desplegables
- **Estado:** Completada ✅
- **PRD Ref:** RF-04, RF-05
- **Archivos:** `index.html`, `styles.css`, `script.js`
- **Criterios:** Dropdown con 3 stats, contadores animados con easing cúbico

### T-005: Botones WhatsApp
- **Estado:** Completada ✅
- **PRD Ref:** RF-06, RF-09, RF-16
- **Archivos:** `index.html`, `script.js`
- **Criterios:** 3 botones WhatsApp (hero, recurrente, FAB), mensajes predefinidos, open in new tab

### T-006: Descarga VCF
- **Estado:** Completada ✅
- **PRD Ref:** RF-07, RF-08
- **Archivos:** `index.html`, `demo_contact.vcf`
- **Criterios:** Botón download, instrucciones iOS/Android desplegables

### T-007: Sección Viajes Recurrentes
- **Estado:** Completada ✅
- **PRD Ref:** RF-09
- **Archivos:** `index.html`, `styles.css`
- **Criterios:** Content card con icono, título, descripción, CTA WhatsApp

### T-008: Zona de Trabajo y Horarios
- **Estado:** Completada ✅
- **PRD Ref:** RF-10
- **Archivos:** `index.html`, `styles.css`
- **Criterios:** Mapa placeholder, grid área diaria + horarios, subtextos con restricciones

### T-009: Experiencia y Vehículo
- **Estado:** Completada ✅
- **PRD Ref:** RF-11
- **Archivos:** `index.html`, `styles.css`
- **Criterios:** Imagen placeholder Unsplash, tags (vehículo + placas)

### T-010: Ventajas
- **Estado:** Completada ✅
- **PRD Ref:** RF-12
- **Archivos:** `index.html`, `styles.css`
- **Criterios:** 3 cards (Viaje Premium, Tarifa Justa, Trato Directo) con hover states

### T-011: Testimonio
- **Estado:** Completada ✅
- **PRD Ref:** RF-13
- **Archivos:** `index.html`, `styles.css`
- **Criterios:** Quote con icono decorativo, avatar placeholder, estrellas ★★★★★

### T-012: Grid de modalidades
- **Estado:** Completada ✅
- **PRD Ref:** RF-14
- **Archivos:** `index.html`, `styles.css`
- **Criterios:** Grid 2×2 con iconos + labels, hover animations

### T-013: Footer
- **Estado:** Completada ✅
- **PRD Ref:** RF-15
- **Archivos:** `index.html`, `styles.css`
- **Criterios:** CTA final WhatsApp, copyright, crédito MVGN Labs

### T-014: Toggle de tema claro/oscuro
- **Estado:** Completada ✅
- **PRD Ref:** RF-17
- **Archivos:** `index.html`, `styles.css`, `script.js`
- **Criterios:** CSS variables, localStorage persistencia, prefers-color-scheme, toggle button

### T-015: Scroll reveal
- **Estado:** Completada ✅
- **PRD Ref:** RF-19
- **Archivos:** `index.html`, `styles.css`, `script.js`
- **Criterios:** IntersectionObserver, transiciones CSS, delays escalonados

### T-016: Efecto ripple
- **Estado:** Completada ✅
- **PRD Ref:** RF-20
- **Archivos:** `index.html`, `styles.css`
- **Criterios:** ::after pseudo-elemento, escala 300px on click

### T-017: Tour de presentación
- **Estado:** Completada ✅
- **PRD Ref:** RF-18
- **Archivos:** `index.html`, `styles.css`, `script.js`
- **Criterios:** data-tour attributes, tooltip flotante, navegación (botones + teclado), highlight verde, cerrar con Escape

### T-018: Micro-interacciones
- **Estado:** Completada ✅
- **PRD Ref:** RF-23
- **Archivos:** `index.html`, `styles.css`
- **Criterios:** Hover states en cards, iconos, transforms, transiciones suaves

### T-019: Estilos responsive
- **Estado:** Completada ✅
- **PRD Ref:** RF-22
- **Archivos:** `styles.css`
- **Criterios:** Mobile-first, desktop container ≥640px, sombra y fondo gris

### T-020: Documentación MVGN
- **Estado:** Completada ✅
- **Archivos:** `docs/00_idea.md`, `docs/01_prd.md`, `docs/02_architecture.md`, `docs/03_tasks.md`, `docs/04_changelog.md`, `docs/05_lessons_learned.md`, `docs/06_state_report.md`
- **Criterios:** Todo el ciclo MVGN documentado: idea, PRD, arquitectura, tareas, changelog, lecciones, estado

---

## Dependencias entre tareas

```
T-001 → T-002 → T-003 → T-004 → T-005
                               ↓
T-001 → T-014                T-006
T-003 → T-007
T-003 → T-008
T-003 → T-009 → T-010
T-003 → T-011
T-003 → T-012 → T-013
T-003 → T-015 → T-017
         ↓
       T-016
T-003 → T-018
T-001 → T-019
         ↓
       T-020
```

Todas las dependencias están cumplidas (código ya implementado).
