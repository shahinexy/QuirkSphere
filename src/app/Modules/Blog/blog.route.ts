import express from "express";
import { BlogControllers } from "./blog.controller";
import ValidateRequest from "../../middleware/validateRequest";
import { BlogValidetions } from "./blog.validation";
import Auth from "../../middleware/auth";

const router = express.Router();

router.post(
  "/",
  Auth('user'),
  ValidateRequest(BlogValidetions.createBlogSchemaValidation),
  BlogControllers.createBlog
);

router.get("/", BlogControllers.getAllBlog);

router.get("/:id", BlogControllers.getSingleBlog);

router.patch(
  "/:id",
  Auth('user'),
  ValidateRequest(BlogValidetions.updateBlogSchemaValidation),
  BlogControllers.updateBlog
);

router.delete("/:id", Auth('user', 'admin'), BlogControllers.deleteBlog);

export const BlogRouters = router;
