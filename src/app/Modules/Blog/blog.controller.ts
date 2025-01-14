import { Request, Response } from "express";
import { BlogServices } from "./blog.service";
import CatchAsync from "../../utils/catchAsync";

const createBlog = CatchAsync(async (req: Request, res: Response) => {
    const result = await BlogServices.createBlogIntoDB(req.body);
  
    res.status(200).json({
      success: true,
      message: "Blog created Successfull",
      data: result,
    });
  })

const getAllBlog = CatchAsync(async (req: Request, res: Response) => {
    const result = await BlogServices.getAllBlogFromDB();
  
    res.status(200).json({
      success: true,
      message: "Get All Blog Successfull",
      data: result,
    });
  })

const getSingleBlog = CatchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BlogServices.getSingleBlogFromDB(id);
  
    res.status(200).json({
      success: true,
      message: "Get Single Blog  Successfull",
      data: result,
    });
  })

const updateBlog = CatchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BlogServices.updateBlogFromDB(id, req.body);
  
    res.status(200).json({
      success: true,
      message: "Get Single Blog  Successfull",
      data: result,
    });
  })

const deleteBlog = CatchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BlogServices.getSingleBlogFromDB(id);
  
    res.status(200).json({
      success: true,
      message: "Get Single Blog  Successfull",
      data: result,
    });
  })

export const BlogControllers = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog
};
