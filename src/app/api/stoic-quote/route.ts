import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic' 

export async function GET() {
  try {
    const response = await fetch("https://stoic.tekloon.net/stoic-quote",{ cache: 'no-store' });
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch the quote:", error);
    return NextResponse.json({ error: "Failed to fetch the quote" }, { status: 500 });
  }
}
