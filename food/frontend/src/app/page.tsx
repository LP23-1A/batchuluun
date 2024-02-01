import * as React from "react";

import Navbar from "./components/Navbar1";
import Error from "./components/Error";
import { Stack } from "@mui/material";

export default function BasicButtons() {
  return (
    <Stack>
      <Navbar />
      <Error />
    </Stack>
  );
}
