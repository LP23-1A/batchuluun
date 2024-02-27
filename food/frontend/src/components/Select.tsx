import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Stack } from "@mui/material";
import { OrderContext } from "./OrderStep";

export default function BasicSelect(): React.ReactNode {
  const { data, setData }: any = React.useContext(OrderContext);

  const District = [
    {
      name: "Баянзүрх дүүрэг",
    },
    {
      name: "Хан-Уул дүүрэг",
    },
    {
      name: "Баянгол дүүрэг",
    },
    {
      name: "Сонгинохайрхан дүүрэг",
    },
    {
      name: "Чингэлтэй дүүрэг",
    },
  ];
  const Khoroo = [
    {
      name: "1-р хороо",
    },
    {
      name: "2-р хороо",
    },
    {
      name: "3-р хороо",
    },
    {
      name: "4-р хороо",
    },
    {
      name: "5-р хороо",
    },
    {
      name: "6-р хороо",
    },
    {
      name: "7-р хороо",
    },
  ];
  const Apartment = [
    {
      name: "Нархан хотхон",
    },
    {
      name: "26-р байр",
    },
    {
      name: "Хоймор хотхон",
    },
    {
      name: "45-р байр",
    },
    {
      name: "Зайсан хотхон",
    },
  ];

  return (
    <Stack sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Box sx={{ minWidth: 120, bgcolor: "#ECEDF0" }}>
        <FormControl sx={{ width: "384px" }}>
          <InputLabel id="demo-simple-select-label">
            Дүүрэг сонгоно уу
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Дүүрэг сонгоно уу"
            onChange={(el) =>
              setData((prev: {}) => ({ ...prev, district: el.target.value }))
            }
          >
            {District.length > 0 &&
              District.map((el) => {
                return <MenuItem value={el.name}>{el.name}</MenuItem>;
              })}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, bgcolor: "#ECEDF0" }}>
        <FormControl sx={{ width: "384px" }}>
          <InputLabel id="demo-simple-select-label">
            Хороо сонгоно уу
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Хороо сонгоно уу"
            onChange={(el) =>
              setData((prev: {}) => ({ ...prev, khoroo: el.target.value }))
            }
          >
            {Khoroo.length > 0 &&
              Khoroo.map((el) => {
                return <MenuItem value={el.name}>{el.name}</MenuItem>;
              })}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, bgcolor: "#ECEDF0" }}>
        <FormControl sx={{ width: "384px" }}>
          <InputLabel id="demo-simple-select-label">
            Байр, гудамж сонгоно уу
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Байр, гудамж сонгоно уу"
            onChange={(el) =>
              setData((prev: {}) => ({
                ...prev,
                apartment: el.target.value,
              }))
            }
          >
            {Apartment.length > 0 &&
              Apartment.map((el) => {
                return <MenuItem value={el.name}>{el.name}</MenuItem>;
              })}
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
}
