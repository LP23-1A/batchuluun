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
  const data = sags;
  console.log(data);
  let a = 0;
  let price;
  // // const handler = () => {
  // //   data.map((el: any) => {});
  // //   price = a;
  // // };
  // React.useEffect(() => {
  //   handler();
  // });
  console.log(price);

  // const price = data.price - (data.discount * data.price) / 100;
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
            <Box>
              {/* {data.length > 0 &&
                data.map((el: any) => {
                  return (
                    <Box
                      sx={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={el.image}
                        width={"245px"}
                        height={"150px"}
                        alt=""
                      />
                      <Box
                        sx={{
                          width: "245px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <Typography sx={textStyle}>{el.name}</Typography>
                        <Typography sx={textStyle} color={"#18BA51"}>
                          {el.price - (el.price * el.discount) / 100}
                        </Typography>
                        <Typography color={"#767676"}>
                          {el.ingeredient}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ borderBottom: "2px solid", marginTop: "20px" }}
                      ></Box>
                    </Box>
                  );
                })} */}
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography color={"#5E6166"} fontWeight={"400"}>
                Нийт төлөх дүн
              </Typography>
              <Box>
                {data.length > 0 &&
                  data.map((el: any) => {
                    a = a + (el.price - (el.price * el.discount) / 100);
                    return (
                      <Typography color={"#121316"} fontWeight={"700"}>
                        {a}
                      </Typography>
                    );
                  })}
              </Box>
            </Box>
            <Button color="success">Захиалах</Button>
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
}
