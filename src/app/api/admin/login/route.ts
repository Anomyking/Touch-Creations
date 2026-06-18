import { NextRequest, NextResponse } from "next/server";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "Touch creations-admin";
export async function POST(req: NextRequest) {
  const { password } = await req.json();
  if (password !== ADMIN_PASSWORD) return NextResponse.json({ error: "Incorrect" }, { status: 401 });
  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_auth", ADMIN_PASSWORD, { httpOnly: true, secure: process.env.NODE_ENV === "production", maxAge: 60*60*24*7, path: "/" });
  return res;
}

