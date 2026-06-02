"use client";

import { PROJECTS } from "@/utils/common";
import { useEffect, useState, useCallback } from "react";

export default function ProjectsSection() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const [direction, setDirection] = useState<1 | -1>(1);
  const count = PROJECTS.length;

  const goToWithDirection = useCallback(
    (index: number) => {
      if (isAnimating || index === active) return;
      setDirection(index > active ? 1 : -1);
      setIsAnimating(true);
      setContentVisible(false);
      setTimeout(() => {
        setActive(index);
        setContentVisible(true);
        setIsAnimating(false);
      }, 300);
    },
    [active, isAnimating]
  );

  const nextDir = useCallback(() => goToWithDirection((active + 1) % count), [active, count, goToWithDirection]);
  const prevDir = useCallback(() => goToWithDirection((active - 1 + count) % count), [active, count, goToWithDirection]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const section = document.getElementById("projects");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
      if (!inView) return;
      if (e.key === "ArrowRight") { e.preventDefault(); nextDir(); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); prevDir(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextDir, prevDir]);

  const p = PROJECTS[active];

  return (
    <section
      id="projects"
      style={{
        padding: "120px clamp(1.5rem, 5vw, 5rem)",
        background: "#0A0907",
        borderTop: "1px solid #1E1B18",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 80 }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#7A6E65",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            05 — Selected Work
          </span>
          <span style={{ flex: 1, height: 1, background: "#1E1B18", maxWidth: 80 }} />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#7A6E65",
              letterSpacing: "0.1em",
              marginLeft: "auto",
            }}
          >
            {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 8vw, 120px)",
              alignItems: "center",
            }}
            className="projects-grid"
          >
            {/* Left — text */}
            <div
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible
                  ? "translateX(0)"
                  : `translateX(${direction * -28}px)`,
                transition: contentVisible
                  ? "opacity 0.4s cubic-bezier(0.22,1,0.36,1), transform 0.4s cubic-bezier(0.22,1,0.36,1)"
                  : "opacity 0.2s ease, transform 0.2s ease",
              }}
            >
              {/* Ghost index */}
              <div
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(80px, 14vw, 140px)",
                  lineHeight: 1,
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(200,146,42,0.1)",
                  userSelect: "none",
                  marginBottom: -8,
                  letterSpacing: "-0.02em",
                }}
              >
                {p.index}
              </div>

              {/* Category badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 20,
                  background: p.accentDim,
                  border: `1px solid ${p.accentBorder}`,
                  borderRadius: 3,
                  padding: "5px 12px",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: p.accent,
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    color: p.accent,
                    fontSize: 11,
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.category}
                </span>
              </div>

              {/* Project name */}
              <h2
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  fontWeight: 400,
                  color: "#F0EBE3",
                  lineHeight: 1.1,
                  marginBottom: 20,
                }}
              >
                {p.name}
              </h2>

              {/* Italic headline */}
              <p
                style={{
                  fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                  color: "#C8922A",
                  lineHeight: 1.65,
                  marginBottom: 16,
                  fontStyle: "italic",
                  fontFamily: "'DM Serif Display', Georgia, serif",
                }}
              >
                "{p.headline}"
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  color: "#C4B8AA",
                  lineHeight: 1.85,
                  marginBottom: 28,
                  maxWidth: 480,
                }}
              >
                {p.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
                {p.tags.map((t: string) => (
                  <span
                    key={t}
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid #1E1B18",
                      borderRadius: 3,
                      padding: "4px 12px",
                      fontSize: 11,
                      color: "#9A8E84",
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#0D0B09",
                  background: p.accent,
                  textDecoration: "none",
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "13px 28px",
                  borderRadius: 3,
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                {p.label}
                <span style={{ fontSize: 14 }}>↗</span>
              </a>
            </div>

            {/* Right — browser mockup */}
            <div
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible
                  ? "translateX(0) rotate(0deg)"
                  : `translateX(${direction * 28}px) rotate(${direction * 0.8}deg)`,
                transition: contentVisible
                  ? "opacity 0.45s cubic-bezier(0.22,1,0.36,1) 0.06s, transform 0.45s cubic-bezier(0.22,1,0.36,1) 0.06s"
                  : "opacity 0.2s ease, transform 0.2s ease",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "1px solid #1E1B18",
                  background: "#141210",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
                }}
              >
                {/* Browser chrome */}
                <div
                  style={{
                    background: "#141210",
                    padding: "10px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    borderBottom: "1px solid #1E1B18",
                  }}
                >
                  <div style={{ display: "flex", gap: 6 }}>
                    {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
                      <div
                        key={c}
                        style={{
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          background: c,
                          opacity: 0.45,
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "#0D0B09",
                      border: "1px solid #1E1B18",
                      borderRadius: 3,
                      padding: "4px 12px",
                      fontSize: 10,
                      color: "#8A7E74",
                      fontFamily: "'DM Mono', monospace",
                      textAlign: "center",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.url.replace("https://", "").replace(/\/$/, "")}
                  </div>
                </div>

                {/* iframe */}
                <div style={{ position: "relative", paddingTop: "62%" }}>
                  <iframe
                    src={p.url}
                    title={p.name}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                      pointerEvents: "none",
                    }}
                    loading="lazy"
                    scrolling="no"
                  />
                  {/* Hover overlay */}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(10,9,7,0)",
                      transition: "background 0.3s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(10,9,7,0.6)";
                      const span = e.currentTarget.querySelector("span") as HTMLElement;
                      if (span) { span.style.opacity = "1"; span.style.transform = "translateY(0)"; }
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(10,9,7,0)";
                      const span = e.currentTarget.querySelector("span") as HTMLElement;
                      if (span) { span.style.opacity = "0"; span.style.transform = "translateY(4px)"; }
                    }}
                  >
                    <span
                      style={{
                        opacity: 0,
                        transform: "translateY(4px)",
                        transition: "opacity 0.25s ease, transform 0.25s ease",
                        background: p.accent,
                        color: "#0D0B09",
                        padding: "10px 22px",
                        borderRadius: 3,
                        fontSize: 12,
                        fontWeight: 700,
                        fontFamily: "'DM Mono', monospace",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Open Site ↗
                    </span>
                  </a>
                </div>
              </div>

              {/* Glow under mockup */}
              <div
                style={{
                  height: 48,
                  background: `radial-gradient(ellipse 50% 100% at 50% 0%, ${p.accent}14, transparent)`,
                  marginTop: -1,
                  filter: "blur(6px)",
                  transition: "background 0.6s ease",
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 48,
            borderTop: "1px solid #1E1B18",
            marginTop: 48,
          }}
        >
          {/* Dot indicators */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {PROJECTS.map((proj: typeof p, i: number) => (
              <button
                key={i}
                onClick={() => goToWithDirection(i)}
                aria-label={`Go to project ${i + 1}`}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: i === active ? 20 : 5,
                    height: 5,
                    borderRadius: 3,
                    background: i === active ? proj.accent : "#2A2420",
                    transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Right side: keyboard hint + arrows */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span
              className="keyboard-hint"
              style={{
                fontSize: 10,
                color: "#7A6E65",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginRight: 4,
                display: "none",
              }}
            >
              ← → to navigate
            </span>
            {[
              { label: "←", action: prevDir },
              { label: "→", action: nextDir },
            ].map(({ label, action }) => (
              <button
                key={label}
                onClick={action}
                disabled={isAnimating}
                style={{
                  background: "transparent",
                  border: "1px solid #3A3430",
                  borderRadius: 3,
                  color: "#8A7E74",
                  cursor: isAnimating ? "default" : "pointer",
                  width: 38,
                  height: 38,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  transition: "border-color 0.2s, color 0.2s, opacity 0.2s",
                  fontFamily: "'DM Mono', monospace",
                  opacity: isAnimating ? 0.3 : 1,
                }}
                onMouseEnter={(e) => {
                  if (isAnimating) return;
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#C8922A";
                  (e.currentTarget as HTMLButtonElement).style.color = "#C8922A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#3A3430";
                  (e.currentTarget as HTMLButtonElement).style.color = "#8A7E74";
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: -100,
          right: "15%",
          width: 500,
          height: 380,
          background: `radial-gradient(ellipse, ${p.accent}08 0%, transparent 70%)`,
          pointerEvents: "none",
          transition: "background 0.8s ease",
        }}
      />

      <style>{`
        @media (min-width: 768px) {
          .keyboard-hint { display: block !important; }
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}