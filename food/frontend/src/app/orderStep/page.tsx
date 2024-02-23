"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import LoginSection from "../../components/LoginSection";
import Footer from "../../components/Footer";
import { Stack } from "@mui/material";
import OrderStep from "@/components/OrderStep";

const page = () => {
  return (
    <Stack sx={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <Navbar />
      {/* <Stack
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <LoginSection />
      </Stack> */}
      <OrderStep />
      <Footer />
    </Stack>
  );
};

export default page;
