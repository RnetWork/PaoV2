"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 300ms ease, border-color 300ms ease",
          background: scrolled ? "var(--paper)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(74,74,72,0.15)" : "1px solid transparent",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: scrolled ? "var(--ink)" : "var(--white)",
          }}
        >
          Eco Vista Carpentry
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-accent font-label"
              style={{
                color: scrolled ? "var(--steel)" : "var(--white)",
                opacity: pathname === l.href ? 1 : 0.7,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: scrolled ? "var(--ink)" : "var(--white)",
              transition: "transform 200ms, opacity 200ms",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: scrolled ? "var(--ink)" : "var(--white)",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 200ms",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: scrolled ? "var(--ink)" : "var(--white)",
              transition: "transform 200ms, opacity 200ms",
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 90,
            background: "var(--ink)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "6rem 2.5rem 3rem",
            gap: "2rem",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 10vw, 5rem)",
                color: "var(--white)",
                opacity: pathname === l.href ? 1 : 0.5,
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
