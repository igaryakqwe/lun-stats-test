import { Reimbursement } from "@/types/reimbursements";

export interface TopReimbursement extends Reimbursement {
  topProviders: TopProvider[];
}

export interface TopProvider {
  name: string;
  amount: number;
}
