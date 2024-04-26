import {FC} from 'react';
import {Box, Stack, TextField, Typography} from '@mui/material';

interface MonthSelectorProps {
  startMonth: number;
  endMonth: number;
  setStartMonth: (value: number) => void;
  setEndMonth: (value: number) => void;
}

const MonthSelector: FC<MonthSelectorProps> = ({
  startMonth,
  endMonth,
  setStartMonth,
  setEndMonth
}) => {

  const handleStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartMonth(Number(event.target.value));
  }

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndMonth(Number(event.target.value));
  }

  return (
    <Stack flexDirection="row" alignItems="center" gap="8px">
      <Typography variant="h6">Місяці</Typography>
      <TextField type="number" inputProps={{ min: 1, max: 12 }} value={startMonth} onChange={handleStartTimeChange} />
      <TextField type="number" inputProps={{ min: 1, max: 12 }} value={endMonth} onChange={handleEndTimeChange} />
    </Stack>
  );
};

export default MonthSelector;
