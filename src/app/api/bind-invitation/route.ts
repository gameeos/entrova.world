import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const raw = JSON.stringify({
    inviterCode: body.inviterCode,
    userId: body.userId,
  });
  const response = await fetch(
    "https://gameplus.ai/api/invitation/inviter/bind/with/user/id",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        managetoken: "df32406c-13ba-4c85-8d75-27aba09a50ec",
      },
      body: raw,
    }
  );
  return NextResponse.json({ success: response.ok });
}
