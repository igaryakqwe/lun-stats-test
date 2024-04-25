import {FC} from 'react';
import {Box, Typography} from '@mui/material';

interface TooltipTitleProps {
  amount: string;
  date: string;
}

const TooltipTitle: FC<TooltipTitleProps> = ({ amount, date }) => {
  return (
    <Box>
      <Typography>{amount}</Typography>
      <Typography>{date}</Typography>
    </Box>
  );
};

export default TooltipTitle;
