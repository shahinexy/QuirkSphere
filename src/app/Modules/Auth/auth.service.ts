import { TRegisterUser } from "./auth.intarface";
import { UserRegisterModel } from "./auth.model";

const registerUserIntoDB = async (payload: TRegisterUser) => {

    // if email exist
    const isEmailExists = await UserRegisterModel.findOne({email: payload.email});

    if(isEmailExists){
        throw new Error('This Email already exists')
    }

  const result = await UserRegisterModel.create(payload);
  return result;
};

const getAllUserFromDB = async()=>{
  const result = await UserRegisterModel.find()
  return result
}

const loginUser = async (payload: TRegisterUser) => {
  console.log(payload);
  // check if user exist 
  const isUserExist = await UserRegisterModel.findOne({email: payload.email})

  if(!isUserExist){
    throw new Error('User Not Found')
  }

  // check if the user blocked 
  const isBlocked = isUserExist?.isBlocked
  
  if(isBlocked){
    throw new Error('This User is Blocked')
  }

  return null;
};

export const UserServices = {
  registerUserIntoDB,
  getAllUserFromDB,
  loginUser
};
