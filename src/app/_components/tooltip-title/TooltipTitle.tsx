import {FC} from 'react';
import {Box, Typography} from '@mui/material';
import {roundNumber} from "@/utils/roundNumber";

interface TooltipTitleProps {
  amount?: number;
  date?: string;
  name?: string;
}

const TooltipTitle: FC<TooltipTitleProps> = ({ amount, date, name }) => {
  return (
    <Box>
      <Typography>{name}</Typography>
      {amount && <Typography>Сума: {roundNumber(amount) / 1000000} млн</Typography>}
      <Typography>{date}</Typography>
    </Box>
  );
};

export default TooltipTitle;
