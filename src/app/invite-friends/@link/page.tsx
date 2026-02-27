import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { getUserInfo } from "../action";
import CopyButton from "@/components/copy-button";

const entrovaUrl = "https://www.entrova.ai";

export default async function LinkSlot() {
  const session = await getServerSession(authOptions);
  const inviteLink = session
    ? await getUserInfo(session.address).then(
        (userInfo) => `${entrovaUrl}?invite_code=${userInfo.inviteCode}`
      )
    : entrovaUrl;

  return (
    <>
      <div className="px-1 flex-1 truncate font-normal">{inviteLink}</div>
      <CopyButton copyContent={inviteLink} buttonContent="Copy Link" />
    </>
  );
}
