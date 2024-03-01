import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const AdminHistory = () => {
  return (
    <Stack sx={{ display: "flex", flexDirection: "row", gap: "50px" }}>
      <Box>
        <img src="" alt="" />
        <Box>
          <Typography>#23790</Typography>
          <Typography>Breackfast</Typography>
        </Box>
      </Box>
      <Box>
        <Typography>89443125</Typography>
        <Typography>Boldoo</Typography>
      </Box>
      <Box>
        <Typography>24500</Typography>
        <Typography>2025/02/23</Typography>
      </Box>
      <Typography>Paid</Typography>
      <Typography>
        БЗД, 2-р хороо, Нархан хотхон, 2-р орц, 5 - 63тоот
      </Typography>
      <Box>Progress</Box>
    </Stack>
  );
};

export default AdminHistory;
