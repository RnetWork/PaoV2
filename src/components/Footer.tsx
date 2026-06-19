import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "var(--concrete)",
        padding: "3rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        <div>
          <p className="font-label" style={{ color: "var(--steel)", marginBottom: "0.75rem" }}>
            Eco Vista Carpentry
          </p>
          <p style={{ fontSize: "0.8rem", lineHeight: 1.7 }}>
            Premium carpentry built with<br />precision and material honesty.
          </p>
        </div>

        <div>
          <p className="font-label" style={{ color: "var(--steel)", marginBottom: "0.75rem" }}>
            Navigation
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-accent"
                style={{ fontSize: "0.8rem", color: "var(--concrete)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="font-label" style={{ color: "var(--steel)", marginBottom: "0.75rem" }}>
            Contact
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.8rem" }}>
            <a href="mailto:ecovistacarpentry@gmail.com" className="link-accent">
              ecovistacarpentry@gmail.com
            </a>
            <span>Portugal</span>
          </div>
        </div>
      </div>

      <hr className="hairline" style={{ marginTop: "2.5rem", borderColor: "rgba(74,74,72,0.3)" }} />

      <div
        style={{
          maxWidth: "1400px",
          margin: "1.5rem auto 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span className="font-label" style={{ color: "var(--steel)", fontSize: "0.6rem" }}>
          © {new Date().getFullYear()} Eco Vista Carpentry
        </span>
        <span className="font-label" style={{ color: "var(--steel)", fontSize: "0.6rem" }}>
          Crafted with precision
        </span>
      </div>
    </footer>
  );
}
