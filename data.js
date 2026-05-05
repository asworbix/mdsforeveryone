const PHILOSOPHERS = [
  {
    id: "socrates",
    name: "Socrates",
    years: "470–399 BCE",
    era: "greek",
    tagline: "The unexamined life is not worth living",
    image: "socrates",
    color: "#c8a97e",
    summary: "Socrates wrote nothing himself - we know him through Plato's dialogues. He developed the method of elenctic questioning (the Socratic method): a relentless probing of assumptions until the interlocutor realises they don't actually know what they thought they knew.",
    keyIdeas: [
      "The Socratic method - questioning as a path to truth",
      "Moral intellectualism - wrongdoing is always ignorance",
      "The examined life as the only life worth living",
      "Knowledge of one's own ignorance as wisdom"
    ],
    modernEcho: "Every self-help coach, therapist or corporate workshop facilitator using 'powerful questions' is recycling Socratic method. The entire culture of therapy rests on an idea that Socrates was arrested for.",
    legacy: "Plato, Stoicism, Christian moral philosophy, psychoanalysis, coaching culture"
  },
  {
    id: "plato",
    name: "Plato",
    years: "428–348 BCE",
    era: "greek",
    tagline: "Opinion is the medium between knowledge and ignorance",
    image: "plato",
    color: "#8fa8c8",
    summary: "Plato founded the Academy in Athens - arguably the first university. His Theory of Forms holds that the physical world is a shadow of a higher reality of perfect, eternal Forms. His political philosophy in The Republic remains one of the most influential - and most argued over - texts in Western thought.",
    keyIdeas: [
      "Theory of Forms - true reality is abstract and perfect",
      "The Allegory of the Cave - perception vs. reality",
      "Philosopher-kings - rule by the wise",
      "The tripartite soul - reason, spirit, appetite"
    ],
    modernEcho: "Every time someone says 'the ideal version of X' or talks about 'what democracy really means' versus what it is in practice, they're operating in Platonic territory. Silicon Valley's obsession with 'the product vision' vs. the messy actual product is almost embarrassingly Platonic.",
    legacy: "Aristotle, Neoplatonism, Christian theology, rationalist philosophy, political theory"
  },
  {
    id: "aristotle",
    name: "Aristotle",
    years: "384–322 BCE",
    era: "greek",
    tagline: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    image: "aristotle",
    color: "#a8c89e",
    summary: "Aristotle was Plato's most gifted student and then his greatest critic. Where Plato pointed up to abstract Forms, Aristotle pointed down at the actual world. He founded biology, logic, rhetoric, poetics and political science as systematic disciplines. His concept of eudaimonia - flourishing - is the ancestor of almost all modern positive psychology.",
    keyIdeas: [
      "Eudaimonia - human flourishing as the highest good",
      "Virtue ethics - character over rules or consequences",
      "The Golden Mean - virtue as the middle path",
      "Hylomorphism - matter and form as inseparable",
      "The four causes - material, formal, efficient, final"
    ],
    modernEcho: "Positive psychology and the 'strengths-based' movement is Aristotelian virtue ethics with a new coat of paint. The entire field of character education in schools traces back directly to the Nicomachean Ethics.",
    legacy: "Scholasticism, Islamic philosophy (Averroes, Avicenna), scientific method, virtue ethics revival"
  },
  {
    id: "epicurus",
    name: "Epicurus",
    years: "341–270 BCE",
    era: "greek",
    tagline: "Do not spoil what you have by desiring what you have not.",
    image: "epicurus",
    color: "#c8b89e",
    summary: "Epicurus founded a community - 'the Garden' - in Athens where men, women and slaves lived together as equals, pursuing philosophical conversation and simple pleasures. Widely misunderstood as hedonism, his philosophy was actually about achieving ataraxia (tranquillity) and aponia (freedom from pain) through friendship, modest living and the removal of irrational fears, especially the fear of death.",
    keyIdeas: [
      "Ataraxia - tranquillity as the highest pleasure",
      "Materialism about the soul - no afterlife to fear",
      "Friendship as the greatest good",
      "Simple pleasures over intense but fleeting ones",
      "The tetrapharmakos - four-fold remedy for anxiety"
    ],
    modernEcho: "The entire wellness industry - from mindfulness apps to minimalism to the slow living movement - is Epicureanism with a subscription model. Even 'digital detox' retreats are basically the Garden of Epicurus with better Wi-Fi (or none at all).",
    legacy: "Lucretius, Enlightenment materialism, utilitarian pleasure calculus, modern wellness culture"
  },
  {
    id: "marcus",
    name: "Marcus Aurelius",
    years: "121–180 CE",
    era: "greek",
    tagline: "You have power over your mind, not outside events. Realise this, and you will find strength.",
    image: "marcus",
    color: "#b89eb8",
    summary: "A Roman emperor who spent his reign fighting wars he found meaningless and writing Meditations - a private journal of Stoic self-discipline that he never intended to publish. The most powerful man in the world reminding himself daily that power, fame and comfort are indifferent to virtue. A deeply human document.",
    keyIdeas: [
      "The dichotomy of control - only our judgements are 'up to us'",
      "Amor fati - love of fate",
      "The view from above - cosmological perspective on personal troubles",
      "Reason as the divine spark in every person",
      "Daily practice over abstract theory"
    ],
    modernEcho: "The modern Stoicism revival (Ryan Holiday, Tim Ferriss's 'fear-setting', countless productivity YouTubers) is almost entirely Marcus Aurelius and Epictetus re-packaged. Cognitive Behavioural Therapy's core insight - that it's not events but our judgements of events that disturb us - is lifted from Epictetus almost word for word.",
    legacy: "Stoic tradition, CBT, modern self-help, Ryan Holiday's Daily Stoic empire"
  },
  {
    id: "descartes",
    name: "René Descartes",
    years: "1596–1650",
    era: "modern",
    tagline: "I think, therefore I am.",
    image: "descartes",
    color: "#9eb8c8",
    summary: "Descartes tried to rebuild knowledge from scratch by doubting everything that could possibly be doubted. He concluded that the one thing he couldn't doubt was his own doubting - his thinking self. From this he rebuilt a rationalist system. His mind-body dualism - the idea that mind and matter are fundamentally different substances - has haunted philosophy and science ever since.",
    keyIdeas: [
      "Methodological doubt as a philosophical tool",
      "Cogito ergo sum - the self-certifying nature of thought",
      "Mind-body dualism - res cogitans vs res extensa",
      "Innate ideas - some knowledge is prior to experience",
      "The mechanistic view of nature"
    ],
    modernEcho: "The 'hard problem of consciousness' - why physical processes give rise to subjective experience - is a direct descendant of Cartesian dualism. Every neuroscientist who wonders 'why does it feel like something to see red?' is arguing with Descartes.",
    legacy: "Rationalism, mind-body problem, modern science, philosophy of mind"
  },
  {
    id: "hume",
    name: "David Hume",
    years: "1711–1776",
    era: "modern",
    tagline: "Reason is, and ought only to be the slave of the passions.",
    image: "hume",
    color: "#c8a8a8",
    summary: "Scotland's greatest philosopher - and possibly the most radical empiricist ever. Hume argued that all knowledge comes from sensory experience, that causation is a habit of mind not a fact of nature, that the self is not a thing but a 'bundle of perceptions', and that morality is grounded in sentiment not reason. He woke Kant from his 'dogmatic slumber'.",
    keyIdeas: [
      "Empiricism - all knowledge from experience",
      "The problem of induction - the future need not resemble the past",
      "Causation as constant conjunction, not necessary connection",
      "The bundle theory of the self - no persistent 'I'",
      "Moral sentimentalism - is-ought distinction"
    ],
    modernEcho: "Hume's bundle theory of self looks startlingly like both Buddhist anatta (no-self) and contemporary neuroscientific accounts of consciousness as a narrative construction. The 'is-ought gap' remains the central problem in metaethics.",
    legacy: "Kant, utilitarianism, analytic philosophy, scepticism, neuroscience of self"
  },
  {
    id: "kant",
    name: "Immanuel Kant",
    years: "1724–1804",
    era: "modern",
    tagline: "Act only according to that maxim by which you can at the same time will that it should become a universal law.",
    image: "kant",
    color: "#a8c8b8",
    summary: "Kant attempted to reconcile rationalism and empiricism and ended up reshaping all of philosophy. His critical philosophy asked: what are the conditions of possibility for experience and knowledge? His ethics - deontology - holds that the moral worth of an action depends entirely on the maxim (principle) behind it, not its consequences. Persons are ends in themselves, never merely means.",
    keyIdeas: [
      "The Copernican revolution in philosophy - the mind structures experience",
      "Synthetic a priori knowledge",
      "The Categorical Imperative - universalisability",
      "Persons as ends-in-themselves",
      "Phenomena vs noumena - the limits of knowledge"
    ],
    modernEcho: "International human rights law is built on Kantian foundations. Every time someone says 'you can't treat people as mere tools' they're channelling Kant. AI ethics discourse is almost entirely Kantian deontology vs. utilitarian consequentialism - a debate Kant helped frame.",
    legacy: "German Idealism, deontological ethics, human rights theory, analytic philosophy"
  },
  {
    id: "kierkegaard",
    name: "Søren Kierkegaard",
    years: "1813–1855",
    era: "19th",
    tagline: "The most common form of despair is not being who you are.",
    image: "kierkegaard",
    color: "#c8c89e",
    summary: "Copenhagen's great melancholic. Kierkegaard wrote under pseudonyms, describing the 'stages of existence': the aesthetic (living for pleasure and novelty), the ethical (living by duty) and the religious (the 'leap of faith' into an absurd relationship with God). He is often called the first existentialist, though he would have resisted any -ism. His critique of the crowd - 'the public' as a fiction that dissolves personal responsibility - reads as a prophecy of social media.",
    keyIdeas: [
      "Stages of existence - aesthetic, ethical, religious",
      "The leap of faith - passionate commitment beyond evidence",
      "Subjectivity as truth - especially in matters of existence",
      "The crowd as untruth - individual vs. mass",
      "Despair as the sickness unto death"
    ],
    modernEcho: "Existential therapy, meaning-centred psychotherapy (Viktor Frankl), and the entire genre of 'authentic living' self-help all descend from Kierkegaard. His critique of the 'public' and 'the crowd' as forces that numb the individual is quoted endlessly in discussions of social media and algorithmic conformity.",
    legacy: "Existentialism, existential therapy, 20th-century theology, Heidegger, Sartre"
  },
  {
    id: "nietzsche",
    name: "Friedrich Nietzsche",
    years: "1844–1900",
    era: "19th",
    tagline: "He who has a why to live can bear almost any how.",
    image: "nietzsche",
    color: "#c89e9e",
    summary: "Nietzsche declared the death of God - meaning the collapse of the metaphysical and moral framework that had organised Western civilisation. In the resulting nihilistic vacuum, he argued, the Übermensch (overman) would create new values rather than inherit them. His concept of will to power, eternal recurrence, and perspectivism make him the most quoted and most misunderstood philosopher of the modern era.",
    keyIdeas: [
      "The death of God - collapse of inherited values",
      "Will to power - the basic drive in all living things",
      "Eternal recurrence - would you live this life again?",
      "Übermensch - self-overcoming value creation",
      "Perspectivism - no view from nowhere",
      "Master/slave morality - genealogy of ethics"
    ],
    modernEcho: "The startup culture's 'disruptive innovation', the athlete's 'become who you are', Jordan Peterson's self-help programme - all wear Nietzschean clothing. His warning about ressentiment (reactive, envy-driven values) is increasingly relevant to online culture.",
    legacy: "Existentialism, postmodernism, continental philosophy, cultural criticism"
  },
  {
    id: "heidegger",
    name: "Martin Heidegger",
    years: "1889–1976",
    era: "20th",
    tagline: "Every man is born as many men and dies as a single one.",
    image: "heidegger",
    color: "#a89ec8",
    summary: "Heidegger's Being and Time (1927) attempted to revive the question of Being itself - what does it mean to exist? His concept of Dasein (being-there) - human existence as always already thrown into a world, facing death, oriented by care - is one of the most influential and contested ideas of the 20th century. His later work turned to technology, language and art. His Nazi involvement remains a deep moral problem for his reception.",
    keyIdeas: [
      "Being-in-the-world - existence before essence",
      "Dasein - human being as care-structure",
      "Thrownness and projection - facticity and possibility",
      "Being-toward-death as authenticity condition",
      "The question of technology - enframing the world",
      "Language as the house of Being"
    ],
    modernEcho: "Phenomenological user experience design, 'embedded cognition' in cognitive science, and ecological philosophy all draw on Heidegger. His critique of technology - that it turns everything, including humans, into 'standing reserve' - is the most sophisticated framework available for analysing platform capitalism.",
    legacy: "Existentialism, phenomenology, hermeneutics, deconstruction, cognitive science"
  },
  {
    id: "beauvoir",
    name: "Simone de Beauvoir",
    years: "1908–1986",
    era: "20th",
    tagline: "One is not born, but rather becomes, a woman.",
    image: "beauvoir",
    color: "#c8a8c8",
    summary: "De Beauvoir applied existentialist philosophy - particularly Sartre's - to the situation of women, producing The Second Sex (1949), one of the founding texts of modern feminism. Her analysis of 'the Other' - how women are constructed as Other in relation to a male default - shaped gender theory for decades. She also wrote deeply on ageing, ethics and the phenomenology of lived experience.",
    keyIdeas: [
      "Woman as Other - constructed, not natural",
      "Situated freedom - freedom always within a situation",
      "The ethics of ambiguity - living with irreducible tension",
      "Transcendence vs. immanence - freedom vs. facticity",
      "Phenomenology of lived body"
    ],
    modernEcho: "Contemporary gender theory, intersectionality debates, and the philosophy of embodiment all build on de Beauvoir. Her insistence that social position shapes consciousness remains one of the most productive ideas in contemporary social philosophy.",
    legacy: "Feminist philosophy, gender studies, existential ethics, post-colonial theory"
  }
];

const MODERN_VOICES = [
  {
    name: "Peter Singer",
    years: "b. 1946",
    origin: "Australian",
    tagline: "Effective altruism's philosophical engine",
    description: "Singer's utilitarian argument that affluent people are morally obligated to give to the global poor until it 'hurts' launched the effective altruism movement. His work on animal liberation (1975) changed the terms of the debate about our obligations to non-human life. Deeply controversial - and unavoidably influential.",
    echo: "Bentham & Mill's utilitarianism, universalised"
  },
  {
    name: "Martha Nussbaum",
    years: "b. 1947",
    origin: "American",
    tagline: "Capabilities, emotions and liberal humanism",
    description: "Nussbaum revived the Aristotelian tradition by developing the 'capabilities approach' to justice: what can people actually do and be? Her work on the role of emotions in ethical reasoning and the fragility of goodness makes classical philosophy live again in pressing contemporary questions.",
    echo: "Aristotle's eudaimonia, reframed for pluralist democracy"
  },
  {
    name: "Slavoj Žižek",
    years: "b. 1949",
    origin: "Slovenian",
    tagline: "Hegel, Lacan and the ideology of everyday life",
    description: "Žižek is a provocateur who wields Hegelian dialectic and Lacanian psychoanalysis to expose the hidden ideological structure of everything from blockbuster films to the global financial system. Wildly prolific, difficult and often deliberately transgressive. Whether he is philosophy or performance art remains productively unclear.",
    echo: "Hegel's dialectic, Marx's ideology critique, Lacan's unconscious"
  },
  {
    name: "Byung-Chul Han",
    years: "b. 1959",
    origin: "Korean-German",
    tagline: "Burnout society and the transparency imperative",
    description: "Han's short, dense books diagnose contemporary pathologies: the burnout society, the transparency society, the palliative society. Drawing on Heidegger and Benjamin, he argues that neoliberal achievement culture produces a psycho-political violence more insidious than external domination - we exploit ourselves.",
    echo: "Heidegger on technology, Nietzsche's self-overcoming gone wrong"
  },
  {
    name: "Angela Davis",
    years: "b. 1944",
    origin: "American",
    tagline: "Abolition, freedom and intersecting oppressions",
    description: "Davis's philosophy of prison abolition is grounded in a Marxist and feminist analysis of how race, gender and class intersect in systems of confinement. Her concept of freedom is not merely negative (freedom from) but positive - a collective, embodied practice of building different social structures.",
    echo: "Marx, feminist philosophy, Du Bois's double consciousness"
  },
  {
    name: "Nick Bostrom",
    years: "b. 1973",
    origin: "Swedish",
    tagline: "Existential risk and the long-term future",
    description: "Bostrom's work on superintelligence and existential risk has moved from academic curiosity to policy-shaping force. His simulation argument - the claim that we are probably living in a computer simulation - is Plato's Cave for the digital age. Whether he is a philosopher or a technologist-with-philosophy credentials is itself an interesting question.",
    echo: "Plato's Cave, utilitarian long-termism, Pascalian risk calculus"
  }
];

const DANISH_VOICES = [
  {
    name: "Søren Kierkegaard",
    years: "1813–1855",
    type: "Classical",
    city: "Copenhagen",
    description: "The unavoidable starting point for any Danish philosophy list. Kierkegaard invented existentialism before it had a name, writing in Danish (a choice that limited his readership deliberately) about the terror and beauty of individual existence. His journals alone would make him one of the most remarkable minds of the 19th century.",
    works: ["Either/Or", "Fear and Trembling", "The Sickness Unto Death", "Concluding Unscientific Postscript"],
    echo: "Individual vs. crowd - an anxiety very much alive today"
  },
  {
    name: "Knud Ejler Løgstrup",
    years: "1905–1981",
    type: "20th Century",
    city: "Aarhus",
    description: "Løgstrup's The Ethical Demand (Den etiske fordring, 1956) is one of the most significant works of Scandinavian philosophy. He argued that we are always already holding something of another person's life in our hands - and this creates an unspoken, radical ethical demand that cannot be systematised or calculated. Deeply Lutheran in flavour but philosophically original.",
    works: ["The Ethical Demand", "Metaphysics", "System and Symbol"],
    echo: "Responsibility as pre-theoretical - ethics before ethics"
  },
  {
    name: "Peter Kemp",
    years: "b. 1937",
    type: "Contemporary",
    city: "Copenhagen",
    description: "Kemp is perhaps Denmark's most internationally connected philosopher, working at the intersection of phenomenology, hermeneutics and applied ethics. He studied with Ricoeur in Paris and has written on narrative identity, world citizenship and the philosophical foundations of bioethics. He has been a key bridge between French continental philosophy and the Nordic world.",
    works: ["World Citizen", "The Other as Neighbour", "Practical Wisdom in the Age of Technology"],
    echo: "Ricoeur's narrative self, cosmopolitan ethics"
  },
  {
    name: "Svend Brinkmann",
    years: "b. 1975",
    type: "Contemporary",
    city: "Aalborg",
    description: "Brinkmann is a psychologist-philosopher who has become one of Denmark's most widely read public intellectuals. His book Stå Fast (Stand Firm, 2014) - a deliberate provocation against the self-help and positive psychology industries - was a bestseller across Scandinavia. He argues for the Stoic-adjacent virtues of resistance, duty and the limits of self-improvement as the real path to a good life.",
    works: ["Stand Firm", "Ståsteder", "Psychology as a Moral Science"],
    echo: "Kierkegaard's critique of the crowd + Aristotelian virtue ethics"
  },
  {
    name: "Rasmus Ugilt",
    years: "b. 1975",
    type: "Contemporary",
    city: "Copenhagen",
    description: "Ugilt is a philosopher working on Hegel, Nietzsche and contemporary political philosophy. His work examines how historical consciousness shapes identity and political life. He is among the generation of Danish academics attempting to bring continental European thought into Danish public discourse.",
    works: ["Hegel's Political Philosophy", "Frihedens filosofi"],
    echo: "Hegelian dialectic as a tool for understanding the present"
  },
  {
    name: "Carsten Jensen",
    years: "b. 1952",
    type: "Author-Philosopher",
    city: "Copenhagen",
    description: "Primarily known as a novelist (Vi, de druknede / We, the Drowned), Jensen is also a fierce public intellectual and essayist. His reportage from conflict zones and his essays on Western complicity in global suffering carry a moral urgency that is philosophical in the deepest sense - even when it refuses academic categories. He embodies the Danish tradition of the writer as moral witness.",
    works: ["Vi, de druknede", "Jeg har set verden begynde", "Den fremmede"],
    echo: "Camus's engaged absurdist, Kierkegaard's individual conscience"
  },
  {
    name: "Lone Frank",
    years: "b. 1966",
    type: "Author-Philosopher",
    city: "Copenhagen",
    description: "Frank is a neuroscientist and author who writes at the border of science and philosophy of mind. Her book The Neuroscientist's Nephew is an investigation of her own family's mental illness that doubles as a meditation on free will, determinism and what neuroscience does to our self-understanding. She represents a growing tradition of scientists doing philosophy by other means.",
    works: ["The Neuroscientist's Nephew", "My Beautiful Genome", "Mindfield"],
    echo: "Hume's bundle theory of self, Spinoza's determinism - now with brain scans"
  },
  {
    name: "Lars Svendsen",
    years: "b. 1970",
    type: "Contemporary (Norwegian-Danish context)",
    city: "Bergen / Nordic",
    description: "Though Norwegian, Svendsen writes in a tradition deeply connected to the Kierkegaardian Nordic sensibility. His books on boredom, evil, loneliness and fashion are philosophical essays of the highest order - rigorous without being academic, readable without being shallow. In Scandinavia he is read as naturally on both sides of the Øresund.",
    works: ["A Philosophy of Boredom", "A Philosophy of Evil", "A Philosophy of Loneliness"],
    echo: "Kierkegaard on despair, Heidegger on anxiety - made legible"
  }
];

const AGENT_STORE = [
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
];

const FAVOURITES = [
  {
    name: "Aristotle",
    years: "384-322 BCE",
    color: "#a8c89e",
    pull: "We are what we repeatedly do.",
    tagline: "The philosopher of habit, character and the good life",
    why: "Aristotle is the one to return to when the abstract gets unbearable. He does not ask what reality ultimately is - he asks how to live well in the reality you have. Eudaimonia is not a feeling or a destination; it is a quality of activity, built through repetition until virtue becomes second nature. Everything you do is shaping the person doing it.",
    keyTension: "Where Plato points up to ideal Forms, Aristotle points down at the actual world. Where Nietzsche demands you create new values, Aristotle says the values are already there in the structure of human flourishing - you just have to practice them.",
    resonance: "The idea that excellence is a habit, not a gift, is as radical now as it was in Athens. Every creative discipline, every serious craft, every meaningful relationship runs on Aristotelian logic even when it does not know it.",
    works: ["Nicomachean Ethics", "Politics", "Poetics", "De Anima"]
  },
  {
    name: "Søren Kierkegaard",
    years: "1813-1855",
    color: "#c8c89e",
    pull: "The most common form of despair is not being who you are.",
    tagline: "The philosopher of the individual, the leap and the crowd",
    why: "Kierkegaard is the one to read when you feel the weight of other people's expectations - when the crowd tells you who to be and part of you almost believes it. He insists, over and over, that the individual is irreducible. No system, no public, no algorithm can make the choice for you. At some point you either leap or you do not.",
    keyTension: "He is the direct ancestor of existentialism but would have hated the label. He is a Christian thinker but writes under so many pseudonyms that no single voice is 'his'. The form of his writing enacts its content: you cannot receive it passively. You have to decide what it means.",
    resonance: "His critique of 'the crowd' as a force that dissolves individual conscience was written in 1840s Copenhagen and reads like a commentary on the social media feed. The crowd has never been louder. The need to remain an individual has never been harder.",
    works: ["Either/Or", "Fear and Trembling", "The Sickness Unto Death", "Stages on Life's Way"]
  },
  {
    name: "Friedrich Nietzsche",
    years: "1844-1900",
    color: "#c89e9e",
    pull: "God is dead. God remains dead. And we have killed him.",
    tagline: "The philosopher of value creation, will to power and self-overcoming",
    why: "The death of God is not an atheist slogan - it is a diagnosis. The metaphysical framework that gave Western civilisation its values, its meaning, its sense of cosmic order - that framework has collapsed. Nietzsche does not celebrate this. He is terrified of what it means. The question it leaves is the hardest one: if the old values are gone, who creates the new ones?",
    keyTension: "Nietzsche is the most dangerous philosopher to read without reading carefully. His language of power, the Ubermensch, the will to power - all were catastrophically misread by the 20th century. What he actually describes is not domination of others but self-overcoming: the relentless work of becoming who you actually are, rather than what history handed you.",
    resonance: "Every serious creative person eventually confronts Nietzsche's problem: the received values do not fit the life you are trying to build. You cannot inherit your values from a tradition you no longer believe in. You have to forge them - which is terrifying and the only honest option.",
    works: ["Thus Spoke Zarathustra", "Beyond Good and Evil", "The Gay Science", "On the Genealogy of Morality"]
  },
  {
    name: "Rick Rubin",
    years: "b. 1963",
    color: "#c8a97e",
    pull: "The work is a reflection of where you are. Not where you want to be.",
    tagline: "The producer-philosopher of creative presence and artistic surrender",
    why: "Rubin is not a credentialed philosopher - and that is precisely the point. The Creative Act: A Way of Being (2023) is one of the most genuinely philosophical books published in recent years, and it comes from someone who spent forty years in recording studios listening for what is real. His philosophy is Zen-adjacent, Stoic in practice and deeply Aristotelian in its insistence that the creative life is not a career but a way of being.",
    keyTension: "Rubin sits in a strange position between the ancient and the contemporary. He talks about the universe, sources, and clouds of creativity in language that sounds almost mystical - but his practice is utterly concrete: show up, listen, remove what does not belong, trust the work. It is Aristotle's habit doctrine applied to the recording booth.",
    resonance: "In an era of personal branding and content strategy, Rubin insists on something radical: the goal is not to impress, not to perform, not to optimise for audience - but to be honest. The work is an attempt at truth. That is a philosophical position, and it connects directly to Kierkegaard's demand for authentic individual commitment.",
    works: ["The Creative Act: A Way of Being", "Broken Record (podcast)", "Tetragrammaton (podcast)"]
  }
];

const FAV_THREAD = [
  {
    from: "Aristotle",
    to: "Kierkegaard",
    color: "#a8c89e",
    note: "Aristotle: virtue is built through repeated choice. Kierkegaard: but choice requires a leap no system can make for you."
  },
  {
    from: "Kierkegaard",
    to: "Nietzsche",
    color: "#c8c89e",
    note: "Both attack the crowd, the herd, the system. Kierkegaard leaps toward God. Nietzsche leaps away from him."
  },
  {
    from: "Nietzsche",
    to: "Rubin",
    color: "#c89e9e",
    note: "Nietzsche: you must create your own values. Rubin: and the only honest way to do that is through the work itself."
  }
];

const AI_IMPACTS = [
  {
    title: "The crowd, automated",
    color: "#c8c89e",
    anchor: "Kierkegaard, 1846",
    anchorText: "The crowd is untruth. No one in a crowd is personally accountable.",
    now: "Algorithmic feeds don't just amplify the crowd - they personalise it to each user, making it invisible. You cannot see that you are inside the machine. The crowd has never been more powerful precisely because it has never looked so individual.",
    stakes: "When the feed predicts what you want to think before you think it, the 'leap' Kierkegaard demanded becomes structurally harder to make."
  },
  {
    title: "Attention colonised",
    color: "#8fa8c8",
    anchor: "Pascal, 1670",
    anchorText: "All of humanity's problems stem from man's inability to sit quietly in a room alone.",
    now: "The attention economy industrialised distraction. AI has personalised it. The average person now encounters more persuasive stimuli per day than existed in a lifetime for most of human history. Quiet is a luxury. Boredom - philosophically essential - is nearly extinct.",
    stakes: "Heidegger argued that anxiety in the face of nothingness was the gateway to authenticity. If that anxiety is permanently suppressed by content, what becomes of authentic existence?"
  },
  {
    title: "Authorship blurred",
    color: "#c8a97e",
    anchor: "Nietzsche, 1882",
    anchorText: "Every great philosophy is the personal confession of its author.",
    now: "When a language model writes a philosophical essay indistinguishable from a human one, what is a 'personal confession'? AI-generated text reflects the statistical average of human expression - not the voice of an individual who has suffered, doubted and chosen. It is philosophy without a subject.",
    stakes: "Rubin's entire philosophy rests on the honesty of the individual creative act. That act is now in question."
  },
  {
    title: "Memory outsourced",
    color: "#a8c89e",
    anchor: "Plato, Phaedrus",
    anchorText: "Writing will create forgetfulness in learners' souls - they will trust to external marks.",
    now: "Plato's Socrates warned against writing for the same reason critics now warn against AI: externalising thought weakens the capacity for it. Search engines made memory optional. AI makes thinking optional. Each step externalises one more cognitive function.",
    stakes: "If knowing how to find an answer replaces knowing the answer, and AI finding the answer replaces knowing how to find it - what remains of the examined life?"
  },
  {
    title: "Meaning industrialised",
    color: "#b89eb8",
    anchor: "Frankl, 1946",
    anchorText: "Man's search for meaning is the primary motivation in his life.",
    now: "The meaning crisis is real and measurable: rising rates of depression, anxiety and purposelessness across the developed world, correlated with - though not simply caused by - the dominance of screen-mediated life. AI offers to solve this with personalised purpose: recommended careers, curated identities, optimised routines. It is meaning as a product.",
    stakes: "Frankl found meaning in the concentration camp, where external freedom was zero. The question is whether AI-assisted comfort makes the inner search for meaning easier or whether comfort is itself the obstacle."
  }
];

const AI_TRADEOFFS = [
  {
    topic: "Knowledge access",
    gain: "Anyone, anywhere can access the sum of human knowledge instantly and for free.",
    loss: "The discipline of not-knowing - sitting with a question, following a thread, being wrong for a long time - is disappearing.",
    lens: "Socrates: wisdom begins with knowing you don't know. That moment of productive ignorance is being automated away."
  },
  {
    topic: "Creative output",
    gain: "The barrier to producing polished work has collapsed. Ideas can be realised without years of technical craft.",
    loss: "Craft as a philosophical practice - the way mastery of a medium trains perception and patience - loses its necessity.",
    lens: "Aristotle: virtue is formed through repeated action. If the action is outsourced, so is the formation."
  },
  {
    topic: "Connection at scale",
    gain: "AI-powered communication tools let individuals reach millions. Every voice can theoretically be heard.",
    loss: "The signal-to-noise ratio collapses. Attention becomes the scarce resource and is captured by the most stimulating, not the most true.",
    lens: "Kierkegaard: the public is a monstrous abstraction. The larger the audience, the less any individual is actually addressed."
  },
  {
    topic: "Personalisation",
    gain: "Experiences, information and interfaces can be tailored to the individual with precision no prior technology could match.",
    loss: "Encountering the genuinely foreign - the idea that resists you, the book you did not choose - becomes optional. The algorithm confirms you.",
    lens: "Heidegger: authentic existence requires confronting what you did not choose. Personalisation removes precisely that confrontation."
  },
  {
    topic: "Efficiency",
    gain: "Tasks that consumed human hours are compressed to seconds. Time is freed for higher-order activity.",
    loss: "The time freed tends to be filled with more consumption. Efficiency creates capacity for meaning but does not supply it.",
    lens: "Aristotle: leisure (skhole) is not the absence of work but the space for the highest activities. Efficiency is only valuable if we know what leisure is for."
  }
];

const AI_QUESTIONS = [
  {
    id: "consciousness",
    icon: "◎",
    color: "#8fa8c8",
    question: "Can a machine be conscious?",
    anchor: "Descartes asked what makes something a mind, not a mechanism. He decided: thinking. AI now passes every behavioural test he could have imagined - and we still disagree.",
    positions: [
      { label: "Functionalism", text: "If it processes information the right way, it is conscious. The substrate does not matter. Most AI optimists land here." },
      { label: "Searle's Chinese Room", text: "Syntax is not semantics. A system can manipulate symbols perfectly without understanding anything. LLMs look exactly like the Chinese Room." },
      { label: "Integrated Information Theory", text: "Consciousness is a specific mathematical structure of causal integration. Most current AI architectures score nearly zero." },
      { label: "The Hard Problem", text: "Chalmers: even if we explain all the functions, we still have not explained why there is something it is like to be. This problem does not go away for AI." }
    ]
  },
  {
    id: "identity",
    icon: "◑",
    color: "#c8c89e",
    question: "What does AI do to the self?",
    anchor: "Hume said the self is a bundle of perceptions. AI is now generating perceptions - images, texts, voices - that are indistinguishable from human ones. What does that do to the bundle?",
    positions: [
      { label: "The Mirror Problem", text: "When you talk to an AI trained on human language, you are in some sense talking to a statistical mirror of humanity. What you get back is a reflection of what humans have said, not a new mind." },
      { label: "Extended Mind", text: "Clark and Chalmers: cognitive tools that are reliably available become part of the self. If you think with AI daily, where does your mind end and the tool begin?" },
      { label: "Narrative Identity at Risk", text: "Ricoeur argued that selfhood is the story you tell about yourself. If AI can write that story more fluently than you can, whose story is it?" },
      { label: "Kierkegaard's Crowd, Upgraded", text: "The crowd dissolved individual responsibility. The algorithm personalises the crowd to you. Now you cannot even see that you are inside it." }
    ]
  },
  {
    id: "meaning",
    icon: "◐",
    color: "#c89e9e",
    question: "If AI can do it, does it still mean anything?",
    anchor: "Aristotle grounded human meaning in our characteristic activities - the ergon of a human being. AI is colonising those activities one by one. The question is not just economic. It is existential.",
    positions: [
      { label: "The Nietzschean Response", text: "If AI renders skilled labour obsolete, we face the death of meaning at scale. Nietzsche's answer was to create new values. But create them using what, exactly?" },
      { label: "The Aristotelian Counter", text: "Eudaimonia is not about output - it is about the quality of engagement. A life of flourishing activity is not replaced by outsourcing the activities." },
      { label: "Frankl's Limit Case", text: "Meaning was found in the concentration camp, where external capacity was reduced to almost nothing. AI cannot take meaning; only we can abandon it." },
      { label: "The Open Question", text: "No one knows. We are running the experiment in real time on an entire civilisation." }
    ]
  },
  {
    id: "ethics",
    icon: "◔",
    color: "#a8c89e",
    question: "How should we treat AI - and how should it treat us?",
    anchor: "Kant said: treat persons as ends, never merely as means. The question AI forces is whether 'persons' is the right category - or whether we need new categories entirely.",
    positions: [
      { label: "Deontological AI Ethics", text: "Rights and duties regardless of consequences. If an AI can suffer, it has rights. If it cannot, we still have duties about how we design it to affect humans." },
      { label: "Utilitarian AI Ethics", text: "Maximise welfare. If AI reduces suffering at scale, use it. If algorithmic systems create systemic bias and harm, that counts in the calculus too." },
      { label: "Virtue Ethics Approach", text: "MacIntyre, Shannon Vallor: the question is not what AI should do, but what kind of human beings we become by using it. Are we cultivating or eroding our virtues?" },
      { label: "Care Ethics", text: "Relations, context, vulnerability. AI deployed in care settings changes the texture of human relationships. Is simulated care better than no care, or worse?" }
    ]
  }
];

const AI_THINKERS = [
  {
    name: "John Searle",
    years: "b. 1932",
    origin: "American",
    color: "#8fa8c8",
    tagline: "The Chinese Room argument",
    description: "Searle's 1980 thought experiment remains the sharpest challenge to strong AI: a person in a room follows rules to manipulate Chinese symbols without understanding Chinese. The room passes the test; no understanding occurs. LLMs are the Chinese Room at industrial scale. Whether Searle is right or the objections to him are right is still genuinely open.",
    echo: "Descartes' mind-body distinction, reloaded"
  },
  {
    name: "Nick Bostrom",
    years: "b. 1973",
    origin: "Swedish",
    color: "#c8c89e",
    tagline: "Superintelligence as civilisational risk",
    description: "Bostrom's Superintelligence (2014) made existential risk from AI a serious policy topic. His simulation argument - that we are probably already living in a computer simulation - is Plato's Cave with compute. Whether or not you accept his conclusions, his questions are the right ones to be asking.",
    echo: "Plato's Cave, Pascal's Wager - infinite stakes reasoning"
  },
  {
    name: "Kate Crawford",
    years: "b. 1976",
    origin: "Australian",
    color: "#c8a8c8",
    tagline: "AI as infrastructure of power",
    description: "Crawford's Atlas of AI strips away the mythology of disembodied intelligence: AI is extraction - of data, labour, minerals, land. Her analysis is Marxist political economy applied to the data centre. The cloud has a carbon footprint and a supply chain built on exploited workers. Philosophy of AI that ignores this is doing ideology, not philosophy.",
    echo: "Marx's critique of capital as hidden social relation"
  },
  {
    name: "Shannon Vallor",
    years: "b. 1971",
    origin: "American",
    color: "#a8c89e",
    tagline: "Technology ethics and virtue",
    description: "Vallor asks Aristotle's question in a technological key: what kind of person do you become by using these tools? Her Technology and the Virtues argues that AI and social media are eroding the moral habits - patience, honesty, care, self-control - that a good life requires. Not a Luddite argument; a virtue ethics one.",
    echo: "Aristotle's virtue ethics, Heidegger's question of technology"
  },
  {
    name: "Yuk Hui",
    years: "b. 1982",
    origin: "Hong Kong",
    color: "#c8b89e",
    tagline: "Cosmotechnics - technology is not universal",
    description: "Hui challenges the assumption that there is only one kind of technology - Western, globalising, disenchanting. His concept of cosmotechnics argues that different cultures have different relations between technology and cosmos, and that AI globalisation imposes one such relation on all. The most original non-Western voice in philosophy of technology.",
    echo: "Heidegger's question of technology, non-Western metaphysics"
  },
  {
    name: "Luciano Floridi",
    years: "b. 1964",
    origin: "Italian",
    color: "#b89eb8",
    tagline: "The philosophy of information",
    description: "Floridi argues we have entered the infosphere - an environment where the boundary between online and offline, artificial and natural, is dissolving. His concept of onlife captures how digital agents reshape what it means to be an agent at all. Less dramatic than Bostrom, more technically precise - and possibly more useful for actual policy.",
    echo: "Heidegger's being-in-the-world, extended to information environments"
  }
];

const ECHOES = [
  {
    id: "mindfulness",
    label: "Mindfulness",
    color: "#8fa8c8",
    description: "The billion-dollar mindfulness industry - apps, retreats, corporate wellness - is almost entirely Stoic and Epicurean philosophy with Buddhist vocabulary added.",
    chain: [
      { era: "Ancient Greece", figure: "Epicurus", text: "Ataraxia: a calm, undisturbed mind through simple living, friendship and absence of fear. Achieved by practice, not theory." },
      { era: "Ancient Rome", figure: "Marcus Aurelius", text: "Daily Meditations as a practice of returning to the present moment and accepting what cannot be changed." },
      { era: "Parallel: Buddhism", figure: "Buddhist tradition", text: "Sati (mindfulness) as sustained present-moment awareness, developed through the same centuries." },
      { era: "19th Century", figure: "Schopenhauer", text: "Western discovery of Buddhism - the will as suffering, contemplation as temporary liberation." },
      { era: "20th Century", figure: "Jon Kabat-Zinn", text: "MBSR (1979): Buddhist meditation techniques stripped of religious context, repackaged for medical and corporate use." },
      { era: "Now", figure: "Headspace / Calm / etc.", text: "Subscription apps delivering ancient Stoic-Buddhist wisdom in 10-minute daily doses." }
    ]
  },
  {
    id: "authenticity",
    label: "Authentic Self",
    color: "#c8a97e",
    description: "The obsession with being 'authentic', 'your true self' or 'genuine' is a philosophical tradition stretching from Socrates to existentialism - but modern culture has flattened it into personal branding.",
    chain: [
      { era: "Ancient Greece", figure: "Socrates", text: "'Know thyself' - the Delphic maxim that Socrates turned into a life's project. The unexamined life is not worth living." },
      { era: "Early Modern", figure: "Rousseau", text: "Authenticity as against social corruption: the natural self is good, civilisation deforms it." },
      { era: "19th Century", figure: "Kierkegaard", text: "The authentic life as a passionate, individual commitment - as opposed to the conformist 'crowd'." },
      { era: "20th Century", figure: "Heidegger / Sartre", text: "Authenticity as owning your thrownness and choosing yourself - against bad faith and das Man (the 'they')." },
      { era: "Late 20th Century", figure: "Charles Taylor", text: "The Malaise of Modernity: authenticity as a moral ideal that has been trivialised into self-indulgence." },
      { era: "Now", figure: "LinkedIn / Instagram / TikTok", text: "'Be authentic' as a personal brand strategy. The radical existential demand has become a content guideline." }
    ]
  },
  {
    id: "stoicism",
    label: "Neo-Stoicism",
    color: "#a8c89e",
    description: "From Epictetus to Ryan Holiday - Stoicism keeps returning because its core insight (control what you can, accept what you can't) is perennially useful and perennially ignored.",
    chain: [
      { era: "Ancient Greece", figure: "Zeno of Citium", text: "Founded the Stoa (~300 BCE): virtue as the only good, external things as 'indifferent'." },
      { era: "Ancient Rome", figure: "Epictetus, Marcus Aurelius, Seneca", text: "Stoicism becomes a practical daily discipline for Roman life - from slave (Epictetus) to emperor (Marcus)." },
      { era: "Early Modern", figure: "Neostoicism (Lipsius, Montaigne)", text: "Rediscovery of Stoic texts; Christian adaptation of Stoic virtue." },
      { era: "20th Century", figure: "Albert Ellis / Aaron Beck", text: "CBT's core insight - it's not events but our judgements of events - is Epictetus almost verbatim." },
      { era: "Now", figure: "Ryan Holiday, Tim Ferriss", text: "The Daily Stoic, The Obstacle Is the Way - Stoicism as productivity and resilience framework. Millions of readers." }
    ]
  },
  {
    id: "nihilism",
    label: "Nihilism & Meaning",
    color: "#c89e9e",
    description: "The anxiety that life has no inherent meaning is not new - Nietzsche diagnosed the crisis and proposed a creative response. We are still living inside that diagnosis.",
    chain: [
      { era: "Ancient", figure: "Pyrrho / Sceptics", text: "Suspension of judgement about everything: no value claim is more justified than its negation." },
      { era: "19th Century", figure: "Nietzsche", text: "The death of God - not atheism as such, but the collapse of the metaphysical structure that gave life meaning." },
      { era: "19th Century", figure: "Dostoevsky", text: "If God does not exist, everything is permitted - nihilism as a psychological and moral crisis, dramatised in fiction." },
      { era: "20th Century", figure: "Camus", text: "The absurd: life has no meaning but we must rebel against meaninglessness with defiant joy. 'One must imagine Sisyphus happy.'" },
      { era: "20th Century", figure: "Viktor Frankl", text: "Logotherapy: meaning can be found even in the worst conditions - the will to meaning as the primary human drive." },
      { era: "Now", figure: "The meaning crisis discourse", text: "Jordan Peterson, John Vervaeke, 'post-postmodern' culture - the search for meaning after deconstruction. Nietzsche's problem, still unsolved." }
    ]
  },
  {
    id: "justice",
    label: "Social Justice",
    color: "#b89eb8",
    description: "What does a just society look like? From Plato's Republic to Rawls to intersectionality - the question hasn't changed, only the proposed answers.",
    chain: [
      { era: "Ancient Greece", figure: "Plato / Aristotle", text: "Justice as each part playing its proper role (Plato) vs. justice as proportional equality based on merit (Aristotle)." },
      { era: "Early Modern", figure: "Hobbes / Locke / Rousseau", text: "Social contract theories: justice as agreement among rational individuals to exit the state of nature." },
      { era: "19th Century", figure: "Marx", text: "Justice is not possible within capitalist relations - the structure itself is the injustice." },
      { era: "20th Century", figure: "John Rawls", text: "A Theory of Justice (1971): justice as fairness - the 'veil of ignorance' thought experiment. The most influential political philosophy of the century." },
      { era: "Late 20th Century", figure: "Kimberlé Crenshaw / bell hooks", text: "Intersectionality: justice requires attending to how race, gender and class overlap and compound." },
      { era: "Now", figure: "Ongoing debates", text: "Effective altruism (global impartial justice) vs. communitarian traditions vs. decolonial theory - all variants of a 2,500-year-old question." }
    ]
  },
  {
    id: "ai-crowd",
    label: "AI & The Crowd",
    color: "#c8c89e",
    description: "Kierkegaard feared the crowd as a force that dissolved individual conscience. Social media industrialised the crowd. AI is now the crowd's nervous system - predicting, nudging and amplifying at a scale no human institution could.",
    chain: [
      { era: "Ancient Greece", figure: "Socrates", text: "Tried and executed by the crowd - 501 Athenian jurors who each individually might have voted differently. The crowd as moral hazard." },
      { era: "19th Century", figure: "Kierkegaard", text: "'The crowd is untruth.' The public is a fiction that dissolves individual responsibility. No one in a crowd feels personally accountable." },
      { era: "19th Century", figure: "Gustave Le Bon", text: "The Crowd (1895): crowds have a collective psychology distinct from individuals - more emotional, more suggestible, less rational." },
      { era: "20th Century", figure: "Hannah Arendt", text: "The Origins of Totalitarianism: mass movements weaponise the crowd's dissolution of individual judgement. Evil becomes banal when no one thinks for themselves." },
      { era: "Early 21st Century", figure: "Social media platforms", text: "Algorithmic feeds optimise for engagement - which means outrage, tribalism, conformity. The crowd is now global, real-time and machine-curated." },
      { era: "Now", figure: "Large language models", text: "AI trained on the crowd now speaks for it, at scale, in every language. The crowd has found its voice - and the voice sounds disturbingly authoritative." }
    ]
  },
  {
    id: "ai-consciousness",
    label: "AI & Consciousness",
    color: "#9eb8c8",
    description: "The question of whether machines can think is not new. What is new is that we have built machines that make the question genuinely hard to answer.",
    chain: [
      { era: "Ancient Greece", figure: "Aristotle", text: "The soul (psyche) is the form of the body - what makes a living thing alive and capable of perception, desire, thought. Is form substrate-independent?" },
      { era: "Early Modern", figure: "Descartes", text: "Animals are automata - biological machines. Only the rational soul separates humans. Where exactly is the line, and what crosses it?" },
      { era: "Early Modern", figure: "Leibniz", text: "The Mill Argument (1714): even if a machine could think, walking inside it you would find only mechanisms pushing against each other - never perception itself." },
      { era: "20th Century", figure: "Alan Turing", text: "The Imitation Game (1950): if a machine can convince a human it is human, we have no practical basis for denying it intelligence. Behaviour as the criterion." },
      { era: "20th Century", figure: "John Searle", text: "The Chinese Room (1980): behavioural success is not understanding. Syntax is not semantics. The room passes the test; nobody inside it speaks Chinese." },
      { era: "Now", figure: "Large language models", text: "GPT-4, Claude, Gemini - systems that pass every Turing-style test, write philosophy, express apparent uncertainty. Searle's room is now running in your browser. The question remains open." }
    ]
  }
];
