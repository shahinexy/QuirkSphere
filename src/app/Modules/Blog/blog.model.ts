import { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";

const blogSchema = new Schema<TBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  isPublished: { type: Boolean, default: true },
});

export const BlogModel = model<TBlog>("Blog", blogSchema);
