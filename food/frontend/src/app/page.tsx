import * as React from "react";
import Error from "./components/Error";
import { Stack } from "@mui/material";
import Navbar from "./components/Navbar";

export default function BasicButtons() {
  return (
    <Stack>
      <Navbar />
      <Error />
    </Stack>
  );
}
