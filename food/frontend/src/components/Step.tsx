import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { OrderContext } from "./OrderStep";
import { Done } from "@mui/icons-material";

const Step1 = (props: any) => {
  const { data, setData }: any = React.useContext(OrderContext);
  return (
    <Stack>
      <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {data.phoneNumber === "" ? (
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
        ) : (
          <Box
            sx={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              bgcolor: "#18BA51",
              display: "flex",
            }}
          >
            <Done
              sx={{
                color: "white",
                m: "auto",
                alignItems: "center",
                width: "36px",
              }}
            />
          </Box>
        )}

        <Box>
          <Typography sx={{ color: "#8B8E95", fontSize: "14px" }}>
            {props.step}
          </Typography>
          <Typography>{props.name}</Typography>
          <Typography sx={{ fontSize: "14px", color: "blue" }}>
            {data.phoneNumber === "" ? "Хүлээгдэж байна" : "Оруулсан"}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Step1;
