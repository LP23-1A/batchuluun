"use client";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import { Category } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Stack sx={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <Navbar />
      <Category />
    </Stack>
  );
};

export default page;
