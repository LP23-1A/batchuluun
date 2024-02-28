import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrder,
  getOneOrder,
  updateOrder,
} from "../controller/Order";
const order = express.Router();
order.route("/").post(createOrder);
order.route("/allOrder").post(getAllOrder);
order.route("/:id").get(getOneOrder).put(updateOrder).delete(deleteOrder);
export { order };
