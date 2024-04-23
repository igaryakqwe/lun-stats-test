export interface Reimbursement {
  month: number;
  year: number;
  amount: number;
  payments?: Payment[];
}


export interface Payment {
  name: string;
  date: string;
}

export interface AllPayment {
  legal_entity_edrpou: number
  period_month: number
  period_year: number
  package_id: number
  pay_package: number
  pay_all: number
  contract_number: string
  pay_date: string
  legal_entity_name: string
  doc_parent: string
  pay_type: number
  kekv: number
  referral: string
}
