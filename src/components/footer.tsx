"use client";

import Image from "next/image";
import FooterSection from "./footer-section";
import OuterLink from "./outer-link";
import { useRef } from "react";
import { useEffect } from "react";

const useCases = [
  { content: "Gaming", href: "/#gaming" },
  { content: "Entertainment", href: "/#entertainment" },
  { content: "Health and Wellness", href: "/#health" },
  { content: "Travel", href: "/#travel" },
  { content: "Fashion", href: "/#fashion" },
  { content: "Education and Skill Development", href: "/#education" },
];

const explore = [
  { content: "Whitepaper", href: "https://wiki.entrova.ai/" },
  {
    content: "Docs",
    href: "https://medium.com/@Entrova/unveiling-entrova-game-pluss-strategic-rebrand-for-enhanced-ai-solutions-45bed49087ac",
  },
];

const outerlinks = [
  {
    defaultLogo: "x-logo-white.png",
    hoverLogo: "x-logo-black.png",
    href: "https://x.com/Entrova_ai",
  },
  {
    defaultLogo: "medium-logo-black.svg",
    hoverLogo: "medium-logo-white.svg",
    href: "https://medium.com/@Entrova",
  },
  {
    defaultLogo: "telegram-logo-white.svg",
    hoverLogo: "telegram-logo-black.svg",
    href: "https://t.me/Entrova",
  },
];

export default function Footer() {
  const observer = useRef<IntersectionObserver | null>(null);
  const footer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.remove("opacity-0");
            observer.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (footer.current) {
      observer.current.observe(footer.current);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return (
    <footer className="bg-white">
      <div
        className="px-4 py-20 bg-white text-base-100 flex flex-col justify-between items-center gap-5 lg:flex-row lg:px-24 max-w-[1200px] mx-auto opacity-0"
        ref={footer}
      >
        <div className="flex flex-col justify-start gap-5 lg:self-start">
          <Image
            src="/images/entrova-logo-black.png"
            alt="Entrova Logo"
            width={128}
            height={40.16}
          />
          <p className="text-[#444444]">Consumer Focused Al Engine</p>
        </div>
        <div className="flex lg:gap-8">
          <FooterSection title="Use Cases" items={useCases} />
          <FooterSection title="Explore" items={explore} />
        </div>
        <ul className="flex gap-4 lg:self-end">
          {outerlinks.map(({ href, defaultLogo, hoverLogo }) => (
            <OuterLink
              key={href}
              href={href}
              defaultLogo={defaultLogo}
              hoverLogo={hoverLogo}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
}
