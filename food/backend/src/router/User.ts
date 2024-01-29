import express from "express";
import { LogIn, signUp } from "../controller/User";
const user = express.Router();
user.route("/").post(signUp).get(LogIn);
export { user };
