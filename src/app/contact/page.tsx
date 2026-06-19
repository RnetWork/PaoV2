import ContactForm from "./ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact — Eco Vista Carpentry",
  description: "Start a project with Eco Vista Carpentry.",
};

export default function Contact() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Reveal>
          <p className="font-label" style={{ color: "var(--concrete)", marginBottom: "1.5rem" }}>
            Get In Touch
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "var(--ink)",
              lineHeight: 0.95,
              marginBottom: "2rem",
            }}
          >
            Let&rsquo;s build something.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--steel)", maxWidth: "480px" }}>
            We&rsquo;d like to hear about your project. Tell us what you&rsquo;re building, where, and when you&rsquo;d like to start.
          </p>
        </Reveal>
      </section>

      <hr className="hairline" style={{ maxWidth: "1400px", margin: "0 auto" }} />

      {/* Content grid */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "5rem 2rem 10rem",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "6rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left: info */}
        <div>
          <Reveal>
            <div style={{ marginBottom: "3rem" }}>
              <p className="font-label" style={{ color: "var(--concrete)", marginBottom: "1rem" }}>
                Direct Contact
              </p>
              <a
                href="mailto:ecovistacarpentry@gmail.com"
                className="link-accent"
                style={{ fontSize: "0.95rem", color: "var(--ink)", lineHeight: 1.6 }}
              >
                ecovistacarpentry@gmail.com
              </a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ marginBottom: "3rem" }}>
              <p className="font-label" style={{ color: "var(--concrete)", marginBottom: "1rem" }}>
                Location
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--ink)", lineHeight: 1.6 }}>
                Portugal<br />
                Serving nationwide & select international projects
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ marginBottom: "3rem" }}>
              <p className="font-label" style={{ color: "var(--concrete)", marginBottom: "1rem" }}>
                Response Time
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--ink)", lineHeight: 1.6 }}>
                We respond to all enquiries within 48 hours, typically within the same working day.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div>
              <p className="font-label" style={{ color: "var(--concrete)", marginBottom: "1.5rem" }}>
                Services Offered
              </p>
              {[
                "Timber Frame Construction",
                "Sunrooms & Conservatories",
                "Roof Carpentry",
                "Custom Interior Woodwork",
                "Renovation & Retrofit",
              ].map((s) => (
                <div
                  key={s}
                  style={{
                    padding: "0.75rem 0",
                    borderBottom: "1px solid rgba(74,74,72,0.15)",
                    fontSize: "0.85rem",
                    color: "var(--steel)",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  );
}
