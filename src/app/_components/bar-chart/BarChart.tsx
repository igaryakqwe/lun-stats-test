'use client';
import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import * as styles from './BarChart.styles';
import BarChartBlock from '@/app/_components/bar-chart-block';
import { sortFunc } from '@/utils/sortFunc';
import { convertAmount } from '@/utils/converAmount';
import { roundNumber } from '@/utils/roundNumber';
import { calcPoints } from '@/utils/calcPoints';
import { TopReimbursement } from '@/types/reimbursements';
import { AnimatePresence, motion } from 'framer-motion';

interface BarChartProps {
	headerText: string;
	reimbursements2022: TopReimbursement[];
	reimbursements2023: TopReimbursement[];
}

const BarChart: FC<BarChartProps> = ({
	headerText,
	reimbursements2022,
	reimbursements2023,
}) => {
	const sortedReimbursements2022 = reimbursements2022.sort(sortFunc);
	const mergedReimbursements = [...reimbursements2022, ...reimbursements2023];
	const maxAmount = Math.max(
		...mergedReimbursements.map((reimbursement) => reimbursement.amount),
	);
	const maxLine = roundNumber(Number(convertAmount(maxAmount)));
	const points = calcPoints(maxLine);

	return (
		<>
			<Typography sx={styles.barHeader}>{headerText}</Typography>
			<Box sx={styles.barWrapper}>
				<Box sx={styles.sideBar}>
					{!isNaN(points[1]) &&
						points.map((point) => <Typography key={point}>{point}</Typography>)}
				</Box>
				<Box sx={styles.chartWrapper}>
					{points.map((point, index) => {
						const top = (point / maxLine) * 100;
						return <Box key={point} sx={styles.line(top)} />;
					})}
					<AnimatePresence>
						{sortedReimbursements2022.map(
							(reimbursement: TopReimbursement, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: '100%' }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.7 }}
									style={{ height: '100%', display: 'flex' }}
								>
									<Box sx={styles.chart}>
										<BarChartBlock
											month={reimbursement.month}
											maxAmount={maxAmount}
											amount2022={reimbursement.amount}
											amount2023={reimbursements2023[index].amount}
											topProviders2022={reimbursement.topProviders}
											topProviders2023={reimbursements2023[index].topProviders}
										/>
									</Box>
								</motion.div>
							),
						)}
					</AnimatePresence>
				</Box>
			</Box>
		</>
	);
};

export default BarChart;
