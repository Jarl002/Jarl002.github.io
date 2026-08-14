const projects = [
  {
    slug: "fjera",
    title: "Fjera",
    year: "2026",
    category: "Webapp",
    market: "B2C",
    industry: "Health & Fitness",
    summary:
      "En webapp der kombinerer habit tracking, fysisk sundhed og social motivation – bygget på idéen om, at selvudvikling skal føles som normen, ikke som noget svært opnåeligt.",
    tags: ["UX/UI", "Webapp", "Figma", "React", "Supabase"],
    image: `${import.meta.env.BASE_URL}projects/fjera/logo.png`,
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/Jarl002/Web-App-Eksamen",
      },
    ],
    caseStudy: {
      heroImage: `${import.meta.env.BASE_URL}projects/fjera/design-system.png`,
      role: "Eksamensprojekt udarbejdet i gruppe (2. semester, Multimedie Designer). Mit fokus var på UX-research, informationsarkitektur og UI-design.",
      facts: [
        { label: "Rolle", value: "UX-research, IA & UI-design" },
        { label: "Periode", value: "2. semester, eksamensprojekt" },
        { label: "Team", value: "Gruppeprojekt" },
        { label: "Værktøjer", value: "Figma, VS Code, Supabase" },
        { label: "Metoder", value: "Double Diamond, interviews, card sorting, A/B-test" },
      ],
      problem:
        "Mange habit tracker-apps er bygget til brugere, der allerede er motiverede – de belønner ubrudte streaks og straffer pauser. For unge voksne i en travl og uforudsigelig hverdag gør det det svært at komme i gang igen, når hverdagen først har ændret sig. Vores research viste, at problemet sjældent er manglende viljestyrke, men manglende kontinuitet.",
      mission:
        "Hvordan bygger vi et redskab, der gør selvudvikling til noget, der føles let og opnåeligt – uden pres, skyldfølelse eller konkurrence?",
      process: [
        {
          phase: "Discover",
          text: "Brugerinterviews og konkurrentanalyse af eksisterende habit tracker-apps afslørede et gennemgående mønster: apps der belønner konsistens og straffer pauser passer dårligt til en målgruppe med en uforudsigelig hverdag. Vi valgte at arbejde ud fra Double Diamond-modellen for bevidst at bruge den divergerende fase til at stille spørgsmål frem for at forhaste os mod en løsning – undervejs undersøgte vi flere retninger inden for selvhjælp og vanedannelse, før vi konvergerede mod et companion-baseret koncept.",
          image: `${import.meta.env.BASE_URL}projects/fjera/double-diamond.jpg`,
          tags: ["Brugerinterviews", "Konkurrentanalyse", "Double Diamond"],
        },
        {
          phase: "Define",
          text: "Målgruppen blev indkredset til unge voksne (18-30 år) i en særligt travl periode af livet. Interviews viste tre gennemgående mønstre: en studerende der falder fra så snart hverdagen ændrer sig ('Jeg starter tit på nye vaner, men falder hurtigt fra igen'), en kontoransat der bliver overvældet af store ambitioner frem for små realistiske opgaver, og rejser som det tidspunkt hvor rutiner stopper helt. Card sorting via Useberry bekræftede, at brugerne allerede har klare mentale modeller for kategorisering – 'Brush teeth' og 'Wash your face' blev konsekvent placeret under Hygiejne, mens 'Write down your goals' hørte til under Produktivitet – og pegede på aktivitet, søvn og puls som de vigtigste sundhedsdata. Denne struktur blev senere kortlagt i en OOUX-model over appens objekter (bruger, mål, følger, ven, sundhedsdata), som lagde grunden for informationsarkitekturen. Et af vores brugerscenarier gjorde problemet konkret: en bruger med tidligere stabile rutiner mister dem i en travl, perfektionistisk periode og stopper helt – i stedet for at justere ambitionsniveauet. Det scenarie blev styrende for, at Fjera foreslår små, realistiske opgaver frem for store krav, når brugeren fortæller appen, at hverdagen føles 'træt og uoverskuelig'.",
          tags: ["Card sorting", "OOUX", "Brugerscenarier"],
        },
        {
          phase: "Develop",
          text: "Med Self-Determination Theory og Social Proof som fagligt fundament udviklede vi konceptet om en personlig 'Følger' – en fugl brugeren vælger og navngiver under onboarding, som reagerer på brugerens handlinger og fejrer fremskridt uden krav. UI'et blev bygget op om et klart visuelt hierarki, hvor Følgeren fylder mest på forsiden, med dagens mål placeret lige under. Health-siden veksler mellem en Empty og Full State, og Friends-funktionen er designet som et overlay frem for en selvstændig side, så brugeren aldrig mister sin kontekst. Den sociale del af appen – aktivitetsfeed, find-venner og et community-kort – er tænkt som mere end en social funktion: målgruppens research viste, at mange oplever mental sundhed som et tabu, og funktionen skal vise brugeren, at andre kæmper med det samme, uden at det bliver et konkurrenceelement.",
          tags: ["Følger-koncept", "UI-hierarki", "Empty/Full state"],
        },
        {
          phase: "Deliver",
          text: "Frontenden er bygget i React med Supabase som backend, med hver skærm som sin egen route (welcome, onboarding, home, health, friends m.fl.) for at holde informationsarkitekturen konsekvent. Al fuglerelateret data samles i én central fil (birdProfiles.js), og genanvendelige komponenter som BackLink, EggChoice og FriendsOverlay holder koden vedligeholdbar. Sikkerhed blev tænkt ind fra start: adgangskoder håndteres udelukkende af Supabase Auth, adgang til data styres af RLS-policies, og alle nøgler ligger i en .env-fil uden for kildekoden. En Think Out Loud-test med 5 deltagere viste, at 4 ud af 5 gennemførte onboarding uden hjælp, og at Følger-konceptet spontant blev fremhævet som det, der adskiller Fjera fra andre habit tracker-apps. En opfølgende A/B-test af goal-kortene viste, at 80% foretrak en version med en kort motiverende besked fra Følgeren frem for et rent funktionelt design – et konkret bevis på, at det emotionelle lag øger engagementet.",
          tags: ["React & Supabase", "Sikkerhed (RLS/Auth)", "Think Out Loud & A/B-test"],
        },
      ],
      learnings: [
        "At designe ud fra brugernes faktiske udfordringer frem for egne antagelser gav de stærkeste indsigter i hele projektet.",
        "Emotionelt design og funktionel feedback virker bedst, når de designes sammen fra start – ikke tilføjes som en eftertanke.",
        "Sikkerhed og datahåndtering skal tænkes ind tidligt; beslutninger om dataopbevaring er svære at rulle tilbage, når appen først er bygget.",
      ],
      gallery: [
        {
          src: `${import.meta.env.BASE_URL}projects/fjera/onboarding.png`,
          alt: "Onboarding-flow hvor brugeren vælger og navngiver sin Følger",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/fjera/homepage.png`,
          alt: "Forsiden med Følgeren og dagens mål",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/fjera/friends-overlay.png`,
          alt: "Friends-overlayet der glider op over forsiden",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/fjera/health-empty.png`,
          alt: "Health-siden i Empty State, før data er tilkoblet",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/fjera/health-cards.png`,
          alt: "Sundhedsdata vist som interaktive cards",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/fjera/my-friends.png`,
          alt: "Venneoversigt med Følgere og progression side om side",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/fjera/friends-activity.png`,
          alt: "Aktivitetsfeed der viser venners seneste fremskridt",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/fjera/find-friends-globe.png`,
          alt: "Kortvisning til at finde venner og communities",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/fjera/community-page.png`,
          alt: "Community-siden med kalender og medlemmer",
        },
      ],
    },
  },
  {
    slug: "tokyou",
    title: "To-K-You",
    year: "2026",
    category: "Webshop",
    market: "B2C",
    industry: "Fashion & Luksusmode",
    summary:
      "En kurateret high-end fashion-webshop bygget til unge, modeinteresserede brugere, der ser tøj som identitet – ikke bare beklædning.",
    tags: ["UX/UI", "Branding", "Figma", "React", "E-commerce"],
    image: `${import.meta.env.BASE_URL}projects/tokyou/logo.png`,
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/Jarl002/tokyou-eksamen",
      },
    ],
    caseStudy: {
      heroImage: `${import.meta.env.BASE_URL}projects/tokyou/brand-system.png`,
      facts: [
        { label: "Rolle", value: "UX-research, UI-design & test" },
        { label: "Periode", value: "2. semester, eksamensprojekt" },
        { label: "Team", value: "Gruppeprojekt (3 medlemmer)" },
        { label: "Værktøjer", value: "Figma, React, GitHub" },
        { label: "Metoder", value: "Segmentering, VPC, card sorting, tree testing, think-aloud" },
      ],
      role: "Eksamensprojekt udarbejdet i gruppe (2. semester, Multimedie Designer). Mit fokus var på UX-research, målgruppeanalyse, UI-design i Figma samt test og validering.",
      problem:
        "Online modehandel er præget af stor konkurrence, og mange webshops fokuserer på funktionalitet og bredt udvalg frem for identitet – hvilket ofte resulterer i generiske og uoverskuelige oplevelser. Samtidig bruger særligt yngre forbrugere (Gen Z) i stigende grad mode som identitetsmarkør, og forventer derfor mere end blot produkter fra en webshop: de søger inspiration, æstetik og eksklusivitet.",
      mission:
        "Hvordan designer vi en webshop, der skaber en overskuelig, inspirerende og æstetisk oplevelse for unge modeinteresserede brugere – og hvordan omsætter vi research og målgruppeindsigt til konkrete designvalg?",
      process: [
        {
          phase: "Discover",
          text: "Vi indledte med målgruppesegmentering og opstillede arbejdshypoteser om, at visuel identitet og æstetik har stor betydning for brugernes tillid til en webshop. Det blev kvalificeret gennem desk research (bl.a. rapporter fra Business of Fashion og McKinsey om Gen Z og modeindustrien) samt Google Trends-analyser af niche- vs. luksusbrands. Herefter gennemførte vi kvalitative interviews med brugere i alderen 23-26 år, som bekræftede at overskuelighed og enkel navigation vejer tungt, og at sociale medier som Instagram og TikTok er den primære inspirationskilde.",
          image: `${import.meta.env.BASE_URL}projects/tokyou/segmentation-matrix.png`,
          tags: ["Segmentering", "Desk research", "Interviews"],
        },
        {
          phase: "Define",
          text: "Gennem Value Proposition Canvas og How Might We-spørgsmål omsatte vi indsigterne til konkrete designudfordringer, bl.a. 'Hvordan kan vi gøre det nemt at finde relevante produkter uden at miste inspiration?'. Affinity mapping af interviews og desk research pegede på tre centrale brugerbehov: overskuelig navigation, et kurateret udvalg frem for et overvældende, og en visuel identitet der understøtter en følelse af eksklusivitet. Det blev fundamentet for brandet To-K-You – et high-end fashion-univers bygget på individualitet, mod og kreativitet, målrettet unge (18-30 år) der bruger mode som identitetsmarkør.",
          tags: ["Value Proposition Canvas", "How Might We", "Brand identitet"],
        },
        {
          phase: "Develop",
          text: "Designsystemet i Figma blev bygget op omkring en rød/sort/cremefarvet palet, en ekspressiv logotype og Gestalt-principper: nærhed i visuelle grupperinger (fx 'Pick a Mood'-sektionen), lighed i konsistente produktkort, og kontinuitet gennem gentagne elementer som sliders og den røde logofarve. 'Pick a Mood' blev en central funktion, hvor brugeren kan shoppe efter følelse i stedet for kategori – en direkte oversættelse af indsigten om, at målgruppen shopper efter identitet og stemning, ikke kun produkttype. Mobilversionen samler navigationen i en burgermenu med store, klikbare elementer, og der er arbejdet med tilgængelighed gennem tydelige kontrastfarver og fokus-states.",
          tags: ["Design system", "Gestaltprincipper", "Pick a Mood"],
        },
        {
          phase: "Deliver",
          text: "Webshoppen er bygget som en React-frontend med en komponentbaseret struktur (pages, components, context) og produktdata fra en struktureret JSON-fil. Global state via React Context holder styr på likes, indkøbskurv og søgning på tværs af hele sitet, med data der persisterer i localStorage. Der er arbejdet med grundlæggende tilgængelighed: semantisk HTML, aria-labels samt fokus-fælder og luk-med-Esc i overlays. Løsningen blev valideret gennem think-aloud-test, card sorting og tree testing – tree testing viste, at testdeltagerne kunne finde specifikke produkter gennem navigationen, og testene bekræftede, at siden opfattes som eksklusiv og designerbaseret, som tilsigtet.",
          tags: ["React & JSON", "Context & a11y", "Test & validering"],
        },
      ],
      learnings: [
        "At omsætte en abstrakt brandfølelse (eksklusiv, kunstnerisk, 'ikke som alle andre') til konkrete UI-beslutninger var den største designmæssige udfordring – og det, testene bekræftede lykkedes bedst.",
        "Testene viste en reel spænding mellem branding og brugervenlighed: et modigt, eksperimenterende udtryk kan gå ud over, hvor tydeligt value proposition'et står ved første besøg.",
        "Kildekritik er en aktiv del af research, ikke en eftertanke – at vurdere om en kilde repræsenterer et branche-, forbruger- eller akademisk perspektiv ændrede, hvordan vi brugte data.",
      ],
      gallery: [
        {
          src: `${import.meta.env.BASE_URL}projects/tokyou/logo.png`,
          alt: "To-K-You logotype",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/tokyou/logo-mark.png`,
          alt: "To-K-You logomærke",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/tokyou/category-page.png`,
          alt: "Produktkatalog med designerprodukter",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/tokyou/product-page.png`,
          alt: "Produktside for en Ami Paris sweater",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/tokyou/some-get-the-look.jpg`,
          alt: "SoMe-opslag: Get The Look",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/tokyou/some-sale.jpg`,
          alt: "SoMe-opslag: Sale 30% off",
        },
        {
          src: `${import.meta.env.BASE_URL}projects/tokyou/packaging-bag.jpg`,
          alt: "Emballagedesign – papirspose med logomærke",
        },
      ],
    },
  },
];

export default projects;
