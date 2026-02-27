import React from "react";
import { Task } from "@/interface";
import ClaimButton from "./claim-button";
import BindInvitationForm from "./bind-invitation-form";
import Image from "next/image";
import NoticeTooltip from "./notice-tooltip";

export interface TaskGroupProps {
  title: string;
  icon: string;
  notice?: string;
  tasks: Task[];
}

export default function TaskGroup({
  title,
  tasks,
  icon,
  notice,
}: TaskGroupProps) {
  return (
    <div className="border-[2px] border-[#D7D7D6] rounded-[16px] px-4 py-5">
      <header className="mb-3 lg:mb-4 text-xl flex gap-4 items-center">
        <Image
          className="size-8 sm:size-10 md:size-12 xl:size-16 2xl:size-[78px]"
          src={icon}
          alt="icon"
          width={78}
          height={78}
        />
        <header className="flex gap-1">
          <h3 className="text-foreground font-semibold">{title}</h3>
          {notice && <NoticeTooltip notice={notice} />}
        </header>
      </header>
      <div className="flex flex-col gap-4">
        {tasks.map(({ id, desc, tickets, action, redirect, claimed }) => (
          <div
            className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center md:gap-8 lg:gap-16 xl:gap-32"
            key={id}
          >
            <div className="flex flex-col gap-1 sm:flex-row justify-between md:items-center md:flex-1">
              <div className="text-[#444444]">
                {desc === "bind-invitation-form" ? (
                  <BindInvitationForm />
                ) : (
                  desc
                )}
              </div>
              <p className="text-[#444444] min-w-36 sm:flex sm:items-end sm:justify-end">{`+${tickets} Gold Tickets`}</p>
            </div>
            <div className="mt-2 md:m-0 lg:flex lg:justify-end">
              <ClaimButton
                action={action}
                redirect={redirect}
                claimed={claimed}
                taskId={id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
