import pg from "pg";
import dotev from "dotenv";
// import { PostgresError } from "postgres";

const { Pool } = pg;
dotev.config();
export const pool = new Pool({
  ssl: true,
  connectionString: process.env.DATABASE_URL,
});
