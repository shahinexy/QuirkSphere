import express from "express";
import { BlogControllers } from "./blog.controller";
import ValidateRequest from "../../middleware/validateRequest";
import { BlogValidetions } from "./blog.validation";

const router = express.Router();

router.post(
  "/",
  ValidateRequest(BlogValidetions.blogSchemaValidation),
  BlogControllers.createBlog
);

router.get("/", BlogControllers.getAllBlog);

router.get("/:id", BlogControllers.getSingleBlog);

export const BlogRouters = router;
