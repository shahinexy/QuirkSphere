import express from "express";
import { UserControllers } from "./auth.controller";
import ValidateRequest from "../../middleware/validateRequest";
import { UserValidations } from "./auth.validation";
import Auth from "../../middleware/auth";

const router = express.Router();

router.post(
  "/register",
  ValidateRequest(UserValidations.userRegisterValidationSchema),
  UserControllers.registerUser
);

router.get('/', Auth(), UserControllers.getAllUser)

router.post(
  "/login",
  ValidateRequest(UserValidations.userLoginValidationSchema),
  UserControllers.LoginUser
);

export const AuthRouters = router;
