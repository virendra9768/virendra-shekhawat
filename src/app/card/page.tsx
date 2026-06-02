"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Mail, Phone, MapPin, ExternalLink, Copy } from "lucide-react";

export default function BusinessCardPage() {
  return (
    <main className="bg-black min-h-screen py-10 px-4">
      <div className="mx-auto max-w-[540px]">
        <div className="relative w-full max-w-[540px] overflow-hidden rounded-[20px] border border-white/10 bg-[#0f0f0f]">

          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_320px_180px_at_85%_-5%,rgba(201,168,76,0.1)_0%,transparent_65%),radial-gradient(ellipse_240px_160px_at_-5%_95%,rgba(201,168,76,0.07)_0%,transparent_60%)]" />

          <div className="relative z-10 p-7">

            <div className="flex items-start justify-between gap-6 mb-6">
              {/* LEFT SIDE */}
              <div className="flex-1">

                <div className="inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-3 py-1 text-xs text-[#c9a84c]">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Available for projects
                </div>

                <h1 className="mt-4 text-4xl leading-tight font-medium text-[#f0ece4]">
                  Virendra Singh
                  <br />
                  <span className="text-[#c9a84c]">
                    Shekhawat
                  </span>
                </h1>

                <p className="mt-4 max-w-[420px] text-sm leading-relaxed text-[#f0ece4]/50">
                  Helping businesses build modern websites
                  and web applications that look professional,
                  work flawlessly, and convert visitors into customers.
                </p>

              </div>

              {/* RIGHT SIDE PHOTO */}
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border border-[#c9a84c]/20">

                <Image
                  src="/virendra.jpeg"
                  alt="Virendra Singh Shekhawat"
                  fill
                  priority
                  className="object-cover"
                  style={{
                    objectPosition: "center -30%",
                    transform: "scale(2.5)",
                  }}
                />

              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">

              <BenefitCard
                icon="⚡"
                title="Fast"
                subtitle="Delivery"
              />

              <BenefitCard
                icon="📱"
                title="Mobile"
                subtitle="Friendly"
              />

              <BenefitCard
                icon="🤝"
                title="Quick"
                subtitle="Response"
              />

            </div>

            <div className="my-6 h-px bg-white/10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

              <ContactCard
                icon={<Mail size={16} />}
                label="Email"
                value="virendra.shekhawat9768@gmail.com"
                href="mailto:virendra.shekhawat9768@gmail.com"
              />

              <ContactCard
                icon={<Phone size={16} />}
                label="WhatsApp"
                value="+91 70730 41088"
                href="https://wa.me/917073041088"
              />

              <ContactCard
                icon={<FaLinkedinIn size={16} />}
                label="LinkedIn"
                value="virendra-singh-shekhawat"
                href="https://linkedin.com/in/virendra-singh-shekhawat-91601b25b"
              />

              <ContactCard
                icon={<FaGithub size={16} />}
                label="GitHub"
                value="virendra9768"
                href="https://github.com/virendra9768"
              />

            </div>

            <div className="mt-6">
              <a
                href="https://www.virendra-shekhawat.vercel.app"
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#c9a84c] px-4 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                <ExternalLink size={16} />
                View Portfolio
              </a>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">

              <div className="flex items-center gap-2 text-xs text-[#f0ece4]/40">
                <MapPin size={14} />
                Jaipur, India · Open to Remote
              </div>

              <Link
                href="/"
                className="text-xs text-[#f0ece4]/40 hover:text-[#c9a84c]"
              >
                virendra-shekhawat.vercel.app
              </Link>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}

function BenefitCard({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
      <div className="text-lg mb-1">
        {icon}
      </div>

      <div className="text-xs font-medium text-[#c9a84c]">
        {title}
      </div>

      <div className="text-[10px] uppercase tracking-wider text-[#f0ece4]/30">
        {subtitle}
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-[#c9a84c]/40"
    >
      <div className="text-[#c9a84c]">
        {icon}
      </div>

      <div>
        <div className="text-[10px] uppercase tracking-wider text-[#f0ece4]/30">
          {label}
        </div>

        <div className="text-sm text-[#f0ece4]/60 break-all">
          {value}
        </div>
      </div>
    </a>
  );
}