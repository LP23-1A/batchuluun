import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema({
  name: String,
  image: String,
  ingeredient: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
});
const FoodModel = mongoose.model("foods", FoodSchema);
export { FoodModel };
