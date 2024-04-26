import {Box, CircularProgress} from "@mui/material";
import Reimbursements from "@/app/_components/rebuirements/Reimbursements";
import TopReimbursements from "@/app/_components/top-reimbursements/TopReimbursements";
import fs from "fs";
import {AllPayment} from "@/types/reimbursements";
import {convertReimbursements} from "@/utils/convertReimbursements";
import {convertTopReimbursements} from "@/utils/convertTopReimbursements";

export default function Home() {
  let reimbursements2022: AllPayment[];
  let reimbursements2023: AllPayment[];
  const reimbursements2022Raw = fs.readFileSync(`./src/data/2022.json`, "utf8");
  const reimbursements2023Raw = fs.readFileSync(`./src/data/2023.json`, "utf8");
  reimbursements2022 = JSON.parse(reimbursements2022Raw);
  reimbursements2023 = JSON.parse(reimbursements2023Raw);

  if (!reimbursements2022 || !reimbursements2023) {
    return (
      <Box component="section">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box component="main">
      <Reimbursements
        reimbursements2022={convertReimbursements(reimbursements2022)}
        reimbursements2023={convertReimbursements(reimbursements2023, 2023)}
      />
      <TopReimbursements
        reimbursements2022={convertTopReimbursements(reimbursements2022)}
        reimbursements2023={convertTopReimbursements(reimbursements2023, 2023)}
      />
    </Box>
  );
}
