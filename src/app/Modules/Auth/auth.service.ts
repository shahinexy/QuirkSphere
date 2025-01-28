import config from "../../config";
import AppError from "../../error/AppError";
import { TRegisterUser } from "./auth.intarface";
import { UserRegisterModel } from "./auth.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUserIntoDB = async (payload: TRegisterUser) => {
  // if email exist
  const isEmailExists = await UserRegisterModel.findOne({
    email: payload.email,
  });

  if (isEmailExists) {
    throw new AppError(400, "This Email already exists");
  }

  const result = await UserRegisterModel.create(payload);
  return result;
};

const loginUser = async (payload: TRegisterUser) => {
  // check if user exist
  const isUserExist = await UserRegisterModel.findOne({ email: payload.email });

  if (!isUserExist) {
    throw new AppError(404, "User Not Found");
  }

  // check if the user blocked
  const isBlocked = isUserExist?.isBlocked;

  if (isBlocked) {
    throw new AppError(401, "This User is Blocked");
  }

  // check if password matched
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    isUserExist?.password
  );

  if (!isPasswordMatched) {
    throw new Error("Password do not matched");
  }

  // create access token
  const jwtPayliad = {
    userEmail: isUserExist.email,
    role: isUserExist.role,
  };

  const token = jwt.sign(jwtPayliad, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  });

  return { token };
};

export const UserServices = {
  registerUserIntoDB,
  loginUser,
};
