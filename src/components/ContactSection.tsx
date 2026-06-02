"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { CONTACT_DETAILS, PROJECT_TYPES } from "@/utils/common";

type FormState = {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!form.type) errors.type = "Please select a project type";
  if (!form.message.trim()) {
    errors.message = "Message is required";
  } else if (form.message.trim().length < 20) {
    errors.message = "Tell me a bit more — at least 20 characters";
  }
  return errors;
}

const errorStyle: React.CSSProperties = {
  fontFamily: "'DM Mono', monospace",
  fontSize: 10,
  color: "#C0604A",
  letterSpacing: "0.06em",
  marginTop: 6,
  display: "block",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const errors = validate(form);
  const hasErrors = Object.keys(errors).length > 0;

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const touch = (k: keyof FormState) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setFocused(null);
  };

  const showError = (k: keyof FormState) =>
    (touched[k] || submitAttempted) && errors[k];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (hasErrors) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
    } catch {
      // optionally show a network error state
    } finally {
      setLoading(false);
    }
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #2A2420",
    padding: "12px 0",
    color: "#F0EBE3",
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
    borderRadius: 0,
    opacity: loading ? 0.5 : 1,
    pointerEvents: loading ? "none" : "auto",
  };

  const borderColor = (field: keyof FormState) => {
    if (showError(field)) return "#C0604A";
    if (focused === field) return "#C8922A";
    return "#2A2420";
  };

  const labelColor = (field: keyof FormState) => {
    if (showError(field)) return "#C0604A";
    if (focused === field) return "#C8922A";
    return "#7A6E65";
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px clamp(1.5rem, 5vw, 5rem)",
        borderTop: "1px solid #1E1B18",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
              06 — Contact
            </span>
            <span style={{ flex: 1, height: 1, background: "#1E1B18", maxWidth: 80 }} />
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(48px, 8vw, 120px)",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          <FadeIn direction="left">
            <h2
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                color: "#F0EBE3",
                lineHeight: 1.1,
                margin: "0 0 12px",
              }}
            >
              Let's build
              <br />
              <em style={{ color: "#C8922A", fontStyle: "italic" }}>
                something together.
              </em>
            </h2>
            <p
              style={{
                color: "#B0A090",
                fontSize: 14,
                lineHeight: 1.75,
                marginBottom: 48,
              }}
            >
              Available for freelance projects — small to mid-scale web apps
              and business websites. Usually respond within 24 hours.
            </p>

            {sent ? (
              <div style={{ padding: "40px 0", borderTop: "1px solid #1E1B18" }}>
                <div
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "2rem",
                    color: "#C8922A",
                    marginBottom: 12,
                  }}
                >
                  Message received.
                </div>
                <p style={{ color: "#9A8E84", fontSize: 14, lineHeight: 1.75, marginBottom: 32 }}>
                  I'll get back to you within 24 hours. Or reach me directly on
                  WhatsApp for a faster reply.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", phone: "", type: "", message: "" });
                    setTouched({});
                    setSubmitAttempted(false);
                  }}
                  style={{
                    background: "transparent",
                    color: "#8A7E74",
                    border: "1px solid #3A3430",
                    cursor: "pointer",
                    padding: "10px 24px",
                    borderRadius: 3,
                    fontSize: 12,
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#C8922A";
                    (e.currentTarget as HTMLButtonElement).style.color = "#C8922A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#3A3430";
                    (e.currentTarget as HTMLButtonElement).style.color = "#8A7E74";
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{ display: "flex", flexDirection: "column", gap: 32 }}
              >
                {/* Name + Email */}
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}
                  className="form-row"
                >
                  {(["name", "email"] as const).map((field) => (
                    <div key={field}>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 10,
                          color: labelColor(field),
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          marginBottom: 4,
                          transition: "color 0.2s",
                        }}
                      >
                        {field === "name" ? "Name" : "Email"}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        value={form[field]}
                        onChange={set(field)}
                        onFocus={() => setFocused(field)}
                        onBlur={() => touch(field)}
                        style={{
                          ...inputBase,
                          borderBottomColor: borderColor(field),
                        }}
                        placeholder={field === "name" ? "Your name" : "your@email.com"}
                      />
                      {showError(field) && (
                        <span style={errorStyle}>↑ {errors[field]}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Phone */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: focused === "phone" ? "#C8922A" : "#7A6E65",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                      transition: "color 0.2s",
                    }}
                  >
                    Phone <span style={{ color: "#7A6E65" }}>(optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputBase,
                      borderBottomColor: focused === "phone" ? "#C8922A" : "#2A2420",
                    }}
                    placeholder="+91 00000 00000"
                  />
                </div>

                {/* Project type */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: showError("type") ? "#C0604A" : "#7A6E65",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      marginBottom: 12,
                      transition: "color 0.2s",
                    }}
                  >
                    Project Type
                  </label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {PROJECT_TYPES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        disabled={loading}
                        onClick={() => {
                          setForm((f) => ({ ...f, type: t }));
                          setTouched((prev) => ({ ...prev, type: true }));
                        }}
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 11,
                          letterSpacing: "0.06em",
                          padding: "8px 16px",
                          borderRadius: 3,
                          border: "1px solid",
                          cursor: loading ? "default" : "pointer",
                          transition: "all 0.2s",
                          opacity: loading ? 0.5 : 1,
                          background: form.type === t ? "rgba(200,146,42,0.1)" : "transparent",
                          borderColor: form.type === t ? "#C8922A" : "#2A2420",
                          color: form.type === t ? "#C8922A" : "#9A8E84",
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  {showError("type") && (
                    <span style={{ ...errorStyle, marginTop: 10 }}>↑ {errors.type}</span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: labelColor("message"),
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                      transition: "color 0.2s",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    rows={4}
                    onFocus={() => setFocused("message")}
                    onBlur={() => touch("message")}
                    placeholder="Tell me about your project..."
                    style={{
                      ...inputBase,
                      resize: "none",
                      borderBottomColor: borderColor("message"),
                    }}
                  />
                  {showError("message") && (
                    <span style={errorStyle}>↑ {errors.message}</span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    alignSelf: "flex-start",
                    background: submitAttempted && hasErrors ? "#3A2E1A" : "#C8922A",
                    color: submitAttempted && hasErrors ? "#7A6020" : "#0D0B09",
                    border: "none",
                    cursor: loading || (submitAttempted && hasErrors) ? "default" : "pointer",
                    padding: "13px 32px",
                    borderRadius: 3,
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    minWidth: 160,
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    if (loading || (submitAttempted && hasErrors)) return;
                    (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  }}
                >
                  {loading ? (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        style={{ animation: "spin 0.8s linear infinite", flexShrink: 0 }}
                      >
                        <circle cx="7" cy="7" r="5.5" stroke="#0D0B09" strokeOpacity="0.3" strokeWidth="1.5" />
                        <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="#0D0B09" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      Sending...
                    </>
                  ) : submitAttempted && hasErrors ? (
                    "Fix errors above"
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </FadeIn>

          {/* Right — contact details */}
          <FadeIn direction="right" delay={0.15}>
            <div>
              <div
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(80px, 12vw, 120px)",
                  lineHeight: 1,
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(200,146,42,0.08)",
                  userSelect: "none",
                  marginBottom: 40,
                }}
              >
                VSS
              </div>

              <div
                style={{
                  borderTop: "1px solid #1E1B18",
                  paddingTop: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                }}
              >
                {CONTACT_DETAILS.map((c) => (
                  <div
                    key={c.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "100px 1fr",
                      gap: 16,
                      padding: "16px 0",
                      borderBottom: "1px solid #1A1714",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 10,
                        color: "#7A6E65",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        paddingTop: 2,
                      }}
                    >
                      {c.label}
                    </span>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 13,
                          color: "#C4B8AA",
                          textDecoration: "none",
                          transition: "color 0.2s",
                          wordBreak: "break-all",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color = "#C8922A")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color = "#C4B8AA")
                        }
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 13,
                          color: "#C4B8AA",
                        }}
                      >
                        {c.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/917073041088"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: 32,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "20px 24px",
                  border: "1px solid #1E1B18",
                  borderRadius: 4,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(37,211,102,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1E1B18";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(37,211,102,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 18,
                  }}
                >
                  💬
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 12,
                      color: "#5BAF7A",
                      letterSpacing: "0.08em",
                      marginBottom: 3,
                    }}
                  >
                    Chat on WhatsApp
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: "#8A7E74",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Faster replies · Usually within hours
                  </div>
                </div>
                <span style={{ marginLeft: "auto", color: "#8A7E74", fontSize: 16 }}>↗</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        input::placeholder, textarea::placeholder {
          color: #6E6258;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}