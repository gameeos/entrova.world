"use client";

import PageTable from "@/components/page-table";
import Image from "next/image";
import { listRanking } from "./action";
import InvitationH2Title from "@/components/invitation-h2-title";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function RankingSlot() {
  const [pageNo, setPageNo] = useState(0);
  const { data, isFetching } = useQuery({
    queryKey: ["listRanking", pageNo],
    async queryFn({ queryKey }) {
      const [, pageNo] = queryKey as [string, number];
      const result = await listRanking(pageNo);
      const rankingRows = result.list.map((row) => ({
        rowKey: `${row.userName}-${row.points}`,
        values: {
          ...row,
          ranking:
            row.ranking === 1
              ? "🏅"
              : row.ranking === 2
              ? "🥈"
              : row.ranking === 3
              ? "🥉"
              : row.ranking,
          userName: (
            <div className="flex justify-start items-end gap-1">
              <div>
                <Image src={row.avatar} alt="avatar" width={24} height={24} />
              </div>
              <div>{row.address}</div>
            </div>
          ),
        },
      }));
      return {
        curPage: result.page,
        totalPage: result.totalPage,
        rankingRows,
      };
    },
  });


  return (
    <div className="">
      <InvitationH2Title
        className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14"
        title="Invitation Ranking"
      />
      <PageTable
        isLoading={isFetching}
        curPage={data?.curPage}
        totalPage={data?.totalPage}
        header={[
          { key: "ranking", title: "Ranking" },
          { key: "userName", title: "User Name" },
          { key: "invitations", title: "Invite Numbers" },
          { key: "points", title: "Bonus Points" },
        ]}
        data={data?.rankingRows}
        onPrevPageClick={() => setPageNo((prev) => Math.max(prev - 1, 1))}
        onNextPageClick={() =>
          setPageNo((prev) =>
            data?.totalPage ? Math.min(prev + 1, data.totalPage) : prev
          )
        }
        jumpTo={setPageNo}
      />
    </div>
  );
}
