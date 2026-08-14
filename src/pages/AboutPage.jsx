function AboutPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Om mig</p>
      <h1>Om mig</h1>
      <p className="lead">Hvem er jeg bag kulisserne</p>

      <section className="info-list" aria-label="Om mig detaljer">
        <div>
          <h2>Jeg arbejder med</h2>
          <p>Frontend, design og alt det visuelle i digitale produkter.</p>
        </div>
        <div>
          <h2>Jeg er nysgerrig på</h2>
          <p>
            Designets muligheder, og hvordan jeg kan blive endnu dygtigere til
            det.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
