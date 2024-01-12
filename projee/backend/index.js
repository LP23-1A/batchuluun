import express from "express";
import dotenv from "dotenv";
import { pool } from "./db.js";
import user from "./src/router/user.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/users", user);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

app.post("/createTable", async (req, res) => {
  try {
    const tableQueryText = `
        CREATE TABLE IF NOT EXISTS users (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE,
            password VARCHAR(255) NOT NULL,
            avatar_img BYTEA,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            currency_type TEXT DEFAULT 'MNT'
        )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

app.post("/createCategoryTable", async (req, res) => {
  try {
    const tableQueryText = `
        CREATE TABLE IF NOT EXISTS category (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
            name VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            category_image VARCHAR(50)
        )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});
const enableUuidOsspExtensionQuery =
  'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"';
pool.query(enableUuidOsspExtensionQuery, (err, result) => {
  if (err) {
    console.error("Error enabling uuid-ossp extension:", err);
  } else {
    console.log("uuid-ossp extension enabled");
  }
});
