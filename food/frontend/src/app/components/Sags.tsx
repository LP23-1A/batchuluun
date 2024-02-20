import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import image from "../../../public/img/pizza.png";
import { Stack } from "@mui/material";
const style = {
  position: "absolute" as "absolute",
  top: "",
  left: "60%",
  // transform: "translate(-50%, -50%)",
  width: 586,

  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "space-between",
};
const textStyle = {
  fontSize: "18px",
  fontWeight: "600",
};
export default function Sags() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const json: string | null = localStorage.getItem("sags");
  const sags = json && JSON.parse(json);
  const data = sags.data;
  const price = data.price - (data.discount * data.price) / 100;
  return (
    <Stack>
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
          <Box>
            <Box sx={{ display: "flex", p: "0 10px" }}>
              <Button onClick={handleClose}>x</Button>
              <Typography
                sx={{ m: "auto", fontSize: "20px", fontWeight: "700" }}
              >
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
              <img src={data.image} width={"245px"} height={"150px"} alt="" />
              <Box
                sx={{
                  width: "245px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <Typography sx={textStyle}>{data.name}</Typography>
                <Typography sx={textStyle} color={"#18BA51"}>
                  {price}
                </Typography>
                <Typography color={"#767676"}>{data.ingeredient}</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography color={"#5E6166"} fontWeight={"400"}>
                Нийт төлөх дүн
              </Typography>
              <Typography color={"#121316"} fontWeight={"700"}>
                {price}
              </Typography>
            </Box>
            <Button color="success">Захиалах</Button>
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
}
