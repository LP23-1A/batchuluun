import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDatabase = async () => {
  try {
    const MONGODB_URL =
      "mongodb+srv://batchuluun655:04260517@food-decilary.hexkoli.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(MONGODB_URL);
    console.log("connect");
  } catch (error: unknown) {
    // throw new Error("Database cannot connect");
    console.log(error);
  }
};
export { connectDatabase };
