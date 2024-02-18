import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import image from "../../../public/img/egg.png";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: "fit",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "row",
  gap: "20px",
};
const borderS = {
  bgColor: "#18BA51",
};
const font = {
  fontSize: "18px",
};

export default function Order() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={image.src} alt="" />
          <Box>
            <Box>
              <Typography sx={{ fontSize: "28px", fontWeight: "33px" }}>
                Main Pizza
              </Typography>
              <Typography fontSize={"18px"} color={"#18BA51"}>
                34,800
              </Typography>
            </Box>
            <Box>
              <Typography sx={font}>Орц</Typography>
              <Typography>toms, luuvan, manjin, songino</Typography>
            </Box>
            <Typography sx={font}>Too</Typography>
            <Box>
              <Button variant="text" color="success">
                -
              </Button>
              <Button>+</Button>
            </Box>
            <Button>Сагслах</Button>
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
}
