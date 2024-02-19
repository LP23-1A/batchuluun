import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "10%",
  left: "80%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export default function Sags() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Typography
        color={"black"}
        sx={{ cursor: "pointer" }}
        onClick={handleOpen}
      >
        Open modal
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", p: "0 10px" }}>
            <Typography>x</Typography>
            <Typography sx={{ m: "auto", fontSize: "20px", fontWeight: "700" }}>
              Таны Сагс
            </Typography>
          </Box>
          <Box sx={{ borderBottom: "1px solid" }}></Box>
        </Box>
      </Modal>
    </div>
  );
}
