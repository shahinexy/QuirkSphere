import CatchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.service";

const registerUser = CatchAsync(async (req, res) => {
  const result = await UserServices.registerUserIntoDB(req.body);

  res.status(200).json({
    success: true,
    message: "User Register Successfully",
    data: result,
  });
});

export const UserControllers = {
    registerUser
}