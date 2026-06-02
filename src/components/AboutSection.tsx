"use client";

import { EXPERIENCE, STACK } from "@/utils/common";
import FadeIn from "./FadeIn";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "120px clamp(1.5rem, 5vw, 5rem)",
        background: "#0A0907",
        borderTop: "1px solid #1E1B18",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Section label */}
        <FadeIn>
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
              02 — About
            </span>
            <span style={{ flex: 1, height: 1, background: "#1E1B18", maxWidth: 80 }} />
          </div>
        </FadeIn>

        {/* Headline + bio */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(48px, 8vw, 120px)",
            marginBottom: 96,
            alignItems: "start",
          }}
          className="about-grid"
        >
          <FadeIn direction="left">
            <h2
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                color: "#F0EBE3",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Backend-focused.
              <br />
              <em style={{ color: "#C8922A", fontStyle: "italic" }}>
                Product-minded.
              </em>
              <br />
              Independently working.
            </h2>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: "#C4B8AA", fontSize: "clamp(0.9rem, 1.4vw, 1rem)", lineHeight: 1.85, margin: 0 }}>
                Full stack JavaScript developer with 5+ years of production
                experience — from REST APIs and database schemas to React
                frontends and client-facing business sites.
              </p>
              <p style={{ color: "#B0A090", fontSize: "clamp(0.9rem, 1.4vw, 1rem)", lineHeight: 1.85, margin: 0 }}>
                Previously at Webdunia, Dev Technosys, and Jiak Technology.
                Now freelancing independently, taking on small to mid-scale
                projects for startups and businesses.
              </p>
              <p style={{ color: "#9A8E84", fontSize: "clamp(0.9rem, 1.4vw, 1rem)", lineHeight: 1.85, margin: 0 }}>
                I care about clean architecture, clear communication, and
                shipping things that actually hold up in production.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Experience table */}
        <FadeIn delay={0.1}>
          <div style={{ marginBottom: 96 }}>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  color: "#7A6E65",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Where I've shipped
              </span>
              <span style={{ flex: 1, height: 1, background: "#1E1B18" }} />
            </div>

            {/* Column headers */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 160px 100px",
                padding: "8px 0",
                borderBottom: "1px solid #1E1B18",
                gap: 24,
              }}
              className="exp-header"
            >
              {["Company", "Role", "Period"].map((h) => (
                <span
                  key={h}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 9,
                    color: "#7A6E65",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Rows */}
            {EXPERIENCE.map((exp, i) => (
              <FadeIn key={exp.company} delay={0.05 + i * 0.07} direction="up" distance={12}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 160px 100px",
                    gap: 24,
                    padding: "24px 8px",
                    borderBottom: "1px solid #1A1714",
                    cursor: "default",
                    transition: "background 0.25s ease",
                    borderRadius: 3,
                    margin: "0 -8px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(200,146,42,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "transparent";
                  }}
                  className="exp-row"
                >
                  {/* Company + detail */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontFamily: "'DM Serif Display', Georgia, serif",
                          fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                          color: "#F0EBE3",
                          fontWeight: 400,
                        }}
                      >
                        {exp.company}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 9,
                          color: "#8A7E74",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          border: "1px solid #2A2420",
                          borderRadius: 2,
                          padding: "2px 7px",
                        }}
                      >
                        {exp.type}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 10,
                          color: "#7A6E65",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {exp.location}
                      </span>
                    </div>
                    {/* Detail — the key readability fix */}
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 12,
                        color: "#9A8E84",
                        lineHeight: 1.7,
                        maxWidth: 480,
                      }}
                    >
                      {exp.detail}
                    </span>
                  </div>

                  {/* Role */}
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "#B0A090",
                      alignSelf: "flex-start",
                      paddingTop: 3,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {exp.role}
                  </div>

                  {/* Period */}
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "#8A7E74",
                      alignSelf: "flex-start",
                      paddingTop: 3,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {exp.period}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Stack grid */}
        <FadeIn delay={0.15}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 32,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: "#7A6E65",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Tech stack
            </span>
            <span style={{ flex: 1, height: 1, background: "#1E1B18" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "32px 48px",
            }}
            className="stack-grid"
          >
            {STACK.map(({ category, items }) => (
              <div key={category}>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 9,
                    color: "#7A6E65",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                    paddingBottom: 10,
                    borderBottom: "1px solid #1A1714",
                  }}
                >
                  {category}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 12,
                        color: "#9A8E84",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        transition: "color 0.2s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLLIElement).style.color = "#C8922A")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLLIElement).style.color = "#9A8E84")
                      }
                    >
                      <span
                        style={{
                          width: 10,
                          height: 1,
                          background: "#6B5F56",
                          flexShrink: 0,
                          display: "inline-block",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .exp-header { display: none !important; }
          .exp-row { grid-template-columns: 1fr !important; gap: 6px !important; }
          .stack-grid { grid-template-columns: 1fr 1fr !important; gap: 28px 24px !important; }
        }
      `}</style>
    </section>
  );
}