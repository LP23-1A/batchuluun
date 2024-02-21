import express from "express";
import { LogIn, deleteUser, signUp, updateUser } from "../controller/User";
const auth = express.Router();
auth.route("/signup").post(signUp).put(updateUser).delete(deleteUser);
auth.route("/login").post(LogIn);
export { auth };
