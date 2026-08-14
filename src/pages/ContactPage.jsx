function ContactPage() {
  return (
    <div className="page narrow contact-page">
      <h1>
        Kontakt mig
        <span className="heading-badge" aria-hidden="true">
          JG
        </span>
      </h1>
      <p className="lead">og vi kan finde ud af, hvad vi kan skabe sammen.</p>

      <a className="contact-email" href="mailto:jarlg002@gmail.com">
        jarlg002@gmail.com
      </a>

      <p className="contact-meta">
        <a href="tel:+4541254109">+45 41 25 41 09</a>
      </p>
    </div>
  );
}

export default ContactPage;
