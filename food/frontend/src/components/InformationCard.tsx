import { AccessTime, Book, TagFaces } from "@mui/icons-material";
import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

const InformationCard = () => {
  const mockData = [
    {
      icon: <Book />,
      name: "Хүргэлтийн төлөв хянах",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <AccessTime />,
      name: "Шуурхай хүргэлт",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <TagFaces />,
      name: "Эрүүл, баталгаат орц",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <Book />,
      name: "Хоолны өргөн сонголт",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <Stack sx={{ width: "1440px", margin: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: "120px",
        }}
      >
        {mockData.map((el) => {
          return (
            <Card
              sx={{
                p: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "264px",
              }}
            >
              <Box color={"#18BA51"} sx={{ marginTop: "10px" }}>
                {el.icon}
              </Box>
              <Box sx={{}}>
                <Typography
                  sx={{ color: "#000", fontWeight: "700", fontSize: "18px" }}
                >
                  {el.name}
                </Typography>
                <Typography color={"grey"} fontSize={"14px"}>
                  {el.desc}
                </Typography>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Stack>
  );
};
export default InformationCard;
