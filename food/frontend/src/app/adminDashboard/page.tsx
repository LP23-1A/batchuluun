"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImgCard from "../../components/Card";
import Navbar from "@/components/Navbar";
import CreateCategory from "@/components/CreateCategory";
import CreateFood from "@/components/CreateFood";
const BASE_URL = "http://localhost:8000/category/one";
const CATEGORY_URl = "http://localhost:8000/category";
type categoryType = {
  name: string;
};
const Category = () => {
  let filterCategory: any;
  const [data, setData] = useState([]);
  const [category, setCategory]: any = useState([]);
  const [activeIndex, setActiveIndex] = useState(filterCategory);
  const handlerCategory = async () => {
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
      const { data } = await axios.post(BASE_URL, {
        name: activeIndex,
      });
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
    handlerCategory();
    handlerFood();
  });
  console.log(filterCategory);

  return (
    <Stack width={{ width: "1440px", margin: "auto" }}>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          paddingX: "120px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <Typography
            sx={{ fontSize: "22px", fontWeight: "700", marginTop: "26px" }}
          >
            Food menu
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "26px",
            }}
          >
            {category.map((el: any, index: number) => {
              return (
                <Button
                  sx={{
                    width: "258px",
                    border: "1px solid #D6D8DB",
                    borderRadius: "6px",
                  }}
                  key={index}
                  value={index}
                  onClick={() =>
                    setActiveIndex(() => (filterCategory = el.name))
                  }
                  style={{
                    backgroundColor:
                      activeIndex === el.name ? "green" : "white",
                    color: activeIndex === el.name ? "white" : "black",
                  }}
                >
                  {el.name}
                </Button>
              );
            })}
            <CreateCategory />
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "#F7F7F8",
            padding: "40px 0px 0px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
              breackFast
            </Typography>
            <CreateFood />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
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
        </Box>
      </Box>
    </Stack>
  );
};

export default Category;
