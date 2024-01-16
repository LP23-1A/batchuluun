import { pool } from "../../db.js";
export const getCategorys = async (req, res) => {
  try {
    const queryText = `SELECT * FROM category`;
    const response = await pool.query(queryText);
    res.send(response.rows);
  } catch (error) {
    console.log(error);
  }
};
export const createCategory = async (req, response) => {
  const { name, description } = req.body;
  try {
    const queryText = `INSERT INTO category (id, name, description) VALUES (gen_random_uuid (), $1, $2) RETURNING *`;
    const res = await pool.query(queryText, [name, description]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
};
export const updateCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const queryText = `UPDATE category SET name='${name}' WHERE description='${description}'`;
    const response = await pool.query(queryText);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
};
