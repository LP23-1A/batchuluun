import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrder,
  getOneOrder,
  updateOrder,
} from "../controller/Order";
const order = express.Router();
order.route("/").post(createOrder).post(getAllOrder);
order.route("/:id").get(getOneOrder).put(updateOrder).delete(deleteOrder);
export { order };
