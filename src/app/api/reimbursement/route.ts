import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import { AllPayment } from "@/types/reimbursements";
import { convertReimbursements } from "@/utils/convertReimbursements";

export async function GET(request: NextRequest): Promise<Response> {
    const searchParams = request.nextUrl.searchParams;
    const year = Number(searchParams.get("year")) || 2022;
    const reimbursementsRaw = fs.readFileSync(`./src/data/${year}.json`, "utf8");
    const reimbursements: AllPayment[] = JSON.parse(reimbursementsRaw);
    const response = convertReimbursements(reimbursements, year);
    return NextResponse.json(response);
}
