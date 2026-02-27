"use client";

import EngineCard from "@/components/engine-card";
import { useRef } from "react";
import { useEffect } from "react";

export default function EngineSection() {
  const observer = useRef<IntersectionObserver | null>(null);
  const core = useRef<HTMLDivElement>(null);

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

    if (core.current) {
      observer.current.observe(core.current);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return (
    <section className="bg-white px-10 py-[60px] sm:px-20 xl:pt-[130px] xl:pb-[80px]">
      <div className="max-w-[1200px] m-auto opacity-0 duration-300" ref={core}>
        <h2 className="text-[#0e0e0e] text-[46px] leading-[55.2px] mb-5 lg:text-6xl xl:text-7xl">
          Full-Stack AI Creation Engine
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <EngineCard
            icon="deal.svg"
            title="Data Ownership"
            content="Entrova ensures all user contributed data is own and controlled by the user. Using our data incentive layer, we are able to filter, label and encrypt contributed data for Al fine-tuning and training."
          />
          <EngineCard
            icon="artificial-intelligence.svg"
            title="Fine-Tuning Open Source Models"
            content="User's will be able to fine-tune and personalized open source models such as Mistral, Llama, Flux, and Stable Diffusion."
          />
          <EngineCard
            icon="guaranteed.svg"
            title="Verifiable and Decentralized Inference"
            content="We offer trustless computation combined with decentralized execution on decentralized networks and Entrova nodes. User's can independently verify the correctness of inference without needing access to the model or raw data."
          />
          <EngineCard
            icon="partner.svg"
            title="Community and DAO Governance"
            content="All Entrova tools, agents, fine-tuning projects and data usage will be governance by contributors to the Entrova ecosystem. Developers and data contributors will vote on the direction of our community, provide feedback and create rewards."
          />
        </div>
      </div>
    </section>
  );
}
