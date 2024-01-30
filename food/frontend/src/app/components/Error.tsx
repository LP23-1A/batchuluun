import { Alert } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <div>
      <Alert variant="filled" severity="error">
        This is a filled error Alert.
      </Alert>
    </div>
  );
};

export default Error;
