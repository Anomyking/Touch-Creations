import { NextResponse } from "next/server";
import { getQuotes } from "@/lib/db";
export async function GET() {
  try {
    const quotes = await getQuotes({ limit: 100 });
    return NextResponse.json({ quotes });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ quotes: [] });
  }
}

