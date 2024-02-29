"use client";
import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import image from "../../../../public/img/Group 534.png";
import Bg from "../../../icon/Bg";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Order from "@/components/Order";
import InformationCard from "@/components/InformationCard";
const style = {
  position: "absolute",
};
const page = () => {
  localStorage.removeItem("sags");
  localStorage.removeItem("count");
  localStorage.removeItem("OrderFood");
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
      <Navbar name="Хэрэглэгч" />
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
        <Box sx={{ position: "absolute", top: "20%", left: "50%" }}>
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
      <Stack sx={{ width: "1200px", top: "10px", margin: "auto" }}>
        <Order />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default page;
