import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import image from "../../../public/img/ice.png";
import axios from "axios";
const FoodCard = (count: any, discount: any) => {
  const BASE_URL = "http://localhost:8000/category/one";
  const handler = async () => {
    try {
      const { data } = await axios.post(BASE_URL, { name: "Soup" });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   handler();
  // });
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
      <Box onClick={handler}>
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
