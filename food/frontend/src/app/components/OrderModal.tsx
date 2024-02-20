import { Stack } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../../../public/img/pizza.png";
import axios from "axios";
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
const OrderModal = (props: any) => {
  const BASE_URL = "http://localhost:8000/category/one";
  const [data, setData] = useState([]);
  const handler = async () => {
    try {
      const { data } = await axios.post(BASE_URL, { name: "Soup" });
      const res = data.result.foodId;
      localStorage.setItem("food", JSON.stringify(res));
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    handler();
  });
  const [count, setCount] = React.useState(1);
  const countPlusHandler = () => {
    setCount(count + 1);
  };
  const countIncrementHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  //   const id = JSON.parse(localStorage.getItem("orderId"));
  //   const orderId = data._id;
  //   console.log(orderId);

  return (
    <Stack>
      <Box sx={style}>
        <img src={props.image} width={"500px"} height={"500px"} alt="" />
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
            <Typography fontSize={"18px"} color={"#18BA51"} fontWeight={"600"}>
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
    </Stack>
  );
};

export default OrderModal;
