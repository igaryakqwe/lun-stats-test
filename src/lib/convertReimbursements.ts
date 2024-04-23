import {Reimbursement, Reimbursement2} from "@/types/reimbursement";

export const isMonthPresent = (reimbursements: Reimbursement2[], month: number): boolean => {
  return reimbursements.some((reimbursement) => reimbursement.month === month)
}

export const convertReimbursements = (
  reimbursements: Reimbursement[],
  year: number = 2022,
  startMonth: number = 1,
  endMonth: number = 12,
): Reimbursement2[] => {
  const res: Reimbursement2[] = []
  const filteredReimbursements = reimbursements
    .filter((reimbursement) => reimbursement.period_year === year)
    .filter((reimbursement) => reimbursement.period_month >= startMonth && reimbursement.period_month <= endMonth)

  for (const reimbursement of filteredReimbursements) {
    if (!isMonthPresent(res, reimbursement.period_month)) {
      res.push({
        month: reimbursement.period_month,
        year: reimbursement.period_year,
        amount: reimbursement.pay_package,
        // payments: [
        //   {
        //     name: reimbursement.legal_entity_name,
        //     date: reimbursement.pay_date,
        //   }
        // ]
      })
    } else {
      const monthIndex = res.findIndex((resReimbursement) => resReimbursement.month === reimbursement.period_month)
      res[monthIndex].amount += reimbursement.pay_package
      // res[monthIndex].payments.push({
      //   name: reimbursement.legal_entity_name,
      //   date: reimbursement.pay_date,
      // })
    }
  }
  return res;
}


