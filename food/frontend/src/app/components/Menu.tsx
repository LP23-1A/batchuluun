import { Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
const Base_Url = "http://localhost:8000/category";
const Menu1 = () => {
  const getCategory = async (e: any) => {
    try {
      const data = await axios.get(Base_Url);
      console.log("ok");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory;
  });

  return <Stack></Stack>;
};

export default Menu1;
