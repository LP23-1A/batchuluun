"use client";
import Navbar from "@/components/Navbar";
import { Box, Card, Pagination, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const BASE_URL = "http://localhost:8000/order";
const bigWidth = {
  width: "230px",
};
const smallWidth = {
  width: "140px",
};

const paage = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const handler = async () => {
    try {
      const getOrder: any = await axios.get(BASE_URL);
      const data = getOrder.data.getOneOrder;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  const create = () => {
    router.push("/createFoodAndCategory");
  };
  useEffect(() => {
    handler();
  }, []);
  return (
    <Stack>
      <Navbar />
      <Box
        sx={{
          width: "1160px",
          margin: "30px auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Box
          onClick={create}
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            p: "20px 20px",
            border: "1px, solid, black",
            bgcolor: "#18BA51",
            borderRadius: "10px",
            width: "300px",
            cursor: "pointer",
          }}
        >
          create food and category
        </Box>
        <Card sx={{ width: "1160px", margin: "auto", p: "20px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ fontSize: "20px", fontWeight: "700", p: "20px 20px" }}>
              Admin dashboard
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              paddingLeft: "20px",
              bgcolor: "#D6D8DB",
            }}
          >
            <Typography style={bigWidth}>Order name </Typography>
            <Typography style={smallWidth}>Buyer info </Typography>
            <Typography style={bigWidth}>Payment </Typography>
            <Typography style={bigWidth}>Address </Typography>
            <Typography style={smallWidth}>Delivery state</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              paddingLeft: "20px",
            }}
          >
            {data.map((el: any) => {
              return (
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box sx={{ display: "flex", gap: "10px" }} style={bigWidth}>
                    {el.foods.map((e: any) => {
                      return (
                        <img
                          src={e.image}
                          width={"40px"}
                          height={"40px"}
                          alt=""
                        />
                      );
                    })}

                    <Box>
                      <Typography>#23790</Typography>
                      <Typography>Boldoo</Typography>
                    </Box>
                  </Box>
                  <Box sx={smallWidth}>
                    <Typography>99119911</Typography>
                    <Typography>Boldoo</Typography>
                  </Box>
                  <Box style={bigWidth} sx={{ display: "flex", gap: "10px" }}>
                    <Box>
                      {el.foods.map((e: any) => {
                        return (
                          <Box>
                            <Typography>
                              {e.price - (e.price * e.discount) / 100}₮
                            </Typography>
                          </Box>
                        );
                      })}
                      <Typography>{el.createdDate.slice(0, 16)}</Typography>
                    </Box>
                    <Typography
                      sx={{
                        bgcolor: "#670E13",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        height: "30px",
                      }}
                    >
                      {el.payment}
                    </Typography>
                  </Box>

                  <Typography style={bigWidth}>
                    {el.district} <span>{el.khoroo}</span>
                    <br />
                    {el.apartment}
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: "yellow",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      height: "30px",
                    }}
                  >
                    {el.process}
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Pagination count={10}></Pagination>
          </Box>
        </Card>
      </Box>
    </Stack>
  );
};

export default paage;
