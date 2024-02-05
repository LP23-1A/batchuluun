import mongoose from "mongoose";
const CategorySchema = new mongoose.Schema({
  name: String,
});
const CategoryModel = mongoose.model("category", CategorySchema);
export { CategoryModel };
