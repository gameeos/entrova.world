import InvitationTasksSection from "@/components/invitation-tasks-section";
import SectionCard from "@/components/section-card";

export default function InviteFriendsLayout({
  details,
  ranking,
  link,
  reward,
}: {
  details: React.ReactNode;
  ranking: React.ReactNode;
  link: React.ReactNode;
  reward: React.ReactNode;
}) {
  return (
    <div>
      {link}
      <InvitationTasksSection />
      {reward}
      <SectionCard>
        <div className="md:w-[640px] lg:w-[800px] xl:w-[1024px] 2xl:w-[1280px] mx-auto">
          {details}
          {ranking}
        </div>
      </SectionCard>
    </div>
  );
}
