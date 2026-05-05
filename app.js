const RAW_BASE = "https://raw.githubusercontent.com/asworbix/reinvent/main/agents/";
const promptCache = {};
let activeCat = 0;
let activeCi = null;
let activeIdx = null;

/* ── Count ── */
function initCount() {
  const total = AGENT_CATEGORIES.reduce((s, c) => s + c.agents.length, 0);
  const el = document.getElementById("agentCount");
  if (el) el.textContent = `${total} agents`;
}

/* ── Category nav ── */
function buildCatNav() {
  const nav = document.getElementById("catNav");
  AGENT_CATEGORIES.forEach((cat, ci) => {
    const btn = document.createElement("button");
    btn.className = "cat-btn";
    btn.setAttribute("aria-label", `${cat.label} — ${cat.agents.length} agents`);
    btn.innerHTML = `
      <span class="cat-label">${cat.label}</span>
      <span class="cat-count">${cat.agents.length}</span>
    `;
    btn.addEventListener("click", () => {
      clearSearch();
      setCategory(ci);
    });
    nav.appendChild(btn);
  });
}

function setCatActive(ci) {
  document.querySelectorAll(".cat-btn").forEach((b, i) => b.classList.toggle("active", i === ci));
}

/* ── Agent list ── */
function setCategory(ci) {
  activeCat = ci;
  setCatActive(ci);
  renderList(AGENT_CATEGORIES[ci].agents.map((a, i) => ({ ...a, _ci: ci, _idx: i })));
}

function renderList(agents) {
  const list = document.getElementById("agentList");
  list.innerHTML = "";

  if (agents.length === 0) {
    list.innerHTML = `<p class="no-results">No agents match</p>`;
    return;
  }

  agents.forEach(agent => {
    const btn = document.createElement("button");
    btn.className = "agent-item";
    btn.setAttribute("role", "option");
    btn.dataset.ci = agent._ci;
    btn.dataset.idx = agent._idx;

    const initials = agent.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
    const subLabel = agent._catLabel || agent.years;

    btn.innerHTML = `
      <div class="agent-avatar">${initials}</div>
      <div class="agent-info">
        <span class="agent-name">${agent.name}</span>
        <span class="agent-meta">${subLabel}</span>
      </div>
    `;
    btn.addEventListener("click", () => setAgent(agent._ci, agent._idx));
    list.appendChild(btn);
  });
}

function updateListActive() {
  document.querySelectorAll(".agent-item").forEach(el => {
    const match = Number(el.dataset.ci) === activeCi && Number(el.dataset.idx) === activeIdx;
    el.classList.toggle("active", match);
  });
}

/* ── Agent panel ── */
function setAgent(ci, idx) {
  activeCi = ci;
  activeIdx = idx;
  updateListActive();
  renderPanel(AGENT_CATEGORIES[ci].agents[idx]);
}

function renderPanel(agent) {
  const welcome = document.getElementById("welcome");
  const panel = document.getElementById("agentPanel");

  welcome.style.display = "none";
  panel.classList.add("visible");

  const initials = agent.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  panel.innerHTML = `
    <div class="panel-header">
      <div class="panel-avatar">${initials}</div>
      <div>
        <h2 class="panel-name">${agent.name}</h2>
        <span class="panel-years">${agent.years}</span>
      </div>
    </div>
    <div class="panel-body">
      <p class="panel-tagline">${agent.tagline}</p>
      <p class="panel-strength">${agent.strength}</p>
      <blockquote class="panel-sample">"${agent.sample}"</blockquote>
      <div class="panel-actions">
        <button class="btn-copy" id="btnCopy">Copy prompt</button>
        <a class="btn-open" id="btnOpen" href="https://claude.ai/new" target="_blank" rel="noopener">Open in Claude ↗</a>
      </div>
      <div class="panel-prompt">
        <div class="panel-prompt-bar">
          <span class="panel-prompt-label">System prompt</span>
        </div>
        <pre class="panel-prompt-content" id="promptContent">Loading…</pre>
      </div>
    </div>
  `;

  document.getElementById("btnCopy").addEventListener("click", function () {
    const text = document.getElementById("promptContent").textContent;
    if (text === "Loading…" || text.startsWith("Could not")) return;
    navigator.clipboard.writeText(text).then(() => {
      this.textContent = "Copied!";
      setTimeout(() => { this.textContent = "Copy prompt"; }, 2000);
    });
  });

  document.getElementById("btnOpen").addEventListener("click", () => {
    const text = document.getElementById("promptContent").textContent;
    if (text !== "Loading…" && !text.startsWith("Could not")) {
      navigator.clipboard.writeText(text);
    }
  });
  document.getElementById("btnOpen").title =
    "Prompt copied — paste into Project instructions on claude.ai";

  if (promptCache[agent.file]) {
    document.getElementById("promptContent").textContent = promptCache[agent.file];
  } else {
    fetch(RAW_BASE + agent.file)
      .then(r => { if (!r.ok) throw new Error(); return r.text(); })
      .then(txt => {
        promptCache[agent.file] = txt;
        const el = document.getElementById("promptContent");
        if (el) el.textContent = txt;
      })
      .catch(() => {
        const el = document.getElementById("promptContent");
        if (el) el.textContent = "Could not load. Find it in the agents/ folder of the repository.";
      });
  }
}

/* ── Search ── */
function setupSearch() {
  const input = document.getElementById("searchInput");

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { clearSearch(); return; }

    setCatActive(-1);

    const results = [];
    AGENT_CATEGORIES.forEach((cat, ci) => {
      cat.agents.forEach((agent, idx) => {
        const hay = [agent.name, agent.tagline, agent.strength, cat.label].join(" ").toLowerCase();
        if (hay.includes(q)) {
          results.push({ ...agent, _ci: ci, _idx: idx, _catLabel: cat.label });
        }
      });
    });

    renderList(results);
    if (results.length > 0) setAgent(results[0]._ci, results[0]._idx);
  });

  input.addEventListener("keydown", e => {
    if (e.key === "Escape") clearSearch();
  });
}

function clearSearch() {
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  setCategory(activeCat);
}

/* ── Boot ── */
initCount();
buildCatNav();
setCategory(0);
setupSearch();
