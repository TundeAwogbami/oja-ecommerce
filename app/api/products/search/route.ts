import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")
  const query = searchParams.get("query")

  const backendUrl = process.env.BACKEND_URL || "http://localhost:5000"
  const response = await fetch(`${backendUrl}/api/products/search?lat=${lat}&lng=${lng}&query=${query}`)
  const data = await response.json()

  return NextResponse.json(data)
}

