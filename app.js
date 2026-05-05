/* ── Philosopher grid ── */
function initials(name) {
  return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

function buildPhilGrid() {
  const grid = document.getElementById("philGrid");
  PHILOSOPHERS.forEach(p => {
    const card = document.createElement("div");
    card.className = "phil-card";
    card.dataset.era = p.era;
    card.innerHTML = `
      <div class="phil-avatar" style="background:${p.color}22;border-color:${p.color}44">
        <span style="color:${p.color}">${initials(p.name)}</span>
      </div>
      <div class="phil-info">
        <h3>${p.name}</h3>
        <span class="phil-years">${p.years}</span>
        <p class="phil-tagline">"${p.tagline}"</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });
}

function openModal(p) {
  const body = document.getElementById("modalBody");
  body.innerHTML = `
    <div class="modal-header" style="border-color:${p.color}">
      <div class="modal-avatar" style="background:${p.color}22;border-color:${p.color}">
        <span style="color:${p.color}">${initials(p.name)}</span>
      </div>
      <div>
        <h2>${p.name}</h2>
        <span class="phil-years">${p.years}</span>
      </div>
    </div>
    <blockquote style="border-left-color:${p.color}">"${p.tagline}"</blockquote>
    <p>${p.summary}</p>
    <h4>Key Ideas</h4>
    <ul>${p.keyIdeas.map(k => `<li>${k}</li>`).join("")}</ul>
    <h4>Modern Echo</h4>
    <div class="modal-echo">${p.modernEcho}</div>
    <h4>Legacy</h4>
    <p class="modal-legacy">${p.legacy}</p>
  `;
  document.getElementById("modalOverlay").classList.add("active");
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
}

/* ── Filter buttons ── */
function initFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      document.querySelectorAll(".phil-card").forEach(card => {
        card.style.display = (f === "all" || card.dataset.era === f) ? "" : "none";
      });
    });
  });
}

/* ── Modern voices ── */
function buildModernGrid() {
  const grid = document.getElementById("modernGrid");
  MODERN_VOICES.forEach(v => {
    const el = document.createElement("div");
    el.className = "modern-card";
    el.innerHTML = `
      <div class="modern-top">
        <div>
          <h3>${v.name}</h3>
          <span class="modern-meta">${v.origin} · ${v.years}</span>
        </div>
        <span class="echo-badge">${v.echo}</span>
      </div>
      <p class="modern-tagline">${v.tagline}</p>
      <p>${v.description}</p>
    `;
    grid.appendChild(el);
  });
}

/* ── Danish list ── */
function buildDanishList() {
  const list = document.getElementById("danishList");
  DANISH_VOICES.forEach(d => {
    const el = document.createElement("div");
    el.className = "danish-item";
    const typeClass = d.type.toLowerCase().replace(/[^a-z]/g, "-");
    el.innerHTML = `
      <div class="danish-header">
        <div>
          <h3>${d.name}</h3>
          <span class="danish-meta">${d.city} · ${d.years}</span>
        </div>
        <span class="type-badge type-${typeClass}">${d.type}</span>
      </div>
      <p>${d.description}</p>
      <div class="danish-works">
        ${d.works.map(w => `<span class="work-tag">${w}</span>`).join("")}
      </div>
      <div class="danish-echo">↩ Echo: ${d.echo}</div>
    `;
    list.appendChild(el);
  });
}

/* ── Echoes section ── */
function buildEchoes() {
  const sidebar = document.getElementById("echoSidebar");
  const display = document.getElementById("echoDisplay");

  ECHOES.forEach((echo, i) => {
    const btn = document.createElement("button");
    btn.className = "echo-btn";
    btn.textContent = echo.label;
    btn.style.setProperty("--echo-color", echo.color);
    btn.addEventListener("click", () => {
      document.querySelectorAll(".echo-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderEcho(echo, display);
    });
    sidebar.appendChild(btn);
    if (i === 0) {
      btn.classList.add("active");
      renderEcho(echo, display);
    }
  });
}

function renderEcho(echo, display) {
  display.innerHTML = `
    <div class="echo-title" style="color:${echo.color}">${echo.label}</div>
    <p class="echo-desc">${echo.description}</p>
    <div class="echo-chain">
      ${echo.chain.map((step, i) => `
        <div class="echo-step" style="--step-color:${echo.color};--step-i:${i}">
          <div class="echo-step-dot"></div>
          <div class="echo-step-content">
            <span class="echo-era">${step.era}</span>
            <strong>${step.figure}</strong>
            <p>${step.text}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

/* ── Scroll animations ── */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".era, .phil-card, .modern-card, .danish-item, .echo-step").forEach(el => {
    observer.observe(el);
  });
}

/* ── Nav smooth scroll ── */
function initNav() {
  document.querySelectorAll("a[href^='#']").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

/* ── Boot ── */
buildPhilGrid();
initFilters();
buildModernGrid();
buildDanishList();
buildEchoes();
initScrollAnimations();
initNav();
