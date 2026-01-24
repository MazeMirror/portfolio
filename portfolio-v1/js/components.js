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
    name: "María González",
    position: "Product Manager, TechVision",
    photo: "https://via.placeholder.com/150/667eea/ffffff?text=MG",
    text: "Trabajar con Alejandro ha sido una experiencia transformadora para nuestro equipo. Su capacidad para traducir necesidades complejas en interfaces intuitivas es sobresaliente. No solo diseña productos hermosos, sino que entiende profundamente el negocio y crea soluciones que generan impacto real."
  },
  {
    name: "Carlos Ramírez",
    position: "CEO, DigitalCraft",
    photo: "https://via.placeholder.com/150/764ba2/ffffff?text=CR",
    text: "Alejandro combina creatividad con pensamiento estratégico de una manera excepcional. Su enfoque centrado en el usuario y su habilidad para liderar equipos multidisciplinarios lo convierten en un asset invaluable. Definitivamente lo recomendaría para cualquier proyecto de diseño de producto."
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
    company: "Tech Innovations Corp",
    position: "Senior UX/UI Designer & Product Manager",
    period: "Enero 2023 - Presente",
    description: "Liderando el diseño y estrategia de producto para múltiples plataformas digitales. Gestionando equipo de 5 diseñadores y colaborando directamente con stakeholders C-level para definir roadmap de producto.",
    skills: ["Figma", "Product Strategy", "Team Leadership", "User Research"],
    icon: "🚀"
  },
  {
    company: "Digital Solutions Agency",
    position: "Lead Product Designer",
    period: "Marzo 2021 - Diciembre 2022",
    description: "Diseñé y entregué más de 20 proyectos de UX/UI para clientes Fortune 500. Creé el design system de la agencia que redujo el tiempo de diseño en 60%. Mentorizado a diseñadores junior.",
    skills: ["UX Design", "UI Design", "Design Systems", "Client Management"],
    icon: "🎨"
  },
  {
    company: "StartupHub Accelerator",
    position: "Product Owner & UX Designer",
    period: "Junio 2019 - Febrero 2021",
    description: "Trabajé con 15+ startups en fase temprana para definir y diseñar sus productos MVPs. Implementé metodologías ágiles y design thinking para acelerar time-to-market.",
    skills: ["Agile/Scrum", "MVP Design", "Prototyping", "Lean UX"],
    icon: "💡"
  },
  {
    company: "E-Commerce Platform",
    position: "UX/UI Designer",
    period: "Enero 2018 - Mayo 2019",
    description: "Rediseñé la experiencia de checkout que resultó en 45% de aumento en conversiones. Realicé investigación de usuarios continua y pruebas A/B para optimizar el funnel de compra.",
    skills: ["E-commerce Design", "A/B Testing", "Conversion Optimization", "Analytics"],
    icon: "🛒"
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
              <span class="px-3 py-1 text-xs rounded-full glass border border-accent-purple/30 text-accent-purple">
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
// INITIALIZE COMPONENTS
// ===================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initTimeline();
  console.log('Components initialized: Carousel & Timeline ✅');
});
