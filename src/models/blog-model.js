import mongoose, { Schema } from "mongoose";

const AuthorSchema = new Schema({
  _id:{
    type: String,
    required : true,
  },
  name: {
    type: String,
    required: true,
  },
  bio: String,
  image: String,
});

const CommentSchema = new Schema({
  author: {
    type: AuthorSchema, 
    required: true},
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: AuthorSchema,
    required: true,
  },
  thumbnail: String,
  tags: {
    type: String,
  },
  likes: [String],
  comments: [CommentSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export const blogModel =  mongoose.models.blogs || mongoose.model('blogs', BlogSchema);



