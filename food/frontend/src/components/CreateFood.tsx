import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Select, Stack } from "@mui/material";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 587,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};
const inputStyle = {
  backgroundColor: "#F4F4F4",
  padding: "10px 20px",
  width: "527px",
  borderRadius: "6px",
  color: "#8B8E95",
};
const BASE_URL = "http://localhost:8000/category";
const FOOD_BASE_URL = "http://localhost:8000/food";
export default function CreateFood() {
  const [data, setData] = React.useState({
    foodname: "",
    imageUrl: "",
    ingeredient: "",
    price: "",
    discount: "",
    name: "",
  });
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getCategory = async () => {
    try {
      const category: any = await axios.get(BASE_URL);
      const Allcategory = category.data.getAllCategory;

      setCategory(Allcategory);
    } catch (error) {
      console.log(error);
    }
  };
  const createFood = async () => {
    try {
      const createFood = await axios.post(FOOD_BASE_URL, {
        foodname: data.foodname,
        image: data.imageUrl,
        ingeredient: data.ingeredient,
        price: data.price,
        discount: data.discount,
        name: data.name,
      });
      handleClose();
      console.log("create food");
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getCategory();
  });

  return (
    <Stack>
      <Button
        onClick={handleOpen}
        sx={{ bgcolor: "#18BA51 ! important", color: "white" }}
      >
        Add new food
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", gap: "130px" }}>
            <Typography>x</Typography>
            <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
              Create new category
            </Typography>
          </Box>
          <Box sx={{ borderBottom: "1px solid grey" }}></Box>
          <Box>
            <Typography>Хоолны нэр</Typography>
            <input
              type="text"
              placeholder="Хоолны нэр"
              color="#8B8E95"
              width={587}
              onChange={(el) =>
                setData((prev) => ({ ...prev, foodname: el.target.value }))
              }
              style={inputStyle}
            />
          </Box>
          <Box>
            <Typography>Хоолны ангилал</Typography>
            <select
              style={{
                backgroundColor: "#f4f4f4",
                width: "527px",
                borderRadius: "6px",
                color: "#8B8E95",
                padding: "10px 20px",
              }}
              onChange={(el: any) =>
                setData((prev: any) => ({
                  ...prev,
                  name: el.target.value,
                }))
              }
            >
              <option value="">Хоолны ангилал</option>
              {category.map((el: any) => {
                return <option value="">{el.name}</option>;
              })}
            </select>
          </Box>
          <Box>
            <Typography>Хоолны орц</Typography>
            <input
              type="text"
              placeholder="Хоолны орц"
              color="#8B8E95"
              width={587}
              onChange={(el) =>
                setData((prev) => ({ ...prev, ingeredient: el.target.value }))
              }
              style={inputStyle}
            />
          </Box>
          <Box>
            <Typography>Хоолны үнэ</Typography>
            <input
              type="text"
              placeholder="Хоолны үнэ"
              color="#8B8E95"
              width={587}
              onChange={(el) =>
                setData((prev) => ({ ...prev, price: el.target.value }))
              }
              style={inputStyle}
            />
          </Box>

          <Box>
            <Typography>Хямдралтай эсэх</Typography>
            <input
              type="text"
              placeholder="Хямдралтай эсэх"
              color="#8B8E95"
              width={587}
              onChange={(el) =>
                setData((prev) => ({ ...prev, discount: el.target.value }))
              }
              style={inputStyle}
            />
          </Box>
          <Box>
            <Typography>Хоолны зураг</Typography>
            <input
              type="text"
              placeholder="Хоолны зурагны URL"
              color="#8B8E95"
              width={587}
              onChange={(el) =>
                setData((prev) => ({ ...prev, imageUrl: el.target.value }))
              }
              style={inputStyle}
            />
          </Box>
          <Box sx={{ borderBottom: "1px solid grey" }}></Box>
          <Button
            sx={{
              bgcolor: "black ! important",
              color: "white",
              display: "flex",
            }}
            onClick={createFood}
          >
            Continue
          </Button>
        </Box>
      </Modal>
    </Stack>
  );
}
