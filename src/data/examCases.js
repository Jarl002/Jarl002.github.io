const img = (file) => `${import.meta.env.BASE_URL}projects/larchive/${file}`;

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
          "L'ARCHIVE er bygget som et endorsed brand: Afsenderen \"by LA RŌUGE\" giver tillid, mens navnet giver subbrandet sit eget liv. Subbrandet låner det genkendelige: det franske sprog, det tynde ordmærke og den røde farve. Det bryder med en dyb vinrød på varme neutraler, et monogram, et arkivnummer på hvert produkt og ensartede produktbilleder uden model.",
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
          { title: "Valgfri udbetaling", text: "gavekort eller udbetaling" },
          { title: "QR-kode", text: "i stedet for et label, der skal printes" },
          { title: "Følg modellen", text: "besked, når en model kommer i ens størrelse" },
        ],
      },
    ],

    walkthrough: {
      label: "Visuel gennemgang",
      intro: "Én forside, to veje. Begge rejser er designet mobile first og kan klikkes igennem i prototypen nedenfor.",
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
          ["Udbetaling", "Gavekort på 30 % af nyprisen", "Gavekort eller udbetaling"],
          ["Afsendelse", "Pakkekode skrives på pakken", "QR-kode i pakkeshop eller butik"],
        ],
      },
      after: "Prototypen er ikke brugertestet, så sammenligningen viser færre krav, ikke målt effekt.",
    },

    reflection: {
      label: "Faglig refleksion",
      paragraphs: [
        "Jeg fravalgte et koncept, hvor hver model fik sin egen side, for rigtig at give en følelse af, at man befinder sig i LA RŌUGEs arkiv. Men fordi siderne ville stå tomme med kun 68 indleverede varer i år, blev idéen droppet. Jeg fravalgte også muligheden for, at nye kunder kan få indsigt i tøjets tidligere ejere. Det gjorde jeg for at fokusere på tøjets værdi. Modelfotos fravalgte jeg, fordi køberen skal se præcis det produkt, hun får, uden forvirring.",
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
];

export default examCases;
