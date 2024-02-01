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
import LoginSection from "./LoginSection";
import { PermIdentitySharp, ShoppingBasketSharp } from "@mui/icons-material";
import SearchAppBar from "./Search";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [alignment, setAlignment] = React.useState("web");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  const style = {};
  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
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
              sx={{ display: "flex", gap: "20px" }}
              color="success"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton
                sx={{ border: "none", bgcolor: "white" }}
                value="web"
              >
                НҮҮР
              </ToggleButton>
              <ToggleButton sx={{ border: "none" }} value="android">
                ХООЛНЫ ЦЭС
              </ToggleButton>
              <ToggleButton sx={{ border: "none" }} value="ios">
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
              <Box sx={{ color: "black" }}>Сагс</Box>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                gap: "12px",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <PermIdentitySharp sx={{ color: "black" }} />
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
