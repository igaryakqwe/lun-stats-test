import {NextRequest, NextResponse} from "next/server";
import * as fs from "fs";
import {Reimbursement} from "@/app/types/reimbursement";
import {convertReimbursements} from "@/app/lib/convertReimbursements";

export async function GET(request: NextRequest): Promise<Response> {
    const searchParams = request.nextUrl.searchParams;
    const year = Number(searchParams.get("year")) || 2022;
    const startMonth = Number(searchParams.get("startMonth")) || 1;
    const endMonth = Number(searchParams.get("endMonth")) || 12;
    const reimbursementsRaw = fs.readFileSync(`./src/data/${year}.json`, "utf8");
    const reimbursements: Reimbursement[] = JSON.parse(reimbursementsRaw);
    const response = convertReimbursements(reimbursements, year, startMonth, endMonth);
    return NextResponse.json(response);
}
