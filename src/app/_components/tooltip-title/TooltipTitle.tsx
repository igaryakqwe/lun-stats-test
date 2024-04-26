import {FC} from 'react';
import {Box, Typography} from '@mui/material';

interface TooltipTitleProps {
  amount?: string;
  date?: string;
  name?: string;
}

const TooltipTitle: FC<TooltipTitleProps> = ({ amount, date, name }) => {
  return (
    <Box>
      <Typography>{name}</Typography>
      {amount && <Typography>Сума: {amount} млн</Typography>}
      <Typography>{date}</Typography>
    </Box>
  );
};

export default TooltipTitle;
