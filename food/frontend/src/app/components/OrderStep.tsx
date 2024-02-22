import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicSelect from "./Select";
import { Card, Checkbox, TextField } from "@mui/material";
import axios from "axios";

const steps = ["Select campaign settings", "Create an ad"];
const textStyle = {
  fontSize: "18px",
  fontWeight: "600",
};
const API = "http://localhost:8000/order";
export default function OrderStep() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [information, setInformation] = React.useState("");
  const json: string | null = localStorage.getItem("sags");
  const orderData = json && JSON.parse(json);
  console.log(orderData);

  const createOrder = async (e: string | any) => {
    e.preventDefault();
    try {
      const create = axios.post(API, { foods: "nar" });
      console.log("ok");
    } catch (error) {
      console.log(error);
    }
  };
  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box
      sx={{
        width: "1440px",
        m: "auto",
        bgcolor: "background.paper",
        boxShadow: 40,
      }}
    >
      {/* <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography>Optional</Typography>;
          }
          return (
            <Step key={label} sx={{ bgcolor: "white" }}>
              <Box>
                <StepLabel>{label}</StepLabel>
              </Box>
            </Step>
          );
        })}
      </Stepper>

      <React.Fragment>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </React.Fragment> */}
      <Box sx={{ display: "flex", gap: "30px", justifyContent: "center" }}>
        <Card
          sx={{
            width: "432px",
            p: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Typography>Хаяг аа оруулна уу</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <BasicSelect />
          </Box>
          <Box>
            <Typography>Нэмэлт мэдээлэл</Typography>
            <TextField
              value={information}
              onChange={(el) => setInformation(el.target.value)}
              id="filled-basic"
              label="Орц, давхар, орцны код ..."
              sx={{ width: "384px", bgcolor: "#ECEDF0", marginTop: "10px" }}
            />
          </Box>
          <Box>
            <Typography>Утасны дугаар*</Typography>
            <TextField
              value={phoneNumber}
              onChange={(el) => setPhoneNumber(el.target.value)}
              id="filled-basic"
              label="Утасны дугаараа оруулна уу"
              sx={{ width: "384px", bgcolor: "#ECEDF0", marginTop: "10px" }}
            />
          </Box>
          <Box>
            <Typography>Төлбөр төлөх</Typography>
            <Box sx={{ display: "flex", gap: "100px" }}>
              <Box sx={{ display: "flex", gap: "11px" }}>
                <Checkbox {...label} defaultChecked color="default" />
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#8B8E95",
                  }}
                >
                  Бэлнээр
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "11px" }}>
                <Checkbox {...label} defaultChecked color="default" />
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#8B8E95",
                  }}
                >
                  Картаар
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
        <Card sx={{ width: "432px" }}>
          <Box sx={{ borderTop: "1px solid #D6D8DB", margin: "20px" }}>
            {orderData.length > 0 &&
              orderData.map((el: any) => {
                return (
                  <Box>
                    <Box sx={{ display: "flex", gap: "16px", p: "16px 24px" }}>
                      <img src={el.image} width={184} height={121} alt="" />
                      <Box>
                        <Typography sx={textStyle}>{el.name}</Typography>
                        <Typography sx={textStyle} color={"#18BA51"}>
                          {el.price - (el.price * el.discount) / 100}₮
                        </Typography>
                        <Typography color={"#767676"} fontWeight={400}>
                          {el.ingeredient}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        borderBottom: "1px solid #D6D8DB",
                        paddingX: "24px",
                      }}
                    ></Box>
                  </Box>
                );
              })}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 24px",
            }}
          >
            <Box>
              <Typography color={"#5E6166"} fontWeight={"400"}>
                Нийт төлөх дүн
              </Typography>
            </Box>
            <Button
              sx={{ bgcolor: "#EEEFF2", color: "#1C2024" }}
              variant="contained"
              onClick={createOrder}
            >
              Захиалах
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
