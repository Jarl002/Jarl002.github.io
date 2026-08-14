const unwindList = [
  "Læse en bog",
  "Se en god film",
  "Tegne",
  "Gå en aftentur",
  "Træne og få hovedet klart",
];

function AboutPage() {
  return (
    <div className="page about-page">
      <h1>
        Om mig
        <span className="heading-badge" aria-hidden="true">
          JG
        </span>
      </h1>
      <p className="lead">Lidt om mennesket bag skærmen</p>

      <div className="about-statement">
        <h2>
          Jeg er stadig studerende, men allerede godt i gang med at finde min
          egen stil inden for UX/UI – med fokus på research, struktur og et
          udtryk, der tør skille sig ud.
        </h2>

        <p>
          Gennem mine projekter har jeg lært, at det bedste design sjældent
          kommer fra den første idé. Det kommer af at spørge målgruppen, teste
          antagelserne og turde ændre kurs, når testene siger noget andet end
          mavefornemmelsen.
        </p>
        <p>
          Jeg går op i, at processen skal være sjov – ikke kun resultatet.
          Uanset om jeg sidder med research eller finpudser en enkelt knap i
          Figma, prøver jeg at holde fast i nysgerrigheden og lysten til at
          blive dygtigere.
        </p>

        <div className="about-divider" aria-hidden="true" />
      </div>

      <div className="about-unwind">
        <h2>Uden for skærmen bruger jeg tiden på:</h2>

        <ul className="unwind-list">
          {unwindList.map((item) => (
            <li key={item}>
              <span className="unwind-dot" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
