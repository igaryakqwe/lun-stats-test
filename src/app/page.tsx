'use client';
import { useEffect, useState } from 'react';
import {Reimbursement} from "@/types/reimbursements";
import BarChart from "@/app/_components/bar-chart";
import {Box, TextField, Typography} from "@mui/material";
import * as styles from './_components/mainPage.styles';
import Reimbursements from "@/app/_components/rebuirements/Reimbursements";
import TopReimbursements from "@/app/_components/top-reimbursements/TopReimbursements";

export default function Home() {


  return (
    <Box component="main">
      <Reimbursements />
      <TopReimbursements />
    </Box>
  );
}
