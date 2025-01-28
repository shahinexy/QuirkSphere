import CatchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminServices } from "./admin.service";

const getAllUser = CatchAsync(async (req, res) => {
  const result = await AdminServices.getAllUserFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Get all user Successfully",
    data: result,
  });
});

const blockUser = CatchAsync(async (req, res) => {
  const { userId } = req.params;
  await AdminServices.blockUserFromDB(userId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User blocked successfully",
  });
});

const deleteBlog = CatchAsync(async (req, res) => {
  const { id } = req.params;
  await AdminServices.deleteBlogFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog Delete Successfully",
  });
});

export const AdminControllers = {
  blockUser,
  getAllUser,
  deleteBlog,
};
