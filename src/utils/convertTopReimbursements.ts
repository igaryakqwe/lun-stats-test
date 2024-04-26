import { AllPayment } from '@/types/reimbursements';
import { TopProvider, TopReimbursement } from '@/types/reimbursements';

export const isMonthPresent = (
	reimbursements: TopReimbursement[],
	month: number,
): boolean => {
	return reimbursements.some((reimbursement) => reimbursement.month === month);
};

export const selectTopProviders = (
	allPayments: AllPayment[],
	month: number,
): TopProvider[] => {
	const topProviders: TopProvider[] = [];
	const filteredPayments = allPayments.filter(
		(payment) => payment.period_month === month,
	);
	for (const payment of filteredPayments) {
		if (
			!topProviders.some(
				(provider) => provider.name === payment.legal_entity_name,
			)
		) {
			topProviders.push({
				name: payment.legal_entity_name,
				amount: payment.pay_package,
			});
		} else {
			const providerIndex = topProviders.findIndex(
				(provider) => provider.name === payment.legal_entity_name,
			);
			topProviders[providerIndex].amount += payment.pay_package;
		}
	}
	const sortedProviders = topProviders.sort((a, b) => b.amount - a.amount);
	return sortedProviders.slice(0, 10);
};

export const convertTopReimbursements = (
	reimbursements: AllPayment[],
	year: number = 2022,
): TopReimbursement[] => {
	const res: TopReimbursement[] = [];
	const filteredReimbursements = reimbursements.filter(
		(reimbursement) => reimbursement.period_year === year,
	);

	for (const reimbursement of filteredReimbursements) {
		if (!isMonthPresent(res, reimbursement.period_month)) {
			res.push({
				month: reimbursement.period_month,
				year: reimbursement.period_year,
				amount: 0,
				topProviders: selectTopProviders(
					reimbursements,
					reimbursement.period_month,
				),
			});
		} else {
			const monthIndex = res.findIndex(
				(resReimbursement) =>
					resReimbursement.month === reimbursement.period_month,
			);
			res[monthIndex].topProviders = res[monthIndex].topProviders.sort(
				(a, b) => a.amount - b.amount,
			);
			res[monthIndex].amount = res[monthIndex].topProviders.reduce(
				(acc, provider) => acc + provider.amount,
				0,
			);
		}
	}
	return res;
};
