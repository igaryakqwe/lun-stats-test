import { FC, useState } from 'react';
import { Box, Typography, Grow, Stack } from '@mui/material';
import * as styles from './BarChartBlock.styles';
import { stringToRGB } from '@/utils/stringToRGB';

interface BarChartProps {
  month: number;
  amount: number;
  height2022: number;
  height2023: number;
}

const BarChartBlock: FC<BarChartProps> = ({ month, amount, height2023, height2022 }) => {
  const color2023 = stringToRGB(amount.toString());
  const color2022 = stringToRGB(amount.toString());

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.barWrapper}>
        <Stack
          flexDirection="column"
          justifyContent="flex-end"
          sx={{ height: '100%' }}
        >
          <Grow in={true} style={{ transformOrigin: 'bottom' }} timeout={1000} unmountOnExit>
            <Box sx={styles.block(height2022, color2022)} />
          </Grow>
          <Typography fontSize="smaller" fontWeight="600">2022</Typography>
        </Stack>
        <Stack
          flexDirection="column"
          justifyContent="flex-end"
          sx={{ height: '100%' }}
        >
          <Grow in={true} style={{ transformOrigin: 'bottom' }} timeout={1000} unmountOnExit>
            <Box sx={styles.block(height2023, color2023)} />
          </Grow>
          <Typography fontSize="smaller" fontWeight="600">2023</Typography>
        </Stack>
      </Box>
      <Typography variant="h6">{month}</Typography>
    </Box>
  );
};

export default BarChartBlock;
