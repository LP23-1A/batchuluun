import express from "express";
import {
  createUser,
  deleteUser,
  getOneUser,
  getUsers,
  updateUser,
} from "../controller/user.js";
import { Createcategory } from "../controller/category.js";
const user = express.Router();
user.route("/").get(getUsers).post(createUser);
user.route("/user").get(getOneUser).put(updateUser).delete(deleteUser);
user.route("/oneuser").post(getOneUser);
user.route("/user/category").post(Createcategory);
export default user;
