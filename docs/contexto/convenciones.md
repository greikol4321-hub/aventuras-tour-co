# Convenciones

## Nombres
- Archivos: camelCase (page.tsx, layout.tsx, globals.css)
- Componentes: PascalCase (TourCard, WhatsAppButton)
- Variables/funciones: camelCase
- Tipos: PascalCase (Tour)
- Carpetas de ruta dinámica: [slug]

## Componentes
- Componentes reutilizables en src/components/
- Componentes de página en src/app/
- "use client" cuando se usan hooks, eventos, o createContext (phosphor-icons)

## Estilos
- Tailwind CSS v4 con @theme en globals.css
- No colores hardcodeados — usar variables de la paleta (brand-*, earth-*, etc.)
- Mobile-first con breakpoints sm/md/lg/xl

## Datos
- Un solo archivo src/data/tours.ts con tipo Tour
- Array de objetos, comentario indicando que es temporal
- Funciones de filtrado client-side
