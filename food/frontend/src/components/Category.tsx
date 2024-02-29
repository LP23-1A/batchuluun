import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImgCard from "./Card";
import { useRouter } from "next/navigation";
import useSWR from "swr";
const BASE_URL = "http://localhost:8000/category/one";
const CATEGORY_URl = "http://localhost:8000/category";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Category = () => {
  let filterData = "Soup";
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [activeIndex, setActiveIndex] = useState(filterData);
  const handlerCategory = async () => {
    handlerFood();
    try {
      const getAllCategory = await axios.get(CATEGORY_URl);
      const category = getAllCategory.data.getAllCategory;
      setCategory(category);
    } catch (error) {
      console.log(error);
    }
  };
  const handlerFood = async () => {
    try {
      const { data } = await axios.post(BASE_URL, { name: activeIndex });
      const getData = data.result.foodId;
      if (!getData) {
        data;
      }
      setData(getData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlerCategory();
  });

  return (
    <Stack width={{ width: "1440px", margin: "auto" }}>
      <Box
        sx={{ display: "flex", gap: "26px", paddingX: "120px", margin: "auto" }}
      >
        {category.map((el: any, index: number) => {
          return (
            <Button
              sx={{
                width: "280px",
                border: "1px solid #D6D8DB",
                borderRadius: "6px",
              }}
              key={index}
              value={index}
              onClick={() => setActiveIndex(() => (filterData = el.name))}
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
