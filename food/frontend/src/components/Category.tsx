import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImgCard from "./Card";
const BASE_URL = "http://localhost:8000/category/one";
const Category = () => {
  const mockData = [
    {
      name: "Soup",
    },
    {
      name: "breakfast",
    },
    {
      name: "Main course",
    },
    {
      name: "Desert",
    },
  ];
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(mockData[0].name);
  const handlerFood = async () => {
    try {
      const { data } = await axios.post(BASE_URL, { name: activeIndex });
      const getData = data.result.foodId;
      if (!getData) {
        setData([]);
      }
      setData(getData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handlerFood();
  });
  return (
    <Stack width={{ width: "1440px", margin: "auto" }}>
      <Box
        sx={{ display: "flex", gap: "26px", paddingX: "120px", margin: "auto" }}
      >
        {mockData.map((el, index) => {
          return (
            <Button
              sx={{
                width: "280px",
                border: "1px solid #D6D8DB",
                // color: "black",
                borderRadius: "6px",
              }}
              key={index}
              value={index}
              onClick={() => setActiveIndex(mockData[0 + index].name)}
              style={{
                backgroundColor: activeIndex === el.name ? "green" : "white",
                color: activeIndex === el.name ? "white" : "black",
              }}
            >
              {el.name}
            </Button>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          paddingX: "120px",
          margin: "86px 0 0 auto",
        }}
      >
        {data.map((el: any) => (
          <Box sx={{ display: "flex", flexDirection: "row" }} key={el._id}>
            <ImgCard
              img={el.image}
              name={el.foodname}
              price={el.price - (el.discount * el.price) / 100}
              discount={el.discount}
              count={(el.discount * el.price) / 100}
            />
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default Category;
