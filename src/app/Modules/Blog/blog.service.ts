import { TBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";

const createBlogIntoDB = async(payload: TBlog)=>{
    const result = await BlogModel.create(payload);
    return result
}

const getAllBlogFromDB = async()=>{
    const result = await BlogModel.find();
    return result
}

const getSingleBlogFromDB = async(id: string)=>{
    const result = await BlogModel.findById(id);
    return result
}

const updateBlogFromDB = async(id: string, payload: Partial<TBlog>)=>{
    const result = await BlogModel.findByIdAndUpdate(id, payload, {new: true});
    return result
}

const deleteBlogFromDB = async(id: string)=>{
    const result = await BlogModel.findByIdAndDelete(id);
    return result
}

export const BlogServices = {
    createBlogIntoDB,
    getAllBlogFromDB,
    getSingleBlogFromDB,
    updateBlogFromDB,
    deleteBlogFromDB
}