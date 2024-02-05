import express from "express";
import { connectDatabase } from "./Utils/database";
import { user } from "./router/User";
import cors from "cors";
import { food } from "./router/Food";
import { category } from "./router/Category";
const PORT = 8000;
connectDatabase();

const start = () => {
  const app = express();
  app.use(cors({ origin: "*" }));
  app.use(express.json());
  app.use("/user", user);
  app.use("/food", food);
  app.use("/category", category);
  app.get("/", (req, res) => {
    res.status(200).send({ success: true, message: "hello world" });
  });
  app.listen(PORT, () => {
    console.log("Server running");
  });
};
start();
