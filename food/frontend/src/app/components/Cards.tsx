"use client";
import React from "react";
import goodmorning from "../../../public/img/egg.png";
import ice from "../../../public/img/ice.png";
import breackfast from "../../../public/img/breackfast.png";
import food from "../../../public/img/food.png";
import { Box, Stack, Typography } from "@mui/material";
const Cards = () => {
  const mockData = [
    {
      img: goodmorning,
      name: "Өглөөний хоол",
      price: 4800,
    },
    {
      img: ice,
      name: "Зайрмаг",
      price: 14800,
    },
    {
      img: breackfast,
      name: "Өглөөний хоол",
      price: 248000,
    },
    {
      img: food,
      name: "Breakfast ",
      price: 3480,
    },
  ];
  return (
    <Stack sx={{ width: "1200px" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {mockData.map((el: any, ind: Number) => (
          <Stack key={el + ind}>
            <Box>
              <img src={el.img.src} alt="" />
            </Box>
            <Typography
              sx={{ color: "#000", fontSize: "18px", fontWeight: "600" }}
            >
              {el.name}
            </Typography>
            <Typography color={"#18BA51"}>{el.price}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Cards;
