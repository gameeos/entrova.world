"use server";

import { CodeResult } from "@/interface";
import { ListData, RankingData } from "@/interface/dto";

export const listRanking = async (pageNo: number) => {
  const response = await fetch(
    `https://gameplus.ai/api/invitation/rankings?pageSize=6&page=${pageNo}`,
    {
      headers: {
        managetoken: "df32406c-13ba-4c85-8d75-27aba09a50ec",
      },
    }
  );
  const result = (await response.json()) as CodeResult<ListData<RankingData>>;
  if (result.code !== 1) {
    throw new Error(JSON.stringify(result));
  }
  return result.data;
};
