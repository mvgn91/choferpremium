# 10 — Maintenance Guide

> **Proyecto:** Tu Chofer Premium
> **Versión:** 1.0.0

## Requisitos

- Navegador web moderno (Chrome, Safari, Firefox, Edge)
- No requiere Node.js ni servidor

## Comandos

| Acción | Comando |
|--------|---------|
| Development | Abrir `index.html` en el navegador |
| Build | No aplica (proyecto estático) |
| Preview | Abrir `index.html` en el navegador |

## Actualizar dependencias

### Google Fonts
- CDN en `<link>` dentro de `<head>` en `index.html`
- Para actualizar: cambiar URL en el href

### Lucide Icons
- CDN vía `<script src="https://unpkg.com/lucide@latest">`
- Para actualizar: cambiar `@latest` por versión específica

## Desplegar

### GitHub Pages
1. Ir a Settings > Pages del repositorio
2. Source: Deploy from a branch
3. Branch: main, folder: /
4. Guardar

### Vercel / Netlify
1. Importar repositorio
2. Framework: Other
3. Build command: vacío
4. Output directory: vacío
5. Deploy

## Estructura para mantenimiento

| Archivo | Qué contiene | Qué modificar |
|---------|-------------|---------------|
| `index.html` | Estructura y contenido | Texto, secciones, enlaces WhatsApp |
| `styles.css` | Estilos y temas | Colores, animaciones, responsive |
| `script.js` | Lógica interactiva | WhatsApp, tour, animaciones |
| `demo_contact.vcf` | Datos de contacto | Teléfono, nombre, email |
