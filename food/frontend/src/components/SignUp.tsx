import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
import Complete from "./Complete";
import axios from "axios";
import { useRouter } from "next/navigation";
const style = {
  border: "1px solid gray",
  borderBottom: "none",
  width: "384px",
  borderRadius: "5px",
  bgcolor: "#ECEDF0",
};
const SignUp = () => {
  const api = "http://localhost:8000/user/signup";
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const submitHundler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(api, { ...input });
      if (data) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Stack
        sx={{
          width: "448px",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
          margin: "auto",
        }}
      >
        <Box fontSize={"28px"} display={"flex"} justifyContent={"center"}>
          Бүртгүүлэх
        </Box>
        <Stack sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Stack>
            <Box>нэр</Box>
            <TextField
              style={style}
              id="filled-multiline-flexible"
              label="Нэрээ оруулна уу"
              multiline
              maxRows={4}
              variant="filled"
              onChange={(e) =>
                setInput((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </Stack>
          <Stack>
            <Box>и-мэйл</Box>
            <TextField
              style={style}
              id="filled-multiline-flexible"
              label="И-мэйл хаягаа оруулна уу"
              multiline
              maxRows={4}
              variant="filled"
              onChange={(e) =>
                setInput((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </Stack>
          <Stack>
            <Box>утасны дугаар</Box>
            <TextField
              style={style}
              id="filled-multiline-flexible"
              label="утасны дугаараа оруулна уу"
              multiline
              maxRows={4}
              variant="filled"
              onChange={(e) =>
                setInput((prev) => ({ ...prev, phoneNumber: e.target.value }))
              }
            />
          </Stack>
          <Stack className="flex flex-col gap-2">
            <Box className="text-[14px]">Нууц Үг</Box>
            <FormControl
              sx={{
                width: "38ch",
                bgcolor: "#F7F7F8",
                borderRadius: "1ch",
                border: "none",
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Нууц үгээ оруулна уу
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, password: e.target.value }))
                }
                sx={{ width: "384px", bgcolor: "#ECEDF0" }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Нууц үгээ оруулна уу"
              />
            </FormControl>
          </Stack>

          <Stack sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Box fontSize={"14px"}>Нууц үг давтах</Box>

            <FormControl
              sx={{
                width: "38ch",
                bgcolor: "#F7F7F8",
                borderRadius: "1ch",
                border: "none",
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Нууц үгээ оруулна уу
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, password: e.target.value }))
                }
                sx={{ width: "384px", bgcolor: "#ECEDF0" }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Нууц үгээ оруулна уу"
              />
            </FormControl>
          </Stack>
        </Stack>

        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label=""
          />
          <p>Үйлчилгээний нөхцөл зөвшөөрөх</p>
        </Stack>
        <Button
          sx={{
            color: "black",
            bgcolor: "gray",
            border: "none",
            paddingX: "16px",
            paddingY: "8px",
          }}
          style={{ backgroundColor: input.password === "" ? "grey" : "green" }}
          variant="outlined"
          size="small"
          disabled={input.password === ""}
          onClick={submitHundler}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </div>
  );
};

export default SignUp;
