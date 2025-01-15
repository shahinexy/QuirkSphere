import express from "express";
import { UserControllers } from "./user.controller";
import ValidateRequest from "../../middleware/validateRequest";
import { UserValidations } from "./user.validation";

const router = express.Router();

router.post(
  "/register",
  ValidateRequest(UserValidations.userValidationSchema),
  UserControllers.registerUser
);

export const UserRouters = router;
