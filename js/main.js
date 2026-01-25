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

// Project data
const projectsData = {
  1: {
    title: "App de Banca Móvil",
    tags: ["UX/UI Design", "Mobile App", "FinTech"],
    description: "Rediseño completo de la experiencia de usuario para una aplicación bancaria, mejorando la tasa de conversión en un 45%.",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Lideré el rediseño completo de una aplicación de banca móvil para modernizar la experiencia de usuario y mejorar las métricas de engagement.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">Lead UX/UI Designer & Product Manager</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Investigación de usuarios y análisis competitivo</li>
        <li>Diseño de flujos de usuario y wireframes</li>
        <li>Creación de UI kit y design system</li>
        <li>Prototipado y testing con usuarios</li>
        <li>Colaboración con desarrollo para implementación</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>45% aumento en tasa de conversión</li>
        <li>60% reducción en tiempo de transacción</li>
        <li>4.8/5 rating en stores</li>
        <li>35% aumento en usuarios activos mensuales</li>
      </ul>
    `
  },
  2: {
    title: "Plataforma E-commerce",
    tags: ["Product Design", "E-commerce", "Web"],
    description: "Diseño y estrategia de producto para una plataforma de comercio electrónico con enfoque en conversión y experiencia de compra.",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Diseñé desde cero una plataforma de e-commerce enfocada en maximizar la conversión y ofrecer una experiencia de compra fluida y memorable.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">Product Designer & UX Strategist</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Definición de estrategia de producto</li>
        <li>User journey mapping y customer experience</li>
        <li>Diseño de interfaz y sistema de componentes</li>
        <li>A/B testing y optimización de conversión</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>52% aumento en tasa de conversión</li>
        <li>28% reducción en abandono de carrito</li>
        <li>Aumento del 70% en compras completadas</li>
      </ul>
    `
  },
  3: {
    title: "Dashboard de Analíticas",
    tags: ["Dashboard", "Data Visualization", "SaaS"],
    description: "Sistema de visualización de datos complejos para equipos de marketing, simplificando la toma de decisiones basadas en datos.",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Creé un dashboard intuitivo que transforma datos complejos en insights accionables para equipos de marketing digital.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">UX/UI Designer & Product Owner</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Research con stakeholders y usuarios finales</li>
        <li>Arquitectura de información y jerarquía visual</li>
        <li>Diseño de visualizaciones de datos</li>
        <li>Sistema de filtros y personalización</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>80% reducción en tiempo de análisis</li>
        <li>NPS de 75 entre usuarios</li>
        <li>Adoptado por 500+ empresas</li>
      </ul>
    `
  },
  4: {
    title: "App de Salud y Fitness",
    tags: ["Mobile App", "Health Tech", "Gamification"],
    description: "Aplicación mobile para tracking de hábitos saludables con gamificación y comunidad integrada.",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Diseñé una app de salud que combina tracking de hábitos con elementos de gamificación y comunidad para mantener a los usuarios motivados.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">Product Designer & UX Researcher</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>User research y definición de personas</li>
        <li>Diseño de sistema de gamificación</li>
        <li>Prototipado y testing iterativo</li>
        <li>Diseño de features sociales y comunidad</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>85% retention rate a 30 días</li>
        <li>100K+ descargas en 3 meses</li>
        <li>4.7/5 rating promedio</li>
      </ul>
    `
  },
  5: {
    title: "Plataforma SaaS",
    tags: ["SaaS", "B2B", "Collaboration"],
    description: "Diseño de sistema end-to-end para herramienta de gestión de proyectos orientada a equipos remotos.",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Diseñé una plataforma completa de gestión de proyectos optimizada para la colaboración de equipos distribuidos.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">Lead Product Designer & PM</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Product strategy y roadmap</li>
        <li>Diseño de flujos colaborativos</li>
        <li>Sistema de notificaciones y comunicación</li>
        <li>Mobile-first design approach</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>200% aumento en productividad reportada</li>
        <li>90% customer satisfaction</li>
        <li>Adoptado por 1000+ equipos</li>
      </ul>
    `
  },
  6: {
    title: "Sistema de Diseño",
    tags: ["Design System", "UI Kit", "Component Library"],
    description: "Creación de design system escalable con componentes reutilizables para acelerar el desarrollo de productos.",
    details: `
      <h3 class="text-2xl font-bold mb-4">📋 Descripción del Proyecto</h3>
      <p class="mb-4">Creé un design system completo desde cero para estandarizar y acelerar el desarrollo de productos en toda la organización.</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">🎯 Mi Rol</h3>
      <p class="font-semibold mb-2">Design System Lead</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Auditoría de UI existente</li>
        <li>Definición de tokens y principios de diseño</li>
        <li>Creación de biblioteca de componentes</li>
        <li>Documentación y guidelines</li>
        <li>Evangelización y training a equipos</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-6">✨ Resultados</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>60% reducción en tiempo de diseño</li>
        <li>Consistencia del 95% entre productos</li>
        <li>Adoptado por 5 equipos de producto</li>
      </ul>
    `
  }
};

// Open modal
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.dataset.project;
    const project = projectsData[projectId];

    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalDetails').innerHTML = project.details;

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
// UTILITIES
// ===================================

// Update current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Log when page is loaded
console.log('Portfolio de Alejandro Espejo cargado exitosamente! 🎨');
