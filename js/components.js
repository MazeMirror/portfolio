// ===================================
// ALEJANDRO ESPEJO - PORTFOLIO
// Component Scripts (Carousel & Timeline)
// ===================================

// ===================================
// TESTIMONIALS DATA
// ===================================

/* 
  FÁCIL DE EDITAR: Para agregar más testimonios, simplemente añade un nuevo objeto al array.
  Formato de cada testimonio:
  {
    name: "Nombre Apellido",
    position: "Cargo, Empresa/Organización",
    photo: "images/testimonials/persona.jpg", // Agrega tu foto aquí
    text: "El testimonio completo aquí..."
  }
*/

const testimonials = [
  {
    name: "Carmen Rosa Lopez",
    position: "Jefe de SAP, Los Portales",
    photo: "images/testimonials/carmen-rosa-lopez.jfif",
    text: "Alejandro demostró en el tiempo que trabajó en Los Portales, responsabilidad y un pleno conocimiento de las labores asumidas en el área de Desarrollo; en la parte personal, es una persona con mucho carisma, tiene mucho potencial para seguir desarrollándose en todo sentido."
  },
  {
    name: "Hugo Araujo",
    position: "Analista de QA, Los Portales",
    photo: "images/testimonials/hugo-araujo.jfif",
    text: "He trabajado junto a Alejandro en el equipo de portales, y puedo decir que es un analista UX talentoso. Su habilidad para entender lo que los usuarios realmente necesitan y plasmarlo en soluciones efectivas es notable. Además, siempre tiene ideas frescas y es genial colaborar con él. Su enfoque positivo hace que el ambiente de trabajo sea mucho mejor. Definitivamente es alguien a quien vale la pena tener en el equipo."
  },
  {
    name: "Gonzalo Soto",
    position: "Subgerente de Soluciones de Negocio, Los Portales",
    photo: "images/testimonials/gonzalo-soto.jfif",
    text: "Alejandro ha demostrado que cuando el negocio y la demanda así lo requiere puede sacarse el sombrero de Analista UX/UI y apoyar donde el equipo lo necesita. Hoy nos ha ayudado a sacar adelante 3 proyectos importantes para HU asegurando que se cumplan los alcances definidos en el proyecto."
  },
  {
    name: "Giannina Gaviria",
    position: "Talent Management Coordinator, Delosi",
    photo: "images/testimonials/giannina-gaviria.jfif",
    text: "Me da mucho gusto la capacidad de escucha y apertura que tienes. Al toque captas lo que conversamos y lo transformas a esa necesidad."
  },
  {
    name: "Esteban Orellana",
    position: "Regional Sales Director, Rankmi",
    photo: "images/testimonials/esteban-orellana.jfif",
    text: "Quiero aprovechar de agradecer la constante dedicación y el seguimiento cercano que Alejandro siempre ha mostrado al proyecto."
  }
];

// ===================================
// TESTIMONIALS CAROUSEL
// ===================================

const carouselTrack = document.getElementById('carouselTrack');
const carouselIndicators = document.getElementById('carouselIndicators');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');

let currentIndex = 0;
let autoPlayInterval;

// Initialize carousel
function initCarousel() {
  // Create slides
  testimonials.forEach((testimonial, index) => {
    const slide = createTestimonialSlide(testimonial);
    carouselTrack.appendChild(slide);
  });

  // Create indicators based on actual positions
  updateIndicatorsCount();

  // Start autoplay
  startAutoPlay();
}

// Update indicators count based on window size
function updateIndicatorsCount() {
  // Calculate slides per view based on window width
  let slidesPerView = 1;
  if (window.innerWidth >= 1024) {
    slidesPerView = 3;
  } else if (window.innerWidth >= 768) {
    slidesPerView = 2;
  }

  // Calculate number of positions
  const numPositions = Math.max(1, testimonials.length - slidesPerView + 1);

  // Clear existing indicators
  carouselIndicators.innerHTML = '';

  // Create correct number of indicators
  for (let i = 0; i < numPositions; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('carousel-indicator');
    if (i === currentIndex) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(i));
    carouselIndicators.appendChild(indicator);
  }
}

// Create testimonial slide
function createTestimonialSlide(testimonial) {
  const slide = document.createElement('div');
  slide.classList.add('carousel-slide', 'px-4');

  slide.innerHTML = `
    <div class="glass rounded-2xl p-8 md:p-10 h-full flex flex-col">
      <!-- Quote Icon -->
      <div class="text-4xl text-accent-purple mb-6">"</div>
      
      <!-- Testimonial Text -->
      <p class="text-gray-300 text-lg mb-8 flex-grow leading-relaxed">
        ${testimonial.text}
      </p>
      
      <!-- Author Info -->
      <div class="flex items-center gap-4 mt-auto">
        <img 
          src="${testimonial.photo}" 
          alt="${testimonial.name}" 
          class="w-16 h-16 rounded-full object-cover border-2 border-accent-purple"
        >
        <div>
          <h4 class="font-bold text-white text-lg">${testimonial.name}</h4>
          <p class="text-gray-400 text-sm">${testimonial.position}</p>
        </div>
      </div>
    </div>
  `;

  return slide;
}

// Navigation functions
function goToSlide(index) {
  // Calculate slides per view based on window width
  let slidesPerView = 1;
  if (window.innerWidth >= 1024) {
    slidesPerView = 3;
  } else if (window.innerWidth >= 768) {
    slidesPerView = 2;
  }

  const maxIndex = Math.max(0, testimonials.length - slidesPerView);
  currentIndex = Math.max(0, Math.min(index, maxIndex));

  const slideWidth = carouselTrack.children[0].offsetWidth;
  carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  updateIndicators();
  resetAutoPlay();
}

function nextSlide() {
  let slidesPerView = 1;
  if (window.innerWidth >= 1024) {
    slidesPerView = 3;
  } else if (window.innerWidth >= 768) {
    slidesPerView = 2;
  }

  if (currentIndex < testimonials.length - slidesPerView) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(0); // Loop back to start
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  } else {
    // Go to last possible index
    let slidesPerView = 1;
    if (window.innerWidth >= 1024) {
      slidesPerView = 3;
    } else if (window.innerWidth >= 768) {
      slidesPerView = 2;
    }
    goToSlide(Math.max(0, testimonials.length - slidesPerView));
  }
}

function updateIndicators() {
  const indicators = carouselIndicators.children;
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove('active');
    if (i === currentIndex) {
      indicators[i].classList.add('active');
    }
  }
}

// Auto-play functions
function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// Event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateIndicatorsCount();
    goToSlide(Math.min(currentIndex, Math.max(0, testimonials.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))));
  }, 250);
});

// ===================================
// TIMELINE DATA
// ===================================

/*
  FÁCIL DE EDITAR: Para agregar más experiencias, añade un nuevo objeto al array.
  Formato de cada experiencia:
  {
    company: "Nombre de la Empresa/Organización",
    position: "Tu Puesto/Rol",
    period: "Mes Año - Mes Año / Presente",
    description: "Descripción de tus logros y responsabilidades",
    skills: ["Skill 1", "Skill 2", "Skill 3"], // Array de habilidades usadas
    icon: "🏢" // Emoji o icono para representar la empresa/rol
  }
*/

const experiences = [
  {
    company: "Delosi S.A.",
    position: "Product Owner",
    period: "Febrero 2025 - Agosto 2025",
    description: "Propietario de plataformas digitales de Talento (ATS, LMS, Desarrollo y Carrera). Lideré la migración a un nuevo ATS, con entrevistas a +20 stakeholders y un ahorro proyectado del 49% del presupuesto anual. Gestioné el LMS InnovAcción, impactando a +12,000 colaboradores y ejecuté roadmaps ágiles optimizando experiencia de usuario y procesos de RRHH. Además, implementé encuestas de satisfacción logrando 639 respuestas en sólo 9 días, obteniendo insights clave.",
    skills: ["Product Strategy", "Stakeholder Management", "Analytics", "Roadmap", "Budget Management"],
    icon: "🏢"
  },
  {
    company: "Platanitos",
    position: "Project Manager",
    period: "Octubre 2024 - Febrero 2025",
    description: "Gestión de proyectos digitales y optimización de procesos en Contabilidad, ATC y Logística. Lideré el proyecto Resikla y equipos multidisciplinarios de desarrollo. Incrementé en 220% el tráfico web y aumenté en 41.7% el ticket promedio diario de ventas. Mejoré la eficiencia en validaciones: +40.7% regateos aprobados y –57.6% rechazados.",
    skills: ["Product Planning", "Analytics", "Stakeholder Relations", "Budget Management", "MVP"],
    icon: "🛒"
  },
  {
    company: "Los Portales",
    position: "Analista UX/UI",
    period: "Diciembre 2022 - Octubre 2024",
    description: "Rediseñé la app Apparka, con +30 entrevistas a usuarios y stakeholders bajo Design Thinking, alcanzando un CSAT de 4.5/5. Implementé herramientas analíticas, resolviendo 70% de reclamos y reduciendo fricciones en el servicio. Introduje pruebas de usuario con Maze, validando el 100% de prototipos con métricas objetivas. Lideré proyectos de plataformas (Cocovi, Visor de Planos, Empatía) optimizando procesos de gestión documental y de tickets.",
    skills: ["Figma", "User Research", "Design Thinking", "Flutter", "Project Management"],
    icon: "🚀"
  },
  {
    company: "Footloose",
    position: "Asistente UX/UI",
    period: "Enero 2022 - Septiembre 2022",
    description: "Integrante del Comité de Innovación, aportando en la definición y validación de soluciones digitales. Diseñé design systems, wireframes, prototipos y flujos de navegación para desktop y mobile, garantizando consistencia y usabilidad. Conduje entrevistas con usuarios y presentaciones a stakeholders, alineando las propuestas a necesidades reales y decisiones estratégicas.",
    skills: ["UX Design", "User Research", "Wireframing", "Design Systems", "Competitive Analysis"],
    icon: "🚀"
  },
  {
    company: "Footloose",
    position: "Practicante de TI",
    period: "Agosto 2021 - Diciembre 2021",
    description: "Desarrollé RPA para carga de productos, optimizando el proceso en un 96%. Diseñé nuevas landing pages de la empresa. Instalé redes para ampliación de cámaras de seguridad dentro de la empresa y brindé servicio técnico a los empleados y mantenimiento a los equipos.",
    skills: ["RPA", "Automation", "Web Design", "Process Optimization", "IT Support"],
    icon: "⚙️"
  },
  {
    company: "PubliUltra",
    position: "Diseñador y Desarrollador Web",
    period: "Junio 2021 - Agosto 2021",
    description: "Liderazgo del área de desarrollo web, diseño web y diseño gráfico. Desarrollé la nueva web page de la agencia, creando diseños y prototipos. Coordiné el cumplimiento y validación del proyecto. Apoyé al área de audiovisual para realizar eficazmente los materiales multimedia de la agencia y definir nuevas estrategias de marketing.",
    skills: ["Figma", "UX/UI Design", "Web Development", "Team Leadership", "Design Thinking"],
    icon: "🎨"
  },
  {
    company: "Startup Cordate",
    position: "Diseñador y Desarrollador Web",
    period: "Enero 2020 - Noviembre 2020",
    description: "Desarrollo de la landing page de la startup y creación de diseños y prototipos de la solución móvil. Elaboré estudio de mercado para obtener información de usuarios finales y desarrollar una solución acorde a sus necesidades. Realicé entrevistas y pruebas con usuarios finales, coordinando el cumplimiento y validación del proyecto. Documentación completa de la aplicación móvil y página web.",
    skills: ["Design Thinking", "User Research", "Wireframing", "Service Design", "Market Research"],
    icon: "💡"
  }
];

// ===================================
// INTERACTIVE TIMELINE
// ===================================

const timelineContainer = document.getElementById('timelineItems');

// Initialize timeline
function initTimeline() {
  experiences.forEach((exp, index) => {
    const isLeft = index % 2 === 0;
    const timelineItem = createTimelineItem(exp, isLeft, index);
    timelineContainer.appendChild(timelineItem);
  });

  // Observe timeline cards for animation
  const timelineCards = document.querySelectorAll('.timeline-card');
  timelineCards.forEach(card => {
    observer.observe(card);
  });
}

// Create timeline item
function createTimelineItem(exp, isLeft, index) {
  const item = document.createElement('div');
  item.classList.add('relative');

  const mobileClass = 'md:ml-0 ml-12';
  const desktopClass = isLeft ? 'md:pr-8 md:text-right md:mr-[50%]' : 'md:pl-8 md:ml-[50%]';

  item.innerHTML = `
    <!-- Timeline Dot -->
    <div class="timeline-dot" style="top: 24px;"></div>
    
    <!-- Timeline Card -->
    <div class="timeline-card ${mobileClass} ${desktopClass}">
      <div class="glass glass-hover rounded-2xl p-6 md:p-8 relative">
        <!-- Icon -->
        <div class="absolute -top-4 ${isLeft ? 'md:right-8 left-0' : 'md:left-8 left-0'} w-12 h-12 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue flex items-center justify-center text-2xl shadow-lg">
          ${exp.icon}
        </div>
        
        <!-- Content -->
        <div class="mt-8">
          <!-- Period -->
          <p class="text-accent-purple font-semibold mb-2">${exp.period}</p>
          
          <!-- Position -->
          <h3 class="text-xl md:text-2xl font-bold mb-1">${exp.position}</h3>
          
          <!-- Company -->
          <p class="text-accent-cyan font-medium mb-4">${exp.company}</p>
          
          <!-- Description -->
          <p class="text-gray-300 mb-4 leading-relaxed">${exp.description}</p>
          
          <!-- Skills -->
          <div class="flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}">
            ${exp.skills.map(skill => `
              <span class="px-3 py-1 text-xs rounded-full glass border border-accent-purple/30 text-purple-400 font-semibold">
                ${skill}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  return item;
}

// ===================================
// TIMELINE TOGGLE (EXPAND/COLLAPSE)
// ===================================

function initTimelineToggle() {
  const toggleBtn = document.getElementById('timelineToggleBtn');
  const toggleText = document.getElementById('timelineToggleText');
  const collapsible = document.getElementById('timelineCollapsible');

  console.log('🔧 Timeline Toggle Init:', { toggleBtn, toggleText, collapsible });

  if (!toggleBtn || !collapsible) return;

  let isExpanded = false;

  toggleBtn.addEventListener('click', () => {
    console.log('🔘 Button clicked! Current state:', isExpanded);
    isExpanded = !isExpanded;

    if (isExpanded) {
      collapsible.classList.remove('collapsed');
      collapsible.classList.add('expanded');
      toggleBtn.classList.add('expanded');
      toggleText.textContent = 'Ver menos';
      console.log('Expanded timeline');
    } else {
      collapsible.classList.remove('expanded');
      collapsible.classList.add('collapsed');
      toggleBtn.classList.remove('expanded');
      toggleText.textContent = 'Ver más';
      console.log('Collapsed timeline');

      // Scroll to the experience section smoothly when collapsing
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        setTimeout(() => {
          experienceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  });
}

// ===================================
// INITIALIZE COMPONENTS
// ===================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initTimeline();
  initTimelineToggle();
  console.log('Components initialized: Carousel, Timeline & Toggle ✅');
});
