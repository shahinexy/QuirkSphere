import express from "express";
import Auth from "../../middleware/auth";
import { AdminControllers } from "./admin.controller";

const router = express.Router();

router.get("/users", Auth("admin"), AdminControllers.getAllUser);

router.patch("/users/:userId/block", Auth("admin"), AdminControllers.blockUser);

router.delete("/blogs/:id", Auth("admin"), AdminControllers.deleteBlog);

export const AdminRouters = router;
