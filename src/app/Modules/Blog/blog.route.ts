import express from "express";
import { BlogControllers } from "./blog.controller";
import ValidateRequest from "../../middleware/validateRequest";
import { BlogValidetions } from "./blog.validation";

const router = express.Router();

router.post(
  "/",
  ValidateRequest(BlogValidetions.createBlogSchemaValidation),
  BlogControllers.createBlog
);

router.get("/", BlogControllers.getAllBlog);

router.get("/:id", BlogControllers.getSingleBlog);

router.patch(
  "/:id",
  ValidateRequest(BlogValidetions.updateBlogSchemaValidation),
  BlogControllers.updateBlog
);

router.delete("/:id", BlogControllers.deleteBlog);

export const BlogRouters = router;
