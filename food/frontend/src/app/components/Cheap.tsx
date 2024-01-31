import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Stack } from "@mui/material";
import goodmorning from "../../../public/img/egg.png";
import ice from "../../../public/img/ice.png";
import breackfast from "../../../public/img/breackfast.png";
import food from "../../../public/img/food.png";

const mockData = [
  {
    img: goodmorning,
    name: "Өглөөний хоол",
    price: 4800,
  },
  {
    img: ice,
    name: "Зайрмаг",
    price: 14800,
  },
  {
    img: breackfast,
    name: "Өглөөний хоол",
    price: 248000,
  },
  {
    img: food,
    name: "Breakfast ",
    price: 3480,
  },
  {
    img: goodmorning,
    name: "Өглөөний хоол",
    price: 4800,
  },
];
export default function CardStep() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(4);
  const maxSteps = 5;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 1200, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
          overflow: "hidden",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {mockData.map((el: any, ind: Number) => (
            <Stack key={el + ind}>
              <Box>
                <img src={el.img.src} alt="" />
              </Box>
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontWeight: "600" }}
              >
                {el.name}
              </Typography>
              <Typography color={"#18BA51"}>
                {mockData[activeStep].price}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Paper>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 4}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      <Stack>
        <p>{mockData[activeStep].name}</p>
      </Stack>
    </Box>
  );
}
