"use client";

import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

export default function BindInvitationForm() {
  const { data: session } = useSession();
  const { toast } = useToast();

  return (
    <form
      className="sm:flex items-center gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let invitationLink = formData.get("invitation_link");
        if (typeof invitationLink !== "string") {
          return;
        }
        invitationLink = invitationLink.replaceAll(" ", "");
        if (!invitationLink) {
          toast({
            title: "Bind Failed",
            description: "Pleases input the invitation link.",
          });
          return;
        }
        try {
          const { searchParams } = new URL(invitationLink);
          const code = searchParams.get("invite_code");
          if (!code) {
            toast({
              title: "Bind Failed",
              description: "Invalid URL.",
            });
            return;
          }
          if (!session) {
            toast({
              title: "Bind Failed",
              description: "Please sign-in.",
            });
            return;
          }
          const userIdText = session.userId;
          const userId = parseInt(userIdText);
          fetch("/api/bind-invitation", {
            method: "POST",
            body: JSON.stringify({ inviterCode: code, userId }),
          })
            .then(async (response) => {
              const body = await response.json();
              if (body.success) {
                toast({ title: "Bind Successfully" });
              } else {
                toast({ title: "Bind Failed" });
              }
            })
            .catch((e) =>
              toast({ title: "Bind Failed", description: e.message })
            );
        } catch (error: unknown) {
          if (error instanceof Error) {
            const message = error.message ?? "";
            toast({
              title: "Bind Failed",
              description: message,
            });
          }
        }
      }}
    >
      <div>Your Inviter</div>
      <div className="flex gap-1">
        <label>
          <Input
            name="invitation_link"
            className="bg-[#D9D9D9] focus-visible:ring-0"
          />
        </label>
        <Button
          className="bg-[#0e0e0e] rounded-[8px] hover:bg-[#2a2a2d] active:bg-[#050505] hover:text-white active:text-white"
          type="submit"
        >
          Confirm
        </Button>
      </div>
    </form>
  );
}
