import { Alert, Stack } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <Stack>
      <Alert variant="filled" severity="error">
        username or password error.
      </Alert>
    </Stack>
  );
};

export default Error;
