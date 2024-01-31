import { Alert } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <div>
      <Alert variant="filled" severity="error">
        username or password error.
      </Alert>
    </div>
  );
};

export default Error;
