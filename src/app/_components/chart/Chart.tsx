'use client';
import { FC, useState } from 'react';
import { Box } from '@mui/material';
import { Reimbursement } from '@/types/reimbursements';
import BarChart from '@/app/_components/bar-chart';
import { TopReimbursement } from '@/types/reimbursements';
import MonthSelector from '@/app/_components/month-selector/MonthSelector';

export interface ReimbursementsProps {
	name: string;
	reimbursements2022: Reimbursement[];
	reimbursements2023: Reimbursement[];
}

const Chart: FC<ReimbursementsProps> = ({
	name,
	reimbursements2022,
	reimbursements2023,
}) => {
	const [startMonth, setStartMonth] = useState<number>(1);
	const [endMonth, setEndMonth] = useState<number>(12);

	const filtered2022 = reimbursements2022?.filter(
		(reimbursement) =>
			reimbursement.month >= startMonth && reimbursement.month <= endMonth,
	) as TopReimbursement[];

	const filtered2023 = reimbursements2023?.filter(
		(reimbursement) =>
			reimbursement.month >= startMonth && reimbursement.month <= endMonth,
	) as TopReimbursement[];

	return (
		<Box component="section">
			<BarChart
				headerText={name}
				reimbursements2022={filtered2022}
				reimbursements2023={filtered2023}
			/>
			<MonthSelector
				startMonth={startMonth}
				endMonth={endMonth}
				setStartMonth={setStartMonth}
				setEndMonth={setEndMonth}
			/>
		</Box>
	);
};

export default Chart;
