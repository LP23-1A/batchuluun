import express from "express";
import {
  createFood,
  deleteFood,
  getAllFood,
  updateFood,
} from "../controller/Food";
const food = express.Router();
food.route("/").get(getAllFood).post(createFood);
food.route("/:id").delete(deleteFood);
food.route("/:id").put(updateFood);
export { food };
