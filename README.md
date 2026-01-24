# Alejandro Espejo - Portfolio

Portfolio profesional de Alejandro Espejo, Product Owner & Diseñador UX/UI especializado en diseño centrado en el usuario y gestión estratégica de productos digitales.

## 🚀 Demo en Vivo

- **Producción**: [Ver Portfolio](https://mazemirror.github.io/portfolio)
- **Desarrollo**: rama `dev`

## 🎨 Características

- ✨ Diseño moderno con efecto glassmorphism
- 📱 Totalmente responsive (mobile-first)
- 🎯 Timeline interactivo de experiencias laborales
- 💬 Carrusel de testimonios de clientes
- 🎨 Galería de proyectos destacados
- 📊 Sección de competencias clave
- 🌙 Tema oscuro premium

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Tailwind CSS + Custom styles
- **JavaScript**: Vanilla JS (componentes interactivos)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Estructura del Proyecto

```
GRAVITY/
├── index.html              # Página principal
├── css/
│   └── custom.css         # Estilos personalizados
├── js/
│   ├── main.js            # Script principal
│   └── components.js      # Componentes (carousel, timeline)
├── images/
│   ├── projects/          # Imágenes de proyectos
│   ├── testimonials/      # Fotos de testimonios
│   └── profile/           # Foto de perfil
└── .github/
    └── workflows/         # GitHub Actions CI/CD
```

## 💻 Desarrollo Local

1. Clona el repositorio:
```bash
git clone https://github.com/MazeMirror/portfolio.git
cd portfolio
```

2. Abre `index.html` en tu navegador o usa Live Server

3. Para desarrollo, trabaja en la rama `dev`:
```bash
git checkout dev
```

## 🔄 Workflow de Desarrollo

1. **Desarrollo**: Trabaja en rama `dev`
```bash
git checkout dev
git add .
git commit -m "descripción"
git push origin dev
```

2. **Producción**: Merge a `main` cuando esté listo
```bash
git checkout main
git merge dev
git push origin main
```

## 📝 Personalización

### Actualizar Experiencias Laborales
Edita el array `experiences` en `js/components.js`

### Actualizar Testimonios
Edita el array `testimonials` en `js/components.js`

### Actualizar Proyectos
Modifica las tarjetas en `index.html` sección `#projects`

## 📫 Contacto

- **Email**: alejandro.espejo@example.com
- **LinkedIn**: [linkedin.com/in/alejandrospejo](https://linkedin.com/in/alejandrospejo)
- **GitHub**: [github.com/MazeMirror](https://github.com/MazeMirror)

## 📄 Licencia

© 2025 Alejandro Espejo. Todos los derechos reservados.

---

**Hecho con 💜 por Alejandro Espejo**
