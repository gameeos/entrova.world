import { cn } from "@/lib/utils";

export default function InvitationH2Title({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={cn("font-medium text-2xl lg:text-3xl xl:text-4xl", className)}
    >
      {title}
    </h2>
  );
}
