"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Stack } from "@mui/material";
import SignUp from "../components/SignUp";

const page = () => {
  return (
    <Stack sx={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <Navbar />
      <SignUp />
      <Footer />
    </Stack>
  );
};

export default page;
