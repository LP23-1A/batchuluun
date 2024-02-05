import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema({
  name: String,
  image: String,
  ingeredient: String,
  price: Number,
});
const FoodModel = mongoose.model("food", FoodSchema);
export { FoodModel };
