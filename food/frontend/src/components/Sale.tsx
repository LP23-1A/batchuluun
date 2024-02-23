import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Sale = (children: any) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "10px",
        left: "40px",
        border: "2px solid dark",
      }}
    >
      <Typography>{children.sale}</Typography>
    </Box>
  );
};

export default Sale;
