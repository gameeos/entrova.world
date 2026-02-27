import Image from "next/image";
import React from "react";

export interface LinkLayoutProps {
  children: React.ReactNode;
}

export default function LinkLayout({ children }: LinkLayoutProps) {
  return (
    <section className="bg-[url('/images/invite-friends/header-bg.png')] bg-cover bg-no-repeat font-medium z-10 relativ box-content bg-center pb-[10px] sm:pb-[20px] lg:pb-[40px]">
      <div className="flex flex-col gap-4 justify-center items-center py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
        <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl">
          Invite Friends
        </h1>
        <p className="text-white">Get Super High Reward Points</p>
        <div className="flex bg-white px-1 py-0.5 rounded-sm border border-[#282839] w-[240px] sm:w-[360px] md:w-[480px] lg:w-[720px] xl:w-[960px] sm:px-3 sm:py-2 md:rounded lg:rounded-md xl:rounded-lg 2xl:rounded-xl md:px-4 md:py-2 lg:px-5 lg:py-3 xl:px-6 xl:py-4">
          <div className="hidden sm:flex sm:justify-start sm:items-center lg:gap-1">
            <Image
              className="size-4"
              src="/images/invite-friends/link-icon.svg"
              alt="icon"
              width={32}
              height={32}
            />
            <div className="hidden lg:block ">Invite Link</div>
            <span className="hidden sm:block sm:mx-1 border-l border-[#282839] h-4" />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
