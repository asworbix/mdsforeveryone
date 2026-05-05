/* ── Echoes accordion ── */
function buildEchoes() {
  const container = document.getElementById("echoesAccordion");

  ECHOES.forEach((echo, i) => {
    const el = document.createElement("div");
    el.className = "echo-item";
    el.style.setProperty("--echo-color", echo.color);

    el.innerHTML = `
      <div class="echo-item-header">
        <div class="echo-item-left">
          <span class="echo-item-num">${String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 class="echo-item-label">${echo.label}</h3>
            <p class="echo-item-desc">${echo.description}</p>
          </div>
        </div>
        <button class="echo-item-toggle" aria-label="expand">
          <span class="toggle-icon">+</span>
        </button>
      </div>
      <div class="echo-item-body">
        <div class="echo-chain-new">
          ${echo.chain.map((step, si) => `
            <div class="echo-chain-step" style="--si:${si}">
              <div class="echo-chain-left">
                <div class="echo-chain-dot"></div>
                ${si < echo.chain.length - 1 ? '<div class="echo-chain-line"></div>' : ''}
              </div>
              <div class="echo-chain-content">
                <span class="echo-chain-era">${step.era}</span>
                <strong class="echo-chain-figure">${step.figure}</strong>
                <p class="echo-chain-text">${step.text}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    const header = el.querySelector(".echo-item-header");
    const body = el.querySelector(".echo-item-body");
    const icon = el.querySelector(".toggle-icon");

    header.addEventListener("click", () => {
      const isOpen = el.classList.toggle("open");
      icon.textContent = isOpen ? "−" : "+";
      body.style.maxHeight = isOpen ? body.scrollHeight + "px" : "0";
    });

    if (i === 0) {
      el.classList.add("open");
      icon.textContent = "−";
      setTimeout(() => { body.style.maxHeight = body.scrollHeight + "px"; }, 10);
    }

    container.appendChild(el);
  });
}

/* ── AI Impacts ── */
function buildAIImpacts() {
  const container = document.getElementById("aiImpacts");
  AI_IMPACTS.forEach(imp => {
    const el = document.createElement("div");
    el.className = "impact-card";
    el.innerHTML = `
      <div class="impact-top" style="border-left-color:${imp.color}">
        <div class="impact-anchor">
          <span class="impact-anchor-who" style="color:${imp.color}">${imp.anchor}</span>
          <p class="impact-anchor-quote">"${imp.anchorText}"</p>
        </div>
        <h3 class="impact-title">${imp.title}</h3>
      </div>
      <div class="impact-body">
        <p class="impact-now">${imp.now}</p>
        <div class="impact-stakes">
          <span class="stakes-label">Stakes</span>
          <p>${imp.stakes}</p>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

/* ── AI Tradeoffs ── */
function buildAITradeoffs() {
  const container = document.getElementById("aiTradeoffs");
  AI_TRADEOFFS.forEach(t => {
    const el = document.createElement("div");
    el.className = "tradeoff-card";
    el.innerHTML = `
      <div class="tradeoff-topic">${t.topic}</div>
      <div class="tradeoff-split">
        <div class="tradeoff-gain">
          <span class="tradeoff-label gain-label">Gain</span>
          <p>${t.gain}</p>
        </div>
        <div class="tradeoff-loss">
          <span class="tradeoff-label loss-label">Loss</span>
          <p>${t.loss}</p>
        </div>
      </div>
      <div class="tradeoff-lens">
        <span class="lens-icon">◎</span>
        <p>${t.lens}</p>
      </div>
    `;
    container.appendChild(el);
  });
}

/* ── AI Questions ── */
function buildAIQuestions() {
  const container = document.getElementById("aiQuestions");
  AI_QUESTIONS.forEach(q => {
    const el = document.createElement("div");
    el.className = "ai-question";
    el.innerHTML = `
      <div class="ai-question-header" style="border-left-color:${q.color}">
        <span class="ai-icon" style="color:${q.color}">${q.icon}</span>
        <div>
          <h3>${q.question}</h3>
          <p class="ai-anchor">${q.anchor}</p>
        </div>
        <span class="ai-q-toggle">+</span>
      </div>
      <div class="ai-positions">
        ${q.positions.map(p => `
          <div class="ai-position">
            <strong style="color:${q.color}">${p.label}</strong>
            <p>${p.text}</p>
          </div>
        `).join("")}
      </div>
    `;
    const header = el.querySelector(".ai-question-header");
    const positions = el.querySelector(".ai-positions");
    const toggle = el.querySelector(".ai-q-toggle");
    header.addEventListener("click", () => {
      const open = el.classList.toggle("open");
      toggle.textContent = open ? "−" : "+";
      positions.style.maxHeight = open ? positions.scrollHeight + "px" : "0";
    });
    container.appendChild(el);
  });
}

/* ── AI Thinkers ── */
function buildAIThinkers() {
  const container = document.getElementById("aiThinkers");
  AI_THINKERS.forEach(t => {
    const el = document.createElement("div");
    el.className = "ai-thinker";
    el.innerHTML = `
      <div class="ai-thinker-top">
        <div class="ai-thinker-avatar" style="background:${t.color}22;border-color:${t.color};color:${t.color}">
          ${t.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
        </div>
        <div>
          <h4>${t.name}</h4>
          <span class="ai-thinker-meta">${t.origin} · ${t.years}</span>
        </div>
      </div>
      <div class="ai-thinker-echo"><span class="echo-badge">${t.echo}</span></div>
      <p class="ai-thinker-tagline" style="color:${t.color}">${t.tagline}</p>
      <p>${t.description}</p>
    `;
    container.appendChild(el);
  });
}

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
      <div class="danish-echo">Echo: ${d.echo}</div>
    `;
    list.appendChild(el);
  });
}

/* ── Favourites ── */
function buildFavourites() {
  const grid = document.getElementById("favGrid");
  FAVOURITES.forEach((f, i) => {
    const card = document.createElement("div");
    card.className = "fav-card";
    card.style.setProperty("--fav-color", f.color);
    card.innerHTML = `
      <div class="fav-number" style="color:${f.color}">${String(i + 1).padStart(2, "0")}</div>
      <div class="fav-card-inner">
        <div class="fav-meta" style="color:${f.color}">${f.years}</div>
        <h3 class="fav-name">${f.name}</h3>
        <p class="fav-tagline">${f.tagline}</p>
        <blockquote class="fav-pull" style="border-color:${f.color}">"${f.pull}"</blockquote>
        <div class="fav-body">
          <h4 style="color:${f.color}">Why this one</h4>
          <p>${f.why}</p>
          <h4 style="color:${f.color}">The tension</h4>
          <p>${f.keyTension}</p>
          <h4 style="color:${f.color}">Why it resonates now</h4>
          <p>${f.resonance}</p>
          <div class="fav-works">
            ${f.works.map(w => `<span class="work-tag">${w}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  const thread = document.getElementById("threadNodes");
  FAV_THREAD.forEach(t => {
    const el = document.createElement("div");
    el.className = "thread-node";
    el.innerHTML = `
      <div class="thread-node-names">
        <span style="color:${t.color}">${t.from}</span>
        <span class="thread-arrow">→</span>
        <span style="color:${t.color}">${t.to}</span>
      </div>
      <p class="thread-note">${t.note}</p>
    `;
    thread.appendChild(el);
  });
}

/* ── Agent Store (tabbed) ── */
const RAW_BASE = "https://raw.githubusercontent.com/asworbix/reinvent/main/agents/";
const promptCache = {};

function buildAgentTabs() {
  const tabList = document.getElementById("agentTabList");
  const panel = document.getElementById("agentTabPanel");

  AGENT_STORE.forEach((agent, i) => {
    const tab = document.createElement("button");
    tab.className = "agent-tab";
    tab.dataset.index = i;
    tab.style.setProperty("--agent-color", agent.color);
    tab.innerHTML = `
      <div class="agent-tab-avatar" style="background:${agent.color}18;border-color:${agent.color}44;color:${agent.color}">
        ${agent.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
      </div>
      <div class="agent-tab-info">
        <span class="agent-tab-name">${agent.name}</span>
        <span class="agent-tab-years">${agent.years}</span>
      </div>
    `;
    tab.addEventListener("click", () => selectAgent(i));
    tabList.appendChild(tab);
  });

  selectAgent(0);
}

function selectAgent(index) {
  const agent = AGENT_STORE[index];
  const panel = document.getElementById("agentTabPanel");

  document.querySelectorAll(".agent-tab").forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });

  panel.innerHTML = `
    <div class="agent-panel-header" style="border-top-color:${agent.color}">
      <div class="agent-panel-id">
        <div class="agent-panel-avatar" style="background:${agent.color}18;border-color:${agent.color};color:${agent.color}">
          ${agent.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
        </div>
        <div>
          <h3 class="agent-panel-name">${agent.name}</h3>
          <span class="agent-panel-years">${agent.years}</span>
        </div>
      </div>
    </div>
    <div class="agent-panel-body">
      <p class="agent-panel-tagline" style="color:${agent.color}">${agent.tagline}</p>
      <p class="agent-panel-strength">${agent.strength}</p>
      <blockquote class="agent-panel-sample">"${agent.sample}"</blockquote>
      <div class="agent-panel-prompt">
        <div class="agent-panel-prompt-header">
          <span class="agent-panel-prompt-label">System prompt</span>
          <button class="agent-copy-btn" id="agentCopyBtn" style="--agent-color:${agent.color}">Copy prompt</button>
        </div>
        <pre class="agent-panel-prompt-content" id="agentPromptContent">Loading…</pre>
      </div>
    </div>
  `;

  document.getElementById("agentCopyBtn").addEventListener("click", () => {
    const text = document.getElementById("agentPromptContent").textContent;
    if (text === "Loading…" || text.startsWith("Could not")) return;
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById("agentCopyBtn");
      btn.textContent = "Copied!";
      setTimeout(() => { btn.textContent = "Copy prompt"; }, 2000);
    });
  });

  if (promptCache[agent.file]) {
    document.getElementById("agentPromptContent").textContent = promptCache[agent.file];
  } else {
    fetch(RAW_BASE + agent.file)
      .then(r => r.text())
      .then(text => {
        promptCache[agent.file] = text;
        const el = document.getElementById("agentPromptContent");
        if (el) el.textContent = text;
      })
      .catch(() => {
        const el = document.getElementById("agentPromptContent");
        if (el) el.textContent = "Could not load. Find it in the agents/ folder of the repository.";
      });
  }
}

/* ── Scroll animations ── */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(
    ".era, .phil-card, .modern-card, .danish-item, .ai-question, .ai-thinker, .fav-card, .thread-node, .echo-item, .impact-card, .tradeoff-card"
  ).forEach(el => observer.observe(el));
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
buildAgentTabs();
buildEchoes();
buildAIImpacts();
buildAITradeoffs();
buildAIQuestions();
buildAIThinkers();
buildPhilGrid();
initFilters();
buildModernGrid();
buildDanishList();
buildFavourites();
initScrollAnimations();
initNav();
