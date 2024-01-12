import { pool } from "../db.js";

export const createTable = async (_, res) => {
  try {
    const tableQueryText = `
      CREATE TABLE IF NOT EXISTS category (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        description TEXT,
        createAt TIMESTAMP,
        updateAt TIMESTAMP,
        category_image text
      )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
};

export const addCategory = async (req, response) => {
  const { name, description } = req.body;
  try {
    const queryText =
      "INSERT INTO category (name, description) VALUES ($1, $2) RETURNING *";
    const res = await pool.query(queryText, [name, description]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
};

export const getCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const queryText = `SELECT * FROM category WHERE name='${name}'`;
    const response = await pool.query(queryText);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
};
