import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";

const sizeVariants = cva("overflow-hidden rounded-full", {
  variants: {
    size: {
      sm: "size-[60px] md:size-[70px] lg:size-[120px] xl:size-[130px]",
      md: "size-[80px] md:size-[100px] lg:size-[160px] xl:size-[200px]",
      lg: "size-[120px] md:size-[140px] lg:size-[220px] xl:size-[260px]",
    },
  },
});

export default function HeroSection() {
  return (
    <section className="bg-foreground py-24 md:py-[120px] lg:py-[140px] xl:py-[180px] flex flex-col justify-between gap-[60px] hero-section relative min-h-[600px] overflow-hidden">
      <Image
        className="absolute animate-fade-right w-1/5"
        src="/images/hero-bg/hero-bg-l.svg"
        alt="Decoration"
        width={131.49}
        height={229.67}
      />
      <Image
        className="absolute animate-fade-left right-0 w-[30%]"
        src="/images/hero-bg/hero-bg-r.svg"
        alt="Decoration"
        width={198.09}
        height={298.13}
      />
      <div className="absolute"></div>
      <div className="text-background flex flex-col justify-center items-center gap-8 animate-fade-up">
        <h1 className="text-5xl text-center lg:text-7xl xl:text-8xl 2xl:text-9xl">
          ENTROVA
        </h1>
        <p>Consumer Focused Al Engine</p>
        <div className="flex gap-8">
          <Link
            className="bg-primary text-white shadow hover:bg-white hover:text-black rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-6 py-2.5 text-base"
            href="https://medium.com/@Entrova/unveiling-entrova-game-pluss-strategic-rebrand-for-enhanced-ai-solutions-45bed49087ac"
            target="_blank"
          >
            Docs
          </Link>
          <Link
            className="text-base inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input shadow-sm rounded-full hover:border-primary h-9 px-6 py-2.5"
            href="https://wiki.entrova.ai/"
            target="_blank"
          >
            Whitepaper
          </Link>
        </div>
      </div>
      <div className="relative flex justify-between items-end px-2.5 animate-fade-up md:px-5 xl:px-[30px]">
        {Array.of<"sm" | "md" | "lg">("sm", "md", "lg", "md", "sm").map(
          (size, index) => (
            <div key={index} className={cn(sizeVariants({ size }))}>
              <div className="hidden"></div>
              <Image
                className="size-full object-cover"
                src={`/images/hero-items/hero-item-${index}.webp`}
                alt="decoration"
                width={120}
                height={120}
              />
            </div>
          )
        )}
        <div className="hidden absolute left-0 text-background lg:flex justify-around w-full h-full items-center">
          {Array.of(
            {
              text: "Discovery",
              transform:
                "matrix(0.994522, -0.104528, 0.104528, 0.994522, 0, 0)",
            },
            {
              text: "Implementation",
              transform:
                "matrix(0.990268, 0.139173, -0.139173, 0.990268, 0, 0) translateY(60px)",
            },
            {
              text: "Support",
              transform:
                "matrix(0.984808, -0.173648, 0.173648, 0.984808, 0, 0)",
            },
            {
              text: "Strategy",
              transform:
                "matrix(0.984808, 0.173648, -0.173648, 0.984808, 0, 0) translateY(80px)",
            }
          ).map(({ text, transform }) => (
            <div
              key={text}
              style={{ transform }}
              className="px-2.5 py-1.5 h-fit bg-[rgba(0,0,0,0.5)] rounded-full flex items-center gap-2 border-[rgba(175,175,175,0.5)] border"
            >
              <span className="flex justify-center items-center">
                <Image
                  src="/images/hero-items/hero-item-mark.png"
                  alt="Item"
                  width={16}
                  height={16}
                />
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
