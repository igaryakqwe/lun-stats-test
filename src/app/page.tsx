'use client';
import {Box} from "@mui/material";
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
