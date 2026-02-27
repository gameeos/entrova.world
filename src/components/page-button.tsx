import { cn } from "@/lib/utils";
import Image from "next/image";

export interface PageButtonProps {
  disabled?: boolean;
  type: "prev" | "next";
  onClick: () => void;
}

export default function PageButton({
  disabled = false,
  type,
  onClick,
}: PageButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn({
        "rotate-180": type === "next",
        "cursor-not-allowed": disabled,
      })}
    >
      <Image
        className="rotate-180 size-4 sm:size-5 lg:size-6"
        src={`/images/invite-friends/page-button${
          disabled ? "-disabled" : ""
        }.svg`}
        alt="prev page"
        width={24}
        height={24}
      />
    </button>
  );
}
