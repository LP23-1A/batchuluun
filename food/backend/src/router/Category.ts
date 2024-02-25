import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../controller/Category";
const category = express.Router();
category.route("/").post(createCategory).get(getAllCategory);
category.route("/one").post(getCategory);
category.route("/:id").put(updateCategory).delete(deleteCategory);
export { category };
