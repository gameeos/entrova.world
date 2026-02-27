import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("bg-[#18181b1a] animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton }
