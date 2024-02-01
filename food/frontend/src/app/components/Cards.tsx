import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import goodmorning from "../../../public/img/egg.png";
import ice from "../../../public/img/ice.png";
import breackfast from "../../../public/img/breackfast.png";
import food from "../../../public/img/food.png";
import Star from "../icon/Star";
import { Stack, Typography } from "@mui/material";
const mockData = [
  {
    img: goodmorning,
    name: "Өглөөний хоол",
    price: "14,800₮",
  },
  {
    img: ice,
    name: "Зайрмаг",
    price: "14,800₮",
  },
  {
    img: breackfast,
    name: "Өглөөний хоол",
    price: "14,800₮",
  },
  {
    img: food,
    name: "Breakfast ",
    price: "14,800₮",
  },
  {
    img: goodmorning,
    name: "Өглөөний хоол",
    price: "14,800₮",
  },
];

function FoodCards(props: any) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = mockData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1200, flexGrow: 1 }}>
      <MobileStepper
        steps={0}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} color="success">
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button sx={{ color: "Black", fontWeight: "700px", gap: "10px" }}>
            <Star />
            <Typography>{props.name}</Typography>
          </Button>
        }
      />
      <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        {mockData.map((el, index) => (
          <div key={index + el.name}>
            {Math.abs(activeStep - index) <= 3 ? (
              <Stack>
                <Box
                  component="img"
                  sx={{
                    height: 186,
                    display: "block",
                    maxWidth: 282,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={el.img.src}
                />
                <Typography pl={"10px"} fontSize={"18px"}>
                  {el.name}
                </Typography>

                <Typography color={"#18BA51"} pl={"10px"} fontSize={"18px"}>
                  {el.price}
                </Typography>
              </Stack>
            ) : null}
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default FoodCards;
