"use server";

import { CodeResult } from "@/interface";
import { InvitationRecord, ListData } from "@/interface/dto";

export const listInvitationRecords = async (
  userId: string,
  pageNum: number
) => {
  const response = await fetch(
    `https://gameplus.ai/api/invitation/detail/users/${userId}?pageSize=6&page=${pageNum}`,
    {
      headers: {
        managetoken: "df32406c-13ba-4c85-8d75-27aba09a50ec",
      },
    }
  );
  const result = (await response.json()) as CodeResult<
    ListData<InvitationRecord>
  >;
  if (result.code !== 1) {
    throw new Error(JSON.stringify(result));
  }
  return result.data;
};
