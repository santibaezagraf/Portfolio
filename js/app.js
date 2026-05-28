/* ============================================================
   Portfolio interactions
   ============================================================ */
(function () {
  'use strict';
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  /* ---------------- i18n ---------------- */
  const I18N = {
    es: {
      'nav.about': 'Perfil',
      'nav.stack': 'Stack',
      'nav.work': 'Proyectos',
      'nav.edu': 'Formación',
      'nav.contact': 'Contacto',
      'nav.motionOn': 'Motion',
      'nav.motionOff': 'Estático',
      'hero.eyebrow': 'Full Stack Developer · Mar del Plata, AR',
      'hero.lede': 'Construyo <strong>sistemas de gestión a medida</strong> — del esquema de base de datos a la última animación. Ingeniería en Sistemas, en clave de oficio.',
      'hero.scroll': 'Scroll',
      'about.eyebrow': 'Perfil',
      'about.statement': 'Estudiante de 4.º año de Ingeniería en Sistemas con <em>todas las materias promocionadas</em> y experiencia real en desarrollo Full Stack. Bilingüe, disciplinado y obsesionado con el detalle: la lectura y la música son el motor de mi creatividad.',
      'about.k1': 'Rol', 'about.v1': 'Desarrollador Full Stack — Freelance',
      'about.k2': 'Formación', 'about.v2': 'Ingeniería en Sistemas · UAP (2023–2027)',
      'about.k3': 'Base', 'about.v3': 'Mar del Plata, Argentina · Disponible remoto',
      'about.k4': 'Idiomas',
      'about.lang1sub': 'Nativo', 'about.lang2sub': 'Avanzado C1',
      'stack.eyebrow': 'Habilidades',
      'stack.title': 'El stack',
      'stack.lede': 'Tecnologías con las que diseño, construyo y despliego producto de punta a punta.',
      'stack.g1': 'Frontend', 'stack.g2': 'Backend & Datos', 'stack.g3': 'Herramientas', 'stack.g4': 'Soft skills',
      'stack.soft': 'Resolución de problemas complejos, capacidad de abstracción, disciplina y atención al detalle.',
      'work.eyebrow': 'Proyectos seleccionados',
      'work.title': 'Trabajo reciente',
      'work.lede': 'Dos sistemas en producción, construidos de cero: arquitectura, base de datos, lógica de negocio e interfaz.',
      'p1.role': 'Sistema de gestión clínica',
      'p1.loc': 'Libertador San Martín, AR · 07/2025 — presente',
      'p1.desc': 'Sistema web (mobile + desktop) para la gestión de especialistas, pacientes, turnos, historiales y evoluciones clínicas. Calendario interactivo con prevención de colisiones, vistas personalizables y avisos automatizados por WhatsApp.',
      'p1.f1b': 'Arquitectura BaaS robusta', 'p1.f1s': 'Supabase (PostgreSQL) + Supabase SSR.',
      'p1.f2b': 'Seguridad a nivel de fila (RLS)', 'p1.f2s': 'Privacidad estricta de datos médicos y perfiles.',
      'p1.f3b': 'Estado avanzado y optimización', 'p1.f3s': 'TanStack React Query + Zustand para datos asíncronos y estado global.',
      'p1.cap1': 'Calendario / agenda de turnos', 'p1.cap2': 'Ficha de paciente', 'p1.cap3': 'Vista mobile',
      'p2.role': 'Gestión de pedidos & analítica',
      'p2.loc': 'Concepción del Uruguay, AR · 07/2025 — presente',
      'p2.desc': 'Sistema web de gestión de pedidos para optimizar la logística de ventas, balances y entregas a domicilio de una heladería. Seguimiento en tiempo real e inteligencia financiera instantánea.',
      'p2.f1b': 'CRUD de pedidos y logística', 'p2.f1s': 'Seguimiento en tiempo real, estados de entrega, pagos y stock.',
      'p2.f2b': 'Analítica financiera avanzada', 'p2.f2s': 'RPCs en PostgreSQL con CTEs para balances dinámicos.',
      'p2.f3b': 'Lógica de negocio en la base', 'p2.f3s': 'Ingresos brutos, flujo de caja neto, costos de envío y gastos operativos.',
      'p2.f4b': 'Arquitectura segura', 'p2.f4s': 'Next.js Server Actions + Zod para validación robusta en servidor.',
      'p2.cap1': 'Panel de pedidos', 'p2.cap2': 'Balance financiero', 'p2.cap3': 'Detalle de gastos',
      'edu.eyebrow': 'Trayectoria académica',
      'edu.title': 'Formación',
      'edu.e1n': 'Ingeniería en Sistemas', 'edu.e1s': 'Cursando 4.º año — todas las materias promocionadas.', 'edu.e1p': 'Universidad Adventista del Plata',
      'edu.e2n': 'Colegio Secundario', 'edu.e2s': 'Educación secundaria.', 'edu.e2p': 'Instituto Adventista Balcarce',
      'edu.e3n': 'Primario y Secundario', 'edu.e3s': 'Formación primaria y parte de la secundaria.', 'edu.e3p': 'Holy Mary of Northern Hills',
      'int.eyebrow': 'Fuera del código',
      'int.title': 'Intereses',
      'int.i1n': 'Guitarra <em>clásica</em>', 'int.i1d': 'La práctica diaria que enseña paciencia, estructura y el valor de cada detalle.',
      'int.i2n': 'Música', 'int.i2d': 'Escuchar y entender composición — ritmo y armonía como modelo mental del software.',
      'int.i3n': 'Literatura y arte <em>clásicos</em>', 'int.i3d': 'Leer es el combustible de la creatividad y la disciplina que vuelco en el desarrollo.',
      'contact.eyebrow': 'Hablemos',
      'contact.big': 'Hagamos algo <em>juntos</em>',
      'contact.role': 'Desarrollador Full Stack',
      'contact.avail': 'Disponible para nuevos proyectos',
    },
    en: {
      'nav.about': 'Profile',
      'nav.stack': 'Stack',
      'nav.work': 'Work',
      'nav.edu': 'Education',
      'nav.contact': 'Contact',
      'nav.motionOn': 'Motion',
      'nav.motionOff': 'Static',
      'hero.eyebrow': 'Full Stack Developer · Mar del Plata, AR',
      'hero.lede': 'I build <strong>custom management systems</strong> — from the database schema to the final animation. Systems Engineering, treated as a craft.',
      'hero.scroll': 'Scroll',
      'about.eyebrow': 'Profile',
      'about.statement': '4th-year Systems Engineering student with <em>every course passed by promotion</em> and real Full Stack experience. Bilingual, disciplined and detail-obsessed: reading and music are the engine of my creativity.',
      'about.k1': 'Role', 'about.v1': 'Full Stack Developer — Freelance',
      'about.k2': 'Education', 'about.v2': 'Systems Engineering · UAP (2023–2027)',
      'about.k3': 'Based in', 'about.v3': 'Mar del Plata, Argentina · Open to remote',
      'about.k4': 'Languages',
      'about.lang1sub': 'Native', 'about.lang2sub': 'Advanced C1',
      'stack.eyebrow': 'Skills',
      'stack.title': 'The stack',
      'stack.lede': 'The technologies I use to design, build and ship product end to end.',
      'stack.g1': 'Frontend', 'stack.g2': 'Backend & Data', 'stack.g3': 'Tooling', 'stack.g4': 'Soft skills',
      'stack.soft': 'Complex problem solving, strong abstraction, discipline and attention to detail.',
      'work.eyebrow': 'Selected projects',
      'work.title': 'Recent work',
      'work.lede': 'Two production systems, built from scratch: architecture, database, business logic and interface.',
      'p1.role': 'Clinical management system',
      'p1.loc': 'Libertador San Martín, AR · 07/2025 — present',
      'p1.desc': 'Web system (mobile + desktop) to manage specialists, patients, appointments, clinical records and evolutions. Interactive calendar with collision prevention, customizable views and automated WhatsApp reminders.',
      'p1.f1b': 'Robust BaaS architecture', 'p1.f1s': 'Supabase (PostgreSQL) + Supabase SSR.',
      'p1.f2b': 'Row Level Security (RLS)', 'p1.f2s': 'Strict privacy for medical data and user profiles.',
      'p1.f3b': 'Advanced state & optimization', 'p1.f3s': 'TanStack React Query + Zustand for async data and global state.',
      'p1.cap1': 'Appointment calendar', 'p1.cap2': 'Patient record', 'p1.cap3': 'Mobile view',
      'p2.role': 'Order management & analytics',
      'p2.loc': 'Concepción del Uruguay, AR · 07/2025 — present',
      'p2.desc': 'Web order-management system to optimize sales logistics, balances and home delivery for an ice-cream shop. Real-time tracking and instant financial intelligence.',
      'p2.f1b': 'Order & logistics CRUD', 'p2.f1s': 'Real-time tracking, delivery states, payments and stock.',
      'p2.f2b': 'Advanced financial analytics', 'p2.f2s': 'PostgreSQL RPCs with CTEs for dynamic balances.',
      'p2.f3b': 'Business logic in the database', 'p2.f3s': 'Gross income, net cash flow, shipping costs and operating expenses.',
      'p2.f4b': 'Secure architecture', 'p2.f4s': 'Next.js Server Actions + Zod for robust server-side validation.',
      'p2.cap1': 'Orders dashboard', 'p2.cap2': 'Financial balance', 'p2.cap3': 'Expense detail',
      'edu.eyebrow': 'Academic path',
      'edu.title': 'Education',
      'edu.e1n': 'Systems Engineering', 'edu.e1s': '4th year in progress — every course passed by promotion.', 'edu.e1p': 'Universidad Adventista del Plata',
      'edu.e2n': 'Secondary School', 'edu.e2s': 'Secondary education.', 'edu.e2p': 'Instituto Adventista Balcarce',
      'edu.e3n': 'Primary & Secondary', 'edu.e3s': 'Primary and part of secondary education.', 'edu.e3p': 'Holy Mary of Northern Hills',
      'int.eyebrow': 'Beyond the code',
      'int.title': 'Interests',
      'int.i1n': '<em>Classical</em> guitar', 'int.i1d': 'A daily practice that teaches patience, structure and the value of every detail.',
      'int.i2n': 'Music', 'int.i2d': 'Listening and understanding composition — rhythm and harmony as a mental model for software.',
      'int.i3n': '<em>Classical</em> literature & art', 'int.i3d': 'Reading is the fuel for the creativity and discipline I bring to development.',
      'contact.eyebrow': "Let's talk",
      'contact.big': "Let's build <em>something</em>",
      'contact.role': 'Full Stack Developer',
      'contact.avail': 'Available for new projects',
    }
  };

  let lang = localStorage.getItem('sbg-lang') || 'es';
  let animOn = (localStorage.getItem('sbg-anim') || 'on') !== 'off';

  /* ---------------- Animations on/off ---------------- */
  function setAnim(on, persist) {
    animOn = on;
    document.body.classList.toggle('anim-off', !on);
    const btn = document.getElementById('motionToggle');
    if (btn) btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    if (!on) {
      // settle decorative transforms
      document.querySelectorAll('.hero-glow').forEach(g => { g.style.transform = ''; });
    }
    if (persist) localStorage.setItem('sbg-anim', on ? 'on' : 'off');
  }

  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    localStorage.setItem('sbg-lang', l);
    const dict = I18N[l];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === l);
    });
  }

  /* ---------------- Hero kinetic title ---------------- */
  function buildKineticTitle() {
    document.querySelectorAll('.hero-title .word').forEach((word, wi) => {
      const text = word.textContent;
      word.textContent = '';
      [...text].forEach((ch, ci) => {
        const span = document.createElement('span');
        span.className = 'reveal-y';
        span.textContent = ch;
        span.style.transition = `transform 1s var(--ease) ${0.25 + wi * 0.12 + ci * 0.03}s, opacity .8s ease ${0.25 + wi * 0.12 + ci * 0.03}s`;
        word.appendChild(span);
      });
    });
  }
  function playKineticTitle() {
    document.querySelectorAll('.hero-title .reveal-y').forEach(s => {
      s.style.transform = 'translateY(0) rotate(0)';
      s.style.opacity = '1';
    });
  }

  /* ---------------- Scroll reveals ---------------- */
  function initReveals() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal, .line-reveal').forEach(el => io.observe(el));
  }

  /* ---------------- Section progress + nav active ---------------- */
  function initProgress() {
    const sections = [...document.querySelectorAll('section[id]')];
    const dots = [...document.querySelectorAll('.progress a')];
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          dots.forEach(d => d.classList.toggle('active', d.getAttribute('href') === '#' + id));
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(s => io.observe(s));
  }

  /* ---------------- Magnetic cursor ---------------- */
  function initCursor() {
    if (isTouch) return;
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    const label = document.querySelector('.cursor-label');
    let mx = innerWidth / 2, my = innerHeight / 2;
    let rx = mx, ry = my, lx = mx, ly = my;

    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });

    (function loop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      lx += (mx - lx) * 0.22; ly += (my - ly) * 0.22;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      label.style.transform = `translate(${lx}px, ${ly + 34}px) translate(-50%, -50%) scale(${label.classList.contains('show') ? 1 : 0.5})`;
      requestAnimationFrame(loop);
    })();

    // hover states
    document.querySelectorAll('a, button, .magnetic, image-slot, .tag, .int-card, .clink').forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add(el.dataset.cursorAccent ? 'hover-accent' : 'hover');
        const lbl = el.dataset.cursorLabel;
        if (lbl) { label.textContent = lbl; label.classList.add('show'); }
      });
      el.addEventListener('mouseleave', () => {
        ring.classList.remove('hover', 'hover-accent');
        label.classList.remove('show');
      });
    });

    // magnetic pull
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      const strength = parseFloat(el.dataset.magnetic) || 0.3;
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------------- Hero glows follow cursor ---------------- */
  function initParallax() {
    if (prefersReduced) return;
    const glows = [...document.querySelectorAll('.hero-glow')];
    if (!glows.length) return;
    // per-glow follow config: how far it travels (px) and direction sign
    const cfg = glows.map((g, i) => {
      if (g.classList.contains('g1')) return { ax: 220, ay: 150, sx: 1, sy: 1 };
      if (g.classList.contains('g2')) return { ax: 260, ay: 180, sx: -1, sy: -1 };
      return { ax: 180, ay: 200, sx: 1, sy: -1 }; // g3
    });
    // target (-0.5..0.5) and current (lerped) for each glow
    let tx = 0, ty = 0;
    const cur = glows.map(() => ({ x: 0, y: 0 }));

    window.addEventListener('mousemove', (e) => {
      tx = e.clientX / innerWidth - 0.5;
      ty = e.clientY / innerHeight - 0.5;
    });

    (function loop() {
      requestAnimationFrame(loop);
      if (!animOn) return;
      for (let i = 0; i < glows.length; i++) {
        const ease = 0.07 + i * 0.015;
        cur[i].x += (tx - cur[i].x) * ease;
        cur[i].y += (ty - cur[i].y) * ease;
        const c = cfg[i];
        glows[i].style.transform =
          `translate(${cur[i].x * c.ax * c.sx}px, ${cur[i].y * c.ay * c.sy}px)`;
      }
    })();
  }

  /* ---------------- Canvas particle field ---------------- */
  function initCanvas() {
    if (prefersReduced) return;
    const cv = document.getElementById('hero-canvas');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let w, h, dpr, parts = [], cleared = false;
    const mouse = { x: -9999, y: -9999, active: false };

    const LINK = 140;       // particle-to-particle link distance
    const M_RADIUS = 230;   // cursor influence radius
    const REPEL = 2.4;       // cursor repel strength

    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(220, Math.max(70, Math.floor(w * h / 7000)));
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32, vy: (Math.random() - 0.5) * 0.32,
        bvx: 0, bvy: 0,
        r: Math.random() * 1.8 + 0.7
      }));
    }
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('load', resize);
    if (window.ResizeObserver) {
      let lastW = 0, lastH = 0;
      const ro = new ResizeObserver(() => {
        if (Math.abs(cv.clientWidth - lastW) > 4 || Math.abs(cv.clientHeight - lastH) > 4) {
          lastW = cv.clientWidth; lastH = cv.clientHeight;
          resize();
        }
      });
      ro.observe(cv);
    }
    cv.parentElement.addEventListener('mousemove', (e) => {
      const r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.active = true;
    });
    cv.parentElement.addEventListener('mouseleave', () => { mouse.active = false; mouse.x = -9999; mouse.y = -9999; });

    function draw() {
      requestAnimationFrame(draw);
      if (!animOn) {
        if (!cleared) { ctx.clearRect(0, 0, w, h); cleared = true; }
        return;
      }
      cleared = false;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.x += p.vx + p.bvx;
        p.y += p.vy + p.bvy;
        // ease the cursor-pushed velocity back to 0
        p.bvx *= 0.9; p.bvy *= 0.9;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));

        // cursor influence: repel + connecting line + grow
        let near = 0;
        if (mouse.active) {
          const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
          const md = Math.hypot(mdx, mdy) || 1;
          if (md < M_RADIUS) {
            near = 1 - md / M_RADIUS;
            const force = near * REPEL;
            p.bvx += (mdx / md) * force;
            p.bvy += (mdy / md) * force;
            // line from cursor to particle
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(217,119,87,${near * 0.55})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + near * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = near > 0.05
          ? `rgba(217,119,87,${0.45 + near * 0.5})`
          : 'rgba(23,19,15,0.34)';
        ctx.fill();

        // particle-to-particle links
        for (let j = i + 1; j < parts.length; j++) {
          const q = parts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(23,19,15,${(1 - d / LINK) * 0.16})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // soft halo around cursor
      if (mouse.active) {
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, M_RADIUS);
        g.addColorStop(0, 'rgba(217,119,87,0.10)');
        g.addColorStop(1, 'rgba(217,119,87,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, M_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    draw();
  }

  /* ---------------- Boot ---------------- */
  function boot() {
    buildKineticTitle();
    applyLang(lang);
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.addEventListener('click', () => applyLang(b.dataset.lang));
    });
    // motion toggle
    setAnim(animOn, false);
    const motionBtn = document.getElementById('motionToggle');
    if (motionBtn) motionBtn.addEventListener('click', () => setAnim(!animOn, true));
    initReveals();
    initProgress();
    initCursor();
    initParallax();
    initCanvas();
    // play hero
    document.body.classList.add('loaded');
    setTimeout(playKineticTitle, 120);
    // reveal hero foot lines
    setTimeout(() => {
      document.querySelectorAll('.hero .line-reveal').forEach(el => el.classList.add('in'));
    }, 700);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else { boot(); }
})();
