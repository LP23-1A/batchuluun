import mongoose from "mongoose";
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  foodId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foods",
    },
  ],
});
const CategoryModel = mongoose.model("category", CategorySchema);
export { CategoryModel };
