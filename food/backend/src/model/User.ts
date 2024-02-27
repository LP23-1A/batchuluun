import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your name"],
  },
  password: String,
  location: String,
  phoneNumber: Number,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});
const UserModel = mongoose.model("user", UserSchema);
export { UserModel };
