import GalleryClient from "./GalleryClient";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Gallery — Eco Vista Carpentry",
  description: "Portfolio of completed carpentry projects.",
};

const allImages = [
  {
    src: "/images/finished/sunroom-exterior-glass-doors.jpg",
    alt: "Completed wooden sunroom with large sliding glass doors",
    category: "Finished",
    label: "Sunroom exterior — sliding glass doors in hardwood frame",
  },
  {
    src: "/images/finished/sunroom-interior-dining.jpg",
    alt: "Interior of wooden sunroom with dining area",
    category: "Finished",
    label: "Sunroom interior — dining space with countryside view",
  },
  {
    src: "/images/finished/sunroom-interior-living.jpg",
    alt: "Sunroom interior with hanging plants and bookshelves",
    category: "Finished",
    label: "Sunroom interior — living area, natural light",
  },
  {
    src: "/images/finished/sunroom-interior-warmlight.jpg",
    alt: "Wooden ceiling beams in warm afternoon light",
    category: "Finished",
    label: "Interior ceiling detail — pine beams and joinery",
  },
  {
    src: "/images/finished/glassroom-golden-hour.jpg",
    alt: "Wooden framed glass room at golden hour",
    category: "Finished",
    label: "Glass room exterior — golden hour",
  },
  {
    src: "/images/process/timber-frame-rising.jpg",
    alt: "Timber frame structure rising against hillside",
    category: "Process",
    label: "Timber frame — structural assembly",
  },
  {
    src: "/images/process/attic-framing-light.jpg",
    alt: "Interior attic framing with light streaming through roof gaps",
    category: "Process",
    label: "Attic conversion — framing stage",
  },
  {
    src: "/images/process/attic-framing-workers.jpg",
    alt: "Workers inside attic during framing",
    category: "Process",
    label: "Attic framing — team at work",
  },
  {
    src: "/images/process/roof-frame-exterior.jpg",
    alt: "New roof frame against a dramatic sky",
    category: "Process",
    label: "Roof carpentry — exterior view",
  },
  {
    src: "/images/process/roof-sheathing-install.jpg",
    alt: "OSB roof sheathing installation in progress",
    category: "Process",
    label: "Roof sheathing — installation",
  },
  {
    src: "/images/process/roof-perspective-sheathing.jpg",
    alt: "On-roof perspective showing sheathing panels",
    category: "Process",
    label: "On-roof — sheathing perspective",
  },
  {
    src: "/images/process/roof-sheathing-skylight.jpg",
    alt: "Roof sheathing with skylight opening",
    category: "Process",
    label: "Roof sheathing — skylight rough opening",
  },
  {
    src: "/images/process/rafters-lookthrough-01.jpg",
    alt: "Looking up through roof rafters at blue sky",
    category: "Process",
    label: "Rafters — light through structure",
  },
  {
    src: "/images/process/rafters-lookthrough-02.jpg",
    alt: "Roof rafters and OSB sheathing from below",
    category: "Process",
    label: "Rafters — interior upward view",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "4rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Reveal>
          <p className="font-label" style={{ color: "var(--concrete)", marginBottom: "1.5rem" }}>
            Portfolio
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "var(--ink)", lineHeight: 0.95 }}
          >
            Gallery
          </h1>
        </Reveal>
      </section>

      <hr className="hairline" style={{ maxWidth: "1400px", margin: "0 auto" }} />

      <GalleryClient images={allImages} />
    </>
  );
}
