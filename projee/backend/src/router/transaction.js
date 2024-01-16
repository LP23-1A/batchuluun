import express from "express";
import {
  getOneTransaction,
  getTransactions,
} from "../controller/transaction.js";
const transaction = express.Router();
transaction.route("/").get(getTransactions);
transaction.route("/transaction").get(getOneTransaction);
export default transaction;
