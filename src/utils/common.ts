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
    title: "Backend APIs",
    short: "APIs that don't break when traffic hits",
    detail:
      "You get a backend that holds up in production — not just in development. I design the schema, auth layer, and module structure upfront so the codebase doesn't become a liability six months later. Built on NestJS or Node.js with clean separation of concerns, proper error handling, and documentation your frontend team can actually use.",
    deliverables: ["NestJS / Express.js", "PostgreSQL · MySQL · MongoDB", "JWT & RBAC", "Third-party integrations", "API documentation"],
  },
  {
    num: "02",
    title: "Full Stack Web Apps",
    short: "Database to UI, one developer, no handoff gaps",
    detail:
      "Most projects slow down at the seam between frontend and backend. With one developer owning both, that gap disappears. Next.js App Router on the frontend, a real production backend behind it, TypeScript throughout — shipped to Vercel or your own server with auth, user management, and performance dialled in from day one.",
    deliverables: ["Next.js 15 App Router", "Tailwind CSS · TypeScript", "Auth & user management", "Vercel / VPS deployment", "Performance optimised"],
  },
  {
    num: "03",
    title: "Business Websites",
    short: "Sites built to convert, not just to look good",
    detail:
      "A site that looks great but doesn't bring in customers is just an expensive brochure. I build for clinics, studios, and service businesses that need appointment booking, Google Reviews, WhatsApp integration, and fast load times on mobile — the things that turn a visitor into a call.",
    deliverables: ["Appointment booking", "WhatsApp + Maps + Reviews", "On-page SEO", "Mobile-first design", "Fast load times"],
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
    name: "NovaCare Clinic",
    category: "Healthcare · Business Website",
    headline: "A premium clinic site built to convert visitors into booked appointments.",
    description:
      "Built for a general medicine practice. Includes Google Reviews integration, WhatsApp CTA, appointment booking form, specialisation listing, and SEO-optimised structure. Designed to work for any clinic or doctor's practice.",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Booking Form", "WhatsApp"],
    url: "https://sample-clinic-website-iota.vercel.app/",
    label: "Live Demo",
    accent: "#4A9B7F",
    accentDim: "rgba(74,155,127,0.08)",
    accentBorder: "rgba(74,155,127,0.2)",
    bg: "#0A0F0D",
    descriptor: "Healthcare",
  },
  {
    index: "02",
    name: "The Wood Room",
    category: "Luxury Furniture · Brand Website",
    headline: "A bespoke interior design studio site built for high-end client acquisition.",
    description:
      "Built for a luxury furniture and interior design brand. Showcases collections, craftsmanship story, and consultation booking — with a dark, editorial aesthetic that reflects the brand's identity and commands premium positioning.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Brand Identity", "Collections"],
    url: "https://the-wood-room.vercel.app/",
    label: "Live Demo",
    accent: "#B8922A",
    accentDim: "rgba(184,146,42,0.08)",
    accentBorder: "rgba(184,146,42,0.2)",
    bg: "#0D0B09",
    descriptor: "Interior Design",
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
    role: "Senior Software Engineer",
    period: "2025",
    type: "Product",
    location: "Singapore",
    detail: "Restaurant management SaaS — multi-tenant platform, analytics APIs, digital menus, floorplan management, RBAC.",
  },
  {
    company: "Dev Technosys",
    role: "Full Stack Developer",
    period: "2021 — 2025",
    type: "Agency",
    location: "Jaipur",
    detail: "Client-facing product agency — backend systems, REST APIs, database design across multiple parallel projects.",
  },
  {
    company: "Webdunia",
    role: "Associate Software Engineer",
    period: "2019 — 2020",
    type: "Media",
    location: "Indore",
    detail: "High-traffic media platform — frontend work, content systems, performance optimisation.",
  },
];

const STACK = [
  { category: "Backend", items: ["Node.js", "NestJS", "Express.js", "TypeScript"] },
  { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "REST APIs"] },
  { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "AWS S3"] },
  { category: "Tooling", items: ["JWT Auth", "Docker", "Git", "Vercel"] },
];

const ROLES = [
  "Node.js Engineer",
  "NestJS Architect",
  "Full Stack Developer",
  "API Designer",
  "Next.js Builder",
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