// ===================================
// PROJECTS SECTION - REBUILT
// Data + UI + Controller with Event Delegation
// ===================================

// ===================================
// 1. DUMMY PROJECT DATA (9 projects)
// ===================================

const PROJECTS = [
    {
        id: 1,
        title: "My Health – Sistema IoT para Salud Infantil",
        shortDesc: "Sistema IoT para monitoreo de actividad física infantil, validado científicamente y publicado en Springer.",
        tags: ["UX/UI Design", "IoT", "HealthTech", "Flutter", "Research"],
        image: "images/projects/project1.png",
        details: {
            overview: "Diseñé y desarrollé un sistema tecnológico basado en IoT para mejorar el seguimiento de la actividad física en niños de 4 a 8 años con obesidad tipo 1 y 2. El proyecto integró una app mobile conectada a un wearable, dashboards para padres y pediatras, y un backend escalable. La solución fue validada técnica y académicamente mediante investigación científica y publicada en una conferencia internacional.",
            role: "Project Manager · UX/UI Designer · Full Stack Developer",
            responsibilities: [
                "Investigación científica y revisión de papers",
                "Análisis comparativo de wearables, IoT y cloud providers",
                "Diseño UX/UI de la aplicación",
                "Arquitectura del sistema",
                "Desarrollo backend (29 historias de usuario)",
                "Integración IoT + Cloud (Azure)",
                "Testing técnico y de usabilidad"
            ],
            results: [
                "Precisión distancia: 98.3%",
                "Precisión calorías: 96.7%",
                "96.4% de usuarios totalmente satisfechos",
                "Paper publicado en Springer – ICAT 2023 (CCIS)"
            ]
        },
        link: "https://xd.adobe.com/view/7a8cbcb3-e351-4f28-b535-2133143d40a3-2fdf/"
    },
    {
        id: 2,
        title: "APPARKA Rediseño",
        shortDesc: "Rediseño integral de una app de estacionamientos basado en investigación profunda, logrando un CSAT de 4.5/5 y un NPS de 8.",
        tags: ["UX/UI Design", "Mobile App", "Design Thinking", "Gestión de Proyectos"],
        image: "images/projects/project2.png",
        details: {
            overview: "Lideré el rediseño completo de la aplicación mobile de Apparka para modernizar la experiencia de usuario y alinear el producto con las necesidades reales de clientes y áreas internas. El proyecto partió de una versión inicial que no cumplía expectativas, por lo que se realizó una investigación exhaustiva con usuarios finales y stakeholders internos, análisis competitivo, rediseño de flujos, creación de un nuevo sistema visual e implementación de mejoras continuas basadas en data.",
            role: "UX/UI Designer, Product Designer & Project Management Support",
            responsibilities: [
                "Investigación con más de 30 entrevistas a usuarios finales y stakeholders",
                "Análisis competitivo y análisis de métricas existentes",
                "Diseño de flujos, wireframes y prototipos finales",
                "Creación de UI Design System",
                "Prototipado y testing con usuarios y áreas internas",
                "Colaboración con equipos de desarrollo y marketing",
                "Seguimiento de métricas post-implementación"
            ],
            results: [
                "CSAT: 4.5 / 5",
                "NPS: 8",
                "Incremento en tasa de conversión",
                "Aumento en transacciones y engagement de usuarios"
            ]
        },
        link: "https://www.figma.com/design/u4DZBaxFvKklJbrXSLnVYt/Apparka?node-id=4744-947"
    },
    {
        id: 3,
        title: "Delosi - Migración ATS & Creación Marca Empleadora \"Aquí Empleo\"",
        shortDesc: "Liderazgo de migración de ATS y creación de una marca empleadora digital, logrando un ahorro del 49% del presupuesto anual.",
        tags: ["Gestión de Proyectos", "UX/UI Design", "HR Tech", "Digital Transformation"],
        image: "images/projects/project3.png",
        details: {
            overview: "Lideré la migración de la plataforma ATS desde Worcket hacia Rankmi debido a limitaciones funcionales críticas. El proyecto incluyó investigación con más de 20 stakeholders de 7 franquicias, rediseño completo de flujos de reclutamiento y la creación desde cero de la marca empleadora \"Aquí Empleo\", integrando experiencia candidato, flujos internos, gestión presupuestaria y coordinación con proveedores tecnológicos.",
            role: "Product Owner · UX/UI Lead · Project Lead",
            responsibilities: [
                "Investigación con stakeholders y usuarios internos",
                "Análisis de competidores y evaluación de plataformas ATS",
                "Diagramas de impacto vs esfuerzo",
                "Diseño de flujos internos y experiencia candidato",
                "Creación de prototipos y kits de diseño",
                "Gestión de proveedores y presupuesto",
                "Liderazgo del desarrollo e implementación"
            ],
            results: [
                "49% de ahorro proyectado del presupuesto anual",
                "CSAT: 4.5 / 5",
                "Implementación en 1.5 – 2 meses (vs 3 meses estimados)",
                "Mejora significativa en experiencia de recruiters y candidatos"
            ]
        },
        link: null
    },
    {
        id: 4,
        title: "Resikla – Rediseño Web y Optimización de Conversión",
        shortDesc: "Rediseño UX/UI enfocado en crecimiento, aumentando el tráfico en 220% y el ticket promedio en 41.7%.",
        tags: ["UX/UI Design", "E-commerce", "Growth", "Gestión de Proyectos"],
        image: "images/projects/project4.png",
        details: {
            overview: "Como Project Manager y UX/UI Designer, lideré el rediseño de la plataforma Recicla para mejorar engagement, conversión y calidad del marketplace. El proyecto se basó en investigación de usuarios, análisis competitivo y la aplicación del modelo comercial AIDA, optimizando flujos clave como home, carrito, pagos y tarifarios para vendedores.",
            role: "Project Manager · UX/UI Designer",
            responsibilities: [
                "Investigación con usuarios y análisis competitivo",
                "Rediseño de flujos de compra, venta y carrito",
                "Creación de UI kits y prototipos",
                "Aplicación del modelo AIDA",
                "Validación con usuarios finales",
                "Colaboración directa con desarrollo",
                "Optimización de tarifarios y procesos de pago"
            ],
            results: [
                "+220% en tráfico",
                "+41.7% en ticket promedio diario",
                "+40.7% en regateos aprobados",
                "-57.6% en regateos rechazados"
            ]
        },
        link: "https://resikla.pe/"
    },
    {
        id: 5,
        title: "Footloose – Rediseño Web",
        shortDesc: "Rediseño web basado en investigación con usuarios en Chile, logrando un CSAT de 4.2/5 y NPS de 8.3.",
        tags: ["UX/UI Design", "Web Design", "Gestión de Proyectos"],
        image: "images/projects/project5.png",
        details: {
            overview: "Lideré el rediseño de la web de FootLuz con foco en mejorar la experiencia del usuario, navegación y satisfacción. El proyecto incluyó investigación con usuarios finales y stakeholders de distintas áreas, pruebas de prototipos, implementación del rediseño y seguimiento analítico para mejora continua.",
            role: "UX/UI Designer · Product Designer · Product Manager · Project Manager",
            responsibilities: [
                "Entrevistas con usuarios ecuatorianos y stakeholders",
                "Diseño de nuevos flujos UX",
                "Prototipado y testing de usabilidad",
                "Gestión de implementación",
                "Implementación y seguimiento de analíticas",
                "Mejora continua basada en data"
            ],
            results: [
                "CSAT: 4.2 / 5",
                "NPS: 8.3",
                "Mejora en satisfacción y experiencia de navegación",
                "Base analítica para optimización continua"
            ]
        },
        link: "https://xd.adobe.com/view/81d5e2d8-ee3e-46ac-b938-370018137976-d486/"
    },
    {
        id: 6,
        title: "Reservas de Estacionamiento – Lima Airport Partners (LAP)",
        shortDesc: "Diseño desde cero de una plataforma web para la reserva de estacionamientos en el aeropuerto, enfocada en viajeros y experiencia end-to-end.",
        tags: ["UX/UI Design", "Web Design", "Service Design"],
        image: "images/projects/project6.png",
        details: {
            overview: "Participé en el diseño completo de una plataforma web para permitir a los usuarios reservar estacionamientos dentro del Aeropuerto Internacional Jorge Chávez. El proyecto se desarrolló desde cero y estuvo basado en investigación de usuarios, análisis competitivo y diseño de flujos claros para viajeros con necesidades específicas de tiempo, seguridad y facilidad de uso.",
            role: "UX/UI Analyst · Product Designer · Service Designer",
            responsibilities: [
                "Investigación de usuarios viajeros",
                "Análisis competitivo de plataformas de reservas",
                "Diseño de flujos de reserva end-to-end",
                "Creación de wireframes y prototipos",
                "Diseño UX/UI de la plataforma web",
                "Validación de flujos críticos de reserva"
            ],
            results: [
                "Plataforma funcional diseñada desde cero",
                "Experiencia de reserva clara y centrada en el usuario",
                "Flujos optimizados para usuarios con viajes programados",
                "Base sólida para escalabilidad del servicio"
            ]
        },
        link: "https://www.figma.com/design/u4DZBaxFvKklJbrXSLnVYt/Apparka?node-id=8578-210"
    },
    {
        id: 7,
        title: "Organa – Rediseño E-commerce de Productos Orgánicos",
        shortDesc: "Rediseño UX/UI de e-commerce para mejorar navegación, reducir rebote y aumentar la satisfacción del usuario.",
        tags: ["UX/UI Design", "E-commerce", "Conversion Optimization"],
        image: "images/projects/project7.png",
        details: {
            overview: "Organa necesitaba mejorar la experiencia de su e-commerce debido a problemas de navegación, dificultad para encontrar productos y un carrito confuso. Se realizó un rediseño completo basado en investigación de usuarios y la aplicación del modelo comercial AIDA, optimizando la experiencia de compra y la visibilidad de productos.",
            role: "UX/UI Designer",
            responsibilities: [
                "Investigación con usuarios",
                "Identificación de puntos de fricción en navegación y carrito",
                "Rediseño completo de la web",
                "Aplicación del modelo AIDA",
                "Diseño de flujos de compra optimizados",
                "Prototipado y validación"
            ],
            results: [
                "Satisfacción del usuario: 4 / 5",
                "Mejora en usabilidad y navegación",
                "Reducción de fricción en el proceso de compra",
                "Incremento en claridad y visibilidad de productos"
            ]
        },
        link: "https://www.figma.com/design/oLr8ztbgFayW6EQAhd5Gk8/Organa?node-id=0-1&t=9QPRNaPTgaKZqCOe-1"
    },
    {
        id: 8,
        title: "Mastercol – Rediseño Web Industrial",
        shortDesc: "Rediseño web para una empresa industrial, transformando una web rígida en una experiencia visual más usable e interactiva.",
        tags: ["UX/UI Design", "Web Design", "B2B"],
        image: "images/projects/project8.png",
        details: {
            overview: "Mastercol requería modernizar su web corporativa para mostrar de manera clara y atractivo su catálogo de aditivos y masterbatch para la industria del plástico. El proyecto se desarrolló respetando la guía de marca, pero incorporando una experiencia más interactiva, usable y alineada a estándares modernos de diseño web.",
            role: "UX/UI Designer · Project Support",
            responsibilities: [
                "Análisis de la web existente",
                "Diseño UX/UI basado en guía de marca",
                "Diseño de catálogo interactivo de productos",
                "Creación de wireframes y prototipos",
                "Acompañamiento hasta la implementación"
            ],
            results: [
                "Mejora en la presentación del catálogo de productos",
                "Experiencia más clara y atractiva",
                "Web alineada a estándares modernos de usabilidad"
            ]
        },
        link: "https://mastercol.pe/"
    },
    {
        id: 9,
        title: "Los Portales – Web de Pagos",
        shortDesc: "Diseño e implementación de una plataforma web de pagos centralizada, logrando que el 96% de los usuarios adopten el nuevo canal.",
        tags: ["UX/UI Design", "Web Design", "FinTech", "Gestión de Proyectos"],
        image: "images/projects/project9.png",
        details: {
            overview: "Diseñé y gestioné la implementación de una web de pagos centralizada para propietarios de lotes e inmuebles, quienes anteriormente debían pagar a través de múltiples plataformas bancarias. La solución permitió centralizar todos los pagos en una sola plataforma, reduciendo fricción y mejorando la experiencia del usuario.",
            role: "UX/UI Analyst · Project Manager",
            responsibilities: [
                "Gestión integral del proyecto",
                "Investigación de usuarios",
                "Diseño UX/UI de la web de pagos",
                "Definición de flujos de pago",
                "Coordinación con desarrollo",
                "Implementación y validación"
            ],
            results: [
                "CSAT: 4.5 / 5",
                "96% de usuarios utilizan la web como canal principal de pago",
                "Reducción significativa de fricción en pagos",
                "Centralización exitosa del proceso de cobros"
            ]
        },
        link: "https://www.figma.com/design/mY39dI8jT32DVeVlirUGel/Mi-cuenta---Pagos?node-id=2-2&p=f"
    }
];

// ===================================
// 2. STATE MANAGEMENT
// ===================================

const state = {
    activeFilter: 'all',
    showingAll: false,
    isMobile: window.innerWidth < 768
};

// ===================================
// 3. UI RENDERING FUNCTIONS
// ===================================

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card glass glass-hover rounded-2xl overflow-hidden cursor-pointer scroll-reveal';
    card.dataset.projectId = project.id;
    card.dataset.tags = project.tags.join(',');

    // Function to get color class based on tag
    const getTagColor = (tag) => {
        const tagLower = tag.toLowerCase();
        if (tagLower.includes('ux') || tagLower.includes('ui') || tagLower.includes('design system')) {
            return 'border-accent-purple/30 text-purple-400';
        } else if (tagLower.includes('mobile') || tagLower.includes('web') || tagLower.includes('fintech') || tagLower.includes('saas')) {
            return 'border-accent-blue/30 text-blue-400';
        } else if (tagLower.includes('commerce') || tagLower.includes('growth') || tagLower.includes('data')) {
            return 'border-accent-cyan/30 text-cyan-400';
        } else if (tagLower.includes('iot') || tagLower.includes('health') || tagLower.includes('hr')) {
            return 'border-accent-green/30 text-green-400';
        }
        return 'border-accent-purple/30 text-purple-400'; // default
    };

    card.innerHTML = `
    <div class="h-64 overflow-hidden">
      <img src="${project.image}" alt="${project.title}" 
           class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
           onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23334155%22 width=%22400%22 height=%22300%22/%3E%3Ctext fill=%22%23cbd5e1%22 font-family=%22Arial%22 font-size=%2220%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3EProject ${project.id}%3C/text%3E%3C/svg%3E'">
    </div>
    <div class="p-6">
      <div class="flex flex-wrap gap-2 mb-3">
        ${project.tags.slice(0, 2).map(tag => `
          <span class="px-3 py-1 text-xs rounded-full glass border ${getTagColor(tag)} font-semibold">
            ${tag}
          </span>
        `).join('')}
      </div>
      <h3 class="text-xl font-bold mb-2">${project.title.split(' - ')[1] || project.title}</h3>
      <p class="text-gray-400 text-sm">${project.shortDesc}</p>
    </div>
  `;

    return card;
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    console.log('🎨 renderProjects() called');
    console.log('📦 Grid element:', grid);

    if (!grid) {
        console.error('❌ Grid not found!');
        return;
    }

    grid.innerHTML = '';

    const filteredProjects = state.activeFilter === 'all'
        ? PROJECTS
        : PROJECTS.filter(p => p.tags.includes(state.activeFilter));

    console.log(`🔍 Filtered projects (filter="${state.activeFilter}"):`, filteredProjects.length);

    const visibleCount = state.showingAll
        ? filteredProjects.length
        : (state.isMobile ? 3 : 6);

    console.log(`👁️ Visible count: ${visibleCount} (isMobile: ${state.isMobile}, showingAll: ${state.showingAll})`);

    filteredProjects.forEach((project, index) => {
        const card = createProjectCard(project);
        console.log(`🃏 Card ${index + 1}/${filteredProjects.length} created for "${project.title}"`, {
            hidden: index >= visibleCount,
            display: index >= visibleCount ? 'none' : 'block'
        });

        // Show or hide based on visibleCount
        if (index >= visibleCount) {
            card.style.display = 'none';
            card.dataset.hidden = 'true';
        } else {
            card.style.display = ''; // Ensure visible cards are shown
            card.dataset.hidden = 'false';
        }
        grid.appendChild(card);
    });

    console.log(`✅ ${filteredProjects.length} cards appended to grid`);
    console.log('📊 Grid children count:', grid.children.length);

    // Observe newly created cards for scroll-reveal animation
    // Access the global observer from main.js if available
    if (typeof observer !== 'undefined') {
        grid.querySelectorAll('.scroll-reveal').forEach(element => {
            observer.observe(element);
        });
    }

    updateLoadMoreButton(filteredProjects.length, visibleCount);
}

function renderModal(project) {
    const modal = document.getElementById('projectModal');
    const modalHeader = modal.querySelector('#modal-header');
    const modalBody = modal.querySelector('#modal-body');

    // Function to get color class based on tag
    const getTagColor = (tag) => {
        const tagLower = tag.toLowerCase();
        if (tagLower.includes('ux') || tagLower.includes('ui') || tagLower.includes('design system')) {
            return 'border-accent-purple/30 text-purple-400';
        } else if (tagLower.includes('mobile') || tagLower.includes('web') || tagLower.includes('fintech') || tagLower.includes('saas')) {
            return 'border-accent-blue/30 text-blue-400';
        } else if (tagLower.includes('commerce') || tagLower.includes('growth') || tagLower.includes('data')) {
            return 'border-accent-cyan/30 text-cyan-400';
        } else if (tagLower.includes('iot') || tagLower.includes('health') || tagLower.includes('hr')) {
            return 'border-accent-green/30 text-green-400';
        }
        return 'border-accent-purple/30 text-purple-400';
    };

    // Populate Header
    modalHeader.innerHTML = `
    <div class="flex justify-end p-4 rounded-t-2xl border-b border-white/10" style="background-color: #141418;">
      <button id="modalClose" class="w-10 h-10 rounded-full glass hover:bg-accent-purple transition-all duration-300 flex items-center justify-center text-2xl">
        &times;
      </button>
    </div>
    `;

    // Populate Body
    modalBody.innerHTML = `
    <!-- Project Image -->
    <div class="mb-6">
      <img src="${project.image}" alt="${project.title}" 
           class="w-full rounded-xl shadow-2xl"
           style="max-height: 400px; object-fit: cover;"
           onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22400%22%3E%3Crect fill=%22%23334155%22 width=%22800%22 height=%22400%22/%3E%3Ctext fill=%22%23cbd5e1%22 font-family=%22Arial%22 font-size=%2240%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E${project.title}%3C/text%3E%3C/svg%3E'">
    </div>
    
    <!-- Title -->
    <h2 class="text-2xl md:text-3xl font-bold mb-4">${project.title}</h2>
    
    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-4">
      ${project.tags.map(tag => `
        <span class="px-3 py-1 text-sm rounded-full glass border ${getTagColor(tag)} font-semibold">
          ${tag}
        </span>
      `).join('')}
    </div>
    
    <!-- Short Description -->
    <p class="text-gray-300 mb-8 leading-relaxed">${project.shortDesc}</p>
    
    <!-- Descripción del Proyecto Section -->
    <div class="mb-6">
      <h3 class="text-lg font-bold mb-3 flex items-center gap-2">
        <span>📋</span> Descripción del Proyecto
      </h3>
      <p class="text-gray-300 leading-relaxed">${project.details.overview}</p>
    </div>
    
    <!-- Mi Rol Section -->
    <div class="mb-6">
      <h3 class="text-lg font-bold mb-3 flex items-center gap-2">
        <span>🎯</span> Mi Rol
      </h3>
      <p class="font-semibold text-gray-200 mb-3">${project.details.role}</p>
      <ul class="list-disc list-inside space-y-1 text-gray-300">
        ${project.details.responsibilities.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    
    <!-- Resultados Section -->
    <div class="mb-6">
      <h3 class="text-lg font-bold mb-3 flex items-center gap-2">
        <span>✨</span> Resultados
      </h3>
      <ul class="list-disc list-inside space-y-1 text-gray-300">
        ${project.details.results.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    
    <!-- Ver Proyecto Button -->
    ${project.link ? `
      <div class="mt-8 flex justify-center">
        <a href="${project.link}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Ver proyecto
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>
    ` : ''}
  `;
}

function updateLoadMoreButton(totalCount, visibleCount) {
    const btn = document.getElementById('loadMoreBtn');
    if (!btn) {
        console.error('❌ Load More button not found in DOM');
        return;
    }

    const hiddenCount = totalCount - visibleCount;

    console.log('🔘 updateLoadMoreButton called:', {
        totalCount,
        visibleCount,
        hiddenCount,
        showingAll: state.showingAll
    });

    // If there are no projects at all, hide button
    if (totalCount === 0) {
        btn.style.display = 'none';
        console.log('⚠️ No projects, hiding button');
        return;
    }

    // If showing all projects, show "Ver menos"
    if (state.showingAll) {
        btn.style.display = '';
        btn.textContent = 'Ver menos proyectos';
        console.log('✅ Showing "Ver menos"');
        return;
    }

    // If there are hidden projects, show "Ver más (N)"
    if (hiddenCount > 0) {
        btn.style.display = '';
        btn.textContent = `Ver más proyectos (${hiddenCount})`;
        console.log(`✅ Showing "Ver más (${hiddenCount})"`);
        return;
    }

    // If no hidden projects and not showing all, hide button
    btn.style.display = 'none';
    console.log('⚠️ No hidden projects, hiding button');
}

function generateFilters() {
    const filterContainer = document.getElementById('projectFilters');
    if (!filterContainer) return;

    // Original fixed filters
    const filters = [
        { value: 'all', label: 'Todos' },
        { value: 'UX/UI Design', label: 'UX/UI Design' },
        { value: 'E-commerce', label: 'E-commerce' },
        { value: 'Mobile App', label: 'Mobile App' },
        { value: 'Gestión de Proyectos', label: 'Gestión de Proyectos' }
    ];

    filterContainer.innerHTML = filters.map(filter => `
    <button class="filter-btn ${filter.value === 'all' ? 'active' : ''}" data-filter="${filter.value}">
      ${filter.label}
    </button>
  `).join('');
}

// ===================================
// 4. EVENT HANDLERS
// ===================================

function initEventListeners() {
    const grid = document.getElementById('projectsGrid');
    const modal = document.getElementById('projectModal');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const filterContainer = document.getElementById('projectFilters');

    // Event delegation for project cards
    if (grid) {
        grid.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            if (!card) return;

            const projectId = parseInt(card.dataset.projectId);
            const project = PROJECTS.find(p => p.id === projectId);

            if (project) {
                renderModal(project);
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Modal close
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.closest('#modalClose')) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }
    });

    // Load More toggle
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            state.showingAll = !state.showingAll;
            renderProjects();
        });
    }

    // Filter buttons
    if (filterContainer) {
        filterContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;

            // Update active state
            filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update filter and re-render
            state.activeFilter = btn.dataset.filter;
            state.showingAll = false; // Reset to initial view
            renderProjects();
        });
    }

    // Responsive behavior
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const wasMobile = state.isMobile;
            state.isMobile = window.innerWidth < 768;

            // Only re-render if breakpoint changed
            if (wasMobile !== state.isMobile) {
                renderProjects();
            }
        }, 250);
    });
}

// ===================================
// 5. INITIALIZATION
// ===================================

function initProjects() {
    generateFilters();
    renderProjects();
    initEventListeners();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjects);
} else {
    initProjects();
}
