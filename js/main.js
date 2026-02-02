// ===================================
// ALEJANDRO ESPEJO - PORTFOLIO
// Main JavaScript Functionality
// ===================================

// ===================================
// NAVIGATION
// ===================================

const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');

  // Animate hamburger
  const spans = mobileMenuBtn.querySelectorAll('span');
  if (!mobileMenu.classList.contains('hidden')) {
    spans[0].style.transform = 'rotate(45deg) translateY(8px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// ACTIVE NAVIGATION STATE
// ===================================

// Track which section is currently in view
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove active from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add active to current section's link
      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, {
  threshold: 0.3, // Trigger when 30% of section is visible
  rootMargin: '-80px 0px -50% 0px' // Account for navbar height
});

// Observe all sections
sections.forEach(section => navObserver.observe(section));

// ===================================
// SCROLL REVEAL ANIMATION
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      // For timeline cards, add staggered delay
      if (entry.target.classList.contains('timeline-card')) {
        const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 0.1}s`;
      }
    }
  });
}, observerOptions);

// Observe all scroll-reveal elements
document.querySelectorAll('.scroll-reveal').forEach(element => {
  observer.observe(element);
});

// ===================================
// PROJECT MODAL
// ===================================

const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const projectCards = document.querySelectorAll('[data-project]');

// ===================================
// ABOUT ME STATS COUNTER ANIMATION
// ===================================

function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60 FPS
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
}

// Intersection Observer for stats
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.stat-counter');
      counters.forEach(counter => {
        if (!counter.dataset.animated) {
          animateCounter(counter);
          counter.dataset.animated = 'true';
        }
      });
    }
  });
}, { threshold: 0.5 });

// Observe stats section
const statsSection = document.querySelector('#about .grid.grid-cols-2');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// ===================================
// PROJECT DATA & MODAL
// ===================================

// Project data
const projectsData = {
  1: {
    title: "My Health – Sistema IoT para Salud Infantil",
    tags: ["UX/UI Design", "IoT", "HealthTech", "Flutter", "Research"],
    description: "Sistema IoT para monitoreo de actividad física infantil, validado científicamente y publicado en Springer.",
    link: "https://xd.adobe.com/view/7a8cbcb3-e351-4f28-b535-2133143d40a3-2fdf/",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Diseñé y desarrollé un sistema tecnológico basado en IoT para mejorar el seguimiento de la actividad física en niños de 4 a 8 años con obesidad tipo 1 y 2. El proyecto integró una app mobile conectada a a wearable, dashboards para padres y pediatras, y un backend escalable. La solución fue validada técnica y académicamente mediante investigación científica y publicada en una conferencia internacional.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">Project Manager · UX/UI Designer · Full Stack Developer</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Investigación científica y revisión de papers</li>
        <li>Análisis comparativo de wearables, IoT y cloud providers</li>
        <li>Diseño UX/UI de la aplicación</li>
        <li>Arquitectura del sistema</li>
        <li>Desarrollo backend (29 historias de usuario)</li>
        <li>Integración IoT + Cloud (Azure)</li>
        <li>Testing técnico y de usabilidad</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Precisión distancia: 98.3%</li>
        <li>Precisión calorías: 96.7%</li>
        <li>96.4% de usuarios totalmente satisfechos</li>
        <li>Paper publicado en Springer – ICAT 2023 (CCIS)</li>
      </ul>
    `
  },
  2: {
    title: "APPARKA Rediseño",
    tags: ["UX/UI Design", "Mobile App", "Design Thinking", "Project Management"],
    description: "Rediseño integral de una app de estacionamientos basado en investigación profunda, logrando un CSAT de 4.5/5 y un NPS de 8.",
    link: "https://www.figma.com/design/u4DZBaxFvKklJbrXSLnVYt/Apparka?node-id=4744-947",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Lideré el rediseño completo de la aplicación mobile de Apparka para modernizar la experiencia de usuario y alinear el producto con las necesidades reales de clientes y áreas internas. El proyecto partió de una versión inicial que no cumplía expectativas, por lo que se realizó una investigación exhaustiva con usuarios finales y stakeholders internos, análisis competitivo, rediseño de flujos, creación de un nuevo sistema visual e implementación de mejoras continuas basadas en data.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">UX/UI Designer, Product Designer & Project Management Support</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Investigación con más de 30 entrevistas a usuarios finales y stakeholders</li>
        <li>Análisis competitivo y análisis de métricas existentes</li>
        <li>Diseño de flujos, wireframes y prototipos finales</li>
        <li>Creación de UI Design System</li>
        <li>Prototipado y testing con usuarios y áreas internas</li>
        <li>Colaboración con equipos de desarrollo y marketing</li>
        <li>Seguimiento de métricas post-implementación</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>CSAT: 4.5 / 5</li>
        <li>NPS: 8</li>
        <li>Incremento en tasa de conversión</li>
        <li>Aumento en transacciones y engagement de usuarios</li>
      </ul>
    `
  },
  3: {
    title: "Delosi - Migración ATS & Creación Marca Empleadora 'Aquí Empleo'",
    tags: ["Project Manager", "UX/UI Design", "ATS", "HR Tech", "Digital Transformation"],
    description: "Liderazgo de migración de ATS y creación de una marca empleadora digital, logrando un ahorro del 49% del presupuesto anual.",
    link: null,
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Lideré la migración de la plataforma ATS desde Worcket hacia Rankmi debido a limitaciones funcionales críticas. El proyecto incluyó investigación con más de 20 stakeholders de 7 franquicias, rediseño completo de flujos de reclutamiento y la creación desde cero de la marca empleadora "Aquí Empleo", integrando experiencia candidato, flujos internos, gestión presupuestaria y coordinación con proveedores tecnológicos.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">Product Owner · UX/UI Lead · Project Lead</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Investigación con stakeholders y usuarios internos</li>
        <li>Análisis de competidores y evaluación de plataformas ATS</li>
        <li>Diagramas de impacto vs esfuerzo</li>
        <li>Diseño de flujos internos y experiencia candidato</li>
        <li>Creación de prototipos y kits de diseño</li>
        <li>Gestión de proveedores y presupuesto</li>
        <li>Liderazgo del desarrollo e implementación</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>49% de ahorro proyectado del presupuesto anual</li>
        <li>CSAT: 4.5 / 5</li>
        <li>Implementación en 1.5 – 2 meses (vs 3 meses estimados)</li>
        <li>Mejora significativa en experiencia de recruiters y candidatos</li>
      </ul>
    `
  },
  4: {
    title: "Resikla – Rediseño Web y Optimización de Conversión",
    tags: ["UX/UI Design", "E-commerce", "Growth", "AIDA", "Project Management"],
    description: "Rediseño UX/UI enfocado en crecimiento, aumentando el tráfico en 220% y el ticket promedio en 41.7%.",
    link: "https://resikla.pe/",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Como Project Manager y UX/UI Designer, lideré el rediseño de la plataforma Recicla para mejorar engagement, conversión y calidad del marketplace. El proyecto se basó en investigación de usuarios, análisis competitivo y la aplicación del modelo comercial AIDA, optimizando flujos clave como home, carrito, pagos y tarifarios para vendedores.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">Project Manager · UX/UI Designer</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Investigación con usuarios y análisis competitivo</li>
        <li>Rediseño de flujos de compra, venta y carrito</li>
        <li>Creación de UI kits y prototipos</li>
        <li>Aplicación del modelo AIDA</li>
        <li>Validación con usuarios finales</li>
        <li>Colaboración directa con desarrollo</li>
        <li>Optimización de tarifarios y procesos de pago</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>+220% en tráfico</li>
        <li>+41.7% en ticket promedio diario</li>
        <li>+40.7% en regateos aprobados</li>
        <li>-57.6% en regateos rechazados</li>
      </ul>
    `
  },
  4: {
    title: "My Health – Sistema IoT para Salud Infantil",
    tags: ["UX/UI Design", "IoT", "HealthTech", "Flutter", "Research"],
    description: "Sistema IoT para monitoreo de actividad física infantil, validado científicamente y publicado en Springer.",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Diseñé y desarrollé un sistema tecnológico basado en IoT para mejorar el seguimiento de la actividad física en niños de 4 a 8 años con obesidad tipo 1 y 2. El proyecto integró una app mobile conectada a un wearable, dashboards para padres y pediatras, y un backend escalable. La solución fue validada técnica y académicamente mediante investigación científica y publicada en una conferencia internacional.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">Project Manager · UX/UI Designer · Full Stack Developer</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Investigación científica y revisión de papers</li>
        <li>Análisis comparativo de wearables, IoT y cloud providers</li>
        <li>Diseño UX/UI de la aplicación</li>
        <li>Arquitectura del sistema</li>
        <li>Desarrollo backend (29 historias de usuario)</li>
        <li>Integración IoT + Cloud (Azure)</li>
        <li>Testing técnico y de usabilidad</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Precisión distancia: 98.3%</li>
        <li>Precisión calorías: 96.7%</li>
        <li>96.4% de usuarios totalmente satisfechos</li>
        <li>Paper publicado en Springer – ICAT 2023 (CCIS)</li>
      </ul>
    `
  },
  5: {
    title: "Footloose – Rediseño Web",
    tags: ["UX/UI Design", "Web Design", "Product Management", "Analytics"],
    description: "Rediseño web basado en investigación con usuarios en Chile, logrando un CSAT de 4.2/5 y NPS de 8.3.",
    link: "https://xd.adobe.com/view/81d5e2d8-ee3e-46ac-b938-370018137976-d486/",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Lideré el rediseño de la web de FootLuz con foco en mejorar la experiencia del usuario, navegación y satisfacción. El proyecto incluyó investigación con usuarios finales y stakeholders de distintas áreas, pruebas de prototipos, implementación del rediseño y seguimiento analítico para mejora continua.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">UX/UI Designer · Product Designer · Product Manager · Project Manager</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Entrevistas con usuarios ecuatorianos y stakeholders</li>
        <li>Diseño de nuevos flujos UX</li>
        <li>Prototipado y testing de usabilidad</li>
        <li>Gestión de implementación</li>
        <li>Implementación y seguimiento de analíticas</li>
        <li>Mejora continua basada en data</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>CSAT: 4.2 / 5</li>
        <li>NPS: 8.3</li>
        <li>Mejora en satisfacción y experiencia de navegación</li>
        <li>Base analítica para optimización continua</li>
      </ul>
    `
  },
  6: {
    title: "Reservas de Estacionamiento – Lima Airport Partners (LAP)",
    tags: ["UX/UI Design", "Web App", "Service Design", "Mobility", "Travel"],
    description: "Diseño desde cero de una plataforma web para la reserva de estacionamientos en el aeropuerto, enfocada en viajeros y experiencia end-to-end.",
    link: "https://www.figma.com/design/u4DZBaxFvKklJbrXSLnVYt/Apparka",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Participé en el diseño completo de una plataforma web para permitir a los usuarios reservar estacionamientos dentro del Aeropuerto Internacional Jorge Chávez. El proyecto se desarrolló desde cero y estuvo basado en investigación de usuarios, análisis competitivo y diseño de flujos claros para viajeros con necesidades específicas de tiempo, seguridad y facilidad de uso.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">UX/UI Analyst · Product Designer · Service Designer</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Investigación de usuarios viajeros</li>
        <li>Análisis competitivo de plataformas de reservas</li>
        <li>Diseño de flujos de reserva end-to-end</li>
        <li>Creación de wireframes y prototipos</li>
        <li>Diseño UX/UI de la plataforma web</li>
        <li>Validación de flujos críticos de reserva</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Plataforma funcional diseñada desde cero</li>
        <li>Experiencia de reserva clara y centrada en el usuario</li>
        <li>Flujos optimizados para usuarios con viajes programados</li>
        <li>Base sólida para escalabilidad del servicio</li>
      </ul>
    `
  },
  7: {
    title: "Organa – Rediseño E-commerce de Productos Orgánicos",
    tags: ["UX/UI Design", "E-commerce", "AIDA", "Conversion Optimization"],
    description: "Rediseño UX/UI de e-commerce para mejorar navegación, reducir rebote y aumentar la satisfacción del usuario.",
    link: "https://www.figma.com/design/oLr8ztbgFayW6EQAhd5Gk8/Organa?node-id=0-1&t=9QPRNaPTgaKZqCOe-1",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Organa necesitaba mejorar la experiencia de su e-commerce debido a problemas de navegación, dificultad para encontrar productos y un carrito confuso. Se realizó un rediseño completo basado en investigación de usuarios y la aplicación del modelo comercial AIDA, optimizando la experiencia de compra y la visibilidad de productos.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">UX/UI Designer</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Investigación con usuarios</li>
        <li>Identificación de puntos de fricción en navegación y carrito</li>
        <li>Rediseño completo de la web</li>
        <li>Aplicación del modelo AIDA</li>
        <li>Diseño de flujos de compra optimizados</li>
        <li>Prototipado y validación</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Satisfacción del usuario: 4 / 5</li>
        <li>Mejora en usabilidad y navegación</li>
        <li>Reducción de fricción en el proceso de compra</li>
        <li>Incremento en claridad y visibilidad de productos</li>
      </ul>
    `
  },
  8: {
    title: "Mastercol – Rediseño Web Industrial",
    tags: ["UX/UI Design", "Web Design", "B2B", "Industrial"],
    description: "Rediseño web para una empresa industrial, transformando una web rígida en una experiencia visual más usable e interactiva.",
    link: "https://mastercol.pe/",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Mastercall requería modernizar su web corporativa para mostrar de manera clara y atractiva su catálogo de aditivos y masterbatch para la industria del plástico. El proyecto se desarrolló respetando la guía de marca, pero incorporando una experiencia más interactiva, usable y alineada a estándares modernos de diseño web.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">UX/UI Designer · Project Support</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Análisis de la web existente</li>
        <li>Diseño UX/UI basado en guía de marca</li>
        <li>Diseño de catálogo interactivo de productos</li>
        <li>Creación de wireframes y prototipos</li>
        <li>Acompañamiento hasta la implementación</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Mejora en la presentación del catálogo de productos</li>
        <li>Experiencia más clara y atractiva</li>
        <li>Web alineada a estándares modernos de usabilidad</li>
      </ul>
    `
  },
  9: {
    title: "Los Portales – Web de Pagos",
    tags: ["UX/UI Design", "Web App", "FinTech", "Project Management"],
    description: "Diseño e implementación de una plataforma web de pagos centralizada, logrando que el 96% de los usuarios adopten el nuevo canal.",
    link: "https://www.figma.com/design/mY39dI8jT32DVeVlirUGel/Mi-cuenta---Pagos?node-id=2-2&p=f",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Diseñé y gestioné la implementación de una web de pagos centralizada para propietarios de lotes e inmuebles, quienes anteriormente debían pagar a través de múltiples plataformas bancarias. La solución permitió centralizar todos los pagos en una sola plataforma, reduciendo fricción y mejorando la experiencia del usuario.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">UX/UI Analyst · Project Manager</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Gestión integral del proyecto</li>
        <li>Investigación de usuarios</li>
        <li>Diseño UX/UI de la web de pagos</li>
        <li>Definición de flujos de pago</li>
        <li>Coordinación con desarrollo</li>
        <li>Implementación y validación</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>CSAT: 4.5 / 5</li>
        <li>96% de usuarios utilizan la web como canal principal de pago</li>
        <li>Reducción significativa de fricción en pagos</li>
        <li>Centralización exitosa del proceso de cobros</li>
      </ul>
    `
  }
};

// Open modal
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectId = parseInt(card.dataset.project); // Ensure it's a number
    const project = projectsData[projectId];

    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalDetails').innerHTML = project.details;

    // Add "Ver Proyecto" button if link exists
    if (project.link) {
      document.getElementById('modalDetails').innerHTML += `
        <div class="mt-8 text-center">
          <a href="${project.link}" target="_blank" rel="noopener noreferrer"
             class="inline-block px-8 py-3 bg-gradient-to-r from-accent-purple to-accent-blue 
             text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
            Ver Proyecto →
          </a>
        </div>
      `;
    }

    // Update tags
    const modalTags = document.getElementById('modalTags');
    modalTags.innerHTML = project.tags.map(tag =>
      `<span class="px-3 py-1 text-sm rounded-full glass border border-accent-purple/30 text-accent-purple">${tag}</span>`
    ).join('');

    // Update image
    const projectImg = card.querySelector('img');
    const modalImg = document.querySelector('#modalImage img');
    modalImg.src = projectImg.src;
    modalImg.alt = project.title;

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = 'auto';
}

// ===================================
// PROJECT FILTERS & LOAD MORE
// ===================================

const filterBtns = document.querySelectorAll('.filter-btn');
const allProjectCards = document.querySelectorAll('.project-card');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreContainer = document.getElementById('loadMoreContainer');
const hiddenProjects = document.querySelectorAll('.project-hidden');
const mobileHiddenProjects = document.querySelectorAll('.mobile-hidden');

// Helper functions for responsive behavior
function isMobile() {
  return window.innerWidth < 768;
}

function getHiddenCount() {
  // Mobile: Initially shows 3 projects (1-3), hides 6 (4-9)
  // Desktop: Initially shows 6 projects (1-6), hides 3 (7-9)
  return isMobile() ? 6 : 3;
}

function updateLoadMoreButtonText(revealed) {
  loadMoreBtn.textContent = revealed ? 'Ver menos proyectos' : `Ver más proyectos (${getHiddenCount()})`;
}

// Filter functionality
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    allProjectCards.forEach(card => {
      const tags = card.dataset.tags;

      if (filter === 'all') {
        // Show all visible projects (not hidden by load more)
        card.style.display = '';
        card.classList.add('scroll-reveal');

        // Keep hidden projects hidden if load more hasn't been clicked
        if (card.classList.contains('project-hidden') && !card.dataset.revealed) {
          card.style.display = 'none';
        }
      } else {
        // Check if card has the filter tag
        if (tags && tags.includes(filter)) {
          card.style.display = '';
          card.classList.add('scroll-reveal');
        } else {
          card.style.display = 'none';
          card.classList.remove('scroll-reveal');
        }
      }
    });

    // Hide/show load more button based on filter
    updateLoadMoreVisibility();
  });
});

// Load More functionality
let projectsRevealed = false;

loadMoreBtn.addEventListener('click', () => {
  if (!projectsRevealed) {
    // Show hidden projects based on screen size
    const projectsToReveal = isMobile()
      ? [...mobileHiddenProjects, ...hiddenProjects]  // Mobile: show projects 4-9
      : [...hiddenProjects];  // Desktop: show projects 7-9

    projectsToReveal.forEach(project => {
      project.style.display = '';
      project.dataset.revealed = 'true';
      project.classList.add('scroll-reveal');
    });

    loadMoreBtn.textContent = 'Ver menos proyectos';
    projectsRevealed = true;
  } else {
    // Hide projects again based on screen size
    const projectsToHide = isMobile()
      ? [...mobileHiddenProjects, ...hiddenProjects]
      : [...hiddenProjects];

    projectsToHide.forEach(project => {
      project.style.display = 'none';
      project.dataset.revealed = 'false';
      project.classList.remove('scroll-reveal');
    });

    loadMoreBtn.textContent = 'Ver más proyectos (3)';
    projectsRevealed = false;

    // Scroll to projects section smoothly
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// Update load more button visibility based on current filter
function updateLoadMoreVisibility() {
  const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

  if (activeFilter === 'all') {
    loadMoreContainer.style.display = 'block';
  } else {
    // Check if any hidden projects match the filter
    const matchingHidden = Array.from(hiddenProjects).some(project => {
      const tags = project.dataset.tags;
      return tags && tags.includes(activeFilter);
    });

    if (matchingHidden) {
      loadMoreContainer.style.display = 'block';
    } else {
      loadMoreContainer.style.display = 'none';
    }
  }
}

// Initialize button text on page load
updateLoadMoreButtonText(false);

// Update button text on window resize
window.addEventListener('resize', () => {
  if (!projectsRevealed) {
    updateLoadMoreButtonText(false);
  }
});

// ===================================
// CONTACT FORM WITH NETLIFY FORMS
// ===================================

const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const successModal = document.getElementById('successModal');

// Handle form submission with AJAX (no page reload)
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission (page reload)

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';
  submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

  try {
    // Prepare form data - Netlify requires form-name to be included
    const formData = new FormData(contactForm);

    // Encode data for Netlify
    const data = new URLSearchParams(formData).toString();

    // Submit to Netlify via fetch
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data
    });

    if (response.ok) {
      // Success - Show modal popup
      showSuccessModal();
      contactForm.reset();
    } else {
      // Error from server
      console.error('Server error:', response.status, response.statusText);
      alert('❌ Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
    }
  } catch (error) {
    // Network error
    console.error('Error al enviar el formulario:', error);
    alert('❌ Error de conexión. Por favor verifica tu internet e intenta de nuevo.');
  } finally {
    // Re-enable button
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar Mensaje';
    submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
  }
});

// Show success modal
function showSuccessModal() {
  successModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

// Close success modal
function closeSuccessModal() {
  successModal.classList.add('hidden');
  document.body.style.overflow = 'auto'; // Restore scroll
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !successModal.classList.contains('hidden')) {
    closeSuccessModal();
  }
});

// ===================================
// CERTIFICATIONS TOGGLE
// ===================================

const toggleCertBtn = document.getElementById('toggleCertifications');
const moreCerts = document.getElementById('moreCertifications');
const toggleText = document.getElementById('toggleCertText');
const toggleCount = document.getElementById('toggleCertCount');
const toggleIcon = document.getElementById('toggleCertIcon');

if (toggleCertBtn && moreCerts) {
  toggleCertBtn.addEventListener('click', () => {
    const isHidden = moreCerts.classList.contains('hidden');

    if (isHidden) {
      // Show more certifications
      moreCerts.classList.remove('hidden');
      toggleText.textContent = 'Ver menos certificaciones';
      toggleCount.textContent = '(-6)';
      toggleIcon.style.transform = 'rotate(180deg)';
    } else {
      // Hide certifications
      moreCerts.classList.add('hidden');
      toggleText.textContent = 'Ver más certificaciones';
      toggleCount.textContent = '(+6)';
      toggleIcon.style.transform = 'rotate(0deg)';
    }
  });
}

// ===================================
// SCROLL TO TOP BUTTON
// ===================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTop';
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'fixed bottom-8 right-8 w-12 h-12 rounded-full glass hover:bg-accent-purple transition-all duration-300 opacity-0 pointer-events-none z-50 flex items-center justify-center text-2xl font-bold';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

// Show/hide based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
  } else {
    scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
  }
});

// Scroll to top on click
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===================================
// UTILITIES
// ===================================

// Update current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Log when page is loaded
console.log('Portfolio de Alejandro Espejo cargado exitosamente! 🎨');
