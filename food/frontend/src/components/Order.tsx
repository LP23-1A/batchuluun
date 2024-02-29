import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import image from "../../../public/img/pizza.png";
import axios from "axios";
import ImgCard from "./Card";
import OrderModal from "./OrderModal";
import AllFood from "./AllFood";

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
const BASE_URL = "http://localhost:8000/food";

export default function Order() {
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [add, setAdd] = React.useState(4);
  const handler = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      const res = data.getAllFoods;
      // localStorage.setItem("food", JSON.stringify(res));
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handler();
  });
  const filterData = data.filter((el: any) => el.discount > 0);
  const AllData = data.filter((el: any) => el.discount === 0);

  const handleOpen = (id: any) => {
    data.find((el: any) => {
      if (el._id === id) {
        setOpen(true);
        localStorage.setItem("OrderFood", JSON.stringify([el]));
      }
    });
  };
  const addFood = () => {
    setAdd((add) => add + 4);
  };
  const handleClose = () => setOpen(false);
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "100px auto",
          gap: "50px",
        }}
      >
        <AllFood name="Хямдралтай" onclick={addFood} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {filterData.map((el: any) => (
          <Box
            onClick={() => handleOpen(el._id)}
            sx={{ display: "flex", flexDirection: "row" }}
            key={el._id}
          >
            <ImgCard
              img={el.image}
              name={el.foodname}
              price={el.price - (el.discount * el.price) / 100}
              discount={el.discount}
              count={(el.discount * el.price) / 100}
            />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "100px auto",
          gap: "50px",
        }}
      >
        <AllFood name="Үндсэн хоол" onclick={addFood} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {AllData.slice(0, add).map((el: any) => (
          <Box
            onClick={() => handleOpen(el._id)}
            sx={{ display: "flex", flexDirection: "row" }}
            key={el._id}
          >
            <ImgCard
              img={el.image}
              name={el.foodname}
              price={el.price - (el.discount * el.price) / 100}
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
        <OrderModal />
      </Modal>
    </Stack>
  );
}
