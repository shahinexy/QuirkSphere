import { z } from "zod";

const userValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name is required." }),
    email: z
      .string()
      .email({ message: "Invalid email address." })
      .min(1, { message: "Email is required." }),
    password: z.string().min(1, { message: "Password is required." }),
    role: z.enum(["admin", "user"]).default("user"),
    isBlocked: z.boolean().default(false),
  })
});

export const UserValidations = {
  userValidationSchema,
};
