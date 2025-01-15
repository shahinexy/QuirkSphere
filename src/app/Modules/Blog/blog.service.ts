import QueryBuilder from "../../builder/QueryBuilder";
import { USER_ROLE } from "../Auth/auth.constant";
import { UserRegisterModel } from "../Auth/auth.model";
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

const deleteBlogFromDB = async (
  id: string,
  payload: {
    userEmail: string;
    role: string;
  }
) => {
  // check if blog exists
  const isBlogExists = await BlogModel.findById(id);

  if (!isBlogExists) {
    throw new Error("Blog Not Found");
  }

  // check if blog author
  const blogAuthor = await UserRegisterModel.findById(isBlogExists.author);

  const isAuthor = blogAuthor?.email === payload.userEmail;

  if (!isAuthor && payload.role !== USER_ROLE.admin) {
    throw new Error("You are not author of this blog");
  }

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
