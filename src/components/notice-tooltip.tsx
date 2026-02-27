import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export interface NoticeTooltipProps {
  notice: string;
}

export default function NoticeTooltip({ notice }: NoticeTooltipProps) {
  const lines = notice.split("\n");
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger>
          <Image
            src="/images/task-center/icons/notice.svg"
            alt="notice"
            width={16}
            height={16}
          />
        </TooltipTrigger>
        <TooltipContent>
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
