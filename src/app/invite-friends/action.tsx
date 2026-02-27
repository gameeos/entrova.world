"use server";

import { CodeResult } from "@/interface";
import { UserInfo, UserStatistics } from "@/interface/dto";

export const getUserInfo = async (address: string) => {
  const response = await fetch(
    `https://gameplus.ai/api/user/by/wallet/${address}`,
    {
      headers: {
        managetoken: "df32406c-13ba-4c85-8d75-27aba09a50ec",
      },
    }
  );
  const data = (await response.json()) as UserInfo;
  return data;
};

export const getUserStatics = async (userId: string) => {
  const response = await fetch(
    `https://gameplus.ai/api/invitation/statistics/users/${userId}`,
    {
      headers: {
        managetoken: "df32406c-13ba-4c85-8d75-27aba09a50ec",
      },
    }
  );
  const result = (await response.json()) as CodeResult<UserStatistics>;
  if (result.code !== 1) {
    throw new Error(JSON.stringify(result));
  }
  return result.data;
};
