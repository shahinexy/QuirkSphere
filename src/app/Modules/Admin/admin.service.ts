import { UserRegisterModel } from "../Auth/auth.model"

const getAllUserFromDB = async () => {
  const result = await UserRegisterModel.find();
  return result;
};

const blockUserFromDB = async(id: string)=>{
    console.log(id);
    const result = await UserRegisterModel.findByIdAndUpdate(id, {isBlocked: true}, {new: true});
    return result;
}

export const AdminServices = {
    blockUserFromDB,
    getAllUserFromDB
}