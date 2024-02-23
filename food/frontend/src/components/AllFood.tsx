import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Star from "../icon/Star";
import { ArrowForwardIos, ArrowRight } from "@mui/icons-material";

const AllFood = (props: any) => {
  return (
    <Stack
      sx={{
        width: "1200px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Star />
        <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
          {props.name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          color: "#18BA51",
        }}
      >
        <Typography color={"#18BA51"}>Бүгдийг харах</Typography>
        <ArrowForwardIos />
      </Box>
    </Stack>
  );
};

export default AllFood;
