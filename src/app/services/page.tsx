import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    number: "01",
    title: "Timber Frame Construction",
    description:
      "Full structural timber framing for residential and light commercial projects. From rooftop structures to load-bearing frames — engineered to last, finished to impress.",
    detail: "Oak · Pine · Structural glulam",
    image: "/images/process/timber-frame-rising.jpg",
  },
  {
    number: "02",
    title: "Sunrooms & Conservatories",
    description:
      "Custom-designed enclosed glass rooms with hardwood frames. We handle design, fabrication, and installation — delivering spaces that feel both sheltered and open to the landscape.",
    detail: "Glass · Hardwood · Custom joinery",
    image: "/images/finished/sunroom-exterior-glass-doors.jpg",
  },
  {
    number: "03",
    title: "Roof Carpentry & Framing",
    description:
      "Pitched roofs, attic conversions, and complex roof geometries. Precision-cut rafters and OSB decking installed by hand, with attention to every ridge and valley.",
    detail: "Rafters · Trusses · OSB · Weatherproofing",
    image: "/images/process/attic-framing-light.jpg",
  },
  {
    number: "04",
    title: "Custom Interior Woodwork",
    description:
      "Ceilings, wall cladding, built-in furniture, and bespoke joinery. Where the structural becomes the decorative — natural material expressed with architectural restraint.",
    detail: "Pine · Oak · Reclaimed timber",
    image: "/images/finished/sunroom-interior-warmlight.jpg",
  },
  {
    number: "05",
    title: "Renovation & Retrofit",
    description:
      "Integrating new timber structures into existing buildings. Whether it's a new roof over a century-old wall or a glass extension on a traditional home, we bridge the two without compromise.",
    detail: "Structural integration · Heritage-compatible",
    image: "/images/process/roof-sheathing-install.jpg",
  },
];

export default function Services() {
  return (
    <>
      {/* Page header */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "end",
        }}
        className="services-header"
      >
        <div>
          <Reveal>
            <p className="font-label" style={{ color: "var(--concrete)", marginBottom: "1.5rem" }}>
              What We Do
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: "var(--ink)",
                lineHeight: 0.95,
              }}
            >
              Services
            </h1>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--steel)", maxWidth: "420px" }}>
            Five core disciplines. Each one a commitment to craft over speed, material over finish, structure over decoration.
          </p>
        </Reveal>
      </section>

      <hr className="hairline" style={{ maxWidth: "1400px", margin: "0 auto" }} />

      {/* Service entries */}
      <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem 8rem" }}>
        {services.map((service, i) => (
          <div key={service.number}>
            <ServiceEntry service={service} index={i} />
            <hr className="hairline" />
          </div>
        ))}
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--ink)",
          padding: "8rem 2rem",
          textAlign: "center",
        }}
      >
        <Reveal>
          <p className="font-label" style={{ color: "var(--steel)", marginBottom: "2rem" }}>
            Ready to Start?
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              color: "var(--white)",
              marginBottom: "3rem",
            }}
          >
            Let&rsquo;s build something.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              background: "var(--accent)",
              color: "var(--white)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Contact Us →
          </Link>
        </Reveal>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .services-header { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function ServiceEntry({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isEven ? "1fr 1fr" : "1fr 1fr",
        gap: "4rem",
        padding: "5rem 0",
        alignItems: "center",
      }}
      className="service-entry"
    >
      <div style={{ order: isEven ? 0 : 1 }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "2rem" }}>
            <span className="editorial-number">{service.number}</span>
            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(74,74,72,0.2)",
                flex: 1,
              }}
            />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "var(--ink)",
              lineHeight: 1,
              marginBottom: "1.5rem",
            }}
          >
            {service.title}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--steel)", marginBottom: "1.5rem" }}>
            {service.description}
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p className="font-label" style={{ color: "var(--concrete)" }}>
            {service.detail}
          </p>
        </Reveal>
      </div>

      <Reveal delay={100} style={{ order: isEven ? 1 : 0 }}>
        <div
          style={{
            position: "relative",
            aspectRatio: "4/3",
            overflow: "hidden",
          }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", transition: "transform 600ms ease" }}
          />
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 768px) {
          .service-entry { grid-template-columns: 1fr !important; }
          .service-entry > div { order: unset !important; }
        }
      `}</style>
    </div>
  );
}
