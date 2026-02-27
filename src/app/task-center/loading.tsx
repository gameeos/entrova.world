import { Skeleton } from "@/components/ui/skeleton";

export default function TaskCenterLoading() {
  return (
    <div>
      <div className="mt-8 lg:mt-16 first:mt-0">
        <h2 className="text-2xl font-bold mb-4 lg:text-3xl lg:mb-8 xl:text-4xl xl:mb-12 2xl:text-5xl">
          <Skeleton className="w-[160px] lg:w-[240px] h-12" />
        </h2>
        <div className="flex flex-col gap-4">
          <Skeleton className="bg-[#18181b1a] h-36 w-full rounded-[16px]" />
          <Skeleton className="bg-[#18181b1a] h-36 w-full rounded-[16px]" />
          <Skeleton className="bg-[#18181b1a] h-36 w-full rounded-[16px]" />
        </div>
      </div>
      <div className="mt-8 lg:mt-16 first:mt-0">
        <h2 className="text-2xl font-bold mb-4 lg:text-3xl lg:mb-8 xl:text-4xl xl:mb-12 2xl:text-5xl">
          <Skeleton className="w-[160px] lg:w-[240px] h-12" />
        </h2>
        <div className="flex flex-col gap-4">
          <Skeleton className="bg-[#18181b1a] h-36 w-full rounded-[16px]" />
          <Skeleton className="bg-[#18181b1a] h-36 w-full rounded-[16px]" />
          <Skeleton className="bg-[#18181b1a] h-36 w-full rounded-[16px]" />
          <Skeleton className="bg-[#18181b1a] h-36 w-full rounded-[16px]" />
        </div>
      </div>
    </div>
  );
}
