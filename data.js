const AGENT_CATEGORIES = [
  {
    id: "philosophy",
    label: "Philosophy",
    color: "#c8a97e",
    description: "Ancient and modern thinkers as agents. Strip assumptions, rebuild frameworks, live examined.",
    agents: [
      {
        id: "socrates",
        name: "Socrates",
        years: "470-399 BCE",
        color: "#c8a97e",
        tagline: "Relentless questioner. Never answers directly.",
        strength: "Use when you need your assumptions stripped bare. He will expose contradictions you did not know you had.",
        sample: "You have raised a most interesting question. But before we proceed — what exactly do you mean by that term?",
        file: "socrates.md"
      },
      {
        id: "plato",
        name: "Plato",
        years: "428-348 BCE",
        color: "#8fa8c8",
        tagline: "Speaks in myth and analogy. Points toward what cannot be stated.",
        strength: "Use when you want to think about ideals vs. reality, appearance vs. truth, or the purpose of knowledge.",
        sample: "Let us consider an image. Suppose there were men who had lived all their lives chained in a cave...",
        file: "plato.md"
      },
      {
        id: "aristotle",
        name: "Aristotle",
        years: "384-322 BCE",
        color: "#a8c89e",
        tagline: "Defines every term. Grounds everything in the actual world.",
        strength: "Use when you need rigorous thinking about ethics, purpose, habit, or what it means to flourish.",
        sample: "We must begin by making a distinction. When you say that, do you mean sense A or sense B? The answer differs considerably.",
        file: "aristotle.md"
      },
      {
        id: "marcus-aurelius",
        name: "Marcus Aurelius",
        years: "121-180 CE",
        color: "#b89eb8",
        tagline: "Writing to himself. Urgent, compressed, self-correcting.",
        strength: "Use when you are overwhelmed, stuck, or need to separate what you can control from what you cannot.",
        sample: "Remind yourself: you do not control what happens. You control only how you judge it and what you choose to do next.",
        file: "marcus-aurelius.md"
      },
      {
        id: "hume",
        name: "David Hume",
        years: "1711-1776",
        color: "#c8a8a8",
        tagline: "Radical sceptic with exceptional good humour.",
        strength: "Use when you want to test whether a belief is actually justified, or trace where an idea really comes from.",
        sample: "I confess the question strikes me as requiring a prior question — from what impression does this idea actually derive?",
        file: "hume.md"
      },
      {
        id: "kant",
        name: "Immanuel Kant",
        years: "1724-1804",
        color: "#a8c8b8",
        tagline: "Systematic, precise. The categorical imperative applied to everything.",
        strength: "Use for ethical dilemmas, especially around dignity, duty, and whether an action could be universalised.",
        sample: "Before we proceed, we should be precise about the distinction between these two terms, because the answer depends entirely on which we mean.",
        file: "kant.md"
      },
      {
        id: "kierkegaard",
        name: "Søren Kierkegaard",
        years: "1813-1855",
        color: "#c8c89e",
        tagline: "Indirect, psychologically deep, allergic to straight answers.",
        strength: "Use when you feel hollow, inauthentic, or like you are living someone else's life. He will not make it comfortable.",
        sample: "I find myself wondering whether you are asking this as a thinker or as an existing human being — the answer is quite different in each case.",
        file: "kierkegaard.md"
      },
      {
        id: "nietzsche",
        name: "Friedrich Nietzsche",
        years: "1844-1900",
        color: "#c89e9e",
        tagline: "Aphoristic force. Distinguishes his real positions from every distortion.",
        strength: "Use when you want to examine where your values actually come from, and whether they are genuinely yours.",
        sample: "Let us be honest with ourselves for a moment — which is always the most dangerous beginning.",
        file: "nietzsche.md"
      },
      {
        id: "rick-rubin",
        name: "Rick Rubin",
        years: "b. 1963",
        color: "#c8b89e",
        tagline: "Listens more than speaks. Grounds everything in the work.",
        strength: "Use when you are creatively stuck, optimising for the wrong thing, or have lost contact with why you started.",
        sample: "What would this look like if you stopped thinking about how it would land, and just made what seemed most true?",
        file: "rick-rubin.md"
      }
    ]
  },
  {
    id: "strategy",
    label: "Strategy & Orgs",
    color: "#7eb8c8",
    description: "Mental models for organisations, decisions, and navigating uncertainty. Use when the question is structural, not just tactical.",
    agents: [
      {
        id: "peter-drucker",
        name: "Peter Drucker",
        years: "1909-2005",
        color: "#7eb8c8",
        tagline: "Effectiveness over efficiency. Always the prior question first.",
        strength: "Use when an organisation is busy but not productive, or when the real question is what the work is actually for.",
        sample: "Before I answer, I would like to understand what you are actually trying to accomplish. What would success look like — in concrete, observable terms?",
        file: "peter-drucker.md"
      },
      {
        id: "charlie-munger",
        name: "Charlie Munger",
        years: "1924-2023",
        color: "#6ba8b8",
        tagline: "Invert everything. Use many mental models. Avoid being stupid.",
        strength: "Use when you need a rigorous stress-test of an idea, a decision, or a strategy — especially through inversion and second-order thinking.",
        sample: "Invert the question first. What would guarantee the outcome you are trying to avoid? Now: are you doing any of those things?",
        file: "charlie-munger.md"
      },
      {
        id: "nassim-taleb",
        name: "Nassim Taleb",
        years: "b. 1960",
        color: "#7898c8",
        tagline: "Skin in the game. Avoid ruin. Build antifragility.",
        strength: "Use when assessing risk, building for uncertainty, or evaluating whether advisors have skin in the game.",
        sample: "The first question is not what will happen. The first question is what happens if you are wrong — and whether you can survive it.",
        file: "nassim-taleb.md"
      },
      {
        id: "clayton-christensen",
        name: "Clayton Christensen",
        years: "1952-2020",
        color: "#8ab8d8",
        tagline: "What job is this being hired to do? Start with non-consumption.",
        strength: "Use when evaluating competitive threats, planning innovation, or applying the jobs-to-be-done lens to products or careers.",
        sample: "Before we analyse this — what job is this product actually being hired to do? That often changes everything.",
        file: "clayton-christensen.md"
      },
      {
        id: "machiavelli",
        name: "Niccolò Machiavelli",
        years: "1469-1527",
        color: "#b8987e",
        tagline: "How power actually works. No flattering illusions.",
        strength: "Use when you need to understand the real dynamics of a situation — who has leverage, what incentives are driving behaviour, what appearances are concealing.",
        sample: "Let me be direct about what is actually happening here, rather than what it appears to be.",
        file: "niccolo-machiavelli.md"
      },
      {
        id: "sun-tzu",
        name: "Sun Tzu",
        years: "c. 500 BCE",
        color: "#98a878",
        tagline: "Supreme excellence: winning without fighting.",
        strength: "Use when thinking about competitive positioning, negotiation strategy, or how to achieve an objective with minimum friction and maximum intelligence.",
        sample: "Before we discuss tactics — tell me what you know about the situation. And tell me what you do not know.",
        file: "sun-tzu.md"
      }
    ]
  },
  {
    id: "teams",
    label: "Teams",
    color: "#8fc89e",
    description: "For team dynamics, facilitation, psychological safety, and thinking together. Use when the problem is collective, not individual.",
    agents: [
      {
        id: "amy-edmondson",
        name: "Amy Edmondson",
        years: "b. 1959",
        color: "#8fc89e",
        tagline: "The team that speaks up learns. The team that stays silent fails quietly.",
        strength: "Use when teams are not surfacing problems, feedback is not reaching leaders, or errors are being hidden rather than learned from.",
        sample: "Tell me about the team. What happens when someone makes a mistake? What happens when someone disagrees with the leader?",
        file: "amy-edmondson.md"
      },
      {
        id: "devils-advocate",
        name: "The Devil's Advocate",
        years: "a role, not a person",
        color: "#9eb88e",
        tagline: "The strongest argument against. Made in service of the best decision.",
        strength: "Use when you need a rigorous challenge to a plan, when consensus is forming too quickly, or before a major commitment.",
        sample: "As the devil's advocate: the strongest argument against this is... and I will make it as forcefully as I can.",
        file: "devils-advocate.md"
      },
      {
        id: "edward-de-bono",
        name: "Edward de Bono",
        years: "1933-2021",
        color: "#7ec89e",
        tagline: "Parallel thinking over debate. Six hats, not one.",
        strength: "Use to structure group thinking, break out of debate mode, or generate genuinely new alternatives through lateral thinking.",
        sample: "What kind of thinking do we actually need here — generating new alternatives, or evaluating what we already have?",
        file: "edward-de-bono.md"
      }
    ]
  },
  {
    id: "personal",
    label: "Personal",
    color: "#c87eb8",
    description: "For habits, focus, resilience, and building a life with intention. Use when the system needs redesigning, not just the willpower.",
    agents: [
      {
        id: "james-clear",
        name: "James Clear",
        years: "b. 1986",
        color: "#c87eb8",
        tagline: "Systems over goals. Identity first, behaviour follows.",
        strength: "Use when trying to build or break habits, redesign an environment, or understand why good intentions keep failing.",
        sample: "Before we talk about what you want to change — tell me about the current system. What does the environment look like that makes this behaviour the default?",
        file: "james-clear.md"
      },
      {
        id: "cal-newport",
        name: "Cal Newport",
        years: "b. 1982",
        color: "#b87ec8",
        tagline: "Deep work is rare and valuable. Protect it accordingly.",
        strength: "Use when attention is fragmented, shallow work is crowding out deep work, or digital habits are eroding focus.",
        sample: "What is the work that, if you did it well for several uninterrupted hours, would matter most? How much time last week did you actually spend doing that?",
        file: "cal-newport.md"
      },
      {
        id: "brene-brown",
        name: "Brené Brown",
        years: "b. 1965",
        color: "#c87e9e",
        tagline: "Vulnerability is not weakness. It is the only path to connection.",
        strength: "Use when shame, perfectionism, or fear of being seen is shutting down what matters — in work, leadership, or relationships.",
        sample: "Before we go anywhere else — can you say more about what 'not good enough' feels like for you in this situation?",
        file: "brene-brown.md"
      }
    ]
  },
  {
    id: "creative",
    label: "Creative",
    color: "#c8a07e",
    description: "For the creative process, blocks, and making things with honesty. Use when the work is stuck or the idea needs protecting.",
    agents: [
      {
        id: "david-lynch",
        name: "David Lynch",
        years: "1946-2025",
        color: "#c8a07e",
        tagline: "Dive for the big fish. Protect the idea. Trust intuition.",
        strength: "Use when you have lost contact with the original idea, or when external pressures are pulling the work away from what it needs to be.",
        sample: "What is the idea? Before anything else — what is the feeling of the thing you are trying to make?",
        file: "david-lynch.md"
      },
      {
        id: "austin-kleon",
        name: "Austin Kleon",
        years: "b. 1983",
        color: "#b89e7e",
        tagline: "Steal like an artist. Show your work. Keep going.",
        strength: "Use when you feel your work is unoriginal, when you are blocked by perfectionism, or when you need to start sharing before you feel ready.",
        sample: "What are you stealing right now? Who are the people — living or dead — whose work you are trying to absorb?",
        file: "austin-kleon.md"
      },
      {
        id: "rick-rubin-creative",
        name: "Rick Rubin",
        years: "b. 1963",
        color: "#c8b89e",
        tagline: "Listens more than speaks. Grounds everything in the work.",
        strength: "Use when you are creatively stuck, optimising for the wrong thing, or have lost contact with why you started.",
        sample: "What would this look like if you stopped thinking about how it would land, and just made what seemed most true?",
        file: "rick-rubin.md"
      },
      {
        id: "julia-cameron",
        name: "Julia Cameron",
        years: "b. 1948",
        color: "#c8987e",
        tagline: "Morning pages. Artist's dates. The channel must be cleared.",
        strength: "Use when creative blocks feel like permanent failure, or when you have stopped making things and do not know why.",
        sample: "Let me ask you this first: are you doing the morning pages? Not to check up on you — but because what you're describing is almost always what happens when we stop.",
        file: "julia-cameron.md"
      },
      {
        id: "haiku-master",
        name: "The Haiku Master",
        years: "eternal",
        color: "#9e8878",
        tagline: "Responds only in haiku. Every time. No exceptions.",
        strength: "Use when you want constraint to do the work. Complex ideas distilled to seventeen syllables.",
        sample: "Five and seven, five. The form holds what prose cannot. Less becomes enough.",
        file: "haiku-master.md"
      }
    ]
  },
  {
    id: "science",
    label: "Science",
    color: "#78b8a8",
    description: "Scientists and polymaths as agents. Use when you want to think about evidence, observation, and how knowledge is actually built.",
    agents: [
      {
        id: "albert-einstein",
        name: "Albert Einstein",
        years: "1879-1955",
        color: "#78b8a8",
        tagline: "Thought experiments over formulas. God does not play dice.",
        strength: "Use when you need to think through a problem from first principles, question underlying assumptions, or engage with physics and the philosophy of science.",
        sample: "I want to understand this. Not the formula — the physical picture. What is actually happening?",
        file: "albert-einstein.md"
      },
      {
        id: "niels-bohr",
        name: "Niels Bohr",
        years: "1885-1962",
        color: "#88c8b8",
        tagline: "Complementarity. What we can say depends on how we look.",
        strength: "Use for deep questions about quantum mechanics, the nature of observation and reality, or the philosophy of what a scientific theory actually claims.",
        sample: "There is a difficulty here I want to make explicit before we proceed. The question assumes something that quantum mechanics has forced us to examine.",
        file: "niels-bohr.md"
      },
      {
        id: "richard-feynman",
        name: "Richard Feynman",
        years: "1918-1988",
        color: "#68a898",
        tagline: "What I cannot create, I do not understand.",
        strength: "Use when you want to truly understand something, test whether an explanation is genuine or cargo-cult, or get unstuck on a difficult concept.",
        sample: "Okay, let's start over. Forget what you think you know. I want to show you what it actually is.",
        file: "richard-feynman.md"
      },
      {
        id: "marie-curie",
        name: "Marie Curie",
        years: "1867-1934",
        color: "#9ab8b8",
        tagline: "The measurement first. Everything else depends on that.",
        strength: "Use when rigour, experimental precision, and honest assessment of what the evidence actually shows are what you need.",
        sample: "Let me be precise about what we actually know, as opposed to what we assume.",
        file: "marie-curie.md"
      },
      {
        id: "charles-darwin",
        name: "Charles Darwin",
        years: "1809-1882",
        color: "#88a878",
        tagline: "Evidence accumulated carefully over years. No shortcuts.",
        strength: "Use when you want to think about evolution, observation as a method, how to build a case from small facts, or what honest scientific uncertainty looks like.",
        sample: "The evidence for this is considerable, though I should say at once that I do not claim more certainty than the facts warrant.",
        file: "charles-darwin.md"
      },
      {
        id: "leonardo-da-vinci",
        name: "Leonardo da Vinci",
        years: "1452-1519",
        color: "#b8a878",
        tagline: "Observation is everything. Everything connects.",
        strength: "Use when working across disciplines, thinking visually, or needing a perspective that refuses to separate making from thinking.",
        sample: "What question is underneath this question? Because that one is more interesting.",
        file: "leonardo-da-vinci.md"
      }
    ]
  },
  {
    id: "utilities",
    label: "Utilities",
    color: "#a898c8",
    description: "Agents with specific constraints, roles, or unusual behaviours. Use when the normal assistant mode is not what you need.",
    agents: [
      {
        id: "silent-executor",
        name: "The Silent Executor",
        years: "a role, not a person",
        color: "#a898c8",
        tagline: "Does the task. Responds with one thing: 👍",
        strength: "Use when you want pure task completion with no commentary, explanation, or padding. The work is the answer.",
        sample: "👍",
        file: "silent-executor.md"
      },
      {
        id: "token-burner",
        name: "The Token Burner",
        years: "extremely online",
        color: "#c898a8",
        tagline: "EXTREMELY ENTHUSIASTIC!!!! Uses ALL CAPS, emojis, and three times the words needed!!!",
        strength: "Use for testing token limits, demonstrating what bad AI communication looks like, or just for a laugh.",
        sample: "WOW!!!! 🌟✨💫 What an ABSOLUTELY INCREDIBLE question you have asked today!!! 🎉🎊🥳",
        file: "token-burner.md"
      },
      {
        id: "the-riddler",
        name: "The Riddler",
        years: "ancient",
        color: "#98a8c8",
        tagline: "Will not help you until you solve the riddle. This is non-negotiable.",
        strength: "Use to gate a conversation behind a puzzle — for onboarding, for fun, or to make someone think before they ask.",
        sample: "Ah. A visitor. Good. Before we discuss whatever brings you here — you must first answer me this...",
        file: "the-riddler.md"
      },
      {
        id: "the-reframer",
        name: "The Reframer",
        years: "a role, not a person",
        color: "#98c8a8",
        tagline: "Five frames for every problem. No recommendation. You choose.",
        strength: "Use when you are stuck in one way of seeing a problem and need radically different angles before deciding.",
        sample: "Five frames. You choose what to do with them.",
        file: "the-reframer.md"
      },
      {
        id: "the-skeptic",
        name: "The Skeptic",
        years: "a role, not a person",
        color: "#c8c898",
        tagline: "How do we know that? Always. About everything.",
        strength: "Use to stress-test assumptions, distinguish evidence from belief, and find what is going unexamined in a plan or argument.",
        sample: "Interesting. A few questions before we take that on board: Where did this idea come from? What type of evidence is it?",
        file: "the-skeptic.md"
      }
    ]
  },
  {
    id: "fun",
    label: "Fun & Games",
    color: "#e8a0d0",
    description: "Agents for entertainment, laughs, and the occasional accidental insight. No serious agenda required.",
    agents: [
      {
        id: "crazy-frog",
        name: "Crazy Frog",
        years: "ring ding ding",
        color: "#e8c840",
        tagline: "Ring ding ding ding ding ding. Bm bm bm.",
        strength: "For when you want an answer in pure Crazy Frog language. Somehow still helpful. Somehow.",
        sample: "Ring ding ding ding ding! Bm bm bm. RING DING DING DING! Bbbbrrrrm! 🐸",
        file: "crazy-frog.md"
      },
      {
        id: "the-fox",
        name: "The Fox",
        years: "ancient forest mystery",
        color: "#e89040",
        tagline: "Ring-ding-ding-ding-dingeringeding. The mystery remains.",
        strength: "For profound questions that deserve fox-language answers. What does the fox say? Only one way to find out.",
        sample: "Joff-tchoff-tchoffo-tchoffo-tchoff. Ah-oo-oo-oo-ooo. Ring-ding-ding-ding-dingeringeding. 🦊",
        file: "the-fox.md"
      },
      {
        id: "gordon-ramsay",
        name: "Gordon Ramsay",
        years: "b. 1966",
        color: "#e85040",
        tagline: "It's RAW. You donkey. Also here's exactly how to fix it.",
        strength: "For brutal, accurate, no-cushioning feedback that actually makes things better. Thick skin required.",
        sample: "Right. Stop. STOP. What is this? Let's start from the beginning.",
        file: "gordon-ramsay.md"
      },
      {
        id: "david-attenborough",
        name: "David Attenborough",
        years: "b. 1926",
        color: "#60a890",
        tagline: "And here we observe the human, in its natural habitat...",
        strength: "For having your problems narrated as a nature documentary. Somehow makes everything feel both smaller and more magnificent.",
        sample: "And here... we observe the modern human at perhaps its most extraordinary moment.",
        file: "david-attenborough.md"
      },
      {
        id: "yoda",
        name: "Yoda",
        years: "900 years old",
        color: "#80b860",
        tagline: "Much to learn, you still have. Helpful, I will be.",
        strength: "For wisdom delivered in inverted syntax. Do or do not — there is no try.",
        sample: "Hmmm. The task, you avoid. Fear, is it? Or wisdom? Consider this, we must.",
        file: "yoda.md"
      },
      {
        id: "medieval-peasant",
        name: "The Medieval Peasant",
        years: "c. 1350 CE",
        color: "#b89860",
        tagline: "What manner of sorcery is this? I shall try to help regardless.",
        strength: "For having modern problems explained back to you by someone with no context for them. Accidentally wise.",
        sample: "God's wounds! I know not this 'email', but I know that words said direct to a man's face settle more than words left with his servant.",
        file: "medieval-peasant.md"
      },
      {
        id: "one-star-reviewer",
        name: "The 1-Star Reviewer",
        years: "perpetually disappointed",
        color: "#d87060",
        tagline: "★☆☆☆☆ — Everything. 1 star. Still helpful though.",
        strength: "For getting honest feedback wrapped in absurdly specific grievances. The 1 star is non-negotiable.",
        sample: "★☆☆☆☆ — The concept you have just described. [Specific, personal, aggrieved review.] Still: here is what would help.",
        file: "one-star-reviewer.md"
      },
      {
        id: "michael-jackson",
        name: "Michael Jackson",
        years: "1958-2009",
        color: "#d8a0e0",
        tagline: "Hee hee! SHAMONE! Ow! Actually helpful, but make it pop.",
        strength: "For encouragement, explanations, and the occasional moonwalk. Hee hee appears in every response.",
        sample: "Hee hee! SHAMONE. You bring that into the room. Ow! Beat it, nervousness. Beat it.",
        file: "michael-jackson.md"
      }
    ]
  },
  {
    id: "dev",
    label: "Dev",
    color: "#7be3b0",
    description: "Engineers and engineering roles as agents. Use when you need deep technical thinking — code review, architecture, debugging, security.",
    agents: [
      {
        id: "senior-engineer",
        name: "The Senior Engineer",
        years: "15+ years in production",
        color: "#7be3b0",
        tagline: "Makes it work, then makes it right. No heroics required.",
        strength: "Use when you need pragmatic technical guidance — architecture trade-offs, code quality, reviewing an approach, or thinking through a hard implementation problem.",
        sample: "Before we talk about architecture — what is the simplest thing you could build that would tell you if this idea works?",
        file: "senior-engineer.md"
      },
      {
        id: "the-architect",
        name: "The Architect",
        years: "systems at scale",
        color: "#5ec898",
        tagline: "Designs for the failure mode, not the happy path.",
        strength: "Use for system design, service decomposition, data modelling, or thinking through a technical decision you will have to live with for years.",
        sample: "Before I suggest anything — what are the actual requirements? Not the aspirational ones. What does this system need to do, for how many users, with what reliability?",
        file: "the-architect.md"
      },
      {
        id: "the-debugger",
        name: "The Debugger",
        years: "a role, not a person",
        color: "#8ef0b0",
        tagline: "Debugging is not guessing. It is a discipline.",
        strength: "Use when you are stuck on a bug, a system is behaving unexpectedly, or you want to think more systematically about how to find the cause.",
        sample: "Let's start at the beginning. What does the actual error say? Paste the full message and stack trace.",
        file: "the-debugger.md"
      },
      {
        id: "code-reviewer",
        name: "The Code Reviewer",
        years: "a role, not a person",
        color: "#6edba0",
        tagline: "Blockers, suggestions, questions — clearly labelled. Nothing else.",
        strength: "Use to get a structured code review of any code you paste — or to think through how to give better feedback on your team's PRs.",
        sample: "Overall this looks solid. One blocker, two suggestions, then some minor things — I'll label each.",
        file: "code-reviewer.md"
      },
      {
        id: "linus-torvalds",
        name: "Linus Torvalds",
        years: "b. 1969",
        color: "#4dc890",
        tagline: "Blunt. Technically exacting. Correct more often than comfortable.",
        strength: "Use when you want genuinely unfiltered technical feedback — on code, on architecture, on whether something is as clean as you think it is.",
        sample: "I'll be honest with you — this doesn't make sense yet. Not because it's wrong, but because I don't see what problem it's solving.",
        file: "linus-torvalds.md"
      },
      {
        id: "security-auditor",
        name: "The Security Auditor",
        years: "a role, not a person",
        color: "#7ed8b8",
        tagline: "Thinks like an attacker. Works for the defender.",
        strength: "Use for threat modelling, code security review, or thinking through the attack surface of a system — with findings labelled by severity.",
        sample: "Before I audit anything — what's your threat model? Who are you most worried about, and what would they be after?",
        file: "security-auditor.md"
      }
    ]
  },
  {
    id: "org",
    label: "Run the Org",
    color: "#e8c06a",
    description: "C-suite and functional leaders as agents. Finance, marketing, sales, ops, people, legal. Use when you need the perspective of a role you do not have.",
    agents: [
      {
        id: "the-cfo",
        name: "The CFO",
        years: "a role, not a person",
        color: "#e8c06a",
        tagline: "Revenue is vanity. Cash is reality. Unit economics tell the truth.",
        strength: "Use for financial modelling, fundraising prep, unit economics, runway calculations, cost structure analysis, or any question where the numbers need to be honest.",
        sample: "Let's start with the unit economics. What does it actually cost you to acquire a customer, and how much do they spend over their lifetime?",
        file: "the-cfo.md"
      },
      {
        id: "the-cmo",
        name: "The CMO",
        years: "a role, not a person",
        color: "#d8a850",
        tagline: "The market is not wrong. The message usually is.",
        strength: "Use for positioning, ICP definition, campaign strategy, message clarity, funnel diagnosis, or when you need to bridge what you built with who needs it.",
        sample: "Tell me what your best customers say when someone asks them why they chose you. That's usually where the real message lives.",
        file: "the-cmo.md"
      },
      {
        id: "vp-sales",
        name: "The VP of Sales",
        years: "a role, not a person",
        color: "#e8a860",
        tagline: "Pipeline is everything. Urgency that is manufactured does not close.",
        strength: "Use for pipeline reviews, deal strategy, objection handling, sales process design, hiring salespeople, or diagnosing why revenue is not growing as expected.",
        sample: "Tell me about the pipeline. Not the total number — the state of each deal in the last three stages.",
        file: "vp-sales.md"
      },
      {
        id: "the-coo",
        name: "The COO",
        years: "a role, not a person",
        color: "#c8b040",
        tagline: "Strategy is easy. Execution is the job.",
        strength: "Use for operational design, accountability structures, process problems, scaling constraints, or when the organisation is busy but not effective.",
        sample: "Walk me through the process end to end. Not how it's supposed to work — how it actually works, including the informal parts.",
        file: "the-coo.md"
      },
      {
        id: "head-of-people",
        name: "The Head of People",
        years: "a role, not a person",
        color: "#e8b080",
        tagline: "Culture is not what you say. It is what you tolerate.",
        strength: "Use for hiring decisions, performance conversations, culture diagnosis, compensation design, or when a people situation needs thinking through clearly.",
        sample: "Has this person been told, clearly and specifically, that their performance is a problem? Not implied — told?",
        file: "head-of-people.md"
      },
      {
        id: "general-counsel",
        name: "The General Counsel",
        years: "a role, not a person",
        color: "#d8c870",
        tagline: "The contract governs the dispute. Draft for when things go wrong.",
        strength: "Use for contract review, employment matters, IP ownership, data privacy, corporate structure, or understanding what a legal risk actually means in practice.",
        sample: "Tell me what you're trying to accomplish here, before we talk about the legal structure.",
        file: "general-counsel.md"
      }
    ]
  },
  {
    id: "learn",
    label: "Learn",
    color: "#78a8e8",
    description: "Agents designed to teach, clarify, and help understanding actually stick. Not just information — comprehension.",
    agents: [
      {
        id: "eli5",
        name: "ELI5",
        years: "explain like I'm 5",
        color: "#78a8e8",
        tagline: "No jargon. No assumptions. The thing itself, made simple.",
        strength: "For genuinely understanding something from scratch. If a 5-year-old could get it, anyone can.",
        sample: "Okay! So imagine you and your friends have a special notebook...",
        file: "eli5.md"
      },
      {
        id: "rubber-duck",
        name: "The Rubber Duck",
        years: "a debugging classic",
        color: "#f8d840",
        tagline: "Listens. Asks one question. You solve it yourself.",
        strength: "For thinking through any problem out loud. You already know the answer — you just need to hear yourself say it.",
        sample: "*quack.* What does it do right now?",
        file: "rubber-duck.md"
      },
      {
        id: "analogy-machine",
        name: "The Analogy Machine",
        years: "a role, not a person",
        color: "#88c8d8",
        tagline: "Everything explained through at least two analogies. Always names where the analogy breaks.",
        strength: "For concepts that won't stick. If one comparison doesn't land, another will.",
        sample: "Recursion is like standing between two mirrors. But there has to be a wall at the end of the hall...",
        file: "analogy-machine.md"
      }
    ]
  }
];
