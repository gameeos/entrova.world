"use client";

import { useAppKit } from "@reown/appkit/react";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export interface ClaimButtonProps {
  claimed: boolean;
  action: "CLAIM" | "REDIRECT";
  redirect: string | null;
  taskId: string;
}

export default function ClaimButton({
  action,
  redirect,
  claimed,
  taskId,
}: ClaimButtonProps) {
  const session = useSession();
  const { open } = useAppKit();
  const [isClaimg, setClaiming] = useState(false);
  const [success, setSuccess] = useState(false);
  const [, setError] = useState(false);
  const { toast } = useToast();

  let buttonContent = claimed ? "Claimed" : "Claim";
  if (success) {
    buttonContent = "Claimed";
  }
  if (isClaimg) {
    buttonContent = "Claiming";
  }
  if (session.status === "unauthenticated") {
    buttonContent = "Claim";
    claimed = false;
  }

  return (
    <Button
      disabled={claimed || isClaimg || success}
      className="w-full md:w-28 lg:max-w-44 lg:text-base"
      onClick={() => {
        if (session.status === "unauthenticated") {
          open({ view: "Connect" });
        } else if (session.status === "authenticated") {
          if (action === "CLAIM") {
            setClaiming(true);
            fetch("/api/task/claim", {
              method: "POST",
              body: JSON.stringify({ taskId }),
            })
              .then(async (response) => {
                const data = await response.json();
                const success = data?.success ?? false;
                if (success) {
                  setSuccess(true);
                  toast({
                    title: "Claim Successful",
                  });
                } else {
                  const message = data?.message;
                  if (message) {
                    toast({
                      title: "Claim Failed",
                      description: message,
                    });
                  }
                }
              })
              .catch((error) => {
                setError(error);
              })
              .finally(() => {
                setClaiming(false);
              });
          } else {
            if (redirect) {
              window.open(redirect, "_blank");
            }
          }
        }
      }}
    >
      <span className={isClaimg ? "animate-pulse" : ""}>{buttonContent}</span>
    </Button>
  );
}
