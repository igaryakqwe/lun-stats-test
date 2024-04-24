import { Reimbursement } from "@/types/reimbursements";

export const sortFunc = (a: Reimbursement, b: Reimbursement) => a.month - b.month;
