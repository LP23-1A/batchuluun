import React from "react";
import Logo from "../icon/PineconeBlackLogo";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import PineconeWhiteLogo from "../icon/PineconeWhiteLogo";

const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: "1440px",
          paddingY: "114px",
          display: "flex",
          gap: "40px",
          flexDirection: "column",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            fontSize: "20px",
            flexDirection: "row",
          }}
        >
          <PineconeWhiteLogo />
          <Box color={"white"}>Food Delivery</Box>
        </Stack>
        <Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
              flexDirection: "row",
            }}
          >
            <p>Нүүр</p>
            <p>Холбоо барих</p>
            <p>Хоолны цэс</p>
            <p>Үйлчилгээний нөхцөл</p>
            <p>Хүргэлтийн бүс</p>
            <p>Нууцлалын бодлого</p>
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexDirection: "row",
          }}
        >
          <Facebook sx={{ width: "40px", height: "46px", color: "white" }} />
          <Instagram sx={{ width: "40px", height: "46px", color: "white" }} />
          <Twitter sx={{ width: "40px", height: "46px", color: "white" }} />
        </Stack>
        <Box borderBottom={"1px solid white"}></Box>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
          }}
        >
          <Box>© 2024 Pinecone Foods LLC </Box>
          <Box>Зохиогчийн эрх хуулиар хамгаалагдсан.</Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
