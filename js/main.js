/**
 * MAIN INTERACTIVITY & LOGIC - LEO ADI SAPUTRA PORTFOLIO
 * High-performance, vanilla JavaScript with no heavy dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCanvasNetwork();
  initNavbar();
  initTypewriter();
  renderSkills();
  renderProjects();
  initProjectFilter();
  renderTimeline();
  renderAchievements();
  initProjectModal();
  initCVModal();
  initCertModal();
  initContactForm();
  initScrollAnimations();
  initBackToTop();
  updateCopyrightYear();
});

/* ==========================================================================
   1. THEME SWITCHER (DARK & LIGHT MODE)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('leo_portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Default to dark mode as preferred by data science portfolio aesthetic
  const initialTheme = storedTheme ? storedTheme : (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('leo_portfolio_theme', newTheme);
      showToast(`Mode ${newTheme === 'dark' ? 'Gelap (Dark)' : 'Terang (Light)'} diaktifkan`, 'info');
    });
  }
}

function applyTheme(theme) {
  const toggleBtn = document.getElementById('themeToggle');
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (toggleBtn) {
      toggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      `;
      toggleBtn.setAttribute('title', 'Beralih ke Dark Mode');
      toggleBtn.setAttribute('aria-label', 'Beralih ke Dark Mode');
    }
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (toggleBtn) {
      toggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      `;
      toggleBtn.setAttribute('title', 'Beralih ke Light Mode');
      toggleBtn.setAttribute('aria-label', 'Beralih ke Light Mode');
    }
  }
}

/* ==========================================================================
   2. INTERACTIVE PARTICLES / CONSTELLATION CANVAS
   ========================================================================== */
function initCanvasNetwork() {
  const canvas = document.getElementById('networkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 32 : 65;
  const maxDistance = 140;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 1.8 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw(isLight) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = isLight ? 'rgba(2, 132, 199, 0.45)' : 'rgba(56, 189, 248, 0.55)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(isLight);

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * (isLight ? 0.2 : 0.28);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = isLight ? `rgba(2, 132, 199, ${alpha})` : `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   3. NAVBAR BEHAVIOR, ACTIVE SECTION & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  function toggleMobileMenu(isOpen) {
    if (isOpen) {
      hamburgerBtn.classList.add('active');
      mobileNav.classList.add('open');
      navBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      hamburgerBtn.classList.remove('active');
      mobileNav.classList.remove('open');
      navBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      toggleMobileMenu(!isOpen);
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', () => toggleMobileMenu(false));
  }

  // Close mobile nav when clicking any link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu(false);
    });
  });

  // Active section indicator via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   4. DYNAMIC TYPEWRITER EFFECT IN HERO
   ========================================================================== */
function initTypewriter() {
  const target = document.getElementById('heroRoleTyping');
  if (!target) return;

  const roles = [
    "Aspiring Data Scientist",
    "Informatics Student at UAD",
    "Machine Learning Enthusiast",
    "Data Visualization Explorer",
    "Python & C++ Developer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      target.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 1800; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before new word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   5. RENDER SKILLS & TECHNOLOGIES
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skillsGrid');
  if (!container || !PORTFOLIO_DATA.skills) return;

  // Category Icon SVGs mapping
  const categoryIcons = {
    "Programming": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    "Data Science": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    "Data Visualization": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    "AI & Machine Learning": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>`,
    "Web Development": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    "Tools & Environment": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
  };

  container.innerHTML = PORTFOLIO_DATA.skills.map((category) => {
    const icon = categoryIcons[category.category] || categoryIcons["Programming"];
    const itemsHtml = category.items.map(item => `
      <div class="skill-item-row">
        <div class="skill-item-top">
          <span class="skill-name">${item.name}</span>
          <span class="skill-tag">${item.tag}</span>
        </div>
        <p class="skill-desc">${item.desc}</p>
      </div>
    `).join('');

    return `
      <div class="skill-category-card fade-in-up">
        <div class="skill-category-header">
          <div class="category-icon-box">${icon}</div>
          <h3>${category.category}</h3>
        </div>
        <p class="skill-category-desc">${category.description}</p>
        <div class="skill-items-list">
          ${itemsHtml}
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   6. RENDER FEATURED PROJECTS & FILTERING
   ========================================================================== */
function renderProjects(filter = 'All') {
  const container = document.getElementById('projectsGrid');
  if (!container || !PORTFOLIO_DATA.projects) return;

  const filtered = filter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p>Belum ada proyek dalam kategori ini.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(project => `
    <div class="project-card fade-in-up" data-project-id="${project.id}">
      <div class="project-thumbnail-wrapper">
        <img src="${project.thumbnail}" alt="${project.title}" class="project-thumbnail" loading="lazy">
        <span class="project-badge-pill">${project.badge}</span>
        <span class="project-category-overlay">${project.categoryDisplay}</span>
      </div>
      <div class="project-card-content">
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-summary">${project.summary}</p>
        <div class="project-tech-tags">
          ${project.technologies.slice(0, 4).map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
          ${project.technologies.length > 4 ? `<span class="project-tech-tag">+${project.technologies.length - 4}</span>` : ''}
        </div>
        <div class="project-card-actions">
          <button class="btn btn-primary btn-sm view-project-btn" data-id="${project.id}">
            <span>View Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
          <div style="display: flex; gap: 0.5rem;">
            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-icon" title="Lihat Repositori GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
            ` : ''}
            ${project.hasDemo ? `
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-icon" title="Buka Live Demo">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Re-bind view details buttons
  container.querySelectorAll('.view-project-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      openProjectModal(id);
    });
  });

  // Re-trigger scroll animations
  initScrollAnimations();
}

function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjects(category);
    });
  });
}

/* ==========================================================================
   7. RENDER TIMELINE (EDUCATION & EXPERIENCE)
   ========================================================================== */
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container || !PORTFOLIO_DATA.experience) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(item => `
    <div class="timeline-item fade-in-up">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-meta-top">
          <span class="timeline-period">${item.period}</span>
          <span class="timeline-type-badge">${item.type.toUpperCase()}</span>
        </div>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-institution">${item.institution} — ${item.location}</p>
        <p class="timeline-desc">${item.description}</p>
        <ul class="timeline-highlights">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   8. RENDER ACHIEVEMENTS & CERTIFICATIONS
   ========================================================================== */
function renderAchievements() {
  const container = document.getElementById('achievementsGrid');
  if (!container || !PORTFOLIO_DATA.achievements) return;

  container.innerHTML = PORTFOLIO_DATA.achievements.map(ach => `
    <div class="achievement-card fade-in-up">
      <div class="achievement-thumb-wrapper" onclick="openCertModal('${ach.id}')" title="Klik untuk memperbesar sertifikat">
        <img src="${ach.image}" alt="${ach.title}" class="achievement-thumb-img" loading="lazy">
        <div class="achievement-thumb-overlay">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          <span>Lihat Sertifikat</span>
        </div>
        ${ach.badge ? `<span class="achievement-badge-pill">${ach.badge}</span>` : ''}
      </div>
      <div class="achievement-content">
        <div class="achievement-meta">
          <span style="font-size: 0.78rem; color: var(--accent-secondary); font-weight: 600;">${ach.category || 'Sertifikat'}</span>
          <span class="achievement-date">${ach.date}</span>
        </div>
        <h3 class="achievement-title">${ach.title}</h3>
        <p class="achievement-issuer">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
          <span>${ach.issuer}</span>
        </p>
        <p class="achievement-desc">${ach.description}</p>
        <div class="achievement-actions">
          <button class="btn btn-primary btn-sm" onclick="openCertModal('${ach.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <span>Pratinjau</span>
          </button>
          <a href="${ach.credentialUrl || ach.image}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" title="Buka tautan berkas resmi">
            <span>Buka File</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  initScrollAnimations();
}

function initCertModal() {
  const modal = document.getElementById('certModal');
  const closeBtn = document.getElementById('closeCertModal');
  if (!modal) return;

  closeBtn?.addEventListener('click', () => closeCertModal());

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCertModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCertModal();
    }
  });
}

function openCertModal(certId) {
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('certModalImg');
  const modalTitle = document.getElementById('certModalHeading');
  const modalIssuer = document.getElementById('certModalIssuer');
  const modalDate = document.getElementById('certModalDate');
  const modalDesc = document.getElementById('certModalDesc');
  const modalLink = document.getElementById('certModalFullLink');

  const cert = PORTFOLIO_DATA.achievements.find(a => a.id === certId);
  if (!cert || !modal) return;

  if (modalImg) {
    modalImg.src = cert.image;
    modalImg.alt = cert.title;
  }
  if (modalTitle) modalTitle.textContent = cert.title;
  if (modalIssuer) modalIssuer.textContent = cert.issuer;
  if (modalDate) modalDate.textContent = cert.date;
  if (modalDesc) modalDesc.textContent = cert.description;
  if (modalLink) {
    modalLink.href = cert.credentialUrl || cert.image;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  const modal = document.getElementById('certModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}
window.closeCertModal = closeCertModal;
window.openCertModal = openCertModal;

/* ==========================================================================
   9. PROJECT DETAIL MODAL (CASE STUDY DEEP-DIVE)
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('closeProjectModal');

  if (!modal) return;

  closeBtn?.addEventListener('click', () => closeProjectModal());

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('projectModalBody');
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project || !modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.5rem;">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <span class="project-badge-pill" style="position: static;">${project.badge}</span>
        <span class="project-category-overlay" style="position: static;">${project.categoryDisplay}</span>
      </div>
      <h2 style="font-size: 1.85rem; font-weight: 800; line-height: 1.25;">${project.title}</h2>
    </div>

    <img src="${project.thumbnail}" alt="${project.title}" class="modal-hero-img">

    <div>
      <h4 class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        Latar Belakang & Masalah
      </h4>
      <p style="color: var(--text-secondary); line-height: 1.7;">${project.problem}</p>
    </div>

    <div>
      <h4 class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Solusi & Pendekatan
      </h4>
      <p style="color: var(--text-secondary); line-height: 1.7;">${project.solution}</p>
    </div>

    <div>
      <h4 class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        Metodologi & Pipeline
      </h4>
      <div style="background: var(--bg-elevated); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-family: var(--font-mono); font-size: 0.88rem; color: var(--text-primary); line-height: 1.6;">
        ${project.methodology}
      </div>
    </div>

    <div>
      <h4 class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        Temuan Kunci & Insight
      </h4>
      <ul class="modal-insights-list">
        ${project.insights.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>

    <div>
      <h4 class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        Teknologi & Tools
      </h4>
      <div class="project-tech-tags">
        ${project.technologies.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;">
      <div style="background: var(--bg-elevated); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <strong style="color: var(--accent-primary); font-size: 0.85rem; text-transform: uppercase;">Hasil Proyek</strong>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.4rem;">${project.results}</p>
      </div>
      <div style="background: var(--bg-elevated); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <strong style="color: var(--accent-secondary); font-size: 0.85rem; text-transform: uppercase;">Pembelajaran</strong>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.4rem;">${project.learnings}</p>
      </div>
    </div>
  `;

  // Update modal footer actions
  const modalFooter = document.getElementById('projectModalFooter');
  if (modalFooter) {
    modalFooter.innerHTML = `
      <button class="btn btn-secondary btn-sm" onclick="closeProjectModal()">Tutup</button>
      ${project.githubUrl ? `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          Source Code
        </a>
      ` : ''}
      ${project.hasDemo ? `
        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Live Demo
        </a>
      ` : ''}
    `;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   10. CV MODAL & RESUME PREVIEW SYSTEM
   ========================================================================== */
function initCVModal() {
  const cvModal = document.getElementById('cvModal');
  const openCVBtns = document.querySelectorAll('.open-cv-modal-btn');
  const closeCVBtn = document.getElementById('closeCVModal');
  const downloadCVBtn = document.getElementById('downloadCVBtn');

  openCVBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCVModal();
    });
  });

  closeCVBtn?.addEventListener('click', () => closeCVModal());

  cvModal?.addEventListener('click', (e) => {
    if (e.target === cvModal) closeCVModal();
  });

  downloadCVBtn?.addEventListener('click', () => {
    // Check if real PDF exists or offer placeholder guidance
    fetch('assets/cv.pdf', { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          const a = document.createElement('a');
          a.href = 'assets/cv.pdf';
          a.download = 'CV_Leo_Adi_Saputra.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          showToast('Mengunduh Curriculum Vitae...', 'success');
        } else {
          showToast('File CV fisik dapat Anda letakkan di folder assets/cv.pdf. Preview CV telah ditampilkan.', 'info');
        }
      })
      .catch(() => {
        showToast('File CV dapat ditaruh di folder assets/cv.pdf.', 'info');
      });
  });
}

function openCVModal() {
  const cvModal = document.getElementById('cvModal');
  if (cvModal) {
    cvModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCVModal() {
  const cvModal = document.getElementById('cvModal');
  if (cvModal) {
    cvModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   11. CONTACT FORM WITH REALTIME VALIDATION & FEEDBACK
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');
  const submitBtn = document.getElementById('contactSubmitBtn');

  function validateField(input, condition, errorId) {
    const errorEl = document.getElementById(errorId);
    if (!condition) {
      input.classList.add('is-invalid');
      errorEl?.classList.add('visible');
      return false;
    } else {
      input.classList.remove('is-invalid');
      errorEl?.classList.remove('visible');
      return true;
    }
  }

  // Live input validations on blur
  nameInput?.addEventListener('input', () => {
    validateField(nameInput, nameInput.value.trim().length >= 2, 'nameError');
  });

  emailInput?.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(emailInput, emailRegex.test(emailInput.value.trim()), 'emailError');
  });

  subjectInput?.addEventListener('input', () => {
    validateField(subjectInput, subjectInput.value.trim().length >= 3, 'subjectError');
  });

  messageInput?.addEventListener('input', () => {
    validateField(messageInput, messageInput.value.trim().length >= 10, 'messageError');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 2, 'nameError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = validateField(emailInput, emailRegex.test(emailInput.value.trim()), 'emailError');
    const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length >= 3, 'subjectError');
    const isMessageValid = validateField(messageInput, messageInput.value.trim().length >= 10, 'messageError');

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      showToast('Mohon lengkapi seluruh formulir dengan data yang valid.', 'error');
      return;
    }

    // Set loading button state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
      <span>Mengirim Pesan...</span>
    `;

    // Simulate reliable transmission with client fallback
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      const userName = nameInput.value.trim();
      const userSubject = subjectInput.value.trim();

      // Show high-end success toast
      showToast(`Terima kasih ${userName}! Pesan mengenai "${userSubject}" telah terkirim.`, 'success');

      // Reset form
      form.reset();
    }, 1200);
  });
}

/* ==========================================================================
   12. TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconSvg = type === 'success'
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
    : type === 'error'
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  toast.innerHTML = `
    ${iconSvg}
    <div style="flex-grow: 1; font-size: 0.9rem; line-height: 1.4;">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ==========================================================================
   13. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in-up:not(.visible)');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animatedElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   14. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   15. UPDATE COPYRIGHT YEAR
   ========================================================================== */
function updateCopyrightYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
