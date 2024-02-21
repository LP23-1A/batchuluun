import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicSelect from "./Select";
import { Card, Checkbox, TextField } from "@mui/material";

const steps = ["Select campaign settings", "Create an ad"];

export default function OrderStep() {
  const [activeStep, setActiveStep] = React.useState(0);

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
      <Stepper activeStep={activeStep}>
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
      </React.Fragment>
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
          <BasicSelect name={"hgf"} />
          <BasicSelect />
          <BasicSelect />
        </Box>
        <Box>
          <Typography>Нэмэлт мэдээлэл</Typography>
          <TextField
            id="filled-basic"
            label="Орц, давхар, орцны код ..."
            sx={{ width: "384px", bgcolor: "#ECEDF0", marginTop: "10px" }}
          />
        </Box>
        <Box>
          <Typography>Утасны дугаар*</Typography>
          <TextField
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
                sx={{ display: "flex", alignItems: "center", color: "#8B8E95" }}
              >
                Бэлнээр
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "11px" }}>
              <Checkbox {...label} defaultChecked color="default" />
              <Typography
                sx={{ display: "flex", alignItems: "center", color: "#8B8E95" }}
              >
                Картаар
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
