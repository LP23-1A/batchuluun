import express from "express";
import { createCategory, getAllCategory } from "../controller/Category";
const category = express.Router();
category.route("/").post(createCategory);
category.route("/one").post(getAllCategory);
export { category };
