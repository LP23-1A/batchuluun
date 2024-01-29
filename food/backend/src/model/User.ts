import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  location: String,
});
const UserModel = mongoose.model("User", UserSchema);
export { UserModel };
