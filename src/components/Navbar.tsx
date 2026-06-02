"use client";

import { LINKS } from "@/utils/common";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.toLowerCase())).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 60,
          display: "flex",
          alignItems: "center",
          padding: "0 clamp(1.5rem, 5vw, 5rem)",
          background: scrolled ? "rgba(13,11,9,0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid #1E1B18" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          transition: "background 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 15,
                color: "#F0EBE3",
                letterSpacing: "0.04em",
                lineHeight: 1,
              }}
            >
              Virendra Singh
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: "#C8922A",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Shekhawat
            </span>
          </button>

          {/* Desktop nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 36,
            }}
            className="desktop-nav"
          >
            {LINKS.map((link) => {
              const isActive = activeSection === link.toLowerCase();
              return (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: isActive ? "#F0EBE3" : "#8A7E74",
                    fontSize: 12,
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "4px 0",
                    position: "relative",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#F0EBE3")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = isActive
                      ? "#F0EBE3"
                      : "#8A7E74")
                  }
                >
                  {link}
                  {/* Active underline */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: "#C8922A",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
              );
            })}

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#0D0B09",
              background: "#C8922A",
              padding: "8px 18px",
              borderRadius: 3,
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.8")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
          >
            Hire Me
          </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "none",
              flexDirection: "column",
              gap: 5,
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: i === 1 ? 16 : 22,
                  height: 1,
                  background: "#F0EBE3",
                  transition: "width 0.2s",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 60,
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(13,11,9,0.97)",
            borderBottom: "1px solid #1E1B18",
            padding: "24px clamp(1.5rem, 5vw, 5rem)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid #1E1B18",
                  cursor: "pointer",
                  color: "#C4B8AA",
                  fontSize: 13,
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "16px 0",
                  textAlign: "left",
                  transition: "color 0.2s",
                }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}