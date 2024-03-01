import { Stack } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../../../public/img/pizza.png";
import axios from "axios";
import { log } from "console";
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
const countStyle = {
  width: "30px",
  height: "30px",
  color: "white",
  background: "#18BA51 ! important",
};
const OrderModal = () => {
  const json: string | null = localStorage.getItem("OrderFood");
  const orderData = json && JSON.parse(json);
  const [data, setData] = useState(orderData);
  const [count, setCount] = React.useState(1);
  let totalPrice = 0;
  const countPlusHandler = () => {
    setCount(count + 1);
    data.forEach((element: any) => {
      totalPrice =
        totalPrice +
        (element.price - (element.price * element.discount) / 100) *
          (count + 1);
    });
    data.price = totalPrice;
  };
  console.log(data.price);

  const countIncrementHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const sagslah = () => {
    const storage = JSON.parse(localStorage.getItem("sags") as string);
    if (storage) {
      storage.push(...data);
      localStorage.setItem("sags", JSON.stringify(storage));
      return;
    }
    localStorage.setItem("sags", JSON.stringify([...data]));
  };

  return (
    <Stack>
      {data &&
        data.map((el: any) => {
          return (
            <Box sx={style}>
              <img src={el.image} width={"500px"} height={500} alt="" />
              <Box sx={{ display: "flex" }}>x</Box>
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
                    {el.name}
                  </Typography>
                  <Typography
                    fontSize={"18px"}
                    color={"#18BA51"}
                    fontWeight={"600"}
                  >
                    {el.discount > 0
                      ? el.price - (el.price * el.discount) / 100
                      : el.price}
                  </Typography>
                </Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                >
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
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "32px" }}
                >
                  <Typography sx={font}>Too</Typography>

                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button onClick={countIncrementHandler} sx={countStyle}>
                      -
                    </Button>
                    <Typography>{count}</Typography>
                    <Button onClick={countPlusHandler} sx={countStyle}>
                      +
                    </Button>
                  </Box>
                  <Button
                    sx={{
                      background: "#18BA51 ! important",
                      color: "white",
                      width: "400px",
                    }}
                    onClick={sagslah}
                  >
                    Сагслах
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
    </Stack>
  );
};

export default OrderModal;
