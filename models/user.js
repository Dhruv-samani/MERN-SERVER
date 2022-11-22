import mongoose from "mongoose";


const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: false },
  googleId: { type: String, required: false },
  phone: { type: String, required: false },
  id: { type: String },
  clientId: { type: String, required: false },
  occupation: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  imageFile: String,
});

export default mongoose.model("User", userSchema);

