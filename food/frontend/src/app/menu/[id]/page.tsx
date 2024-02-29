"use client";
import React from "react";
import Navbar from "../../../components/Navbar";
import LoginSection from "../../../components/LoginSection";
import Footer from "../../../components/Footer";
import { Stack } from "@mui/material";
import Category from "@/components/Category";

const page = () => {
  return (
    <Stack sx={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <Navbar />
      <Stack
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Category />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default page;
