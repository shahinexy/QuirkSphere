import QueryBuilder from "../../builder/QueryBuilder";
import { TBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await BlogModel.create(payload);
  return result;
};

const getAllBlogFromDB = async (query: Record<string, unknown>) => {
  const searchbleFields = ["title", "content"];

  const blogQuery = new QueryBuilder(BlogModel.find(), query)
    .search(searchbleFields)
    .filter()
    .sort();

  const result = blogQuery.modelQuery;
  return result;
};

const getSingleBlogFromDB = async (id: string) => {
  const result = await BlogModel.findById(id);
  return result;
};

const updateBlogFromDB = async (id: string, payload: Partial<TBlog>) => {
  const result = await BlogModel.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteBlogFromDB = async (id: string) => {
  const result = await BlogModel.findByIdAndDelete(id);
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogFromDB,
  getSingleBlogFromDB,
  updateBlogFromDB,
  deleteBlogFromDB,
};
