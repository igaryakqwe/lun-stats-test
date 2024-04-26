import {AllPayment, Reimbursement} from "@/types/reimbursements";

export const isMonthPresent = (reimbursements: Reimbursement[], month: number): boolean => {
  return reimbursements.some((reimbursement) => reimbursement.month === month)
}

export const convertReimbursements = (
  reimbursements: AllPayment[],
  year: number = 2022,
): Reimbursement[] => {
  const res: Reimbursement[] = []
  const filteredReimbursements = reimbursements
    .filter((reimbursement) => reimbursement.period_year === year)

  for (const reimbursement of filteredReimbursements) {
    if (!isMonthPresent(res, reimbursement.period_month)) {
      res.push({
        month: reimbursement.period_month,
        year: reimbursement.period_year,
        amount: reimbursement.pay_package,
      })
    } else {
      const monthIndex = res.findIndex((resReimbursement) => resReimbursement.month === reimbursement.period_month)
      res[monthIndex].amount += reimbursement.pay_package;
    }
  }
  return res;
}


