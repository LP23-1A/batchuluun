import express from "express";
import { createOrder } from "../controller/Order";
const order = express.Router();
order.route("/").post(createOrder);
export { order };
