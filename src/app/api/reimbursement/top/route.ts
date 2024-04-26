import fs from "fs";
import {NextRequest, NextResponse} from "next/server";
import {convertTopReimbursements} from "@/utils/convertTopReimbursements";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const year = Number(searchParams.get("year")) || 2022;
  const reimbursementsRaw = fs.readFileSync(`./src/data/${year}.json`, "utf8");
  const reimbursements = JSON.parse(reimbursementsRaw);
  const response = convertTopReimbursements(reimbursements, year);
  return NextResponse.json(response);
}
