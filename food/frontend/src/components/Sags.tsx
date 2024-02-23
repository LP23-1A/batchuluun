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
  left: "60%",
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
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);

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
    filterPrice = filterPrice + (el.price - (el.price * el.discount) / 100);
  });
  console.log(filterPrice);

  const handleClose = () => setOpen(false);
  const Order = () => {
    localStorage.removeItem("OrderFood" && "food");
    handleClose();
    router.push("/orderStep");
  };

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
                          <Typography sx={textStyle}>{el.name}</Typography>
                          <Typography sx={textStyle} color={"#18BA51"}>
                            {el.price - (el.price * el.discount) / 100}₮
                          </Typography>
                          <Typography color={"#767676"}>
                            {el.ingeredient}
                          </Typography>
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
              sx={{ bgcolor: "#18BA51" }}
              variant="contained"
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
