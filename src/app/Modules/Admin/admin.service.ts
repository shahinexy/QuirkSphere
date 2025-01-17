import AppError from "../../error/AppError";
import { UserRegisterModel } from "../Auth/auth.model";
import { BlogModel } from "../Blog/blog.model";

const getAllUserFromDB = async () => {
  const result = await UserRegisterModel.find();
  return result;
};

const blockUserFromDB = async (id: string) => {
  // check if user exists
  const isUserExist = await UserRegisterModel.findById(id);

  if (!isUserExist) {
    throw new AppError(404, "User Not Found");
  }

  if (isUserExist.isBlocked) {
    throw new AppError(401, "User Already Blocked");
  }

  const result = await UserRegisterModel.findByIdAndUpdate(
    id,
    { isBlocked: true },
    { new: true, runValidators: true}
  );
  return result;
};

const deleteBlogFromDB = async (id: string) => {
  // check if blog exists
  const isBlogExists = await BlogModel.findById(id);

  if (!isBlogExists) {
    throw new AppError(404, "Blog Not Found");
  }

  const result = await BlogModel.findByIdAndDelete(id);
  return result;
};

export const AdminServices = {
  blockUserFromDB,
  getAllUserFromDB,
  deleteBlogFromDB,
};
