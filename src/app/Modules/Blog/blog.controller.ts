import { Request, Response } from "express";
import { BlogServices } from "./blog.service";
import CatchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createBlog = CatchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.createBlogIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

const getAllBlog = CatchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.getAllBlogFromDB(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs fetched  Successfully",
    data: result,
  });
});

const getSingleBlog = CatchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogServices.getSingleBlogFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Get the Blog  Successfull",
    data: result,
  });
});

const updateBlog = CatchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const userData = req.user as { userEmail: string; role: string };
  const result = await BlogServices.updateBlogFromDB(id, req.body, userData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

const deleteBlog = CatchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const userData = req.user as { userEmail: string; role: string };
  const result = await BlogServices.deleteBlogFromDB(id, userData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog deleted successfully",
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
