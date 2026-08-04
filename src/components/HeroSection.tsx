"use client";

import { CHARS, ROLES } from "@/utils/common";
import { useEffect, useRef, useState } from "react";

function useScramble(target: string, trigger: boolean, speed = 30) {
  const [display, setDisplay] = useState(target);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!trigger) return;
    let iteration = 0;
    const len = target.length;
    const run = () => {
      setDisplay(
        target
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return target[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (iteration < len) {
        iteration += 0.5;
        frameRef.current = setTimeout(run, speed);
      }
    };
    run();
    return () => {
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [target, trigger, speed]);

  return display;
}

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrambling, setScrambling] = useState(true);
  const scrambled = useScramble(ROLES[roleIndex], scrambling, 28);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrambling(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setScrambling(true);
      }, 80);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px clamp(1.5rem, 5vw, 5rem) 80px",
      }}
    >
      {/* Fine grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(200,146,42,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,146,42,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(200,146,42,0.055) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(160,82,74,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Available badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 40,
            animation: "heroFade 0.6s ease 0.1s both",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#5BAF7A",
              display: "inline-block",
              boxShadow: "0 0 8px rgba(91,175,122,0.5)",
            }}
          />
          <span
            style={{
              color: "#B0A090",
              fontSize: 12,
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Available for new projects
          </span>
        </div>

        {/* Name */}
        <div style={{ animation: "heroFade 0.7s ease 0.2s both" }}>
          <h1
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(3.2rem, 10vw, 8rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              color: "#F0EBE3",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Virendra
            <br />
            <span
              style={{
                WebkitTextStroke: "1px rgba(240,235,227,0.25)",
                color: "#6B5F56",
              }}
            >
              Singh
            </span>{" "}
            <span style={{ color: "#C8922A" }}>Shekhawat</span>
          </h1>
        </div>

        {/* Scramble role */}
        <div
          style={{
            marginTop: 28,
            animation: "heroFade 0.7s ease 0.35s both",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span
            style={{
              width: 32,
              height: 1,
              background: "#C8922A",
              display: "block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
              color: "#C8922A",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              minWidth: 260,
            }}
          >
            {scrambled}
          </span>
        </div>

        {/* Sub tagline */}
        <p
          style={{
            marginTop: 24,
            fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
            color: "#B0A090",
            maxWidth: 520,
            lineHeight: 1.75,
            animation: "heroFade 0.7s ease 0.45s both",
          }}
        >
          Building fast, scalable web applications from pixel-perfect interfaces to production-ready backend systems.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
            flexWrap: "wrap",
            animation: "heroFade 0.7s ease 0.55s both",
          }}
        >
          {/* Primary */}
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: "#C8922A",
              color: "#0D0B09",
              border: "none",
              cursor: "pointer",
              padding: "13px 30px",
              borderRadius: 3,
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
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
            Start Your Project
          </button>

          {/* Secondary */}
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: "transparent",
              color: "#B0A090",
              border: "1px solid #3A3430",
              cursor: "pointer",
              padding: "13px 30px",
              borderRadius: 3,
              fontSize: 12,
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#C8922A";
              (e.currentTarget as HTMLButtonElement).style.color = "#C8922A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#3A3430";
              (e.currentTarget as HTMLButtonElement).style.color = "#B0A090";
            }}
          >
            View Selected Projects
          </button>
        </div>

        {/* Stats row */}
        <div
          style={{
            marginTop: 80,
            paddingTop: 40,
            borderTop: "1px solid #1E1B18",
            display: "flex",
            gap: "clamp(32px, 6vw, 80px)",
            flexWrap: "wrap",
            animation: "heroFade 0.7s ease 0.65s both",
          }}
        >
          {[
            ["5+", "Years\nExperience"],
            ["20+", "Projects Delivered"],
            ["10+", "Production APIs"],
            ["100%", "Responsive Websites"],
          ].map(([num, label]) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "#C8922A",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#8A7E74",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: "clamp(1.5rem, 5vw, 5rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "heroFade 1s ease 1s both",
        }}
      >
        <div
          style={{
            width: 1,
            height: 60,
            background:
              "linear-gradient(to bottom, transparent, #7A6E65, transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 9,
            color: "#7A6E65",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  );
}