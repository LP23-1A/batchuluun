"use client";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React from "react";

import SearchAppBar from "./Search";
import { PermIdentitySharp, ShoppingBasketSharp } from "@mui/icons-material";
import PineconeBlackLogo from "../icon/PineconeBlackLogo";
import LoginSection from "./LoginSection";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Stack
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <Stack
        sx={{
          display: "flex",
          width: "1440px",
          paddingX: "120px",
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
            <Button sx={{ color: "black" }} onClick={handleOpen}>
              Нэвтрэх
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Stack
                sx={{
                  position: "absolute" as "absolute",
                  top: "43%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 448,
                  bgcolor: "background.paper",
                  borderRadius: "12px",
                  boxShadow: 24,
                }}
              >
                <LoginSection />
              </Stack>
            </Modal>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
