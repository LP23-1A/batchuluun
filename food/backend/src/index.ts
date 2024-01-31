import express from "express";
import { connectDatabase } from "./Utils/database";
import { user } from "./router/User";
import cors from "cors";
const PORT = 8001;
const start = () => {
  connectDatabase();

  const app = express();
  app.use(cors({ origin: "*" }));
  app.use(express.json());
  app.use("/user", user);
  app.get("/", (req, res) => {
    res.status(200).send({ success: true, message: "hello world" });
  });
  app.listen(PORT, () => {
    console.log("Server running");
  });
};
start();
