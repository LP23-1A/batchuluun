import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import image from "../../../public/img/pizza.png";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
const style = {
  position: "absolute" as "absolute",
  top: "",
  left: "50%",
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
const countStyle = {
  width: "30px",
  height: "30px",
  color: "white",
  background: "#18BA51 ! important",
};
export default function Sags() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState(1);
  let totalPrice = 0;
  const countPlusHandler = () => {
    setCount(count + 1);
  };
  const countIncrementHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleOpen = () => {
    if (!localStorage.getItem("sags")) {
      data;
    } else {
      const json: string | null = localStorage.getItem("sags");
      const sags = json && JSON.parse(json);
      setData(sags);
    }
    setOpen(true);
  };
  let filterPrice = 0;
  const price = data.filter((el: any) => {
    filterPrice =
      filterPrice + (el.price - (el.price * el.discount) / 100) * count;
  });

  const handleClose = () => setOpen(false);
  const Order = () => {
    localStorage.removeItem("OrderFood" && "food");
    localStorage.setItem("count", JSON.stringify({ count, filterPrice }));
    handleClose();
    router.push("/orderStep");
  };
  const deleteOrder = (id: any) => {
    data.find((el: any) => {
      if (el._id === id) {
        localStorage.removeItem("sags");
      }
    });
  };
  console.log(data);

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
              {data.length > 0 &&
                data.map((el: any) => {
                  return (
                    <Box>
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
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                              }}
                            >
                              <Typography sx={textStyle}>{el.name}</Typography>
                              <Typography sx={textStyle} color={"#18BA51"}>
                                {el.price - (el.price * el.discount) / 100}₮
                              </Typography>
                            </Box>
                            <Box
                              onClick={() => deleteOrder(el._id)}
                              sx={{ fontSize: "20px", cursor: "pointer" }}
                            >
                              x
                            </Box>
                          </Box>

                          <Typography color={"#767676"}>
                            {el.ingeredient}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Button
                              onClick={countIncrementHandler}
                              sx={countStyle}
                            >
                              -
                            </Button>
                            <Typography>{count}</Typography>
                            <Button onClick={countPlusHandler} sx={countStyle}>
                              +
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          borderBottom: "1px solid #D6D8DB",
                          marginTop: "20px",
                        }}
                      ></Box>
                    </Box>
                  );
                })}
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography color={"#5E6166"} fontWeight={"400"}>
                Нийт төлөх дүн
              </Typography>
              <Box>
                <Typography color={"#121316"} fontWeight={"700"}>
                  {filterPrice}₮
                </Typography>
              </Box>
            </Box>
            <Button
              sx={{ bgcolor: "#18BA51 ! important", color: "white" }}
              onClick={Order}
            >
              Захиалах
            </Button>
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
}
