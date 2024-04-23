'use client';
import { useEffect, useState } from 'react';
import {Reimbursement} from "@/types/reimbursements";
import BarChart from "@/app/_components/bar-chart";

export default function Home() {
  const [reimbursements2022, setReimbursements2022]
    = useState<Reimbursement[] | null>(null);
  const [reimbursements2023, setReimbursements2023]
    = useState<Reimbursement[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response2022 = await fetch("http://localhost:3000/api/reimbursement?year=2022&startMonth=1&endMonth=12");
      const response2023 = await fetch("http://localhost:3000/api/reimbursement?year=2023&startMonth=1&endMonth=12");
      const reimbursements2022Json = await response2022.json();
      const reimbursements2023Json = await response2023.json();
      setReimbursements2022(reimbursements2022Json);
      setReimbursements2023(reimbursements2023Json);
    };

    fetchData();
  }, []);


  if (!reimbursements2022 || !reimbursements2023) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <BarChart reimbursements2022={reimbursements2022} reimbursements2023={reimbursements2023}  />
    </main>
  );
}
