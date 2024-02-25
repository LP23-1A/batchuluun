import { Alert, Stack } from "@mui/material";
import React from "react";

const Complete = () => {
  return (
    <Stack>
      <Alert variant="filled" severity="success">
        This is a filled success Alert.
      </Alert>
    </Stack>
  );
};

export default Complete;
