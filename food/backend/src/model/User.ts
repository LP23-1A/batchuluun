import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  location: String,
  phoneNumber: Number,
});
const UserModel = mongoose.model("User", UserSchema);
export { UserModel };
