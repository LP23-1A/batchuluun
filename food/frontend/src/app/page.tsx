"use client";
import * as React from "react";
import Error from "../components/Error";
import { Box, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import Category from "@/components/Category";
import image from "../../public/img/Group 534.png";
import Bg from "@/icon/Bg";
import InformationCard from "@/components/InformationCard";
import Footer from "@/components/Footer";

export default function BasicButtons() {
  return (
    <Stack>
      <Navbar />
      <Stack>
        <Bg />
        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            left: "14%",
            width: "384px",
            display: "flex",
            gap: "16px",
          }}
        >
          <Box>
            <Box fontSize={"55px"} color={"white"} lineHeight={"50px"}>
              Pinecone Food delivery
            </Box>
            <Box borderBottom={"1px solid white"}></Box>
            <Box color={"white"} fontSize={"22px"}>
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </Box>
          </Box>
        </Stack>
        <Box sx={{ position: "absolute", top: "30%", left: "50%" }}>
          <img src={image.src} width={"588px"} height={"438px"} alt="" />
        </Box>
      </Stack>

      <Stack
        sx={{
          marginTop: "122px",
        }}
      >
        <InformationCard />
      </Stack>

      <Footer />
    </Stack>
  );
}
