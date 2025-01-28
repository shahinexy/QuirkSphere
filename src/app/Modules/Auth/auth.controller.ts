import CatchAsync from "../../utils/catchAsync";
import { UserServices } from "./auth.service";

const registerUser = CatchAsync(async (req, res) => {
  const result = await UserServices.registerUserIntoDB(req.body);

  res.status(200).json({
    success: true,
    message: "User Register Successfully",
    statusCode: 201,
    data: result,
  });
});

const LoginUser = CatchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);

  res.status(200).json({
    success: true,
    message: "Logged in Successfully",
    statusCode: 201,
    data: result,
  });
});

export const UserControllers = {
  registerUser,
  LoginUser,
};
