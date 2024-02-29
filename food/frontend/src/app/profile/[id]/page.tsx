"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  Box,
  Button,
  Card,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import image from "../../../../public/img/profile.jpeg";
import {
  Edit,
  ForwardToInbox,
  LocalPhone,
  Logout,
  PermIdentitySharp,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
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
const styleModal = {
  position: "absolute" as "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 384,
  bgcolor: "background.paper",
  boxShadow: 24,
};

const iconStyle = {
  width: "50px",
  height: "50px",
  p: "14px",
  bgcolor: "white",
  borderRadius: "50%",
};
const styleButton = {
  fontSize: "20px",
  fontWeight: "600",
  width: "50%",
  textAlign: "center",
  padding: "15px 67px",
  cursor: "pointer",
};
const page = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userData = JSON.parse(localStorage.getItem("user1") as string);
  const userInfo = userData.user;
  const logOut = () => {
    router.push("/");
    localStorage.removeItem("userData");
  };
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
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            m: "auto",
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
        <Typography
          sx={{ fontSize: "28px", fontWeight: "700", textAlign: "center" }}
        >
          {userInfo.name}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box sx={style}>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <PermIdentitySharp sx={iconStyle} />
              <TextField
                required
                sx={{ borderBottom: "none", width: "280px" }}
                id="standard-required"
                label="Таны нэр"
                defaultValue={userInfo.name}
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
                label="Утасны дугаар"
                defaultValue={userInfo.phoneNumber}
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
                label="Имэйл хаяг"
                defaultValue={userInfo.email}
                variant="standard"
              />
            </Box>

            <Edit sx={{ color: "green" }} />
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", gap: "8px", alignItems: "center" }}
          onClick={handleOpen}
        >
          <Logout sx={iconStyle} />
          <Typography sx={{}}>Гарах</Typography>
        </Box>
        <Modal open={open}>
          <Card sx={styleModal}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                p: 4,
                textAlign: "center",
              }}
            >
              Та системээс гарахдаа итгэлтэй байна уу?
            </Typography>
            <Box sx={{ display: "flex", borderRadius: "6px" }}>
              <Box
                sx={styleButton}
                color={"grey"}
                bgcolor={"blue ! important"}
                onClick={logOut}
              >
                Тийм
              </Box>
              <Box
                sx={styleButton}
                color={"white"}
                bgcolor={"#18BA51 ! important"}
                onClick={handleClose}
              >
                Үгүй
              </Box>
            </Box>
          </Card>
        </Modal>
      </Box>
      <Footer />
    </Stack>
  );
};

export default page;
