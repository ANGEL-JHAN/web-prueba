# Atelier — React + Vite 5

Sitio web profesional en blanco (estudio creativo) portado a **React 18 + Vite 5 + Tailwind CSS 3 + React Router 6**.

## Requisitos
- Node.js 18+ (recomendado 20+)

## Instalación

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  assets/          Imágenes (hero, galería, equipo)
  components/      Header y Footer
  pages/           Inicio, Nosotros, Videos, Galería, Servicios, Contacto
  App.tsx          Rutas
  main.tsx         Entry point
  index.css        Tailwind + tokens de color (OKLCH)
```

## Notas
- Tipografías: Instrument Serif (títulos) e Inter (cuerpo) desde Google Fonts.
- Colores definidos con variables CSS en `src/index.css` y mapeados en `tailwind.config.js`.
