import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String
  },
  image: {
    required: false,
    type: String
  },
  type: {
    required: false,
    type: Number,
    default: 3,
  },
  bio : {
    required : false,
    type: String
  },
  favouriteBlogs : [String]

});


export const userModel = mongoose.models.users ?? mongoose.model("users", userSchema);
