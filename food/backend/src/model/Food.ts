import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema({
  foodname: String,
  image: String,
  ingeredient: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  name: String,
});
const FoodModel = mongoose.model("foods", FoodSchema);
export { FoodModel };
