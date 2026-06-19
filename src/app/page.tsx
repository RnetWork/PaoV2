import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const finishedWork = [
  {
    src: "/images/finished/sunroom-exterior-glass-doors.jpg",
    alt: "Completed wooden sunroom with large sliding glass doors",
    label: "Sunroom / Alentejo",
  },
  {
    src: "/images/finished/sunroom-interior-dining.jpg",
    alt: "Interior of wooden sunroom with dining area and countryside view",
    label: "Sunroom Interior",
  },
  {
    src: "/images/finished/glassroom-golden-hour.jpg",
    alt: "Wooden framed glass room at golden hour",
    label: "Glass Room / Sunset",
  },
  {
    src: "/images/finished/sunroom-interior-warmlight.jpg",
    alt: "Warm interior light through wooden ceiling beams",
    label: "Ceiling Detail",
  },
];

const processShots = [
  {
    src: "/images/process/timber-frame-rising.jpg",
    alt: "Timber frame structure rising against hillside",
  },
  {
    src: "/images/process/attic-framing-light.jpg",
    alt: "Interior attic framing with light streaming through",
  },
  {
    src: "/images/process/roof-perspective-sheathing.jpg",
    alt: "On-roof perspective showing wooden sheathing installation",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: "100svh",
          minHeight: "600px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/process/timber-frame-rising.jpg"
          alt="Timber frame structure under a blue sky"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, rgba(11,11,12,0.55) 0%, rgba(11,11,12,0.25) 50%, rgba(11,11,12,0.65) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 2rem 5rem",
            maxWidth: "1400px",
            margin: "0 auto",
            left: 0,
            right: 0,
          }}
        >
          <p
            className="font-label"
            style={{ color: "rgba(247,246,243,0.55)", marginBottom: "1.5rem" }}
          >
            Est. Portugal
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              color: "var(--white)",
              maxWidth: "900px",
            }}
          >
            Crafted{" "}
            <em style={{ color: "var(--accent)", fontStyle: "normal" }}>
              Structure.
            </em>
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              marginTop: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <HeroButton href="/gallery" label="View Our Work" />
            <Link
              href="/contact"
              className="font-label link-accent"
              style={{ color: "rgba(247,246,243,0.7)" }}
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO STATEMENT ──────────────────────────────────── */}
      <section style={{ padding: "8rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
        <Reveal>
          <p className="font-label" style={{ color: "var(--concrete)", marginBottom: "2rem" }}>
            The Practice
          </p>
        </Reveal>
        <div style={{ maxWidth: "800px" }}>
          <Reveal delay={80}>
            <p
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                color: "var(--ink)",
                lineHeight: 1.1,
                marginBottom: "2.5rem",
              }}
            >
              We build what endures — in oak, pine, and honest timber. Every joint considered. Every surface earned.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--steel)", maxWidth: "560px" }}>
              Eco Vista Carpentry approaches every project the way an architect approaches a building — structure first, material honesty always, ornament only where it earns its place.
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="hairline" style={{ maxWidth: "1400px", margin: "0 auto" }} />

      {/* ── FEATURED WORK GRID ───────────────────────────────── */}
      <section style={{ padding: "6rem 0", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            padding: "0 2rem 3rem",
            maxWidth: "1400px",
            margin: "0 auto",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Reveal>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--ink)" }}
            >
              Selected Work
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link href="/gallery" className="font-label link-accent" style={{ color: "var(--steel)" }}>
              All Projects →
            </Link>
          </Reveal>
        </div>

        {/* Asymmetric grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "58% 42%",
            gap: "4px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <Reveal style={{ gridRow: "1 / 3" }}>
            <GalleryItem {...finishedWork[0]} index={1} tall />
          </Reveal>
          <Reveal delay={80}>
            <GalleryItem {...finishedWork[1]} index={2} />
          </Reveal>
          <Reveal delay={160}>
            <GalleryItem {...finishedWork[2]} index={3} />
          </Reveal>
        </div>
        <div
          style={{
            maxWidth: "1400px",
            margin: "4px auto 0",
            paddingLeft: "42%",
          }}
        >
          <Reveal delay={240}>
            <GalleryItem {...finishedWork[3]} index={4} />
          </Reveal>
        </div>
      </section>

      {/* ── PROCESS STRIP ────────────────────────────────────── */}
      <section style={{ background: "var(--ink)", padding: "6rem 2rem", overflow: "hidden" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <Reveal>
            <p className="font-label" style={{ color: "var(--steel)", marginBottom: "1rem" }}>
              The Craft
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "var(--white)",
                marginBottom: "4rem",
                maxWidth: "600px",
              }}
            >
              Built from the ground up.
            </h2>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "4px",
            }}
            className="process-grid"
          >
            {processShots.map((shot, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "3/4",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover", transition: "transform 600ms ease" }}
                  />
                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                    <span
                      className="font-label"
                      style={{ color: "rgba(247,246,243,0.4)", fontSize: "0.55rem" }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────── */}
      <section
        style={{
          padding: "10rem 2rem",
          borderTop: "1px solid rgba(74,74,72,0.15)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "4rem",
            alignItems: "end",
          }}
          className="cta-grid"
        >
          <div>
            <Reveal>
              <p className="font-label" style={{ color: "var(--concrete)", marginBottom: "1rem" }}>
                Let&rsquo;s Build Together
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  color: "var(--ink)",
                  maxWidth: "700px",
                }}
              >
                Have a project in mind?
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <CTAButton />
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .process-grid { grid-template-columns: 1fr !important; }
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function GalleryItem({
  src, alt, label, index, tall = false,
}: {
  src: string; alt: string; label: string; index: number; tall?: boolean;
}) {
  return (
    <Link
      href="/gallery"
      style={{
        position: "relative",
        display: "block",
        overflow: "hidden",
        aspectRatio: tall ? "unset" : "4/3",
        minHeight: tall ? "500px" : undefined,
        height: tall ? "100%" : undefined,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: "cover", transition: "transform 600ms ease, filter 400ms ease" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "3rem 1.25rem 1.25rem",
          background: "linear-gradient(to top, rgba(11,11,12,0.7) 0%, transparent 100%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <span style={{ color: "rgba(247,246,243,0.85)", fontSize: "0.8rem", fontFamily: "var(--font-inter)" }}>
          {label}
        </span>
        <span className="font-label" style={{ color: "rgba(247,246,243,0.35)", fontSize: "0.55rem" }}>
          0{index}
        </span>
      </div>
    </Link>
  );
}

function HeroButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-block",
        padding: "0.9rem 2rem",
        background: "var(--accent)",
        color: "var(--white)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.65rem",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </Link>
  );
}

function CTAButton() {
  return (
    <Link
      href="/contact"
      style={{
        display: "inline-block",
        padding: "1.1rem 2.5rem",
        background: "var(--ink)",
        color: "var(--white)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.65rem",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      Get in Touch →
    </Link>
  );
}
