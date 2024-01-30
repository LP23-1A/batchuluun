import { Box, Stack } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";
import BigImage from "../../../public/img/image 13.png";
import SmallImage from "../../../public/img/image 14.png";
import Bg from "../../icon/Bg";
const page = () => {
  return (
    <Stack>
      <Navbar />

      <Bg />
      <Stack
        position={"absolute"}
        top={"300px"}
        left={"200px"}
        width={"384px"}
        display={"flex"}
        gap={"16px"}
      >
        <Box fontSize={"55px"} color={"white"} lineHeight={"50px"}>
          Pinecone Food delivery
        </Box>
        <Box borderBottom={"1px solid white"}></Box>
        <Box color={"white"} fontSize={"22px"}>
          Horem ipsum dolor sit amet, consectetur adipiscing elit.
        </Box>
      </Stack>
      <Box position={"absolute"} top={"300px"} left={"700px"}>
        <img width={"443px"} height={"438px"} src={BigImage.src} alt="" />
      </Box>
      <Box position={"absolute"} top={"450px"} left={"900px"}>
        <img width={"313px"} height={"313px"} src={SmallImage.src} alt="" />
      </Box>
    </Stack>
  );
};

export default page;
