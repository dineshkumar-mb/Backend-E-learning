import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    default: user,
  },
  subscription: [
    {
      type: mongoose.schema.Types.ObjectId,
      ref:"Course",
    },
    {
        timestamps:true,
    }
  ],
});

export const User = mongoose.model("userModel", schema);