import { NextFunction, Request, Response } from "express";
import CatchAsync from "../utils/catchAsync";
import { UserRegisterModel } from "../Modules/Auth/auth.model";
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from "../config";
import { TUserRole } from "../Modules/Auth/auth.intarface";

const Auth = (...requiredRole: TUserRole[]) => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error("You are not authorize");
    }

    const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;

    const {userEmail, role, iat} = decoded 

    //check if user exist
    const isUserExist = await UserRegisterModel.findOne({
      email: userEmail,
    });

    if (!isUserExist) {
      throw new Error("User Not Found");
    }

    // check if the user blocked
    const isBlocked = isUserExist?.isBlocked;

    if (isBlocked) {
      throw new Error("This User is Blocked");
    }

    // check role
    if(requiredRole && !requiredRole.includes(role)){
      throw new Error("You are not authorize");
    }

    req.user = decoded as JwtPayload;

    next();
  });
};

export default Auth;
