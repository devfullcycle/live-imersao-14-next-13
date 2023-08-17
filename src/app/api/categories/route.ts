import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { name, description } = await request.json();
  const response = await fetch("http://localhost:8000/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description }),
  });
  const data = await response.json();
  revalidateTag('categories');
  return NextResponse.json(data);
};
