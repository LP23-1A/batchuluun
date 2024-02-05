"use client";
import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import BigImage from "../../../../public/img/img1.png";
import SmallImage from "../../../../public/img/img2.png";
import Bg from "../../icon/Bg";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/Footer";
import AllFood from "@/app/components/AllFood";
import ImgCard from "@/app/components/Card";
import Cards from "@/app/components/Cards";
import Menu1 from "@/app/components/Menu";
const page = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   const rawJson: string | null = localStorage.getItem("user");
  //   const user = rawJson && JSON.parse(rawJson);

  //   if (!user) {
  //     router.push("/login");
  //     return;
  //   }

  //   const { _id, email, password } = user;

  //   if (!_id || !email || !password) {
  //     router.push("/login");
  //     return;
  //   }
  // }, []);
  return (
    <Stack>
      <Navbar />
      <Stack>
        <Bg />
        <Stack
          sx={{
            position: "absolute",
            top: "30%",
            left: "22%",
            width: "384px",
            display: "flex",
            gap: "16px",
          }}
        >
          <Box fontSize={"55px"} color={"white"} lineHeight={"50px"}>
            Pinecone Food delivery
          </Box>
          <Box borderBottom={"1px solid white"}></Box>
          <Box color={"white"} fontSize={"22px"}>
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Stack>
        <Box sx={{ position: "absolute", top: "23%", left: "50%" }}>
          <img width={"443px"} height={"438px"} src={BigImage.src} alt="" />
        </Box>
        <Box sx={{ position: "absolute", top: "38%", left: "60%" }}>
          <img width={"313px"} height={"313px"} src={SmallImage.src} alt="" />
        </Box>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "122px",
        }}
      ></Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "100px auto",
          gap: "50px",
        }}
      >
        <AllFood name="Хямдралтай" />
      </Stack>
      <Stack sx={{ width: "1200px", margin: "auto" }}>
        <Cards />
      </Stack>
      <Menu1 />
      <Footer />
    </Stack>
  );
};

export default page;
