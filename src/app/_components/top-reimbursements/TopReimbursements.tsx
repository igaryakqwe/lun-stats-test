'use client'
import {FC, useEffect, useState} from 'react';
import {Box, CircularProgress, Stack, TextField, Typography} from '@mui/material';
import {Reimbursement} from "@/types/reimbursements";
import BarChart from "@/app/_components/bar-chart";
import {TopReimbursement} from "@/types/top-reimbursements";
import MonthSelector from "@/app/_components/month-selector/MonthSelector";

interface TopReimbursementsProps {
  reimbursements2022: TopReimbursement[];
  reimbursements2023: TopReimbursement[];
}

const TopReimbursements: FC<TopReimbursementsProps> = ({
  reimbursements2022,
  reimbursements2023
}) => {
  const [startMonth, setStartMonth] = useState<number>(1);
  const [endMonth, setEndMonth] = useState<number>(12);

  const filtered2022
    = reimbursements2022?.filter((reimbursement) =>
    reimbursement.month >= startMonth && reimbursement.month <= endMonth
  ) as TopReimbursement[];

  const filtered2023
    = reimbursements2023?.filter((reimbursement) =>
    reimbursement.month >= startMonth && reimbursement.month <= endMonth
  ) as TopReimbursement[];

  return (
    <Box component="section">
      <BarChart
        headerText="Топ 10 надавачів послуг"
        reimbursements2022={filtered2022}
        reimbursements2023={filtered2023}
      />
      <MonthSelector
        startMonth={startMonth}
        endMonth={endMonth}
        setStartMonth={setStartMonth}
        setEndMonth={setEndMonth}
      />
    </Box>
  );
};

export default TopReimbursements;
