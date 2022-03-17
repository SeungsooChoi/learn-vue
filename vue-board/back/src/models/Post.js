import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: Date,
  meta: {
    views: Number,
    rating: Number,
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
