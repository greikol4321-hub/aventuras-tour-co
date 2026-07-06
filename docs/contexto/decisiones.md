# Decisiones técnicas

## Paleta de colores: Cálida / turismo
- **Brand** (dorado): tonos oro/caoba que evocan el café, el sol y la riqueza natural — #b8860b primary
- **Earth** (caoba): marrones rojizos tipo madera de bosque tropical para texto y fondos
- **Sky** (azul cielo): acento para fondos de secciones hero
- **Leaf** (esmeralda): verde selva para checkmarks (qué incluye)
- Se definen en @theme de globals.css (Tailwind v4)

## Fuente: Inter (Google Fonts via next/font)
- Sans-serif moderna, legible, buena para textos largos
- No se usó fuente decorativa adicional para mantener cohesión

## Sin base de datos
- Datos hardcodeados en tours.ts con tipo Tour
- Intencional: permite iterar diseño sin infraestructura
- Migración futura: reemplazar array/export por fetch a Supabase

## Sin librerías UI
- Todo Tailwind directo + componentes propios
- Las cards, formularios, header, footer son 100% custom

## Uso de "use client"
- Obligatorio en componentes que importan @phosphor-icons/react (createContext no disponible en RSC)
- Componentes servidor (Hero, layout) se mantienen sin "use client"

## Formularios
- Solo console.log + alert — sin backend
- Marcados con TODO para conectar a backend real después
