import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Thanabordee Sornchai",
    studentId: "650610765",
  });
};
