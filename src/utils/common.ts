const COLORS = {
  bg: "#0D0B09",
  bgCard: "#141210",
  bgCardHover: "#1A1714",
  bgSection: "#110F0D",
  amber: "#C8922A",
  amberLight: "#E5A83A",
  amberDim: "#8A6118",
  rose: "#A0524A",
  roseDim: "#6B3530",
  text: "#F0EBE3",
  textMuted: "#A89880",
  textDim: "#3D3530",
  border: "#3D3530",
  borderHover: "#3D3530",
};

const LINKS = ["About", "Services", "Process", "Projects", "Contact"];

const SKILLS = [
  "Node.js", "NestJS", "Express.js", "PostgreSQL", "MySQL", "MongoDB",
  "React.js", "Next.js", "TypeScript", "AWS S3", "REST APIs", "JWT Auth", "Docker", "Git"
];

const SERVICES = [
  {
    num: "01",
    title: "Complex API Integrations & Compliance",
    short: "OAuth 2.0 · Webhooks · SFTP Pipelines",
    detail:
      "End-to-end architecture for strict third-party integrations — including platforms like Reserve with Google that have formal partner compliance requirements. I handle the full surface area: OAuth 2.0 authentication flows, automated data feed pipelines over SFTP, real-time webhook synchronization, and idempotent handlers that survive retries without corrupting state.",
    deliverables: [
      "OAuth 2.0 / token management",
      "Automated SFTP feed pipelines",
      "Real-time webhook handlers",
      "Compliance documentation support",
      "End-to-end integration testing",
    ],
  },
  {
    num: "02",
    title: "SaaS Architecture & Backend Refactoring",
    short: "NestJS · Node.js · PostgreSQL",
    detail:
      "Transitioning brittle codebases into clean, maintainable three-layer architectures — Controller, Service, Repository — using Node.js, NestJS, and PostgreSQL. Whether you're starting a new SaaS or inheriting a monolith that no one wants to touch, I design backends that the next engineer can actually reason about.",
    deliverables: [
      "Three-layer architecture design",
      "NestJS module restructuring",
      "PostgreSQL schema design",
      "RBAC & access control",
      "API contract documentation",
    ],
  },
  {
    num: "03",
    title: "Dynamic Data & Scheduling Engines",
    short: "Scheduling · AWS S3 · Concurrency",
    detail:
      "Building the logic-heavy backend systems that off-the-shelf tools can't handle: concurrent multi-user booking algorithms, dynamic availability slot generators with per-resource overrides, and secure document storage on AWS S3 with pre-signed URLs and IAM-based access control. The kind of work where correctness under load actually matters.",
    deliverables: [
      "Multi-doctor / multi-resource scheduling",
      "Conflict-free concurrency logic",
      "Dynamic slot generation engine",
      "AWS S3 + pre-signed URL integration",
      "Access-controlled document storage",
    ],
  },
];

const PLANS = [
  {
    name: "Basic Website",
    price: "₹8,000",
    delivery: "5-7 days",
    tag: null,
    features: [
      "Home, Services, About, Contact",
      "WhatsApp integration",
      "Google Maps embed",
      "Google Reviews widget",
      "On-page SEO",
      "Mobile responsive",
    ],
  },
  {
    name: "Standard + Booking",
    price: "₹13,000",
    delivery: "10-12 days",
    tag: "Recommended",
    features: [
      "Everything in Basic",
      "Appointment booking system",
      "Email/WhatsApp notifications",
      "Gallery section",
      "Testimonials section",
      "Priority support",
    ],
  },
  {
    name: "Advanced System",
    price: "₹18,000+",
    delivery: "18-21 days",
    tag: null,
    features: [
      "Full custom booking system",
      "Admin panel & dashboard",
      "Slot management",
      "NestJS backend",
      "PostgreSQL database",
      "Deployment included",
    ],
  },
];

const ADDONS = [
  ["WhatsApp Widget", "₹500"],
  ["Google Analytics Setup", "₹500"],
  ["Extra Revision Round", "₹1,000"],
  ["Content Writing", "₹500/page"],
  ["Logo Design", "₹2,000"],
  ["Monthly Maintenance", "₹1,000/mo"],
];

const PROJECTS = [
  {
    index: "01",
    category: "API Integration · Production",
    accent: "#C8922A",
    accentDim: "rgba(200,146,42,0.08)",
    accentBorder: "rgba(200,146,42,0.2)",
    name: "Reserve with Google Integration",
    headline: "Direct bookings from Google Search and Maps — engineered end-to-end.",
    description:
      "Architected a full Google Partner integration enabling restaurant table bookings from Google Search and Maps. Five phases: Partner onboarding, automated SFTP data pipelines, core Booking APIs, a real-time update engine, and a rigorous sandbox validation before production go-live.",
    tags: ["Node.js", "REST APIs", "OAuth 2.0", "SFTP", "PostgreSQL", "Webhooks"],
    url: "#contact",
    label: "Discuss a Similar Integration",
    visual: "casestudy",
    caseStudy: {
      role: "Lead Backend Engineer · Restaurant Management SaaS",
      phases: [
        {
          num: "01",
          title: "Partner Onboarding & Infrastructure",
          points: [
            "Registered platform as an official Google Partner aggregator",
            "Configured production API keys, generated SSH keys",
            "Provisioned secure SFTP dropboxes on Google's servers",
          ],
        },
        {
          num: "02",
          title: "Automated Data Sync Pipeline",
          points: [
            "Merchant Feed — business profiles and operational data",
            "Services Feed — reservation types and offerings",
            "Availability Feed — live table slots by time interval and party size",
            "Cron-driven SFTP upload on a strict 24-hour cycle",
          ],
        },
        {
          num: "03",
          title: "Core Booking API Surface",
          points: [
            "batchAvailabilityLookup — high-volume real-time slot verification",
            "CreateBooking — instant reservation creation in PostgreSQL",
            "UpdateBooking — modifications and cancellations from Google UI",
          ],
        },
        {
          num: "04",
          title: "Real-Time Update Engine",
          points: [
            "Webhook-based RTU payloads fired on every internal state change",
            "Prevented race conditions and double-bookings between batch cycles",
          ],
        },
        {
          num: "05",
          title: "Sandbox Validation & Go-Live",
          points: [
            "100% feed uptime over a continuous 3-day rolling window",
            "14+ successful API calls across all endpoints — zero failures",
            "14+ RTU calls validated in simulation",
            "Passed Google's final production verification",
          ],
        },
      ],
    },
  },
  {
    index: "02",
    category: "Client Project · Dev Technosys",
    accent: "#5BAF7A",
    accentDim: "rgba(91,175,122,0.08)",
    accentBorder: "rgba(91,175,122,0.2)",
    name: "Healthcare Scheduling Engine",
    headline: "Backend engineering delivered for a live healthcare SaaS client.",
    description:
      "Built at Dev Technosys for the Doctolink client — engineered the core scheduling system: a dynamic slot generator handling concurrent multi-doctor bookings with complex availability windows — recurring days-off, per-doctor buffer times, and real-time conflict resolution. Also integrated AWS S3 document storage with pre-signed URLs and IAM access control policies for sensitive patient records.",
    tags: ["NestJS", "MySQL", "AWS S3", "React.js", "IAM", "Pre-signed URLs"],
    url: "https://doctolinkapp.com",
    label: "View Client Product",
    visual: "iframe",
    caseStudy: null,
  },
  {
    index: "03",
    category: "SaaS MVP · In Development",
    accent: "#7B8FE8",
    accentDim: "rgba(123,143,232,0.08)",
    accentBorder: "rgba(123,143,232,0.2)",
    name: "QRvana — Multi-Tenant QR SaaS",
    headline: "Independently architecting a production-grade SaaS from schema to deployment.",
    description:
      "Building a multi-tenant QR code platform from the ground up — independently owning every layer. Designed a 14-table Postgres schema with workspace-level isolation, NextAuth v5 auth with email and OAuth flows, a versioned REST API contract, and a full 76-component design system.",
    tags: ["Next.js", "PostgreSQL", "Drizzle ORM", "NextAuth v5", "Stripe", "Vercel"],
    url: "#contact",
    label: "Ask About the Architecture",
    visual: "wip",
    wipProgress: [
      { label: "DB Schema (14 tables)", pct: 95 },
      { label: "Auth Flows (NextAuth v5)", pct: 80 },
      { label: "API Contract (v1/)", pct: 65 },
      { label: "QR Generator Engine", pct: 50 },
      { label: "Billing / Stripe", pct: 25 },
      { label: "Public Launch", pct: 10 },
    ],
    caseStudy: null,
  },
];

const PROJECT_TYPES = [
  "Business Website",
  "Full Stack Web App",
  "Backend API",
  "Something Else",
];
 
const CONTACT_DETAILS = [
  { label: "Phone", value: "+91 70730 41088", href: "tel:+917073041088" },
  { label: "Email", value: "virendra.shekhawat9768@gmail.com", href: "mailto:virendra.shekhawat9768@gmail.com" },
  { label: "LinkedIn", value: "virendra-singh-shekhawat", href: "https://www.linkedin.com/in/virendra-singh-shekhawat-91601b25b" },
  { label: "Location", value: "Jaipur, India — open to remote", href: null },
];

const EXPERIENCE = [
  {
    company: "Jiak Technology",
    type: "Full-time",
    location: "Singapore (Remote)",
    role: "Senior Software Engineer",
    period: "Jun 2025 — Nov 2025",
    detail:
      "Refactored monolithic backend into a scalable three-layer architecture (controller–service–repository), improving separation of concerns, maintainability, and testability across the codebase."
  },
  {
    company: "Dev Technosys Pvt Ltd",
    type: "Full-time",
    location: "Jaipur",
    role: "Full-Stack Developer",
    period: "Dec 2021 — May 2025",
    detail:
      "Led the Reserve with Google integration end-to-end — Google Partner onboarding, automated SFTP feed pipelines, core Booking APIs, and a real-time update engine. Also built JWT authentication from scratch and owned the PostgreSQL schema across the platform.",
  },
  {
    company: "Webdunia (India) Pvt Ltd",
    type: "Full-time",
    location: "Indore",
    role: "Associate Software Engineer",
    period: "Jun 2019 — Feb 2020",
    detail:
      "Contributed to frontend and backend development of a Net Banking Application using Angular, handling UI components, API integration, and business logic.",
  },
];

const STACK = [
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "Express", "REST APIs", "Webhooks"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "Prisma", "Drizzle ORM", "Redis"],
  },
  {
    category: "Auth & Security",
    items: ["JWT", "OAuth 2.0", "NextAuth v5", "RBAC", "SSH / SFTP"],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS S3", "IAM Policies", "Vercel", "Railway", "GitHub CI"],
  },
  {
    category: "Integrations",
    items: ["Reserve with Google", "Google APIs", "Stripe", "Resend", "S3 Pre-signed URLs"],
  },
  {
    category: "Architecture",
    items: ["Controller–Service–Repository", "Multi-tenancy", "Cron Pipelines", "Event-driven"],
  },
  {
    category: "Currently Building",
    items: ["QRvana SaaS", "Drizzle ORM", "Next.js 15 App Router", "Supabase"],
  },
];

const ROLES = [
  "Senior Backend Engineer",
  "Node.js Specialist",
  "NestJS Specialist",
  "API Integration Architect",
  "SaaS Backend Developer",
  "FULL STACK ENGINEER",
  "React.js Specialist",
  "Next.js Specialist",
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const STEPS = [
  {
    num: "01",
    title: "Brief",
    duration: "Day 1",
    description:
      "You tell me what you're building, who it's for, and what success looks like. I ask the questions most developers skip — about your users, your constraints, and what's actually important vs nice-to-have.",
    outputs: ["Project scope", "Tech recommendation", "Timeline estimate"],
  },
  {
    num: "02",
    title: "Proposal",
    duration: "Day 2–3",
    description:
      "I send a written proposal with a clear scope, deliverables, timeline, and fixed price. No ambiguity. You know exactly what you're getting before a single line of code is written.",
    outputs: ["Written scope doc", "Fixed price quote", "Milestone breakdown"],
  },
  {
    num: "03",
    title: "Build",
    duration: "Ongoing",
    description:
      "I build in focused sprints with regular check-ins — not radio silence for two weeks followed by a big reveal. You see progress, give feedback early, and nothing surprises you at delivery.",
    outputs: ["Regular updates", "Staging environment", "Early feedback loops"],
  },
  {
    num: "04",
    title: "Ship",
    duration: "Final week",
    description:
      "Deployment, handoff, and a walkthrough of everything I've built. You get clean code, documentation for anything non-obvious, and a 2-week support window after launch.",
    outputs: ["Live deployment", "Code handoff", "2-week post-launch support"],
  },
];

const FAQS = [
  {
    q: "How do you handle projects outside India?",
    a: "Most of my recent work has been remote — I'm comfortable with async communication, different timezones, and international payment methods. Jiak Technology (Singapore) was fully remote.",
  },
  {
    q: "What's your typical project size?",
    a: "Small to mid-scale — a business website, a web app with a backend, or an API layer for an existing product. I work alone, so I'm not the right fit for large enterprise projects that need a team.",
  },
  {
    q: "Do you do ongoing maintenance?",
    a: "Yes, for clients I've built for. I offer a monthly retainer for updates, bug fixes, and small additions. It's easier to maintain something I built than hand it off cold.",
  },
  {
    q: "How do we start?",
    a: "Send a message through the contact form or WhatsApp with a brief description of what you need. I'll reply within 24 hours with questions or a call link.",
  },
];

export {
  COLORS,
  LINKS,
  SKILLS,
  SERVICES,
  PLANS,
  ADDONS,
  PROJECTS,
  PROJECT_TYPES,
  CONTACT_DETAILS,
  EXPERIENCE,
  STACK,
  ROLES,
  CHARS,
  STEPS,
  FAQS,
}