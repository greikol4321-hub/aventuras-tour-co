# Errores conocidos

## Build: createContext is not a function (RSC)
- **Síntoma**: Error en build al recolectar page data.
- **Causa**: @phosphor-icons/react usa createContext que no existe en React Server Components.
- **Solución**: Agregar `"use client"` en el componente que importa los íconos.

## ESLint: @next/next/no-img-element
- **Síntoma**: Warning sobre usar `<img>` en lugar de `<Image />`.
- **Causa**: TourCard.tsx usa `<img>` con URLs externas de Unsplash.
- **Estado**: Advertencia no bloqueante. Migrar a `<Image>` cuando se usen imágenes propias.

## Placeholders externos
- Las imágenes de Unsplash pueden dejar de funcionar si cambian las URLs.
- Reemplazar con imágenes propias o CDN antes de producción.
