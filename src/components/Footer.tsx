"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #1E1B18",
        padding: "28px clamp(1.5rem, 5vw, 5rem)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        {/* Left — colophon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 14,
              color: "#C4B8AA",
            }}
          >
            Virendra Singh Shekhawat
          </span>
          <span style={{ color: "#3A3430", fontSize: 10 }}>·</span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#8A7E74",
              letterSpacing: "0.1em",
            }}
          >
            Jaipur, India
          </span>
          <span style={{ color: "#3A3430", fontSize: 10 }}>·</span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#8A7E74",
              letterSpacing: "0.1em",
            }}
          >
            Full Stack JavaScript Developer
          </span>
          <span style={{ color: "#3A3430", fontSize: 10 }}>·</span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#6B5F56",
              letterSpacing: "0.1em",
            }}
          >
            © {year}
          </span>
        </div>

        {/* Right — links */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {[
            ["GitHub", "https://github.com/virendra9768"],
            ["LinkedIn", "https://www.linkedin.com/in/virendra-singh-shekhawat-91601b25b"],
            ["WhatsApp", "https://wa.me/917073041088"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "#9A8E84",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#C8922A")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#9A8E84")
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}