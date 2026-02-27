import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

export default function MyRwardItem({
  title,
  image,
  volume,
  loading = false,
}: {
  title: string;
  image: string;
  volume?: number;
  loading?: boolean;
}) {
  const display = volume !== undefined ? volume : "?";
  return (
    <div className="bg-white rounded-[20px] overflow-hidden flex flex-col md:w-[200px] lg:w-[280px] xl:w-[360px]">
      <Image
        className="w-full aspect-[4/3] object-cover object-center"
        src={`/images/invite-friends/my-rewards/${image}.png`}
        alt="image"
        width={1024}
        height={1024}
      />
      <div className="px-3 py-2 aspect-[4/3] flex flex-col justify-center items-center gap-10">
        <h3 className="font-medium text-4xl md:text-base lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <div className="font-extrabold text-7xl md:text-2xl lg:text-4xl xl:text-5xl">
          {loading ? (
            <Skeleton className="h-[72px] md:h-[40px] lg:h-12 w-36 lg:w-44" />
          ) : (
            display
          )}
        </div>
      </div>
    </div>
  );
}
