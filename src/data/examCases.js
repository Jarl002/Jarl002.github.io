const img = (file) => `${import.meta.env.BASE_URL}projects/larchive/${file}`;
const vuuhImg = (file) => `${import.meta.env.BASE_URL}projects/vuuh/${file}`;
const mellemrumImg = (file) => `${import.meta.env.BASE_URL}projects/mellemrum/${file}`;

const examCases = [
  {
    slug: "larchive",
    eyebrow: "Product Optimization · Case 3",
    title: "L'ARCHIVE by LA RŌUGE",
    lead: "Et selvstændigt secondhand-subbrand, der skal få kunderne til at sælge deres LA RŌUGE tilbage til LA RŌUGE i stedet for på Vinted.",
    heroImage: img("startside.png"),
    heroAlt: "Startsiden i L'ARCHIVE-prototypen på mobil",
    facts: [
      { label: "Opgave", value: "Koncept- og subbrandudvikling" },
      { label: "Kunde", value: "LA RŌUGE" },
      { label: "Periode", value: "28/9 – 9/10 2026" },
      { label: "Team", value: "Gruppeprojekt" },
      { label: "Værktøjer", value: "Figma, FigJam" },
    ],
    contribution:
      "I projektet stod jeg for Vinted-analysen, konceptretningen og navnet, den visuelle identitet og moodboardet samt design og prototype af begge brugerrejser i Figma.",

    sections: [
      {
        id: "udfordring",
        label: "Case og udfordring",
        paragraphs: [
          "LA RŌUGEs secondhand-løsning lever i skyggen af hovedbrandet uden egen identitet, tone eller kommunikation og står for 0,2 % af omsætningen.",
          "Opgaven var at udvikle et subbrand med navn, visuel identitet og brugerrejse for sælger og køber. Kundens centrale spørgsmål: Hvorfor skal kunderne sælge deres produkter til LA RŌUGE og ikke Vinted?",
        ],
      },
      {
        id: "undersoegelse",
        label: "Undersøgelse og prioritering",
        stats: [
          { value: "500+", label: "LA RŌUGE-annoncer på Vinted" },
          { value: "68", label: "varer indleveret til LA RŌUGE i år" },
          { value: "90 kr.", label: "medianpris i 23 Vinted-annoncer" },
          { value: "76 %", label: "af trafikken kommer fra mobil" },
        ],
        paragraphs: [
          "Kunderne sælger allerede, bare et andet sted. Jeg gennemgik 23 LA RŌUGE-annoncer på Vinted og sammenlignede priserne med de 30 % af nyprisen, LA RŌUGE giver i gavekort. På populære modeller matcher gavekortet Vinted-prisen, så problemet er ikke beløbet, men friktion og kendskab.",
          "To fund blev styrende: I dag kan man kun sælge tilbage, hvis købet ligger i webshoppen, selvom det meste salg sker via forhandlere. Og vaskemærket viser style-nummeret, som kan identificere produktet uden købshistorik.",
          "Ud fra Lotus Blossom og braindump arbejdede vi med tre konceptretninger. Jeg prioriterede et salg, der er nemmere end Vinted, designet mobile first. Samtidig åbner secondhand for nye købere: 71 % af de 16–30-årige har købt brugt tøj det seneste år.",
          "Målgruppen har derfor to sider: Sælgeren er den trofaste LA RŌUGE-kunde med tøj i skabet, hun ikke bruger mere. Køberen er den yngre, prisbevidste kvinde, der gerne vil have LA RŌUGE, men ikke til fuld pris.",
        ],
        sideImage: {
          src: img("lotus-blossom.jpg"),
          alt: "Vores Lotus Blossom-board i FigJam med temaerne sælgerflow, køberflow, målgruppe og brand",
          caption: "Vores Lotus Blossom i FigJam",
        },
      },
      {
        id: "loesning",
        label: "Løsning og faglige valg",
        paragraphs: [
          "Navnet L'ARCHIVE fortæller, at tøjet er udvalgte produkter, man passer på, ikke rester. Sloganet \"Archived, Not Forgotten\" bygger videre på LA RŌUGEs eget \"Worn Beautifully\" uden at overtage det. Tonen overfører moderbrandets selvkærlighed fra kvinden til tøjet: Brugt er aldrig slidt, men smukt båret.",
          "L'ARCHIVE er bygget som et endorsed brand: Afsenderen \"by LA RŌUGE\" giver tillid, mens navnet giver subbrandet sit eget liv. Subbrandet låner det genkendelige: det franske sprog, det tynde ordmærke og den røde farve. Det bryder med en dyb vinrød, et monogram, et arkivnummer på hvert produkt og produktbilleder uden model.",
        ],
        image: { src: img("moodboard.jpg"), alt: "Moodboard for L'ARCHIVE med vinrød, strik og varmt lys" },
        gallery: {
          images: [
            { src: img("mockup-packaging.jpg"), alt: "Emballage med ordmærke, slogan og arkivnummer" },
            { src: img("mockup-hangtag.jpg"), alt: "Hangtag med arkivnummer, tilstand og QR-kode til videresalg" },
            { src: img("mockup-card.jpg"), alt: "Kort i pakken, der fortæller køberen, at hun selv kan sælge videre" },
          ],
          note: "Touchpoints: emballage, hangtag med QR-kode og kort i pakken. Mockup-billederne er lavet med AI-værktøjer.",
        },
        choices: [
          { title: "Style-nummer", text: "i stedet for købshistorik, så også forhandlerkunder kan sælge" },
          { title: "Positiv tilstandsskala", text: "Comme neuve, Joliment portée og Bien aimée" },
          { title: "Guidede billeder", text: "så alle produkter fremstår ens, modsat de uensartede billeder på Vinted" },
          { title: "Pris efter tilstand", text: "køberen betaler 55, 45 eller 35 % af nyprisen" },
          { title: "QR-kode", text: "i stedet for et label, der skal printes" },
          { title: "Følg modellen", text: "besked, når en model kommer i ens størrelse" },
        ],
      },
    ],

    walkthrough: {
      label: "Visuel gennemgang",
      intro: "Én forside, to veje, som kan klikkes igennem i prototypen nedenfor.",
      flows: [
        {
          title: "Sælgerflowet",
          screens: [
            { src: img("seller-1-sell.png"), caption: "1. Sælg dit produkt" },
            { src: img("seller-2-style-number.png"), caption: "2. Style-nummer" },
            { src: img("seller-3-condition.png"), caption: "3. Tilstand" },
            { src: img("seller-4-pictures.png"), caption: "4. Guidede billeder" },
            { src: img("seller-5-value.png"), caption: "5. Værdi" },
            { src: img("seller-6-freight.png"), caption: "6. Afsendelse" },
            { src: img("seller-7-confirmation.png"), caption: "7. Bekræftelse" },
          ],
        },
        {
          title: "Køberflowet",
          screens: [
            { src: img("buyer-1-overview.png"), caption: "1. Udvalg og filtre" },
            { src: img("buyer-2-product.png"), caption: "2. Produktside" },
            { src: img("buyer-3-follow-model.png"), caption: "3. Følg modellen" },
            { src: img("buyer-4-basket.png"), caption: "4. Kurv" },
            { src: img("buyer-5-checkout.png"), caption: "5. Kassen" },
            { src: img("buyer-6-confirmation.png"), caption: "6. Bekræftelse" },
          ],
        },
      ],
      embed:
        "https://embed.figma.com/proto/nohDDmGCB8X7U13bOXiE5u/La-Rouge---Design-Fil?node-id=93-3555&viewport=498%2C34%2C0.1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=93%3A3555&page-id=36%3A877&embed-host=share",
    },

    result: {
      label: "Resultat og dokumentation",
      paragraphs: [
        "Resultatet er et branddeck og en klikbar prototype, som blev pitchet for LA RŌUGE. Sammenlignet med det nuværende salgsflow:",
      ],
      comparison: {
        headers: ["", "LA RŌUGE i dag", "L'ARCHIVE"],
        rows: [
          ["Hvem kan sælge", "Kun kunder med køb i webshoppen", "Alle med style-nummeret, også forhandlerkunder"],
          ["Find produktet", "Vælg fra listen over tidligere køb", "Skriv style-nummeret fra vaskemærket"],
          ["Tilstand og billeder", "Indgår ikke", "Positiv skala og to guidede billeder"],
          ["Afsendelse", "Pakkekode skrives på pakken", "QR-kode i pakkeshop eller butik"],
        ],
      },
      after: "Prototypen er ikke brugertestet, så sammenligningen viser færre krav, ikke målt effekt.",
    },

    reflection: {
      label: "Faglig refleksion",
      paragraphs: [
        "Jeg fravalgte et koncept, hvor hver model fik sin egen side, for rigtig at give en følelse af, at man befinder sig i LA RŌUGEs arkiv. Men fordi siderne ville stå tomme med kun 68 indleverede varer i år, blev idéen droppet. Jeg fravalgte også at vise tøjets tidligere ejere for at fokusere på tøjets værdi. Modelfotos fravalgte jeg, fordi køberen skal se præcis det produkt, hun får, uden forvirring.",
        "Midtvejs blev det tydeligt, at brandet var stærkt verbalt, men visuelt for tæt på moderbrandet. Arkivnummeret og monogrammet blev svaret. Jeg lærte, at et subbrand bliver selvstændigt gennem elementer, det ejer, ikke gennem UI-mønstre.",
        "En svaghed er prismodellen: Køberprisen ligger over Vinted og hviler på, at produkterne er tjekket af LA RŌUGE. Et potentielt næste skridt er at teste sælgerflowet med fem kunder, især style-nummeret og tilstandsskalaen.",
      ],
    },

    business: {
      label: "Forretningspotentiale",
      items: [
        { title: "Kunden", text: "får værdi for tøj, hun ikke bruger, også hvis det er købt hos en forhandler." },
        { title: "LA RŌUGE", text: "flytter salg fra Vinted til egen kanal, og gavekortet bringer sælgeren tilbage." },
        { title: "Nye købere", text: "får LA RŌUGE til en lavere pris. Det åbner for en yngre, prisbevidst målgruppe: 80 % af de unge nævner besparelse som grund til at købe brugt." },
      ],
      basis: "Vurderingen bygger på LA RŌUGEs tal, Vinted-analysen og DBA's Genbrugsindeks 2024, ikke på målt effekt.",
    },

    links: [
      {
        label: "Branddeck (PDF)",
        href: img("larchive-branddeck.pdf"),
      },
      {
        label: "Figma-prototype",
        href: "https://www.figma.com/proto/nohDDmGCB8X7U13bOXiE5u/La-Rouge---Design-Fil?node-id=93-3555&viewport=498%2C34%2C0.1&t=LEpXkQwmpLwrvsDm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=93%3A3555&page-id=36%3A877",
      },
    ],

    sources: [
      "LA RŌUGE: oplæg for Erhvervsakademi Aarhus, 28/9 2026",
      "LA RŌUGE: AW26-folder, \"Living the Unapologetic Life\" og la-rouge.com",
      "Vinted: 23 LA RŌUGE-annoncer, indsamlet 28/9 2026",
      "DBA: Genbrugsindeks 2024",
      "Undervisning: IXD, subbranding og visuel identitet",
      "Produktbilleder i prototypen tilhører LA RŌUGE. Moodboardet består af referencebilleder.",
    ],
  },
  {
    slug: "vuuh",
    eyebrow: "Product Optimization · Case 2",
    title: "Vuuh for Shopify",
    lead: "En tydeligere onboarding fra installation til aktivering, så nye forhandlere kan forbinde Vuuh og Shopify uden personlig hjælp.",
    heroImage: vuuhImg("flow-1-welcome.png"),
    heroAlt: "Velkomstskærmen i den nye onboarding med en stepper i fire trin",
    facts: [
      { label: "Opgave", value: "Design Better Onboarding" },
      { label: "Kunde", value: "Vuuh" },
      { label: "Periode", value: "7/9 – 18/9 2026" },
      { label: "Team", value: "Gruppeprojekt" },
      { label: "Værktøjer", value: "Figma" },
    ],
    contribution:
      "I projektet deltog jeg i dele af UX-analysen og arbejdede med redesignet af onboardingen i Figma.",

    sections: [
      {
        id: "udfordring",
        label: "Case og udfordring",
        paragraphs: [
          "Vuuh sender produktdata fra modebrands direkte ind i forhandlernes Shopify-butikker. Onboardingen blev bygget til en privat beta, hvor Vuuh hjalp hver kunde personligt. Nu skal appen skaleres, og nye kunder skal kunne installere, forstå og opsætte den selv.",
          "Opgaven var at auditere den nuværende onboarding og designe en bedre selvbetjeningsløsning. Designudfordringen: Den skal være enkel nok for Charlotte, der ejer en fysisk butik og har brug for tryghed, uden at blive langsom for Emma, der er vant til Shopify.",
        ],
        sideImage: {
          src: vuuhImg("before-success.png"),
          alt: "Vuuhs nuværende skærm efter installation af Shopify-appen",
          caption: "Vuuhs skærm efter installation i dag",
        },
      },
      {
        id: "undersoegelse",
        label: "Undersøgelse og prioritering",
        paragraphs: [
          "Vi gennemgik onboardingen fra en førstegangsbrugers perspektiv med Heuristic Evaluation og Cognitive Walkthrough og samlede fundene i Finding Cards. Tre findings fik høj prioritet, fordi de pegede på samme kerne: Brugeren mangler sikkerhed i flowet. Feedback fra Vuuh bekræftede dele af vores fund.",
          "Vi prioriterede Charlotte som primær persona, fordi hun er mest sårbar over for den usikkerhed, fundene viste.",
        ],
        choices: [
          { title: "Hvad skal jeg gøre?", text: "Dashboardet viser flere handlinger på én gang uden rækkefølge, og Shopify ligger blandt mange andre integrationer." },
          { title: "Har jeg valgt det rigtige?", text: "Sammenhængen mellem Shopifys domæne og Vuuhs \"Shop name\" er uklar." },
          { title: "Lykkedes det?", text: "Bekræftelsen efter forbindelsen er for svag til at skabe sikkerhed." },
        ],
        sideImage: {
          src: vuuhImg("before-dashboard.png"),
          alt: "Vuuhs nuværende dashboard med flere handlinger på samme tid",
          caption: "Vuuhs dashboard i dag",
        },
      },
      {
        id: "loesning",
        label: "Løsning og faglige valg",
        paragraphs: [
          "Vi valgte et onboarding-lag, der gør progressionen synlig og placerer hjælpen dér, hvor usikkerheden opstår. Hvert valg svarer på et finding og bygger på Don Normans principper for interaktionsdesign.",
          "Målet er ikke flere onboarding-elementer, men mindre usikkerhed og mindre behov for hjælp.",
        ],
        choices: [
          { title: "Stepper i fire trin", text: "og én primær handling viser, hvor brugeren er, og hvad næste skridt er (Gulf of Execution, signifiers)" },
          { title: "Hjælp i konteksten", text: "forklarer Shop name med et eksempel, dér hvor feltet skal udfyldes (conceptual model, mapping)" },
          { title: "States frem for skærme", text: "loading, success og næste skridt viser, hvad systemet gør (feedback, Gulf of Evaluation)" },
        ],
        image: {
          src: vuuhImg("error-inline.png"),
          alt: "Shop name-feltet med hjælpetekst og fejlbeskeden \"We couldn't find this Shopify store\"",
          caption: "Shop name-feltet med hjælp og fejlbesked",
          small: true,
        },
      },
    ],

    walkthrough: {
      label: "Visuel gennemgang",
      intro: "Flowet går fra velkomst til forbundet butik i fire trin og kan klikkes igennem nedenfor.",
      flows: [
        {
          title: "Onboarding-flowet",
          screens: [
            { src: vuuhImg("flow-1-welcome.png"), caption: "1. Velkomst" },
            { src: vuuhImg("shop-name-guide.png"), caption: "2. Find dit shop name" },
            { src: vuuhImg("flow-2-connecting.png"), caption: "3. Forbinder" },
            { src: vuuhImg("flow-3-success.png"), caption: "4. Success og næste skridt" },
            { src: vuuhImg("flow-4-done.png"), caption: "5. Færdig" },
          ],
        },
        {
          title: "Fejltilstand",
          screens: [
            { src: vuuhImg("error-modal.png"), caption: "Forbindelsen fejler" },
          ],
        },
      ],
      embedFit: true,
      embed:
        "https://embed.figma.com/proto/PEUH5ns1BrzuNaI75Zu5F5/Vuuh---Case-2---3.sem?node-id=125-6&scaling=scale-down&content-scaling=fixed&starting-point-node-id=125%3A6&page-id=0%3A1&embed-host=share",
    },

    result: {
      label: "Resultat og dokumentation",
      paragraphs: [
        "Resultatet er en klikbar Figma-prototype, som blev præsenteret for Vuuh. Sammenlignet med den nuværende onboarding:",
      ],
      comparison: {
        headers: ["", "Vuuh i dag", "Nyt flow"],
        rows: [
          ["Retning", "Flere handlinger på dashboardet uden rækkefølge", "Stepper i fire trin med én primær handling"],
          ["Shop name", "Uklart, hvilken Shopify-oplysning der skal bruges", "Hjælp i feltet og en guide med eksempel"],
          ["Efter forbindelsen", "Svag bekræftelse", "Loading, success og næste skridt"],
        ],
      },
      pairsIntro:
        "Et Accessibility Design Check efter WCAG 2.2 kvalificerede vores første prototype. Af 12 punkter skulle 7 forbedres. Vi prioriterede fejlhåndtering, fordi prototypen kun dækkede den vellykkede vej, og kontrast, som gik igen på alle skærme:",
      pairs: [
        {
          before: { src: vuuhImg("contrast-1-before.png"), alt: "Søgefelt med kontrast 1,87:1 før ændringen" },
          after: { src: vuuhImg("contrast-1-after.png"), alt: "Søgefelt med kontrast 6,58:1 efter ændringen" },
          caption: "Kontrast 1,87:1 → 6,58:1",
        },
        {
          before: { src: vuuhImg("contrast-2-before.png"), alt: "Shop name-eksempel med kontrast 2,23:1 før ændringen" },
          after: { src: vuuhImg("contrast-2-after.png"), alt: "Shop name-eksempel med kontrast 4,76:1 efter ændringen" },
          caption: "Kontrast 2,23:1 → 4,76:1",
        },
      ],
      after: "Begge tekster opfylder nu WCAG AA. Prototypen er ikke brugertestet, så effekten på gennemførelse er ikke målt.",
    },

    reflection: {
      label: "Faglig refleksion",
      paragraphs: [
        "Vi fravalgte at redesigne hele platformen og fokuserede på forbindelsen mellem Vuuh og Shopify, hvor fundene var tydeligst. Det største kompromis var mellem de to personas: Mere hjælp gør Charlotte tryg, men kan bremse Emma. Derfor er hjælpen placeret i konteksten og valgfri frem for et obligatorisk forløb.",
        "Accessibility-checket viste, at vi selv havde designet ud fra, at alt går godt. Vi lærte, at fejltilstande skal designes fra starten, ikke tilføjes til sidst.",
        "Næste skridt er en test med brugere, der ligner begge personas, og en test af tastaturnavigation og fokus, som ikke kunne vurderes på statiske skærme.",
      ],
    },

    business: {
      label: "Forretningspotentiale",
      items: [
        { title: "Vuuh", text: "kan skalere uden at onboarde hver kunde manuelt. Ifølge Vuuh påvirker onboardingen direkte aktivering, konvertering og vækst." },
        { title: "Forhandlere", text: "kommer hurtigere og mere sikkert frem til de første produkter i Shopify." },
        { title: "Supporten", text: "får færre henvendelser, fordi hjælpen ligger i flowet." },
      ],
      basis: "Vurderingen bygger på Vuuhs brief og vores audit, ikke på målte data.",
    },

    links: [
      {
        label: "UX Audit Summary (PDF)",
        href: vuuhImg("vuuh-ux-audit-summary.pdf"),
      },
      {
        label: "Figma-prototype",
        href: "https://www.figma.com/proto/PEUH5ns1BrzuNaI75Zu5F5/Vuuh---Case-2---3.sem?node-id=125-6&scaling=scale-down&content-scaling=fixed&starting-point-node-id=125%3A6&page-id=0%3A1",
      },
      {
        label: "Figma-designfil",
        href: "https://www.figma.com/design/PEUH5ns1BrzuNaI75Zu5F5/Vuuh---Case-2---3.sem?node-id=0-1&t=qyuWf9tYaRsCVdGK-1",
      },
    ],

    sources: [
      "Vuuh: casepræsentation for Erhvervsakademi Aarhus, 7/9 2026",
      "Nielsen, J.: 10 Usability Heuristics for User Interface Design",
      "Norman, D.: The Design of Everyday Things",
      "W3C: Web Content Accessibility Guidelines (WCAG) 2.2",
      "Undervisning: UX Audit, Interaction Redesign og Accessibility Design Check",
      "Skærmbilleder af Vuuhs nuværende platform tilhører Vuuh.",
    ],
  },
  {
    slug: "mellemrum",
    eyebrow: "Product Optimization · Case 1",
    title: "Mellemrum",
    lead: "En hurtigt bygget React-prototype for en kultur- og eventplatform i Aarhus, udviklet til en robust, tilgængelig og vedligeholdelsesvenlig løsning med et tilmeldingsflow, der virker.",
    heroImage: mellemrumImg("landing.jpg"),
    heroAlt: "Forsiden af Mellemrum: \"Find plads til noget nyt.\"",
    heroWide: true,
    facts: [
      { label: "Opgave", value: "Fra prototype til produktionsklar React" },
      { label: "Team", value: "Individuelt projekt" },
      { label: "Teknologi", value: "React, Supabase, GitHub Pages" },
    ],
    contribution:
      "Jeg stod for hele forløbet: audit, prioritering, forbedringer i koden, datamodellen i Supabase og deployment.",

    sections: [
      {
        id: "udfordring",
        label: "Case og udfordring",
        paragraphs: [
          "Mellemrum er en lokal kultur- og eventplatform, hvor besøgende tilmelder sig events, og arrangører ser tilmeldingerne. Prototypen var bygget hurtigt for at afprøve idéen: Koden var svær at videreudvikle, fejl og langsomme svar blev ikke håndteret, og datamodellen gentog oplysninger. Værst af alt gemte tilmeldingsformularen intet. Den skrev kun til konsollen.",
          "Opgaven var ikke at ændre mest muligt, men at finde de vigtigste problemer, forbedre dem og dokumentere effekten.",
        ],
      },
      {
        id: "undersoegelse",
        label: "Undersøgelse og prioritering",
        stats: [
          { value: "11", label: "fund i auditten" },
          { value: "6", label: "fokusområder fra casen" },
          { value: "7", label: "forbedringer i hver sin branch" },
          { value: "6", label: "rettelser fra en afsluttende QA" },
        ],
        paragraphs: [
          "Jeg auditerede prototypen ud fra casens seks fokusområder og arbejdede mod den rigtige Supabase-database, så hvert fund kunne underbygges med data. Tilmeldinger havde ingen relation til events, Dokk1 og Godsbanen stod med identiske adresser på flere events, og et ugyldigt event-id gav en blank side.",
          "Jeg prioriterede efter konsekvensen for brugeren og casens centrale krav: først tilmeldingsflowet og robustheden, derefter accessibility, arkitektur, datamodel og performance.",
        ],
      },
      {
        id: "loesning",
        label: "Løsning og faglige valg",
        paragraphs: [
          "Hver forbedring blev lavet i sin egen branch fra main, verificeret og merget, så historikken kan følges i repoet.",
        ],
        choices: [
          { title: "Tilmelding gemmes", text: "i Supabase og forbindes til eventet med en fremmednøgle" },
          { title: "UI-states", text: "loading, fejl, tom liste og en 404-side ved ugyldigt event" },
          { title: "Accessibility", text: "alt-tekst, label på e-mail, sidetitel og fokus ved sideskift" },
          { title: "Arkitektur", text: "delt API-opsætning og en fælles Footer-komponent" },
          { title: "Datamodel", text: "venues i egen tabel, så en adresse rettes ét sted" },
          { title: "Performance", text: "billeder i visningsstørrelse, lazy loading og code-splitting" },
        ],
        dataModel: {
          title: "Datamodellen før og efter",
          before: [
            {
              name: "events",
              fields: [
                { name: "id" },
                { name: "title" },
                { name: "date" },
                { name: "venueName", repeated: true },
                { name: "venueAddress", repeated: true },
                { name: "venuePostalCode", repeated: true },
                { name: "venueCity", repeated: true },
                { name: "venueWebsite", repeated: true },
              ],
            },
            {
              name: "registrations",
              fields: [
                { name: "id" },
                { name: "name" },
                { name: "email" },
                { name: "eventTitle", repeated: true },
                { name: "eventDate", repeated: true },
                { name: "eventLocation", repeated: true },
              ],
            },
          ],
          beforeNote: "Ingen relationer: Venue-data gentages på hvert event, og en tilmelding gemmer eventet som løs tekst.",
          after: [
            {
              name: "venues",
              fields: [{ name: "id" }, { name: "name" }, { name: "address" }, { name: "postalCode" }, { name: "city" }, { name: "website" }],
            },
            {
              name: "events",
              fields: [{ name: "id" }, { name: "title" }, { name: "date" }, { name: "venueId", key: true }],
            },
            {
              name: "registrations",
              fields: [{ name: "id" }, { name: "name" }, { name: "email" }, { name: "eventId", key: true }],
            },
          ],
          afterNote: "To en-til-mange-relationer med fremmednøgler: Et venue har mange events, og et event har mange tilmeldinger.",
        },
        code: {
          title: "Tilmeldingen før og efter",
          before: {
            label: "Før · EventPage.jsx",
            code: `async function handleSubmit(eventSubmit) {
  eventSubmit.preventDefault();
  console.log({ name, email, event: event.title });
}`,
          },
          after: {
            label: "Efter · EventSignupForm.jsx",
            code: `async function handleSubmit(eventSubmit) {
  eventSubmit.preventDefault();
  setIsSubmitting(true);
  setSubmitError(null);

  try {
    const response = await fetch(\`\${SUPABASE_URL}/registrations\`, {
      method: "POST",
      headers: { ...headers, Prefer: "return=minimal" },
      body: JSON.stringify({ name, email, eventId: event.id, status: "Ny" })
    });

    if (!response.ok) {
      throw new Error(\`Tilmelding mislykkedes (status \${response.status})\`);
    }

    setIsSubmitted(true);
  } catch (error) {
    console.error("Tilmelding fejlede:", error);
    setSubmitError("Vi kunne ikke gemme din tilmelding. Prøv venligst igen.");
  } finally {
    setIsSubmitting(false);
  }
}`,
          },
        },
      },
    ],

    result: {
      label: "Resultat og dokumentation",
      paragraphs: [
        "Alle forbedringer er verificeret med build, lint og direkte kald mod Supabase. En afsluttende QA-gennemgang fandt fejl, auditten ikke fangede, fx at oversigten viste eventets dato i stedet for tilmeldingsdatoen.",
      ],
      comparison: {
        headers: ["", "Prototypen", "Nu"],
        rows: [
          ["Tilmelding", "Skrives kun til konsollen", "Gemmes i Supabase (201 Created) og forbindes til eventet"],
          ["Ugyldigt event", "Blank side", "404-side med vej videre"],
          ["Datamodel", "Gentagne venue-data og ingen relation", "9 events på 7 venues med fremmednøgler"],
          ["Billede i oversigten", "1,19 MB", "85 KB (−93 %)"],
          ["Første indlæsning", "Hele appen i ét bundle", "Hver side i sin egen chunk"],
        ],
      },
      bars: {
        title: "Ét eventbillede i oversigten",
        unit: "KB",
        items: [
          { label: "Før: originalen fra Unsplash", value: 1190, display: "1,19 MB" },
          { label: "Efter: tilpasset visningsstørrelsen", value: 85, display: "85 KB" },
        ],
        note: "93 % mindre data pr. billede, og forsiden viser op til ni events ad gangen.",
      },
      pairsIntro: "Før og efter i browseren:",
      pairs: [
        {
          before: { src: mellemrumImg("signup-before.png"), alt: "Udfyldt tilmeldingsformular, der ikke gemte noget" },
          after: { src: mellemrumImg("signup-after.png"), alt: "Tilmeldingsformularen viser \"Tak! Din tilmelding er registreret.\"" },
          caption: "Tilmeldingen gemmes og bekræftes",
        },
        {
          before: { src: mellemrumImg("registrations-before.png"), alt: "Den interne oversigt med to tilmeldinger" },
          after: { src: mellemrumImg("registrations-after.png"), alt: "Den interne oversigt med den nye tilmelding fra Lars Larsen" },
          caption: "Den nye tilmelding vises i arrangørens oversigt",
        },
        {
          before: { src: mellemrumImg("invalid-event-before.png"), alt: "Blank side ved et ugyldigt event-id" },
          after: { src: mellemrumImg("invalid-event-after.png"), alt: "404-side med knappen \"Gå til forsiden\"" },
          caption: "Ugyldigt event-id: blank side → 404-side",
        },
      ],
      after: "Der er ikke lavet test med brugere eller skærmlæser, så accessibility er verificeret i koden.",
    },

    reflection: {
      label: "Faglig refleksion",
      paragraphs: [
        "Det vigtigste valg var at arbejde mod den rigtige database fra start. En faktisk duplikeret række eller en målt filstørrelse gjorde prioriteringen lettere at begrunde end antagelser.",
        "Ét fravalg blev revurderet: Jeg beholdt først de gamle tekstfelter på tilmeldinger for at kunne sammenligne, men slettede dem senere, fordi en ren datamodel vejede tungere.",
        "Næste skridt er en test med skærmlæser og at begrænse de felter, der hentes fra Supabase.",
      ],
    },

    business: {
      label: "Forretningspotentiale",
      items: [
        { title: "Besøgende", text: "kan nu tilmelde sig, får besked ved fejl og hurtigere sider på mobil." },
        { title: "Arrangører", text: "ser rigtige tilmeldinger forbundet til events og retter et venue ét sted." },
        { title: "Platformen", text: "får en kodebase og datamodel, der gør nye funktioner billigere at bygge." },
      ],
      basis: "Vurderingen bygger på målinger mod den levende database og build-output, ikke på brugerdata.",
    },

    links: [
      {
        label: "GitHub-repo",
        href: "https://github.com/Jarl002/3-Semester---Case-1---Mellemrum-",
      },
      {
        label: "Deployet løsning",
        href: "https://jarl002.github.io/3-Semester---Case-1---Mellemrum-/",
      },
    ],

    sources: [
      "Case 1-beskrivelse og Mellemrum-skabelonen (github.com/cederdorff/mellemrum)",
      "Undervisning: React, Supabase og accessibility",
      "Eventbilleder: Unsplash",
    ],
  },
];

export default examCases;
