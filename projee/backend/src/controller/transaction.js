import { pool } from "../../db.js";

export const Createcategory = async (req, response) => {
  const { name, description } = req.body;
  try {
    const queryText =
      "INSERT INTO category (id, name, description) VALUES (gen_random_uuid (), $1, $2) RETURNING *";
    const res = await pool.query(queryText, [name, description]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
};
