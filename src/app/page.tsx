'use client';
import { useEffect, useState } from 'react';
import {Reimbursement} from "@/types/reimbursements";
import BarChart from "@/app/_components/bar-chart";
import {Box, TextField, Typography} from "@mui/material";
import * as styles from './_components/mainPage.styles';

export default function Home() {
  const [reimbursements2022, setReimbursements2022]
    = useState<Reimbursement[] | null>(null);
  const [reimbursements2023, setReimbursements2023]
    = useState<Reimbursement[] | null>(null);

  const [startMonth, setStartMonth] = useState<number>(1);
  const [endMonth, setEndMonth] = useState<number>(12);

  useEffect(() => {
    const fetchData = async () => {
      const response2022 = await fetch(
        `http://localhost:3000/api/reimbursement?year=2022&startMonth=1&endMonth=12`
      );
      const response2023 = await fetch(
        `http://localhost:3000/api/reimbursement?year=2023&startMonth=1&endMonth=12`
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
  ) as Reimbursement[];

  const filtered2023
    = reimbursements2023?.filter((reimbursement) =>
    reimbursement.month >= startMonth && reimbursement.month <= endMonth
  ) as Reimbursement[];

  const handleStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartMonth(Number(event.target.value));
  }

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndMonth(Number(event.target.value));
  }

  if (!reimbursements2022 || !reimbursements2023) {
    return <div>Loading...</div>;
  }

  return (
    <Box component="main">
      <Typography sx={styles.barHeader}>Графік суми відшкодувань по місяцяї за 2022 і 2023 роки</Typography>
      <BarChart reimbursements2022={filtered2022} reimbursements2023={filtered2023}  />
      <TextField type="number" inputProps={{ min: 1, max: 12 }} value={startMonth} onChange={handleStartTimeChange} />
      <TextField type="number" inputProps={{ min: 1, max: 12 }} value={endMonth} onChange={handleEndTimeChange} />

      <Typography sx={styles.barHeader}>Топ 10 надавачів послуг</Typography>
    </Box>
  );
}
