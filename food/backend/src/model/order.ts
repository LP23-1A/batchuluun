import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  userId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],

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
  payment: {
    type: String,
    enum: ["Paid", "Not Paid"],
    default: "Not Paid",
  },
});
const orderModel = mongoose.model("order", orderSchema);
export { orderModel };
