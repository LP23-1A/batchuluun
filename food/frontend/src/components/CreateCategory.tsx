import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 587,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};
const BASE_URL = "http://localhost:8000/category";
export default function CreateCategory() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [categoryName, setCategoryName] = React.useState("");
  const handler = async () => {
    try {
      const category = await axios.post(BASE_URL, { name: categoryName });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack>
      <Button
        onClick={handleOpen}
        sx={{
          cursor: "pointer",
          padding: "4px 20px",
          textAlign: "center",
          border: "1px solid #5E6166",
          borderRadius: "4px",
          color: "#5E6166",
        }}
      >
        {" "}
        + Create new category
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", gap: "130px" }}>
            <Typography>x</Typography>
            <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
              Create new category
            </Typography>
          </Box>
          <Box sx={{ borderBottom: "1px solid grey" }}></Box>
          <Box>
            <Typography>Category name</Typography>
            <input
              type="text"
              placeholder="Category name"
              color="#8B8E95"
              width={587}
              onChange={(el) => setCategoryName(el.target.value)}
              style={{ backgroundColor: "#8B8E95", padding: "6px 20px" }}
            />
          </Box>
          <Box sx={{ borderBottom: "1px solid grey" }}></Box>
          <Button
            sx={{
              bgcolor: "black ! important",
              color: "white",
              display: "flex",
            }}
            onClick={handler}
          >
            Continue
          </Button>
        </Box>
      </Modal>
    </Stack>
  );
}
