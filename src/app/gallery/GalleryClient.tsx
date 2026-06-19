"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import Reveal from "@/components/Reveal";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  label: string;
};

const filters = ["All", "Finished", "Process"] as const;

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const filtered = activeFilter === "All" ? images : images.filter((i) => i.category === activeFilter);

  const openLightbox = useCallback((img: GalleryImage) => {
    const idx = filtered.indexOf(img);
    setLightboxIndex(idx);
    setLightbox(img);
    document.body.style.overflow = "hidden";
  }, [filtered]);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      const next = (lightboxIndex + dir + filtered.length) % filtered.length;
      setLightboxIndex(next);
      setLightbox(filtered[next]);
    },
    [lightboxIndex, filtered]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, navigate]);

  return (
    <>
      {/* Filter bar */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "2.5rem 2rem",
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className="font-label"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.25rem 0",
              color: activeFilter === f ? "var(--ink)" : "var(--concrete)",
              borderBottom: activeFilter === f ? "1px solid var(--accent)" : "1px solid transparent",
              transition: "color 200ms, border-color 200ms",
            }}
          >
            {f}
          </button>
        ))}
        <span className="font-label" style={{ color: "var(--concrete)", marginLeft: "auto" }}>
          {filtered.length} works
        </span>
      </div>

      {/* Masonry-style grid */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto 8rem",
          padding: "0 2rem",
          columns: "3 280px",
          gap: "4px",
        }}
        className="gallery-masonry"
      >
        {filtered.map((img, i) => (
          <Reveal key={img.src} delay={Math.min(i * 60, 360)}>
            <div
              style={{
                breakInside: "avoid",
                marginBottom: "4px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => openLightbox(img)}
              role="button"
              aria-label={`Open ${img.label}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 500ms ease, filter 400ms ease",
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="gallery-img"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(11,11,12,0)",
                  transition: "background 300ms ease",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "1.25rem",
                }}
                className="gallery-overlay"
              >
                <p
                  style={{
                    color: "var(--white)",
                    fontSize: "0.75rem",
                    lineHeight: 1.4,
                    opacity: 0,
                    transform: "translateY(4px)",
                    transition: "opacity 250ms, transform 250ms",
                    fontFamily: "var(--font-inter)",
                  }}
                  className="gallery-label"
                >
                  {img.label}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(11,11,12,0.96)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="font-label"
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "2rem",
              background: "none",
              border: "none",
              color: "var(--concrete)",
              cursor: "pointer",
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
            }}
          >
            ESC / Close
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            style={{
              position: "absolute",
              left: "1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "1px solid rgba(74,74,72,0.4)",
              color: "var(--concrete)",
              cursor: "pointer",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.25rem",
            }}
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            style={{
              position: "relative",
              maxWidth: "min(90vw, 1100px)",
              maxHeight: "85vh",
              width: "100%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={900}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
              priority
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <p style={{ color: "var(--concrete)", fontSize: "0.8rem" }}>{lightbox.label}</p>
              <span className="font-label" style={{ color: "var(--steel)", fontSize: "0.55rem" }}>
                {lightboxIndex + 1} / {filtered.length}
              </span>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            style={{
              position: "absolute",
              right: "1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "1px solid rgba(74,74,72,0.4)",
              color: "var(--concrete)",
              cursor: "pointer",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.25rem",
            }}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}

      <style>{`
        .gallery-img:hover { transform: scale(1.03); }
        .gallery-masonry > div:hover .gallery-overlay { background: rgba(11,11,12,0.5) !important; }
        .gallery-masonry > div:hover .gallery-label { opacity: 1 !important; transform: translateY(0) !important; }
        @media (max-width: 600px) {
          .gallery-masonry { columns: 1 !important; }
        }
      `}</style>
    </>
  );
}
