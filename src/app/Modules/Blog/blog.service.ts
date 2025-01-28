import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../error/AppError";
import { USER_ROLE } from "../Auth/auth.constant";
import { UserRegisterModel } from "../Auth/auth.model";
import { TBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";

const createBlogIntoDB = async (userEmail: string, payload: TBlog) => {
  const isUserExist = await UserRegisterModel.findOne({ email: userEmail });
  if (!isUserExist) {
    throw new AppError(404, "User not found");
  }
  payload.author = isUserExist?._id;
  const result = await BlogModel.create(payload);
  return result;
};

const getAllBlogFromDB = async (query: Record<string, unknown>) => {
  const searchbleFields = ["title", "content"];

  const blogQuery = new QueryBuilder(BlogModel.find().populate("author"), query)
    .search(searchbleFields)
    .filter()
    .sort();

  const result = blogQuery.modelQuery;
  return result;
};

const getSingleBlogFromDB = async (id: string) => {
  // check if blog exists
  const isBlogExists = await BlogModel.findById(id);

  if (!isBlogExists) {
    throw new AppError(404, "Blog Not Found");
  }

  const result = await BlogModel.findById(id).populate("author");
  return result;
};

const updateBlogFromDB = async (
  id: string,
  payload: Partial<TBlog>,
  userData: {
    userEmail: string;
    role: string;
  }
) => {
  // check if blog exists
  const isBlogExists = await BlogModel.findById(id);

  if (!isBlogExists) {
    throw new AppError(404, "Blog Not Found");
  }

  // check if blog author
  const blogAuthor = await UserRegisterModel.findById(isBlogExists.author);

  const isAuthor = blogAuthor?.email === userData.userEmail;

  if (!isAuthor) {
    throw new AppError(401, "You are not author of this blog");
  }

  const result = await BlogModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
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
    throw new AppError(404, "Blog Not Found");
  }

  // check if blog author
  const blogAuthor = await UserRegisterModel.findById(isBlogExists.author);

  const isAuthor = blogAuthor?.email === payload.userEmail;

  if (!isAuthor && payload.role !== USER_ROLE.admin) {
    throw new AppError(401, "You are not author of this blog");
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
