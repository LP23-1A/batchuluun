import express from "express";
import { createCategory, getCategory } from "../controller/Category";
const category = express.Router();
category.route("/").post(createCategory);
category.route("/one").post(getCategory);
export { category };
