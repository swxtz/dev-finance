import { api } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const apiResponse = await api.post("/users/verify-account", {
    email,
    token
  });

  if (apiResponse.status === 200) {
    return NextResponse.json({ message: "Conta verificada com sucesso!" });
  }
}
