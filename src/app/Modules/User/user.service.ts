import { TUser } from "./user.intarface";
import { UserModel } from "./user.model";

const registerUserIntoDB = async (payload: TUser) => {

    // if email exist
    const isEmailExists = await UserModel.findOne({email: payload.email});

    if(isEmailExists){
        throw new Error('This Email already exists')
    }

  const result = await UserModel.create(payload);
  return result;
};

export const UserServices = {
  registerUserIntoDB,
};
