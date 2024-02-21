import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Stack } from "@mui/material";

export default function BasicSelect({ props }: any): React.ReactNode {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Stack sx={{ display: "flex" }}>
      <Box sx={{ minWidth: 120, bgcolor: "#ECEDF0" }}>
        <FormControl sx={{ width: "384px" }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"Баянзүрх дүүрэг"}>Баянзүрх дүүрэг</MenuItem>;
            <MenuItem value={"Хан-Уул дүүрэг"}>Хан-Уул дүүрэг</MenuItem>;
            <MenuItem value={"Баянгол дүүрэг"}>Баянгол дүүрэг</MenuItem>;
            <MenuItem value={"Сонгинохайрхан дүүрэг"}>
              Сонгинохайрхан дүүрэг
            </MenuItem>
            ;<MenuItem value={"Чингэлтэй дүүрэг"}>Чингэлтэй дүүрэг</MenuItem>;
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
}
