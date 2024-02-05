import { Box, Stack } from "@mui/material";
import React from "react";
import ImgCard from "./Card";
import Sale from "./Sale";
const data = [
  {
    name: "Өглөөний хоол",
    price: "10000",
  },
  {
    name: "Өглөөний хоол",
    price: "1000",
  },
  {
    name: "Өглөөний хоол",
    price: "1000",
  },
  {
    name: "Өглөөний хоол",
    price: "1000",
  },
];
const Cards = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {data.map((el: any) => (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <ImgCard name={el.name} price={el.price} sale={"20%"} />
        </Box>
      ))}
    </Stack>
  );
};

export default Cards;
