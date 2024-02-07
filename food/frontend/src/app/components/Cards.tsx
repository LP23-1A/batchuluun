import { Box, Stack } from "@mui/material";
import React from "react";
import ImgCard from "./Card";
import Sale from "./Sale";
import axios from "axios";
// const data = [
//   {
//     name: "Өглөөний хоол",
//     price: "10000",
//   },
//   {
//     name: "Өглөөний хоол",
//     price: "1000",
//   },
//   {
//     name: "Өглөөний хоол",
//     price: "1000",
//   },
//   {
//     name: "Өглөөний хоол",
//     price: "1000",
//   },
// ];
const Cards = () => {
  const [data, setData] = React.useState([]);
  const BASE_URL = "http://localhost:8000/category/one";
  const handler = async () => {
    try {
      const { data } = await axios.post(BASE_URL, { name: "Soup" });
      const res = data.result[0].foodId;
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    handler();
  });

  console.log(data);
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
          <ImgCard
            img={el.image}
            name={el.name}
            price={el.price}
            discount={el.discount}
            count={(el.discount * el.price) / 100}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default Cards;
