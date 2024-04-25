import {FC, useEffect, useState} from 'react';
import {Box, Typography, Grow, Stack, Collapse, Tooltip} from '@mui/material';
import * as styles from './BarChartBlock.styles';
import { stringToRGB } from '@/utils/stringToRGB';
import {convertAmount} from "@/utils/converAmount";
import TooltipTitle from "@/app/_components/tooltip-title/TooltipTitle";
import {convertDate} from "@/utils/convertDate";

interface BarChartProps {
  month: number;
  maxAmount: number;
  amount2022: number;
  amount2023: number;
}

const BarChartBlock: FC<BarChartProps> = ({ month, maxAmount, amount2023, amount2022 }) => {
  const color = stringToRGB(amount2022.toString());
  const height2023 = (amount2023 / maxAmount) * 100;
  const height2022 = (amount2022 / maxAmount) * 100;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.barWrapper}>
        <Stack
          flexDirection="column"
          justifyContent="flex-end"
          sx={{ height: '100%' }}
        >
          <Tooltip
            slotProps={{
              tooltip: { sx: styles.tooltip(color) },
              arrow: { sx: { color: color }},
            }}
            title={
              <TooltipTitle
                amount={convertAmount(amount2022)}
                date={convertDate(month, 2022)}
              />
            }
            arrow
            placement="top-end"
          >
            <Box sx={styles.block(height2022, color)} />
          </Tooltip>
          <Typography fontSize="smaller" fontWeight="600">2022</Typography>
        </Stack>
        <Stack
          flexDirection="column"
          justifyContent="flex-end"
          sx={{ height: '100%' }}
        >
          <Tooltip
            slotProps={{
              tooltip: { sx: styles.tooltip(color) },
              arrow: { sx: { color: color }},
            }}
            title={
              <TooltipTitle
                amount={convertAmount(amount2023)}
                date={convertDate(month, 2023)}
              />
            }
            arrow
            placement="top-start"
          >
            <Box sx={styles.block(height2023, color)} />
          </Tooltip>
          <Typography fontSize="smaller" fontWeight="600">2023</Typography>
        </Stack>
      </Box>
      <Typography variant="h6">{month}</Typography>
    </Box>
  );
};

export default BarChartBlock;
