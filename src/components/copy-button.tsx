"use client";

import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

export interface CopyButtonProps {
  copyContent?: string;
  buttonContent?: string;
  toastContent?: string;
}

export default function CopyButton({
  copyContent,
  buttonContent,
  toastContent = "Copied!",
}: CopyButtonProps) {
  const { toast } = useToast();
  const onCopyClick = () => {
    if (!copyContent) return;
    navigator.clipboard.writeText(copyContent);
    toast({
      title: toastContent,
    });
  };

  return (
    <button
      className="flex justify-end items-center lg:gap-1"
      onClick={onCopyClick}
    >
      <Image
        className="size-4"
        src="/images/invite-friends/copy-icon.svg"
        alt="icon"
        width={32}
        height={32}
      />
      <span className="hidden lg:block">{buttonContent}</span>
    </button>
  );
}
