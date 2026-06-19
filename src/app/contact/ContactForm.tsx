"use client";

import { useState } from "react";

const inputStyle = {
  width: "100%",
  padding: "0.85rem 0",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(74,74,72,0.3)",
  color: "var(--ink)",
  fontSize: "0.95rem",
  fontFamily: "var(--font-inter)",
  outline: "none",
  transition: "border-color 200ms",
};

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: "0.6rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: "var(--concrete)",
  marginBottom: "0.25rem",
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div
        style={{
          padding: "3rem",
          border: "1px solid rgba(74,74,72,0.2)",
          textAlign: "center",
        }}
      >
        <p className="font-label" style={{ color: "var(--accent)", marginBottom: "1rem" }}>
          Message Sent
        </p>
        <p className="font-display" style={{ fontSize: "2rem", color: "var(--ink)", lineHeight: 1.1 }}>
          We&rsquo;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        <div>
          <label htmlFor="name" style={labelStyle}>Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderBottomColor = "var(--ink)")}
            onBlur={(e) => (e.target.style.borderBottomColor = "rgba(74,74,72,0.3)")}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderBottomColor = "var(--ink)")}
            onBlur={(e) => (e.target.style.borderBottomColor = "rgba(74,74,72,0.3)")}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="+351 ..."
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderBottomColor = "var(--ink)")}
            onBlur={(e) => (e.target.style.borderBottomColor = "rgba(74,74,72,0.3)")}
          />
        </div>
        <div>
          <label htmlFor="projectType" style={labelStyle}>Project Type</label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={handleChange}
            style={{
              ...inputStyle,
              cursor: "pointer",
              appearance: "none",
              WebkitAppearance: "none",
            }}
            onFocus={(e) => (e.target.style.borderBottomColor = "var(--ink)")}
            onBlur={(e) => (e.target.style.borderBottomColor = "rgba(74,74,72,0.3)")}
          >
            <option value="">Select ...</option>
            <option>Timber Frame Construction</option>
            <option>Sunroom / Conservatory</option>
            <option>Roof Carpentry</option>
            <option>Custom Interior Woodwork</option>
            <option>Renovation & Retrofit</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>About your project *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us about your project — location, size, timeline, and anything else that's relevant."
          style={{
            ...inputStyle,
            resize: "vertical",
            borderBottom: "none",
            border: "1px solid rgba(74,74,72,0.25)",
            padding: "1rem",
            marginTop: "0.25rem",
            lineHeight: 1.65,
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--ink)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(74,74,72,0.25)")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="font-label"
        style={{
          alignSelf: "flex-start",
          padding: "1rem 2.5rem",
          background: status === "sending" ? "var(--steel)" : "var(--ink)",
          color: "var(--white)",
          border: "none",
          cursor: status === "sending" ? "default" : "pointer",
          letterSpacing: "0.14em",
          transition: "background 200ms",
        }}
      >
        {status === "sending" ? "Sending..." : "Send Message →"}
      </button>

      <p style={{ fontSize: "0.75rem", color: "var(--concrete)", lineHeight: 1.6 }}>
        We treat all project enquiries with discretion. Your information will not be shared.
      </p>
    </form>
  );
}
