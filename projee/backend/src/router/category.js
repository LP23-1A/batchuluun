import express from "express";
import { getCategorys, updateCategory } from "../controller/category.js";
const category = express.Router();
category.route("/").get(getCategorys);
category.route("/category").put(updateCategory);
export default category;
