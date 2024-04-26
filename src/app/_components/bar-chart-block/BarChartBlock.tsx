import { FC } from 'react';
import { Box, Typography, Stack, Tooltip } from '@mui/material';
import * as styles from './BarChartBlock.styles';
import { stringToRGB } from '@/utils/stringToRGB';
import TooltipTitle from '@/app/_components/tooltip-title/TooltipTitle';
import { convertDate } from '@/utils/convertDate';
import { getMonth } from '@/utils/getMonth';
import { TopProvider } from '@/types/reimbursements';

interface BarChartProps {
	month: number;
	maxAmount: number;
	amount2022: number;
	amount2023: number;
	topProviders2022?: TopProvider[];
	topProviders2023?: TopProvider[];
}

const BarChartBlock: FC<BarChartProps> = ({
	month,
	maxAmount,
	amount2023,
	amount2022,
	topProviders2022,
	topProviders2023,
}) => {
	const height2023 = (amount2023 / maxAmount) * 100;
	const height2022 = (amount2022 / maxAmount) * 100;
	const display = topProviders2022 ? 'none' : 'block';
	const color = topProviders2022
		? 'transparent'
		: stringToRGB(amount2022.toString());
	console.log('BarChartBlock', topProviders2022);
	return (
		<Box sx={styles.wrapper}>
			<Box sx={styles.barWrapper}>
				<Stack flexDirection="column" justifyContent="flex-end" sx={styles.bar}>
					<Tooltip
						slotProps={{
							tooltip: { sx: styles.tooltip(color, display) },
							arrow: { sx: { color: color } },
						}}
						title={
							<TooltipTitle
								amount={amount2022}
								date={convertDate(month, 2022)}
							/>
						}
						arrow
						placement="top-end"
					>
						<Box sx={styles.block(height2022, color)}>
							{topProviders2022 &&
								topProviders2022.map((provider, index) => {
									const providerColor = stringToRGB(
										(provider.name + 'ccc').toString(),
									);
									const providerHeight = (provider.amount / amount2022) * 100;
									return (
										<Tooltip
											title={
												<TooltipTitle
													name={provider.name}
													amount={provider.amount}
												/>
											}
											arrow
											key={provider.name}
										>
											<Box
												key={provider.name}
												sx={styles.block(providerHeight, providerColor)}
											/>
										</Tooltip>
									);
								})}
						</Box>
					</Tooltip>
					<Typography sx={styles.year}>2022</Typography>
				</Stack>
				<Stack flexDirection="column" justifyContent="flex-end" sx={styles.bar}>
					<Tooltip
						slotProps={{
							tooltip: { sx: styles.tooltip(color, display) },
							arrow: { sx: { color: color } },
						}}
						title={
							<TooltipTitle
								amount={amount2023}
								date={convertDate(month, 2023)}
							/>
						}
						arrow
						placement="top-start"
					>
						<Box sx={styles.block(height2023, color)}>
							{topProviders2023 &&
								topProviders2023.map((provider, index) => {
									const providerColor = stringToRGB(
										(provider.name + 'ccc').toString(),
									);
									const providerHeight = (provider.amount / amount2023) * 100;
									return (
										<Tooltip
											title={
												<TooltipTitle
													name={provider.name}
													amount={provider.amount}
												/>
											}
											key={provider.name}
										>
											<Box
												key={provider.name}
												sx={styles.block(providerHeight, providerColor)}
											/>
										</Tooltip>
									);
								})}
						</Box>
					</Tooltip>
					<Typography sx={styles.year}>2023</Typography>
				</Stack>
			</Box>
			<Typography sx={styles.month}>{getMonth(month)}</Typography>
		</Box>
	);
};

export default BarChartBlock;
