"use client";
import React, { useEffect, useState } from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Step2 from "@/components/Step2";
const BASE_URL = "http://localhost:8000/order";
const style = {
  fontSize: "20px",
  fontWeight: "400",
};
const history = (props: any) => {
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const [data, setData] = useState([]);
  const handler = async () => {
    try {
      const order = await axios.post(BASE_URL, { userId: userData.user_id });
      const allOrder = order.data.result;
      setData(allOrder);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handler();
  });
  console.log(data);

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
            <Box>
              {/* {data.length > 0 &&
            data.map((el: any) => {
              return <Step2 step={el.createdDate} />;
            })} */}
              <Step2 step="#23790" />
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
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Main pizza</Typography>
              <Typography>(1)</Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </Stack>
  );
};

export default history;
