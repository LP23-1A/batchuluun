import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack, styled } from "@mui/material";
import image from "../../../public/img/pizza.png";
import axios from "axios";
import ImgCard from "./Card";
import { json } from "stream/consumers";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  width: "981px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  borderRadius: "20px",
};
const borderS = {
  bgColor: "#18BA51",
};
const font = {
  fontSize: "18px",
  fontWeight: "600",
};
const BASE_URL = "http://localhost:8000/category/one";

export default function Order() {
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(1);
  const handler = async () => {
    try {
      const { data } = await axios.post(BASE_URL, { name: "Soup" });
      const res = data.result.foodId;
      // const id = data.result.foodId._id;
      localStorage.setItem("food", JSON.stringify(res));
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    handler();
  });

  const handleOpen = () => {
    setOpen(true);
    console.log(data);
  };
  const handleClose = () => setOpen(false);
  const countPlusHandler = () => {
    setCount(count + 1);
  };
  const countIncrementHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {data.map((el: any) => (
          <Box
            onClick={handleOpen}
            sx={{ display: "flex", flexDirection: "row" }}
            key={el.id}
          >
            <ImgCard
              img={el.image}
              name={el.name}
              price={el.price}
              discount={el.discount}
              count={(el.discount * el.price) / 100}
            />
          </Box>
        ))}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={image.src} width={"500px"} height={"500px"} alt="" />
          <Box
            sx={{
              padding: "83px 20px 83px 0",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
                Main Pizza
              </Typography>
              <Typography
                fontSize={"18px"}
                color={"#18BA51"}
                fontWeight={"600"}
              >
                34,800
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Typography sx={font}>Орц</Typography>
              <Typography
                sx={{
                  bgcolor: "#F6F6F6",
                  color: "#767676",
                  borderRadius: "10px",
                  padding: "6px 10px",
                }}
              >
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
              </Typography>
            </Box>
            <Box>
              <Typography sx={font}>Too</Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  onClick={countIncrementHandler}
                  variant="text"
                  color="success"
                >
                  -
                </Button>
                <Typography>{count}</Typography>
                <Button
                  onClick={countPlusHandler}
                  sx={{ width: "30px", height: "30px", background: "green" }}
                >
                  +
                </Button>
              </Box>
              <Button>Сагслах</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
}
