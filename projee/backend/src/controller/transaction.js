import { pool } from "../../db.js";

export const createTransaction = async (req, response) => {
  const { name, amount, description } = req.body;
  try {
    const queryText =
      "INSERT INTO transaction (id, name, amount, description) VALUES (gen_random_uuid (), $1, $2, $3) RETURNING *";
    const res = await pool.query(queryText, [name, amount, description]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
};
export const getTransactions = async (req, res) => {
  try {
    const queryText = `SELECT * FROM transaction`;
    const response = await pool.query(queryText);
    res.send(response.rows);
  } catch (error) {
    console.log(error);
  }
};
export const getOneTransaction = async (req, res) => {
  const { name } = req.body;
  try {
    const queryText = `SELECT * FROM transaction WHERE name='${name}'`;
    const response = await pool.query(queryText);
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};
const updateTransaction = async (req, res) => {
  const { name, amount, description } = req.body;
  try {
    const queryText = `
      UPDATE transactions
      SET  name = $2, amount = $3,  description = $5
      WHERE id = $7
      RETURNING *`;

    const result = await pool.query(queryText, [
      user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id,
      id,
    ]);
    res.send(result.rows[0]).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
