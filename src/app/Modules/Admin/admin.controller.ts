import CatchAsync from "../../utils/catchAsync";
import { AdminServices } from "./admin.service";


const getAllUser = CatchAsync(async (req, res) => {
    const result = await AdminServices.getAllUserFromDB();
  
    res.status(200).json({
      success: true,
      message: "Get all user Successfully",
      data: result,
    });
  });

const blockUser = CatchAsync(async(req, res)=>{
    const {userId} = req.params;
    const result = await AdminServices.blockUserFromDB(userId)

    res.status(200).json({
        success: true,
        message: "User blocked successfully",
        data: result,
      });
})

export const AdminControllers = {
    blockUser,
    getAllUser
}