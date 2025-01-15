import express from "express";
import { UserControllers } from "./auth.controller";
import ValidateRequest from "../../middleware/validateRequest";
import { UserValidations } from "./auth.validation";

const router = express.Router();

router.post(
  "/register",
  ValidateRequest(UserValidations.userRegisterValidationSchema),
  UserControllers.registerUser
);

router.get('/', UserControllers.getAllUser)

router.post(
  "/login",
  ValidateRequest(UserValidations.userLoginValidationSchema),
  UserControllers.LoginUser
);

export const AuthRouters = router;
