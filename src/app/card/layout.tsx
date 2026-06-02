import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virendra Singh Shekhawat",
  description: "Full Stack JavaScript Developer",

  openGraph: {
    title: "Virendra Singh Shekhawat",
    description: "Building websites and web applications for businesses",
    images: ["/card-preview.png"],
  },
};

export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}