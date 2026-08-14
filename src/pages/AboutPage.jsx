function AboutPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Om mig</p>
      <h1>Hvem er jeg?</h1>
      <p className="lead">
        Jeg elsker at skabe – design og det visuelle er noget, jeg virkelig
        brænder for. Jeg vil gerne have det sjovt undervejs, og jeg er altid
        nysgerrig på at blive bedre til design.
      </p>

      <section className="info-list" aria-label="Om mig detaljer">
        <div>
          <h2>Jeg arbejder med</h2>
          <p>Frontend, design og alt det visuelle i digitale produkter.</p>
        </div>
        <div>
          <h2>Jeg er nysgerrig på</h2>
          <p>Designets muligheder, og hvordan jeg kan blive endnu dygtigere til det.</p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
