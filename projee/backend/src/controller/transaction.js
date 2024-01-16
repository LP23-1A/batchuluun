import { pool } from "../../db.js";

export const createTransaction= async (req, response) => {
  const { name, amount, transaction_type, description,   } = req.body;
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

