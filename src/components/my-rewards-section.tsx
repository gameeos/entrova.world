import InvitationH2Title from "./invitation-h2-title";
import MyRwardItem from "./my-reward-item";

export interface MyRewardsSectionProps {
  bonusPoints?: number;
  totalInvited?: number;
  invitationSuccess?: number;
  loading?: boolean;
}

export default function MyRewardsSection({
  bonusPoints,
  totalInvited,
  invitationSuccess,
  loading = false,
}: MyRewardsSectionProps) {
  return (
    <section className="bg-[#0e0e0e] py-[10px] sm:py-[20px] lg:py-[40px]">
      <div className="md:w-[640px] lg:w-[800px] xl:w-[1024px] 2xl:w-[1280px] mx-auto py-8 px-4 sm:py-12 sm:px-8 lg:py-16 lg:px-12 xl:px-0">
        <InvitationH2Title
          className="text-white mb-8 md:mb-12 lg:mb-16 xl:mb-20"
          title="My Rewards"
        />
        <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between md:gap-8">
          <MyRwardItem
            title="Bonus point"
            image="bonus-points"
            volume={bonusPoints}
            loading={loading}
          />
          <MyRwardItem
            title="Total invited"
            image="total-invited"
            volume={totalInvited}
            loading={loading}
          />
          <MyRwardItem
            title="Invitation Success"
            image="invitation-success"
            volume={invitationSuccess}
            loading={loading}
          />
        </div>
      </div>
    </section>
  );
}
