const RAW_BASE = "https://raw.githubusercontent.com/asworbix/reinvent/main/agents/";
const promptCache = {};
let activeCatIndex = 0;

/* ── Count total agents ── */
function updateCount() {
  const total = AGENT_CATEGORIES.reduce((sum, c) => sum + c.agents.length, 0);
  const el = document.getElementById("agentCount");
  if (el) el.textContent = total + " agents";
}

/* ── Category bar ── */
function buildCategoryBar() {
  const bar = document.getElementById("categoryBar");
  AGENT_CATEGORIES.forEach((cat, ci) => {
    const btn = document.createElement("button");
    btn.className = "cat-btn";
    btn.style.setProperty("--cat-color", cat.color);
    btn.innerHTML = `<span class="cat-label">${cat.label}</span><span class="cat-count">${cat.agents.length}</span>`;
    btn.addEventListener("click", () => selectCategory(ci));
    bar.appendChild(btn);
  });
}

/* ── Agent list ── */
function selectCategory(ci) {
  activeCatIndex = ci;
  const cat = AGENT_CATEGORIES[ci];

  document.querySelectorAll(".cat-btn").forEach((btn, i) => {
    btn.classList.toggle("active", i === ci);
  });

  const list = document.getElementById("agentList");
  list.innerHTML = "";
  cat.agents.forEach((agent, i) => {
    const btn = document.createElement("button");
    btn.className = "agent-item";
    btn.style.setProperty("--agent-color", agent.color);
    btn.innerHTML = `
      <div class="agent-item-avatar" style="background:${agent.color}15;border-color:${agent.color}40;color:${agent.color}">
        ${agent.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
      </div>
      <div class="agent-item-info">
        <span class="agent-item-name">${agent.name}</span>
        <span class="agent-item-years">${agent.years}</span>
      </div>
    `;
    btn.addEventListener("click", () => selectAgent(ci, i));
    list.appendChild(btn);
  });

  selectAgent(ci, 0);
}

/* ── Agent panel ── */
function selectAgent(ci, index) {
  const agent = AGENT_CATEGORIES[ci].agents[index];
  const panel = document.getElementById("agentPanel");

  document.querySelectorAll(".agent-item").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });

  panel.innerHTML = `
    <div class="panel-header" style="--agent-color:${agent.color}">
      <div class="panel-avatar" style="background:${agent.color}15;border-color:${agent.color};color:${agent.color}">
        ${agent.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
      </div>
      <div class="panel-id">
        <h2 class="panel-name">${agent.name}</h2>
        <span class="panel-years">${agent.years}</span>
      </div>
    </div>
    <div class="panel-body">
      <p class="panel-tagline" style="color:${agent.color}">${agent.tagline}</p>
      <p class="panel-strength">${agent.strength}</p>
      <blockquote class="panel-sample">"${agent.sample}"</blockquote>
      <div class="panel-actions">
        <button class="btn-copy" id="btnCopy" style="--agent-color:${agent.color}">Copy prompt</button>
        <a class="btn-open" id="btnOpen" href="#" target="_blank" rel="noopener" style="--agent-color:${agent.color}">Open in Claude</a>
      </div>
      <div class="panel-prompt">
        <div class="panel-prompt-bar">
          <span class="panel-prompt-label">System prompt</span>
        </div>
        <pre class="panel-prompt-content" id="promptContent">Loading…</pre>
      </div>
    </div>
  `;

  /* Copy button */
  document.getElementById("btnCopy").addEventListener("click", () => {
    const text = document.getElementById("promptContent").textContent;
    if (text === "Loading…" || text.startsWith("Could not")) return;
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById("btnCopy");
      btn.textContent = "Copied!";
      setTimeout(() => { btn.textContent = "Copy prompt"; }, 2000);
    });
  });

  /* Open in Claude — deep link with pre-filled system prompt via URL */
  const openBtn = document.getElementById("btnOpen");
  openBtn.href = "https://claude.ai/new";
  openBtn.addEventListener("click", e => {
    const text = document.getElementById("promptContent").textContent;
    if (text !== "Loading…" && !text.startsWith("Could not")) {
      navigator.clipboard.writeText(text);
    }
  });

  /* Fetch prompt */
  const cacheKey = agent.file;
  if (promptCache[cacheKey]) {
    document.getElementById("promptContent").textContent = promptCache[cacheKey];
    updateOpenLink(openBtn, promptCache[cacheKey]);
  } else {
    fetch(RAW_BASE + agent.file)
      .then(r => { if (!r.ok) throw new Error(); return r.text(); })
      .then(text => {
        promptCache[cacheKey] = text;
        const el = document.getElementById("promptContent");
        if (el) { el.textContent = text; updateOpenLink(openBtn, text); }
      })
      .catch(() => {
        const el = document.getElementById("promptContent");
        if (el) el.textContent = "Could not load. Find it in the agents/ folder of the repository.";
      });
  }
}

function updateOpenLink(btn, promptText) {
  /* Claude doesn't support URL-encoded system prompts yet — clicking copies first,
     then opens claude.ai/new so the user can paste into Project instructions */
  if (btn) btn.title = "Prompt copied — paste into Project instructions on claude.ai";
}

/* ── Boot ── */
updateCount();
buildCategoryBar();
selectCategory(0);
