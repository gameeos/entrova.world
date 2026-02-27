import { authOptions } from "@/auth";
import MyRewardsSection from "@/components/my-rewards-section";
import { getServerSession } from "next-auth";
import { getUserStatics } from "../action";

export default async function RewardSlot() {
  const session = await getServerSession(authOptions);
  const statics = session && (await getUserStatics(session.userId));
  return (
    <MyRewardsSection
      bonusPoints={statics?.points}
      totalInvited={statics?.totalInvitations}
      invitationSuccess={statics?.successInvitations}
    />
  );
}
