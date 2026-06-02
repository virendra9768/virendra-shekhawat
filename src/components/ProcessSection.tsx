"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { FAQS, STEPS } from "@/utils/common";

export default function ProcessSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section
      id="process"
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
              04 — How I Work
            </span>
            <span style={{ flex: 1, height: 1, background: "#1E1B18", maxWidth: 80 }} />
          </div>
        </FadeIn>

        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(48px, 8vw, 120px)",
            marginBottom: 96,
            alignItems: "end",
          }}
          className="process-header"
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
              From first message
              <br />
              <em style={{ color: "#C8922A", fontStyle: "italic" }}>
                to live product.
              </em>
            </h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <p style={{ color: "#B0A090", fontSize: 15, lineHeight: 1.85, margin: 0 }}>
              Four steps. No surprises. You know what's happening at every
              stage — and nothing gets built that you haven't signed off on.
            </p>
          </FadeIn>
        </div>

        {/* Steps */}
        <FadeIn delay={0.1}>
          <div style={{ borderTop: "1px solid #1E1B18", marginBottom: 96 }}>
            {STEPS.map((step) => (
              <div
                key={step.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 1fr",
                  gap: "24px 48px",
                  padding: "36px 8px",
                  borderBottom: "1px solid #1A1714",
                  alignItems: "start",
                  transition: "background 0.2s",
                  borderRadius: 3,
                  margin: "0 -8px",
                }}
                className="process-row"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(200,146,42,0.025)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {/* Number + duration */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 3 }}>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "#7A6E65",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 9,
                      color: "#6E6258",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {step.duration}
                  </span>
                </div>

                {/* Title + description */}
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                      color: "#F0EBE3",
                      fontWeight: 400,
                      marginBottom: 12,
                      lineHeight: 1.1,
                    }}
                  >
                    {step.title}
                  </div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: "#B0A090",
                      lineHeight: 1.85,
                      margin: 0,
                      maxWidth: 400,
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Outputs */}
                <div style={{ paddingTop: 3 }}>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 9,
                      color: "#7A6E65",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      marginBottom: 12,
                    }}
                  >
                    Deliverables
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {step.outputs.map((o) => (
                      <li
                        key={o}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 11,
                          color: "#9A8E84",
                        }}
                      >
                        <span
                          style={{
                            width: 10,
                            height: 1,
                            background: "#C8922A",
                            flexShrink: 0,
                            display: "inline-block",
                          }}
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* FAQ */}
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
              Common questions
            </span>
            <span style={{ flex: 1, height: 1, background: "#1E1B18" }} />
          </div>

          <div style={{ borderTop: "1px solid #1E1B18" }}>
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    borderBottom: "1px solid #1A1714",
                    transition: "background 0.2s",
                    background: isOpen ? "rgba(200,146,42,0.02)" : "transparent",
                    borderRadius: 3,
                    margin: "0 -8px",
                    paddingLeft: 8,
                    paddingRight: 8,
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "22px 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 24,
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Serif Display', Georgia, serif",
                        fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                        color: isOpen ? "#F0EBE3" : "#C4B8AA",
                        fontWeight: 400,
                        transition: "color 0.2s",
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 16,
                        color: isOpen ? "#C8922A" : "#7A6E65",
                        transition: "transform 0.3s ease, color 0.2s",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    >
                      +
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: isOpen ? 200 : 0,
                      transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        color: "#9A8E84",
                        lineHeight: 1.85,
                        margin: "0 0 24px",
                        maxWidth: 640,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* CTA strip */}
        <FadeIn delay={0.2}>
          <div
            style={{
              marginTop: 80,
              padding: "40px 48px",
              border: "1px solid #1E1B18",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 32,
              flexWrap: "wrap",
              background: "rgba(200,146,42,0.02)",
            }}
            className="cta-strip"
          >
            <div>
              <div
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  color: "#F0EBE3",
                  marginBottom: 8,
                  fontWeight: 400,
                }}
              >
                Ready to start?
              </div>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12,
                  color: "#8A7E74",
                  margin: 0,
                  letterSpacing: "0.04em",
                }}
              >
                Tell me what you're building — I'll reply within 24 hours.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  background: "#C8922A",
                  color: "#0D0B09",
                  border: "none",
                  cursor: "pointer",
                  padding: "13px 28px",
                  borderRadius: 3,
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "opacity 0.2s, transform 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                Get In Touch
              </button>
              <a
                href="https://wa.me/917073041088"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "transparent",
                  color: "#8A7E74",
                  border: "1px solid #3A3430",
                  cursor: "pointer",
                  padding: "13px 28px",
                  borderRadius: 3,
                  fontSize: 12,
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "border-color 0.2s, color 0.2s",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C8922A";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#C8922A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#3A3430";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#8A7E74";
                }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-header { grid-template-columns: 1fr !important; gap: 24px !important; margin-bottom: 56px !important; }
          .process-row { grid-template-columns: 48px 1fr !important; }
          .process-row > div:last-child { display: none !important; }
          .cta-strip { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 600px) {
          .process-row { grid-template-columns: 1fr !important; gap: 12px !important; }
          .process-row > div:first-child { flex-direction: row !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}