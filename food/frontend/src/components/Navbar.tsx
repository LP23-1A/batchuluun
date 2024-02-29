"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import PineconeBlackLogo from "../icon/PineconeBlackLogo";
import {
  Button,
  Modal,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { PermIdentitySharp, ShoppingBasketSharp } from "@mui/icons-material";
import LoginSection from "./LoginSection";
import SearchAppBar from "./Search";
import Sags from "./Sags";
import { useRouter } from "next/navigation";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar(props: any) {
  const [alignment, setAlignment] = React.useState("НҮҮР");
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  const userData = JSON.parse(localStorage.getItem("user1") as string);

  const menuHandler = () => {
    router.push(`/menu/${userData.user.email}`);
  };
  const profileHanddler = () => {
    router.push(`/profile/${userData.user.email}`);
  };
  const home = () => {
    router.push(`/dashboard/${userData.user.email}`);
  };
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        boxShadow: "0",
        width: "1440px",
        m: "auto",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              border: "1px solid white",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <PineconeBlackLogo />

            <ToggleButtonGroup
              color="success"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              sx={{ bgcolor: "none" }}
            >
              <ToggleButton
                sx={{
                  border: "none",
                }}
                value={"НҮҮР"}
                onClick={home}
              >
                НҮҮР
              </ToggleButton>
              <ToggleButton
                sx={{
                  border: "none",
                }}
                onClick={menuHandler}
                value="ХООЛНЫ ЦЭС"
              >
                ХООЛНЫ ЦЭС
              </ToggleButton>
              <ToggleButton
                sx={{
                  border: "none",
                }}
                value="ХҮРГЭЛТИЙН БҮС"
              >
                ХҮРГЭЛТИЙН БҮС
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
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
              <ShoppingBasketSharp sx={{ color: "black" }} />
              <Sags />
            </Stack>
            <Stack
              sx={{
                display: "flex",
                gap: "8px",
                flexDirection: "row",
                alignItems: "center",
                color: "green",
              }}
            >
              {userData ? (
                <Box>
                  <PermIdentitySharp sx={{ color: "green" }} />

                  <Button sx={{ color: "green" }} onClick={profileHanddler}>
                    Хэрэглэгч
                  </Button>
                </Box>
              ) : (
                <Box>
                  <PermIdentitySharp sx={{ color: "black" }} />

                  <Button sx={{ color: "black" }} onClick={handleOpen}>
                    Нэвтрэх
                  </Button>
                </Box>
              )}

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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
