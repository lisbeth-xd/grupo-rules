# Grupo Rules — Sitio Web Oficial

## Tecnologías
- **React 19** + **Vite 8**
- **React Router DOM** para navegación multipágina
- **Lucide React** para iconos
- CSS moderno con variables (sin frameworks externos)

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx / .css     ← Menú responsivo con overlay mobile
│   │   └── Footer.jsx / .css     ← Footer completo con redes y menú
│   └── ui/
│       └── WhatsAppButton.jsx/css ← Burbuja flotante WhatsApp
├── pages/
│   ├── Home.jsx / .css           ← Página de inicio completa
│   ├── About.jsx / .css          ← Sobre Grupo Rules
│   ├── Services.jsx / .css       ← Todos los servicios
│   ├── Projects.jsx / .css       ← Galería con filtros
│   └── Contact.jsx / .css        ← Contacto + formulario
├── data/
│   └── index.js                  ← Datos de servicios, proyectos, valores
└── styles/
    └── globals.css               ← Variables, tipografía, utilidades
```

## Inicio rápido

```bash
npm install
npm run dev        # Desarrollo en http://localhost:5173
npm run build      # Build de producción en dist/
npm run preview    # Previsualizar build
```

## Personalización pendiente

1. **Número WhatsApp**: Buscar `51999999999` y reemplazar con el número real
2. **Correo**: Reemplazar `contacto@gruporules.com`
3. **Facebook**: Reemplazar `facebook.com/gruporules`
4. **Imágenes**: Las imágenes actuales son de Unsplash. Reemplazar con fotos reales de trabajos
5. **Dirección**: Actualizar en Contact.jsx

## Preparado para escalar

- Arquitectura de componentes reutilizables
- Datos centralizados en `src/data/index.js`
- Variables CSS para fácil cambio de paleta
- Estructura lista para agregar:
  - Backend Node.js / Express
  - Base de datos PostgreSQL o MySQL
  - Panel de administración
  - CMS de proyectos y servicios
