import { Box, Button, Stack, ToggleButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu1 = () => {
  const data = [
    {
      name: "BreakFast",
    },
    {
      name: "Soup",
    },
    {
      name: "Main Course",
    },
    {
      name: "Dessert",
    },
  ];
  const [active, setActive] = useState(0);
  const toggle = () => {
    setActive(1);
  };
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <Stack
      style={{ backgroundColor: active ? "green" : "white" }}
      onClick={toggle}
    >
      {/* {data.map((el, ind) => (
        <Box key={el.name + ind}>
          <Button
            style={{ backgroundColor: active ? "green" : "white" }}
            onClick={toggle}
          >
            {el.name}
          </Button>
        </Box>
      ))} */}
      <Button>name</Button>
      <Button>name</Button>
    </Stack>
  );
};

export default Menu1;
