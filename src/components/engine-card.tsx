import Image from "next/image";

export interface EngineCardProps {
  icon: string;
  title: string;
  content: string;
}

export default function EngineCard({ icon, title, content }: EngineCardProps) {
  return (
    <div className="border rounded-[20px] p-5 md:p-8">
      <header>
        <div className="p-2.5 bg-[#9588e8] size-[42px] rounded-[10px] mb-5">
          <Image
            className="size-[22px]"
            src={`/images/engine-cards/${icon}`}
            alt="icon"
            width={40}
            height={40}
          />
        </div>
        <h3 className="text-[#0e0e0e] text-2xl mb-5">{title}</h3>
      </header>
      <p className="text-[#444444]">{content}</p>
    </div>
  );
}
