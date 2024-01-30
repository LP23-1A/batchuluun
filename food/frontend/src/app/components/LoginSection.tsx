"use client";
import * as React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
const LoginSection = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });
  const api = "http://localhost:8000/user/login";
  const router = useRouter();
  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(api, { ...input });
      if (data) {
        router.push("/dashboard");
      }
      console.log("ok");
    } catch (error) {
      console.log(error);
    }
  };
  const signUp = () => {
    router.push("/signup");
  };
  return (
    <Stack
      sx={{
        width: "448px",
        padding: "32px",
        display: "flex",
        gap: "48px",
        flexDirection: "column",
      }}
    >
      <Box display={"flex"} justifyContent={"center"} fontSize={"28px"}>
        Нэвтрэх
      </Box>
      <Stack sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Stack sx={{ flex: "" }}>
          <Box fontSize={"14px"}>Имэйл</Box>
          <TextField
            sx={{ border: "1px solid gray", "&:focus": "none" }}
            id="filled-multiline-flexible"
            label="Имэйл хаягаа оруулна уу"
            multiline
            maxRows={4}
            variant="filled"
            onChange={(e) =>
              setInput((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </Stack>
        <Stack sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <Box fontSize={"14px"}>Нууц Үг</Box>

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
              Нууц үг
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, password: e.target.value }))
              }
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
              label="Password"
            />
          </FormControl>
          <Box fontSize={"12px"} display={"flex"} justifyContent={"flex-end"}>
            Нууц үг сэргээх
          </Box>
        </Stack>
      </Stack>
      <Stack sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <Button
          sx={{
            paddingX: "16px",
            paddingY: "8px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={submitHandler}
          variant="contained"
        >
          Нэвтрэх
        </Button>
        <Box display={"flex"} justifyContent={"center"}>
          Эсвэл
        </Box>
        <Button
          sx={{
            color: "black",
            border: "1px solid green",
            paddingX: "16px",
            paddingY: "8px",
          }}
          variant="outlined"
          size="small"
          onClick={signUp}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};

export default LoginSection;
