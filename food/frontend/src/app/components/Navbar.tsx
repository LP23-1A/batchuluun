import { Box, Stack } from "@mui/material";
import React from "react";

import SearchAppBar from "./Search";
import { PermIdentitySharp, ShoppingBasketSharp } from "@mui/icons-material";
import PineconeBlackLogo from "../icon/PineconeBlackLogo";

const Navbar = () => {
  return (
    <Stack
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <Stack
        sx={{
          display: "flex",
          width: "1440px",
          justifyContent: "space-between",
          paddingY: "20px",
          flexDirection: "row",
        }}
      >
        <Stack sx={{ display: "flex", gap: "24px", flexDirection: "row" }}>
          <PineconeBlackLogo />
          <Stack sx={{ display: "flex", gap: "20px", flexDirection: "row" }}>
            <Box color={"green"}>НҮҮР</Box>
            <Box>ХООЛНЫ ЦЭС</Box>
            <Box>ХҮРГЭЛТИЙН БҮС</Box>
          </Stack>
        </Stack>
        <Stack sx={{ display: "flex", gap: "24px", flexDirection: "row" }}>
          <SearchAppBar />
          <Stack
            sx={{
              display: "flex",
              gap: "12px",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ShoppingBasketSharp />
            <Box>Сагс</Box>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              gap: "12px",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <PermIdentitySharp />
            <Box>Нэвтрэх</Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
