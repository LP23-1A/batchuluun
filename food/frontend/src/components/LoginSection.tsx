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
import Error from "./Error";
const LoginSection = () => {
  const [error, setError] = React.useState("");
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
  const router = useRouter();
  const submitHandler = async (e: any) => {
    const BASE_URL = "http://localhost:8000/user/login";

    e.preventDefault();
    try {
      const { data } = await axios.post(BASE_URL, { ...input });
      // localStorage.setItem("user1", JSON.stringify(data));
      if (data) {
        router.push(`/dashboard/${data.user.email}`);
        localStorage.setItem("userData", JSON.stringify({ ...data }));
      } else {
        setError("username or password error");
      }
      console.log("ok");
    } catch (error) {
      console.log(error);

      return <Error />;
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
        borderRadius: "6px",
      }}
    >
      {error && <Error />}
      <Box display={"flex"} justifyContent={"center"} fontSize={"28px"}>
        Нэвтрэх
      </Box>

      <Stack sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Stack sx={{ flex: "" }}>
          <Box fontSize={"14px"}>Имэйл</Box>
          <TextField
            sx={{
              border: "1px solid gray",
              borderBottom: "none",
              borderRadius: "6px",
              bgcolor: "#F7F7F8",
            }}
            id="filled-multiline-flexible"
            label="Имэйл хаягаа оруулна уу"
            multiline
            maxRows={4}
            variant="filled"
            onChange={(e: any) =>
              setInput((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </Stack>
        <Stack sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <Box fontSize={"14px"}>Нууц Үг</Box>

          <FormControl
            sx={{
              width: "38ch",
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
              onChange={(e: any) =>
                setInput((prev) => ({ ...prev, password: e.target.value }))
              }
              sx={{ width: "384px", bgcolor: "#F7F7F8" }}
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
          onClick={submitHandler}
          disabled={input.email === "" || input.password === ""}
          style={{
            backgroundColor:
              input.email === "" || input.password === "" ? "grey" : "#18BA51",
          }}
          sx={{ color: "white" }}
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
