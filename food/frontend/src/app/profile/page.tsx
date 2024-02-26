"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import image from "../../../public/img/profile.jpeg";
import axios from "axios";
import {
  Edit,
  ForwardToInbox,
  LocalPhone,
  Logout,
  PermIdentitySharp,
} from "@mui/icons-material";
const BASE_URL = "http://localhost:8000/user/one";
type userInfoType = {
  name: string;
};
const style = {
  bgcolor: "#e6e6e6",
  width: "392px",
  display: "flex",
  padding: "5px 20px",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "6px",
};
const iconStyle = {
  width: "50px",
  height: "50px",
  p: "14px",
  bgcolor: "white",
  borderRadius: "50%",
};
const page = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>({});
  const email = JSON.parse(localStorage.getItem("email") as string);
  const handler = async () => {
    try {
      const user = await axios.post(BASE_URL, { email: email });
      const userInfo = user.data.user;
      setUserInfo(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handler();
  });
  return (
    <Stack sx={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <Navbar />
      <Box
        sx={{
          width: "432px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "50%",
            width: "120px",
            height: "120px",
          }}
        >
          <img
            src={image.src}
            width={"120px"}
            style={{
              borderRadius: "50%",
            }}
          />
        </Box>
        <Typography></Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box sx={style}>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <PermIdentitySharp sx={iconStyle} />
              <TextField
                required
                sx={{ borderBottom: "none", width: "280px" }}
                id="standard-required"
                label="Таны нэр"
                defaultValue="УгтахБаяр"
                variant="standard"
              />
            </Box>

            <Edit sx={{ color: "green" }} />
          </Box>
          <Box sx={style}>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <LocalPhone sx={iconStyle} />
              <TextField
                required
                sx={{ borderBottom: "none", width: "280px" }}
                id="standard-required"
                label="Таны нэр"
                defaultValue="УгтахБаяр"
                variant="standard"
              />
            </Box>

            <Edit sx={{ color: "green" }} />
          </Box>
          <Box sx={style}>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <ForwardToInbox sx={iconStyle} />
              <TextField
                required
                sx={{ borderBottom: "none", width: "280px" }}
                id="standard-required"
                label="Таны нэр"
                defaultValue="УгтахБаяр"
                variant="standard"
              />
            </Box>

            <Edit sx={{ color: "green" }} />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Logout sx={iconStyle} />
          <Typography sx={{}}>Гарах</Typography>
        </Box>
      </Box>
      <Footer />
    </Stack>
  );
};

export default page;
