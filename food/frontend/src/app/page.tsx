"use client";
import * as React from "react";
import Error from "../components/Error";
import { Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import Category from "@/components/Category";

export default function BasicButtons() {
  return (
    <Stack>
      <Navbar />
      <Category />
    </Stack>
  );
}
