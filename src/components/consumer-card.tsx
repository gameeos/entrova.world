"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export interface ConsumerCardProps {
  title: string;
  content: string;
  image: string;
  variant?: "default" | "fusion";
  fragment?: string;
}

export default function ConsumerCard({
  title,
  content,
  image,
  variant = "default",
  fragment,
}: ConsumerCardProps) {
  const observer = useRef<IntersectionObserver | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.current.observe(cardRef.current);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  if (variant === "fusion") {
    return (
      <div
        className="bg-[#9588e8] rounded-[20px] overflow-hidden opacity-0 relative"
        ref={cardRef}
      >
        <div id={fragment} className="absolute -top-20" />
        <div
          style={{
            backgroundImage: `url('/images/consumer-cards/${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg,#0000,#9588e8e0 58%,#9588e8)",
            }}
          >
            <div className="pt-[200px] pb-10 px-5 text-white">
              <h3 className="text-3xl text-center mb-5 sm:text-start md:text-4xl">
                {title}
              </h3>
              <p className="text-center sm:text-start">{content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="relative flex flex-col gap-10 bg-[#9588e8] rounded-[20px] overflow-hidden lg:flex-row lg:gap-7 lg:col-span-2 opacity-0"
      ref={cardRef}
    >
      <div id={fragment} className="absolute -top-20" />
      <div className="pt-10 px-5 lg:p-10 lg:w-1/3 xl:flex-[1] text-white">
        <h3 className="text-4xl text-center mb-5 sm:text-start md:text-5xl">
          {title}
        </h3>
        <p className="text-center sm:text-start">{content}</p>
      </div>
      <div className="lg:flex lg:items-center xl:flex-[2]">
        <Image
          className="object-cover max-h-[420px]"
          src={`/images/consumer-cards/${image}`}
          alt={title}
          width={1920}
          height={2880}
        />
      </div>
    </div>
  );
}
