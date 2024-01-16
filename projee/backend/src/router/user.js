import express from "express";
import {
  createUser,
  deleteUser,
  getOneUser,
  getUsers,
  updateUser,
} from "../controller/user.js";
import {
  createCategory,
  getCategorys,
  updateCategory,
} from "../controller/category.js";
import {
  createTransaction,
  getTransactions,
} from "../controller/transaction.js";
const user = express.Router();
user.route("/").get(getUsers).post(createUser);
user.route("/user").get(getOneUser).put(updateUser).delete(deleteUser);
user.route("/oneuser").post(getOneUser);
user.route("/user/transaction").post(createTransaction).get(getTransactions);

export default user;
