import express from "express";
import { LogIn, signUp } from "../controller/User";
const user = express.Router();
user.route("/signup").post(signUp);
user.route("/login").post(LogIn);
export { user };
