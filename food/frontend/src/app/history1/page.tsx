"use client";
import React, { useEffect, useState } from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Step2 from "@/components/Step2";
const BASE_URL = "http://localhost:8000/order/allOrder";
const style = {
  fontSize: "20px",
  fontWeight: "400",
};
const history = (props: any) => {
  const userData = JSON.parse(localStorage.getItem("user1") as string);
  const allOrderPrice = JSON.parse(localStorage.getItem("count") as string);
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const handler = async () => {
    try {
      const order = await axios.post(BASE_URL, { userId: userData.user._id });
      const allOrder = order.data.getAllOrder;
      const name = order.data.getAllOrder[0].foods;
      setData(allOrder);
      if (allOrder) {
        allOrder.map((el: any) => {
          setName(el.foods);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handler();
  });
  console.log(data, name);

  return (
    <Stack>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          m: "auto",
          marginTop: "90px",
          gap: "100px",
        }}
      >
        <Card sx={{ width: "432px", height: "720px" }}>
          <Box
            sx={{
              p: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            <Typography style={style}>Захиалгын түүх</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {data &&
                data.map((el: any) => {
                  return (
                    <Step2
                      number={el._id.slice(0, 6)}
                      date={el.createdDate.slice(0, 10)}
                    />
                  );
                })}
            </Box>
          </Box>
        </Card>
        <Card sx={{ width: "432px", height: "720px" }}>
          <Box
            sx={{
              p: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            <Typography style={style}>Захиалгын дэлгэрэнгүй</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {name &&
                name.map((el: any) => {
                  return (
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>{el.foodname}</Typography>
                      <Typography>({allOrderPrice.count})</Typography>
                    </Box>
                  );
                })}
            </Box>
          </Box>
        </Card>
      </Box>
    </Stack>
  );
};

export default history;
