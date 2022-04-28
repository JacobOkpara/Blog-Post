import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is requred."],
      unique: true,
      lowercase: true,
    },
    firstName: {
      type: String,
      required: [true, "First name is requred"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 6,
      unique: true,
    },
  },

  {
    timestamps: true,
  }
);
export default mongoose.models.User || mongoose.model("User", userSchema);
