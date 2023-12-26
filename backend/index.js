// import { Pool } from "pg";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,

//   ssl: true,
// });

// async function getData() {
//   const client = await pool.connect();

//   try {
//     const response = await client.query("SELECT version()");

//     console.log(response.rows[0]);

//     return response.rows[0];
//   } finally {
//     client.release();
//   }
// }

// export default async function Page() {
//   const data = await getData();
// }
import Express from "express";
import dotenv from "dotenv";
import bp from "body-parser";
// import  query from "/db";
import { pool } from "./db.js";
const app = Express();
dotenv.config();
app.use(bp.json);
const PORT = 8000;
// app.use("/", (req, res) => {
//   pool.query();
// });
app.listen(PORT, () => {
  console.log("localhost : ");
});
app.get("/user", async (req, res) => {});
app.post("/user", async (req, res) => {
  try {
    const tableQueryText = `
   CREATE TABLE IF NOT EXIST users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT FULL,
    email VARCHAR(255) NOT FULL
   )`;
  } catch (error) {
    console.log(error);
  }
});
app.post;
