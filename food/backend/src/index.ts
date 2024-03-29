import express from "express";
import { connectDatabase } from "./Utils/database";
import { auth } from "./router/User";
import cors from "cors";
import { food } from "./router/Food";
import { category } from "./router/Category";
import { order } from "./router/Order";
const PORT = 8000;
connectDatabase();

const start = () => {
  const app = express();
  app.use(cors({ origin: "*" }));
  app.use(express.json());
  app.use("/user", auth);
  app.use("/food", food);
  app.use("/category", category);
  app.use("/order", order);
  app.get("/", (req, res) => {
    res.status(200).send({ success: true, message: "hello world" });
  });
  app.listen(PORT, () => {
    console.log("Server running");
  });
};
start();
