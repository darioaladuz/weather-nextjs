import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { query: string } }) {
    console.log({params})
    
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.query}&units=metric&appid=5a039a4782b0f61f2e8b397c0b32ffb8`);
    const data = await res.json()

    return NextResponse.json(data)
}