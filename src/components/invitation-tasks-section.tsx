import Image from "next/image";
import InvitationH2Title from "./invitation-h2-title";
import InvitationH4Header from "./invitation-h4-header";
import SectionCard from "./section-card";

const steps = [
  {
    text: "Send your invitation link to friends",
  },
  {
    text: "Friends use your link to sign up and complete introductory tasks",
  },
  {
    text: "Both you and your friends receive high reward points afterwards",
  },
];

export default function InvitationTasksSection() {
  return (
    <SectionCard>
      <div className="md:w-[640px] lg:w-[800px] xl:w-[1024px] 2xl:w-[1280px] mx-auto">
        <InvitationH2Title title="Invitation Tasks" />
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 flex flex-col justify-start items-center gap-8 md:flex-row md:items-stretch">
          {steps.map(({ text }, index) => {
            const step = index + 1;
            return (
              <div
                className="flex flex-col justify-start items-center text-center gap-4 flex-1"
                key={step}
              >
                <Image
                  className="rounded-full size-[240px] md:size-[180px] lg:size-[240px] xl:size-[300px] 2xl:size-[360px]"
                  src={`/images/invite-friends/steps/${step}.png`}
                  alt={`Step ${step}`}
                  width={400}
                  height={400}
                />
                <h3 className="font-normal text-lg">{`Step ${step}`}</h3>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <div className="px-4 py-3 sm:px-8 sm:py-6 lg:px-12 lg:py-9 2xl:px-16 2xl:py-12 text-white bg-[url('/images/invite-friends/reward-rule-bg.png')] bg-cover mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 rounded-[20px]">
          <header className="flex justify-start items-center gap-2 text-xl font-semibold">
            <Image
              className="size-6"
              src="/images/invite-friends/rule-icon.svg"
              alt="icon"
              width={80}
              height={80}
            />
            <h3>Reward Rules</h3>
          </header>
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <InvitationH4Header title="Rule details" />
            <ul className="list-decimal ml-4 mt-4">
              <li>
                Invite friends to sign up for an account via the invite link
              </li>
              <li>
                <div>Invitee completes new user tasks</div>
                <ul className="ml-4 list-[lower-alpha]">
                  <li>Bind X account</li>
                  <li>Follow Entrova official X</li>
                  <li>Join the official Telegram</li>
                </ul>
              </li>
              <li>
                Direct invites will earn you 240 points, while indirect invites
                will earn you 160 points.
              </li>
            </ul>
          </div>
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <InvitationH4Header title="Disclaimer" />
            <p className="mt-4">
              You can only receive one bonus per referral. Example: If your
              friend completes the registration using your invitation link, you
              will not receive the standard invitation bonus.
            </p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
