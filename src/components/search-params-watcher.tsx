"use client";

import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SearchParamsWatcher() {
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const inviteCode = searchParams.get("invite_code");
  const { toast } = useToast();
  const router = useRouter();

  const redirect = searchParams.get("redirect");
  const success = searchParams.get("success");
  const message = searchParams.get("message");

  useEffect(() => {
    if (!inviteCode) return;
    if (!session) return;

    fetch("/api/bind-invitation", {
      method: "POST",
      body: JSON.stringify({ inviterCode: inviteCode, userId: session.userId }),
    })
      .then(async (response) => {
        const body = await response.json();
        if (body.success) {
          toast({ title: "Bind Successfully" });
        } else {
          toast({ title: "Bind Failed" });
        }
      })
      .catch((e) => toast({ title: "Bind Failed", description: e.message }))
      .finally(() => {
        const params = new URLSearchParams(searchParams);
        params.delete("invite_code");
        router.replace(`/?${params.toString()}`);
      });
  }, [inviteCode, router, searchParams, session, toast]);

  useEffect(() => {
    if (redirect !== "true") return;

    toast({
      title: success === "true" ? "Claim Successful" : "Claim Failed",
      description: message,
    });

    const params = new URLSearchParams(searchParams);
    params.delete("redirect");
    params.delete("success");
    params.delete("message");
    router.replace(`?${params.toString()}`);
  }, [message, redirect, router, searchParams, success, toast]);

  return <></>;
}
