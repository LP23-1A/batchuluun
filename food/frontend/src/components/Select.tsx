import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Stack, TextField, Typography } from "@mui/material";
import { OrderContext } from "./OrderStep";
import { khoroo } from "@/utils/Khoroo";
import { district } from "@/utils/District";
import { apartment } from "@/utils/Apartment";
export default function BasicSelect(): React.ReactNode {
  const { data, setData }: any = React.useContext(OrderContext);
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
            {district.length > 0 &&
              district.map((el) => {
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
            {khoroo.length > 0 &&
              khoroo.map((el) => {
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
            {apartment.length > 0 &&
              apartment.map((el) => {
                return <MenuItem value={el.name}>{el.name}</MenuItem>;
              })}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Typography>Нэмэлт мэдээлэл</Typography>
        <TextField
          onChange={(el) =>
            setData((prev: {}) => ({ ...prev, information: el.target.value }))
          }
          id="filled-basic"
          label="Орц, давхар, орцны код ..."
          sx={{ width: "384px", bgcolor: "#ECEDF0", marginTop: "10px" }}
        />
      </Box>
      <Box>
        <Typography>Утасны дугаар*</Typography>
        <TextField
          onChange={(el) =>
            setData((prev: {}) => ({ ...prev, phoneNumber: el.target.value }))
          }
          id="filled-basic"
          label="Утасны дугаараа оруулна уу"
          sx={{ width: "384px", bgcolor: "#ECEDF0", marginTop: "10px" }}
        />
      </Box>
    </Stack>
  );
}
