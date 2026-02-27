import React from "react";

export interface TaskCenterLayoutProps {
  children: React.ReactNode;
}
export default function TaskCenterLayout({ children }: TaskCenterLayoutProps) {
  return (
    <div>
      <div className="bg-[url('/images/task-center/header-bg.png')] min-h-[130px] bg-cover bg-no-repeat  font-medium mb-[-10px] z-10 relativ box-content sm:min-h-[180px] sm:mb-[-20px] md:min-h-[220px] lg:min-h-[280px] lg:mb-[-40px] xl:min-h-[320px]">
        <div className="flex justify-center items-center min-h-[120px] sm:min-h-[160px] md:min-h-[200px] lg:min-h-[240px] xl:min-h-[280px]">
          <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl">
            Task Center
          </h1>
        </div>
      </div>
      <div className="py-8 px-4 sm:py-12 sm:px-8 lg:py-16 lg:px-12 z-0 relative bg-white sm:rounded-[20px] rounded-[10px]  lg:rounded-[40px] my-[-10px]  sm:my-[-20px] lg:my-[-40px]">
        <div className="md:w-[640px] lg:w-[800px] xl:w-[1024px] 2xl:w-[1280px] mx-auto">
          {children}
          <div className="mt-8 text-[#444444] lg:mt-16">
            <h2 className="mb-3 font-semibold lg:text-xl">
              The Rules for Obtaining Gold Tickets
            </h2>
            <ol className="text-sm flex flex-col gap-2 list-decimal list-outside pl-4 lg:text-base">
              <li>
                Users can earn Gold Tickets by completing daily tasks. Daily
                tasks can be repeated, while one-time tasks cannot be repeated.
              </li>
              <li>
                Users with Gold Tickets ≥600 will be considered valid users.
              </li>
              <li>
                Entrova reserves the right to disqualify users who gain profit
                through malicious behavior, including but not limited to
                creating multiple accounts, engaging in illegal or fraudulent
                activities, or causing harmful impacts.
              </li>
              <li>
                Entrova reserves the final interpretation right of the Gold
                Tickets rules.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
