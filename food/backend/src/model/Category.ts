import mongoose from "mongoose";
const CategorySchema = new mongoose.Schema({
  name: String,
  foodId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foods",
    },
  ],
});
const CategoryModel = mongoose.model("category", CategorySchema);
export { CategoryModel };
