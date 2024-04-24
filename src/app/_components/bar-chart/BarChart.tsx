import { FC } from 'react';
import {Box, Typography} from '@mui/material';
import * as styles from './BarChart.styles';
import {Reimbursement} from "@/types/reimbursements";
import BarChartBlock from "@/app/_components/bar-chart-block";
import {sortFunc} from "@/utils/sortFunc";

interface BarChartProps {
  reimbursements2022: Reimbursement[];
  reimbursements2023: Reimbursement[];
}

const BarChart: FC<BarChartProps> = ({ reimbursements2022, reimbursements2023 }) => {
  const sortedReimbursements2022 =
    reimbursements2022.sort(sortFunc)
  const sortedReimbursements2023 =
    reimbursements2023.sort(sortFunc)
  const maxAmount = Math.max(...[...reimbursements2022, ...reimbursements2023].map((reimbursement) => reimbursement.amount))

  return (
    <Box sx={styles.wrapper}>
      {sortedReimbursements2022.map((reimbursement, index) => {
        const height2022 = (reimbursement.amount / maxAmount) * 100
        const height2023 = (sortedReimbursements2023[index].amount / maxAmount) * 100
        return (
          <Box sx={{ display: 'flex' }}>
            <BarChartBlock
              month={reimbursement.month}
              amount={reimbursement.amount}
              height2022={height2022}
              height2023={height2023}
            />
          </Box>
        )}
      )}
    </Box>
  );
};

export default BarChart;
