import { FC } from 'react';
import {Box, Stack, Typography} from '@mui/material';
import * as styles from './BarChartBlock.styles';

interface BarChartProps {
  month: number;
  amount: number;
  height2022: number;
  height2023: number;
}

const BarChartBlock: FC<BarChartProps> = ({ month, amount, height2023, height2022 }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.barWrapper}>
        <Box sx={styles.block(height2022)} />
        <Box sx={styles.block(height2023)} />
      </Box>
      <Typography variant="h6">{month}</Typography>
    </Box>
  );
};

export default BarChartBlock;
