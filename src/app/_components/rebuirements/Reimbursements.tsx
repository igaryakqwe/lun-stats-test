import {FC, useEffect, useState} from 'react';
import {Box, CircularProgress, TextField, Typography} from '@mui/material';
import {Reimbursement} from "@/types/reimbursements";
import BarChart from "@/app/_components/bar-chart";
import {TopReimbursement} from "@/types/top-reimbursements";

const Reimbursements: FC = () => {
  const [reimbursements2022, setReimbursements2022]
    = useState<Reimbursement[] | null>(null);
  const [reimbursements2023, setReimbursements2023]
    = useState<Reimbursement[] | null>(null);

  const [startMonth, setStartMonth] = useState<number>(1);
  const [endMonth, setEndMonth] = useState<number>(12);

  useEffect(() => {
    const fetchData = async () => {
      const response2022 = await fetch(
        `http://localhost:3000/api/reimbursement?year=2022`
      );
      const response2023 = await fetch(
        `http://localhost:3000/api/reimbursement?year=2023`
      );
      const reimbursements2022Json = await response2022.json();
      const reimbursements2023Json = await response2023.json();
      setReimbursements2022(reimbursements2022Json);
      setReimbursements2023(reimbursements2023Json);
    };

    fetchData();
  }, []);

  const filtered2022
    = reimbursements2022?.filter((reimbursement) =>
    reimbursement.month >= startMonth && reimbursement.month <= endMonth
  ) as TopReimbursement[];

  const filtered2023
    = reimbursements2023?.filter((reimbursement) =>
    reimbursement.month >= startMonth && reimbursement.month <= endMonth
  ) as TopReimbursement[];

  const handleStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartMonth(Number(event.target.value));
  }

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndMonth(Number(event.target.value));
  }

  if (!reimbursements2022 || !reimbursements2023) {
    return (
      <Box component="section">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box component="section">
      <BarChart
        headerText="Графік суми відшкодувань по місяцяї за 2022 і 2023 роки"
        reimbursements2022={filtered2022}
        reimbursements2023={filtered2023}
      />
      <TextField type="number" inputProps={{ min: 1, max: 12 }} value={startMonth} onChange={handleStartTimeChange} />
      <TextField type="number" inputProps={{ min: 1, max: 12 }} value={endMonth} onChange={handleEndTimeChange} />
    </Box>
  );
};

export default Reimbursements;
