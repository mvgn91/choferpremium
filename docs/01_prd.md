# 01 — Product Requirements Document

> **Proyecto:** Tu Chofer Premium — Demo App
> **Versión:** 1.0.0
> **Fecha:** 2026-06-24
> **Estado:** BORRADOR — Pendiente de aprobación humana

---

## 1. Resumen ejecutivo

Landing page mobile-first de demostración para un servicio de chofer privado premium. La app permite a conductores privados presentar su perfil profesional, estadísticas de experiencia, y conectar con clientes potenciales mediante WhatsApp con mensajes predefinidos. Incluye modo oscuro/claro, tour interactivo de presentación, y animaciones suaves tipo Material Design.

**Público objetivo:**
- Conductores privados que buscan una página de presentación profesional
- Clientes potenciales que valoran el trato directo y personalizado
- Reclutadores/empresas que necesitan una demo de frontend

---

## 2. Stack tecnológico

| Capa | Tecnología | Versión | Justificación |
|------|-----------|---------|--------------|
| Framework | Vanilla (sin framework) | — | Proyecto demo ligero, sin necesidad de runtime pesado |
| Lenguaje | HTML5 + CSS3 + JavaScript | ES6+ | Compatibilidad nativa en navegadores modernos |
| Fuentes | Google Fonts — Inter | — | Estándar Material/Uber, tipografía limpia y profesional |
| Iconos | Lucide (CDN) + SVG inline | latest | Iconos modulares, ligeros y consistentes |
| Dependencias externas | 0 | — | Sin npm packages, sin bundlers, sin build step |

---

## 3. Requisitos funcionales (RF)

| ID | Descripción | Prioridad | Dependencia |
|----|-------------|-----------|-------------|
| **RF-01** | Splash screen animado con logo de la app al cargar | P0 | — |
| **RF-02** | Hero section con perfil del chofer (foto placeholder, nombre, calificación 5.0) | P0 | — |
| **RF-03** | Badge "Disponible hoy" con indicador animado en el banner | P0 | — |
| **RF-04** | Dropdown de estadísticas desplegables: viajes completados (2,500+), años de servicio (3+), puntualidad (98%) | P0 | — |
| **RF-05** | Contador animado (count-up) con easing cúbico al abrir estadísticas | P0 | RF-04 |
| **RF-06** | Botón CTA principal "Pedir auto ahora" que abre WhatsApp con mensaje predefinido | P0 | — |
| **RF-07** | Botón "Guardar Contacto Demo" que descarga archivo VCF | P1 | — |
| **RF-08** | Instrucciones desplegables sobre cómo guardar el contacto VCF en iOS y Android | P1 | RF-07 |
| **RF-09** | Sección "Rutinas y Agendas" con CTA a WhatsApp para viajes recurrentes | P1 | — |
| **RF-10** | Sección "Zona de Trabajo" con mapa placeholder y horarios (L-D 06:00-23:00) | P1 | — |
| **RF-11** | Sección "Experiencia & Vehículo" con imagen placeholder y tags (Sedán Ejecutivo Plateado, Placas DEMO-001) | P1 | — |
| **RF-12** | Lista de ventajas (Viaje Premium, Tarifa Justa, Trato Directo) con iconos y hover states | P1 | — |
| **RF-13** | Sección de testimonio con quote, avatar placeholder y calificación de estrellas | P1 | — |
| **RF-14** | Grid de modalidades de servicio (Viajes Diarios, Aeropuerto, Por Horas, Ejecutivos) | P1 | — |
| **RF-15** | Footer con CTA final a WhatsApp y créditos MVGN Labs | P1 | — |
| **RF-16** | Botón flotante de WhatsApp (FAB) con animación de entrada | P0 | — |
| **RF-17** | Toggle de tema claro/oscuro con persistencia en localStorage | P0 | — |
| **RF-18** | Modo presentación (tour interactivo) con tooltip, navegación y highlight de secciones | P1 | — |
| **RF-19** | Scroll reveal con IntersectionObserver para animaciones de entrada | P1 | — |
| **RF-20** | Efecto ripple en botones al hacer clic | P2 | — |
| **RF-21** | Banner DEMO visible permanentemente en la parte superior (sticky) | P0 | — |
| **RF-22** | Diseño responsivo: mobile-first con contenedor de escritorio centrado a 600px+ | P0 | — |
| **RF-23** | Micro-interacciones en hover: cards elevan, iconos crecen, colores se invierten | P2 | — |

---

## 4. Requisitos no funcionales (RNF)

| ID | Descripción | Prioridad | Métrica |
|----|-------------|-----------|---------|
| **RNF-01** | La app debe cargar completamente en ≤ 3 segundos en conexión 4G | P0 | Lighthouse Performance ≥ 85 |
| **RNF-02** | Sin dependencias npm ni build step — debe funcionar abriendo index.html directamente | P0 | Abrir en navegador sin servidor |
| **RNF-03** | Modo oscuro debe persistir entre sesiones usando localStorage | P0 | Recargar página preserva el tema |
| **RNF-04** | Animaciones deben usar `cubic-bezier(0.16, 1, 0.3, 1)` para sensación premium | P1 | Inspección visual de curvas |
| **RNF-05** | Altura mínima de botones: 52px para facilidad táctil en móvil | P0 | Inspección CSS |
| **RNF-06** | Sin imágenes reales — solo placeholders CSS (gradientes, iconos emoji) | P1 | Revisión de assets |
| **RNF-07** | Soporte de tema oscuro nativo del sistema (`prefers-color-scheme: dark`) | P1 | Test en Safari/Chrome con tema sistema |
| **RNF-08** | Navegación del tour por teclado (flechas, Escape) | P2 | Test de accesibilidad |
| **RNF-09** | Código fuente sin errores de consola en Chrome, Safari, Firefox | P0 | Test en navegadores |
| **RNF-10** | Los iconos Lucide deben cargarse desde CDN con fallback silencioso si falla | P0 | Verificar sin conexión |

---

## 5. User Stories

### US-01: Perfil del Chofer
> Como cliente potencial, quiero ver el perfil del chofer con su calificación y estadísticas para evaluar su profesionalismo.

**Criterios de aceptación:**
- [ ] La foto de perfil se muestra con un placeholder visual (gradiente animado)
- [ ] La calificación (★ 5.0) se muestra en un badge sobre la foto
- [ ] Las estadísticas (viajes, años, puntualidad) están disponibles en un dropdown
- [ ] Los contadores se animan al abrir el dropdown

### US-02: Contacto por WhatsApp
> Como cliente, quiero contactar al chofer directamente por WhatsApp con un mensaje predefinido para agilizar la comunicación.

**Criterios de aceptación:**
- [ ] El botón "Pedir auto ahora" abre WhatsApp con mensaje de cotización
- [ ] El botón "Programar mis viajes semanales" abre WhatsApp con mensaje de viajes recurrentes
- [ ] El FAB flotante también abre WhatsApp
- [ ] Todos los enlaces tienen `e.preventDefault()` y abren en nueva pestaña

### US-03: Experiencia Visual Premium
> Como visitante, quiero una experiencia visual fluida y premium que refleje la calidad del servicio.

**Criterios de aceptación:**
- [ ] Las secciones aparecen con animación suave al hacer scroll
- [ ] Los botones tienen efecto ripple al hacer clic
- [ ] Las cards y elementos tienen hover states con transformaciones
- [ ] El splash screen inicial da una sensación de app nativa

### US-04: Modo Oscuro
> Como usuario nocturno, quiero cambiar a modo oscuro para una experiencia visual cómoda en ambientes de poca luz.

**Criterios de aceptación:**
- [ ] El toggle cambia entre tema claro y oscuro
- [ ] El tema persiste al recargar la página
- [ ] Respeta la preferencia del sistema (`prefers-color-scheme`)
- [ ] Todos los elementos se adaptan correctamente al tema activo

### US-05: Tour de Presentación
> Como reclutador o cliente evaluando la demo, quiero un tour guiado por las secciones para conocer todas las funcionalidades.

**Criterios de aceptación:**
- [ ] El botón de tour está visible en la esquina inferior derecha
- [ ] Al activarlo, aparece un tooltip con descripción de cada sección
- [ ] Se puede navegar con botones anterior/siguiente y teclado (flechas)
- [ ] La sección activa se resalta con un borde animado
- [ ] Se puede cerrar con Escape o botón de cerrar

---

## 6. Criterios de éxito

| Métrica | Objetivo | Cómo se mide |
|---------|----------|-------------|
| Performance Lighthouse | ≥ 85 | Auditoría Lighthouse en Chrome |
| Sin errores de consola | 0 errores | Abrir DevTools en Chrome, Safari, Firefox |
| Tiempo de carga | ≤ 3 segundos | Network tab en DevTools (Slow 3G) |
| Funcionalidad offline parcial | Sin errores fatales | Desconectar red, recargar |
| Modo oscuro/claro | Persistencia cross-session | Cerrar y reabrir navegador |

---

## 7. No está en el alcance (v1.0)

- Backend o API real (todo es frontend demo)
- Base de datos de usuarios o viajes
- Autenticación de usuarios
- Pagos integrados
- Chat en tiempo real
- Notificaciones push
- Imágenes reales del vehículo o conductor
- Mapas funcionales (solo placeholder visual)
- Página multi-idioma

---

## 8. Glosario

| Término | Definición |
|---------|-----------|
| **CTA** | Call To Action — botón que invita a una acción principal |
| **FAB** | Floating Action Button — botón de acción flotante |
| **VCF** | Virtual Contact File — archivo de tarjeta de contacto |
| **Splash Screen** | Pantalla de carga inicial animada |
| **Scroll Reveal** | Animación que aparece al hacer scroll hasta la sección |
| **Ripple Effect** | Efecto de onda expansiva al hacer clic en un botón |

---

## Historial de cambios

| Fecha | Versión | Cambio | Autor |
|------|---------|--------|-------|
| 2026-06-24 | v1 | Creación inicial del PRD | IA (borrador) |

---

**Firma humana:** Carlos MVGN ✓  
**Nombre:** Carlos  
**Fecha:** 2026-06-24  
**[✓]** Aprobado
