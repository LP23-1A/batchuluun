import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  orderNumber: Number,
  foods: [],
  totalPrice: Number,
  process: {
    type: String,
    enum: ["order", "complete"],
    default: "order",
  },
  createdDate: {
    type: Date,
    default: () => Date.now(),
  },
  district: String,
  khoroo: String,
  apartment: String,
});
const orderModel = mongoose.model("order", orderSchema);
export { orderModel };
