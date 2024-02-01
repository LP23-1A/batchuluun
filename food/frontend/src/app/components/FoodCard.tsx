import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../../public/img/ice.png";
const FoodCard = (count: any, discount: any) => {
  return (
    <Stack>
      <Box
        component="img"
        sx={{
          height: 186,
          display: "block",
          maxWidth: 282,
          overflow: "hidden",
          width: "100%",
        }}
        src={image.src}
      />
      <Box>
        <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
          Өглөөний хоол
        </Typography>
        <Box>
          <Typography>{count}</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default FoodCard;
