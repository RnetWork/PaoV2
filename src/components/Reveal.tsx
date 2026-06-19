"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

export default function Reveal({ children, delay = 0, style, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal-block${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}
