import { FC } from 'react';
import {Box, Grow, Typography} from '@mui/material';
import * as styles from './BarChart.styles';
import BarChartBlock from "@/app/_components/bar-chart-block";
import { sortFunc } from "@/utils/sortFunc";
import {convertAmount} from "@/utils/converAmount";
import {roundNumber} from "@/utils/roundNumber";
import {calcPoints} from "@/utils/calcPoints";
import {TopReimbursement} from "@/types/top-reimbursements";

interface BarChartProps {
  headerText: string;
  reimbursements2022: TopReimbursement[];
  reimbursements2023: TopReimbursement[];
}

const BarChart: FC<BarChartProps> = ({
  headerText,
  reimbursements2022,
  reimbursements2023
}) => {
  const sortedReimbursements2022 = reimbursements2022.sort(sortFunc);
  const maxAmount =
    Math.max(...[...reimbursements2022, ...reimbursements2023].map((reimbursement) => reimbursement.amount));
  const maxLine = roundNumber(Number(convertAmount(maxAmount)));
  const points = calcPoints(maxLine)

  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.barHeader}>{headerText}</Typography>
      <Box sx={styles.barWrapper}>
        <Box sx={styles.sideBar}>{!isNaN(points[1]) && points.map(point =>
          <Typography key={point}>{point}</Typography>
        )}
        </Box>
        <Box sx={styles.chartWrapper}>
          {points.map((point, index) => {
            const coef = point / maxLine * 100;
            const top = coef;
            return <Box key={point} sx={styles.line(top)} />
          })}
          {sortedReimbursements2022.map((reimbursement: TopReimbursement, index) => (
            <Grow
              key={index}
              in={true}
              style={{ transformOrigin: 'bottom' }}
              timeout={1000}
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
            </Grow>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BarChart;
