import { FC } from 'react';
import { Box, Grow } from '@mui/material';
import * as styles from './BarChart.styles';
import { Reimbursement } from "@/types/reimbursements";
import BarChartBlock from "@/app/_components/bar-chart-block";
import { sortFunc } from "@/utils/sortFunc";

interface BarChartProps {
  reimbursements2022: Reimbursement[];
  reimbursements2023: Reimbursement[];
}

const BarChart: FC<BarChartProps> = ({ reimbursements2022, reimbursements2023 }) => {
  const sortedReimbursements2022 =
    reimbursements2022.sort(sortFunc);
  const sortedReimbursements2023 =
    reimbursements2023.sort(sortFunc);
  const maxAmount = Math.max(...[...reimbursements2022, ...reimbursements2023].map((reimbursement) => reimbursement.amount));

  return (
    <Box sx={styles.wrapper}>
      {sortedReimbursements2022.map((reimbursement, index) => {
        return (
          <Grow
            key={index}
            in={true}
            style={{ transformOrigin: 'bottom' }}
            timeout={1000}
          >
            <Box sx={{ display: 'flex' }}>
              <BarChartBlock
                month={reimbursement.month}
                maxAmount={maxAmount}
                amount2022={reimbursement.amount}
                amount2023={reimbursements2023[index].amount}
              />
            </Box>
          </Grow>
        );
      })}
    </Box>
  );
};

export default BarChart;
