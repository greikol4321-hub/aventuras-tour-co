# Arquitectura

## Stack
- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Animaciones**: framer-motion
- **Iconos**: @phosphor-icons/react
- **Carrusel**: swiper

## Estructura de capas

```
src/
  app/           → Páginas (App Router)
    tours/[slug] → Ruta dinámica de detalle de tour
    contacto/    → Página de contacto
  components/    → Componentes reutilizables
  data/          → Datos de prueba (tours.ts), reemplazable por BD
```

## Flujo de datos
- tours.ts → componente → render
- Los datos son estáticos (hardcodeados) y se reemplazarán por una fuente real (Supabase / CMS).
- No hay backend, autenticación ni API routes en esta versión.

## Patrón
- Separación de datos (data/tours.ts) y presentación (components/, app/).
- Los tipos TypeScript (Tour, categorias) permiten migrar a BD sin cambiar componentes.
