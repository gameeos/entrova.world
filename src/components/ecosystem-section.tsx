"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function EcosystemSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0");
            observer.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (headerRef.current) {
      observer.current.observe(headerRef.current);
    }
    if (ecosystemRef.current) {
      observer.current.observe(ecosystemRef.current);
    }
    if (imageRef.current) {
      observer.current.observe(imageRef.current);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return (
    <section className="bg-white min-h-96 rounded-t-[60px] mt-[-60px] py-[60px] opacity-100 relative px-4 xl:py-[130px]">
      <div className="max-w-[1200px] mx-auto xl:px-4">
        <div
          className="flex flex-col gap-5 mb-10 lg:flex-row lg:items-center lg:gap-[60px] opacity-0"
          ref={headerRef}
        >
          <h2 className="text-[#0e0e0e] text-4xl md:text-5xl lg:text-5xl lg:w-1/2">
            User-Behaviour Data Is The Key That Unlocks Everything
          </h2>
          <p className="text-[#444444] font-light flex flex-col lg:w-1/2">
            Entrova is pioneering a decentralized AI engine focused on consumer
            agents, tools, and user-behavioral data. We wil allow users and
            developers to create Al agents, enhanced by user-contributed data,
            to empower businesses and customers to create more personalized, and
            behavior-driven experiences.
            <br />
            <br />
            We ensure a community-governed ecosystem through user data
            sovereignty, fair distribution of rewards, and DA0 governance of Al
            tools and agents. Entrova seeks to democratize Al and empower users
            by making consumer insights and tools more accessible, secure, and
            transparent.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center my-16 lg:gap-[60px] lg:flex-row-reverse">
          <div
            className="opacity-0 flex flex-col gap-5 items-center my-16 lg:gap-[60px] lg:flex-1"
            ref={ecosystemRef}
          >
            <h2 className="text-[#0e0e0e] text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              AI Flywheel Ecosystem
            </h2>
            <p className="text-[#444444] font-light flex flex-col text-center lg:text-left">
              Entrova creates a user-driven, privacy-first AI ecosystem. Data
              enters through a secure clean room, is encrypted for privacy, and
              then powers advanced LLM models and AI agents.
            </p>
          </div>
          <div
            className="size-[300px] sm:size-[400px] md:size-[500px] lg:size-full lg:flex-1 opacity-0"
            ref={imageRef}
          >
            <Image
              src="/images/ai-ecosystem.png"
              alt="AI Ecosystem"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
