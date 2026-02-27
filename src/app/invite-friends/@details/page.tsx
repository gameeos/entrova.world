"use client";

import PageTable from "@/components/page-table";
import InvitationH2Title from "@/components/invitation-h2-title";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { listInvitationRecords } from "./action";

export default function DetailSlot() {
  const { data: session } = useSession();
  const address = session?.address;
  const userId = session?.userId;
  const [pageNo, setPageNo] = useState(1);
  const { data, isFetching } = useQuery({
    enabled: !!address,
    queryKey: ["listUserInvitationDetails", userId, pageNo],
    async queryFn({ queryKey }) {
      const [, userId, pageNo] = queryKey as [string, string, number];
      const result = await listInvitationRecords(userId, pageNo);

      return {
        curPage: result.page,
        totalPage: result.totalPage,
        detailRows: result.list.map((row) => ({
          rowKey: `${row.address}-${row.inviterAddress}`,
          values: {
            ...row,
            registerDate: new Date(row.registerDate).toLocaleString(),
            taskComplete: row.taskComplete ? "Completed" : "Not Complete",
            address: `${row.address.slice(0, 10)}......${row.address.slice(
              -4
            )}`,
            inviterAddress: `${row.inviterAddress.slice(
              0,
              10
            )}......${row.inviterAddress.slice(-4)}`,
          },
        })),
      };
    },
  });

  return (
    <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28">
      <InvitationH2Title
        className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14"
        title="Invitation Details"
      />
      <PageTable
        curPage={data?.curPage}
        totalPage={data?.totalPage}
        isLoading={isFetching}
        header={[
          { key: "registerDate", title: "Registration Time" },
          { key: "address", title: "New User Address" },
          { key: "inviterAddress", title: "Inviter" },
          { key: "inviteType", title: "Reward Type" },
          { key: "taskComplete", title: "New User Tasks" },
          { key: "points", title: "Bonus point" },
        ]}
        data={data?.detailRows}
        onPrevPageClick={() => setPageNo((prev) => Math.max(prev - 1, 1))}
        onNextPageClick={() =>
          setPageNo((prev) =>
            data?.totalPage ? Math.min(prev + 1, data?.totalPage) : prev
          )
        }
        jumpTo={setPageNo}
      />
    </div>
  );
}
