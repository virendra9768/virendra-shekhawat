"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { SERVICES } from "@/utils/common";

export default function ServicesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{
        padding: "120px clamp(1.5rem, 5vw, 5rem)",
        borderTop: "1px solid #1E1B18",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Label */}
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
              03 — Services
            </span>
            <span style={{ flex: 1, height: 1, background: "#1E1B18", maxWidth: 80 }} />
          </div>
        </FadeIn>

        {/* Headline + subtext */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            marginBottom: 80,
            alignItems: "end",
          }}
          className="services-header"
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
              What I build —<br />
              <em style={{ color: "#C8922A", fontStyle: "italic" }}>
                and how I build it.
              </em>
            </h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <p
              style={{
                color: "#B0A090",
                fontSize: 15,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Three types of engagements, each with a defined scope and output.
              No vague retainers, no scope creep. You know what you&apos;re getting
              before we start.
            </p>
          </FadeIn>
        </div>

        {/* Service rows */}
        <div style={{ borderTop: "1px solid #1E1B18" }}>
          {SERVICES.map((s, i) => {
            const isOpen = expanded === i;
            return (
              <FadeIn key={s.num} delay={i * 0.1}>
                <div
                  style={{
                    borderBottom: "1px solid #1E1B18",
                    transition: "background 0.2s",
                    background: isOpen ? "rgba(200,146,42,0.04)" : "transparent",
                  }}
                >
                  {/* Row header */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "28px 0",
                      display: "grid",
                      gridTemplateColumns: "80px 1fr 1fr auto",
                      alignItems: "center",
                      gap: 24,
                      textAlign: "left",
                    }}
                    className="service-row-btn"
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        color: "#7A6E65",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {s.num}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Serif Display', Georgia, serif",
                        fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                        color: "#F0EBE3",
                        fontWeight: 400,
                      }}
                    >
                      {s.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 12,
                        color: "#9A8E84",
                        letterSpacing: "0.04em",
                      }}
                      className="service-short"
                    >
                      {s.short}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 18,
                        color: isOpen ? "#C8922A" : "#7A6E65",
                        transition: "transform 0.3s ease, color 0.2s",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        display: "inline-block",
                      }}
                    >
                      +
                    </span>
                  </button>

                  {/* Expandable detail */}
                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: isOpen ? 400 : 0,
                      transition: "max-height 0.45s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    <div
                      style={{
                        paddingLeft: 80,
                        paddingBottom: 36,
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr",
                        gap: 48,
                      }}
                      className="service-detail"
                    >
                      <p
                        style={{
                          color: "#C4B8AA",
                          fontSize: 15,
                          lineHeight: 1.9,
                          margin: 0,
                        }}
                      >
                        {s.detail}
                      </p>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: 12,
                        }}
                      >
                        {s.deliverables.map((d) => (
                          <li
                            key={d}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 10,
                              fontFamily: "'DM Mono', monospace",
                              fontSize: 12,
                              color: "#9A8E84",
                            }}
                          >
                            <span
                              style={{
                                width: 3,
                                height: 3,
                                borderRadius: "50%",
                                background: "#C8922A",
                                flexShrink: 0,
                              }}
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-header { grid-template-columns: 1fr !important; gap: 24px !important; margin-bottom: 48px !important; }
          .service-row-btn { grid-template-columns: 40px 1fr auto !important; }
          .service-short { display: none !important; }
          .service-detail { grid-template-columns: 1fr !important; padding-left: 40px !important; }
        }
      `}</style>
    </section>
  );
}