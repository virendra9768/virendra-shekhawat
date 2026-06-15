"use client";

import { PROJECTS } from "@/utils/common";
import { useEffect, useState, useCallback } from "react";

// ─── Right-panel visuals ──────────────────────────────────────────────────────

function CaseStudyVisual({ p }: { p: typeof PROJECTS[0] }) {
  const [openPhase, setOpenPhase] = useState<number>(0);
  const cs = p.caseStudy!;

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid #1E1B18",
        background: "#0D0B09",
        boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
      }}
    >
      {/* Chrome bar */}
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
              style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.45 }}
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
          case-study · reserve-with-google
        </div>
      </div>

      {/* Case study content */}
      <div style={{ padding: "20px 20px 24px" }}>
        {/* Role badge */}
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 10,
            color: p.accent,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          {cs.role}
        </p>

        {/* Phase accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {cs.phases.map((phase, i) => {
            const isOpen = openPhase === i;
            return (
              <div
                key={phase.num}
                style={{
                  border: "1px solid",
                  borderColor: isOpen ? p.accentBorder : "#1E1B18",
                  borderRadius: 4,
                  background: isOpen ? p.accentDim : "transparent",
                  transition: "all 0.2s ease",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenPhase(isOpen ? -1 : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 9,
                      color: isOpen ? p.accent : "#7A6E65",
                      letterSpacing: "0.1em",
                      flexShrink: 0,
                    }}
                  >
                    {phase.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: isOpen ? "#F0EBE3" : "#9A8E84",
                      letterSpacing: "0.04em",
                      flex: 1,
                    }}
                  >
                    {phase.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 14,
                      color: isOpen ? p.accent : "#3A3430",
                      transform: isOpen ? "rotate(45deg)" : "none",
                      transition: "transform 0.2s ease, color 0.2s",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? 300 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <ul
                    style={{
                      margin: 0,
                      padding: "0 14px 12px 38px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 7,
                    }}
                  >
                    {phase.points.map((pt) => (
                      <li
                        key={pt}
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 11,
                          color: "#C4B8AA",
                          lineHeight: 1.6,
                          listStyle: "none",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: -14,
                            top: 6,
                            width: 3,
                            height: 3,
                            borderRadius: "50%",
                            background: p.accent,
                            display: "inline-block",
                          }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance result strip */}
        <div
          style={{
            marginTop: 16,
            padding: "10px 14px",
            borderRadius: 4,
            border: "1px solid rgba(91,175,122,0.2)",
            background: "rgba(91,175,122,0.06)",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 12 }}>✓</span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: "#5BAF7A",
              letterSpacing: "0.08em",
            }}
          >
            Passed Google Partner validation · Live on Search & Maps
          </span>
        </div>
      </div>

      {/* Glow */}
      <div
        style={{
          height: 48,
          background: `radial-gradient(ellipse 50% 100% at 50% 0%, ${p.accent}14, transparent)`,
          marginTop: -1,
          filter: "blur(6px)",
        }}
      />
    </div>
  );
}

function WipVisual({ p }: { p: typeof PROJECTS[0] }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid #1E1B18",
        background: "#0D0B09",
        boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
      }}
    >
      {/* Chrome bar */}
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
              style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.45 }}
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
          qrvana.in · build log
        </div>
      </div>

      {/* WIP content */}
      <div style={{ padding: "24px 24px 28px" }}>
        {/* Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: p.accent,
              display: "inline-block",
              boxShadow: `0 0 8px ${p.accent}80`,
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: p.accent,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Active build · shipping solo
          </span>
        </div>

        {/* Progress bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {p.wipProgress!.map(({ label, pct }) => (
            <div key={label}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "#9A8E84",
                    letterSpacing: "0.04em",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    color: pct >= 80 ? p.accent : "#7A6E65",
                  }}
                >
                  {pct}%
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 3,
                  background: "#1E1B18",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${pct}%`,
                    height: "100%",
                    background:
                      pct >= 80
                        ? p.accent
                        : pct >= 50
                        ? `${p.accent}99`
                        : `${p.accent}44`,
                    borderRadius: 2,
                    transition: "width 0.8s cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stack tags */}
        <div
          style={{
            marginTop: 24,
            paddingTop: 20,
            borderTop: "1px solid #1E1B18",
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
          }}
        >
          {["Next.js 15", "App Router", "Drizzle ORM", "NextAuth v5", "14-table schema", "76 components"].map(
            (t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  color: "#7A6E65",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid #1E1B18",
                  borderRadius: 3,
                  padding: "3px 10px",
                  letterSpacing: "0.04em",
                }}
              >
                {t}
              </span>
            )
          )}
        </div>
      </div>

      {/* Glow */}
      <div
        style={{
          height: 48,
          background: `radial-gradient(ellipse 50% 100% at 50% 0%, ${p.accent}14, transparent)`,
          marginTop: -1,
          filter: "blur(6px)",
        }}
      />
    </div>
  );
}

function IframeVisual({ p }: { p: typeof PROJECTS[0] }) {
  return (
    <div>
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
                style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.45 }}
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
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

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
                &ldquo;{p.headline}&rdquo;
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
                target={p.url.startsWith("http") ? "_blank" : "_self"}
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

            {/* Right — visual panel */}
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
              {p.visual === "casestudy" && <CaseStudyVisual p={p} />}
              {p.visual === "wip"        && <WipVisual p={p} />}
              {p.visual === "iframe"     && <IframeVisual p={p} />}
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