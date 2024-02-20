import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import image from "../../../public/img/pizza.png";
const style = {
  position: "absolute" as "absolute",
  top: "16%",
  left: "70%",
  transform: "translate(-50%, -50%)",
  width: 586,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};
const textStyle = {
  fontSize: "18px",
  fontWeight: "600",
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
        Сагс
      </Typography>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", p: "0 10px" }}>
            <Button onClick={handleClose}>x</Button>
            <Typography sx={{ m: "auto", fontSize: "20px", fontWeight: "700" }}>
              Таны Сагс
            </Typography>
          </Box>
          <Box sx={{ borderBottom: "1px solid" }}></Box>
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img src={image.src} width={"245px"} height={"150px"} alt="" />
            <Box
              sx={{
                width: "245px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Typography sx={textStyle}>Main Pizza</Typography>
              <Typography sx={textStyle} color={"#18BA51"}>
                34,800
              </Typography>
              <Typography color={"#767676"}>
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
