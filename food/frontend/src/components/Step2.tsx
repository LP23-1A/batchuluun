import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Done } from "@mui/icons-material";
import Step1 from "@/components/Step";
import Navbar from "@/components/Navbar";
const Step2 = (props: any) => {
  return (
    <Stack>
      <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Box
          sx={{
            width: "48px",
            height: "48px",
            border: "1px solid blue",
            borderRadius: "50%",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              bgcolor: "blue",
              m: "auto",
              alignItems: "center",
            }}
          ></Box>
        </Box>
        <Box>
          <Typography sx={{ color: "#8B8E95", fontSize: "14px" }}>
            Захиалга
            {props.step}
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "blue" }}>
            Хүлээгдэж буй
          </Typography>
        </Box>
      </Box>
      <></>
    </Stack>
  );
};

export default Step2;
