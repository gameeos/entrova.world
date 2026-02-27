import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  const taskId = requestBody?.taskId;
  if (!taskId && typeof taskId !== "string") {
    return NextResponse.json({
      success: false,
      message: "Task ID is required.",
    });
  }
  const session = await getServerSession(authOptions);
  if (session === null) {
    return NextResponse.json({
      success: false,
      message: "Not signed-in.",
    });
  }
  const { userId } = session;
  const response = await fetch(
    `https://gameplus.ai/api/v2/users/${userId}/tasks/${taskId}/claim`,
    {
      method: "POST",
      headers: {
        managetoken: "df32406c-13ba-4c85-8d75-27aba09a50ec",
      },
    }
  );
  const data = await response.json();
  const success = data?.success;
  const desc = data?.desc;

  return NextResponse.json({
    success,
    message: desc,
  });
}
