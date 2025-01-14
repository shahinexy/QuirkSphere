import { z } from "zod";

const blogSchemaValidation = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  content: z.string().min(1, { message: "Content is required." }),
  author: z.string().min(1, { message: "Author ID is required." }),
});

export const BlogValidetions = {
    blogSchemaValidation
}
