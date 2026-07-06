# Flujo de trabajo

## Desarrollo local
```bash
npm run dev    # Servidor de desarrollo
npm run build  # Build de producción
npm start      # Servir build
npm run lint   # Lint + type check
```

## Ciclo de cambio
1. Modificar datos en src/data/tours.ts (tours, categorías)
2. O crear/editar componentes en src/components/
3. O crear/editar páginas en src/app/
4. Verificar con npm run build

## Próximos pasos (cuando corresponda)
- Conectar tours.ts a Supabase/Strapi (solo cambiar data/tours.ts)
- Backend de reservas (reemplazar console.log en formularios)
- Autenticación y panel de administración
- Pasarela de pago
- SEO y meta tags dinámicos
