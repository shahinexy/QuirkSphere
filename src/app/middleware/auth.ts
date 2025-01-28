import { NextFunction, Request, Response } from "express";
import CatchAsync from "../utils/catchAsync";
import { UserRegisterModel } from "../Modules/Auth/auth.model";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { TUserRole } from "../Modules/Auth/auth.intarface";
import AppError from "../error/AppError";

const Auth = (...requiredRole: TUserRole[]) => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
 
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new AppError(401, "You are not authorize");
    }

    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;

    const { userEmail, role } = decoded;

    //check if user exist
    const isUserExist = await UserRegisterModel.findOne({
      email: userEmail,
    });

    if (!isUserExist) {
      throw new AppError(404, "User Not Found");
    }

    // check if the user blocked
    const isBlocked = isUserExist?.isBlocked;

    if (isBlocked) {
      throw new AppError(401, "This User is Blocked");
    }

    // check role
    if (requiredRole && !requiredRole.includes(role)) {
      throw new AppError(401, "You are not authorize");
    }

    req.user = decoded as JwtPayload;

    next();
  });
};

export default Auth;
