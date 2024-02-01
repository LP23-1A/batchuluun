import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AccessTime, Book, Coffee, ImportContacts } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { mock } from "node:test";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const mockData = [
    {
      img: <ImportContacts />,
      name: "Хүргэлтийн төлөв хянах",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      img: <AccessTime />,
      name: "Хүргэлтийн төлөв хянах",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      img: <Coffee />,
      name: "Хүргэлтийн төлөв хянах",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      img: <ImportContacts />,
      name: "Хүргэлтийн төлөв хянах",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <Stack sx={{ width: "1200px" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {mockData.map((el: any, ind: Number) => (
          <Card sx={{ maxWidth: 275, boxShadow: "4" }}>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Box color={"green"}>{el.img}</Box>
              <Box>
                <Typography sx={{ color: "black", fontSize: "18px" }}>
                  {el.name}
                </Typography>
                <Typography sx={{ color: "greey", fontSize: "14px" }}>
                  {el.desc}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
