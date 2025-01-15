import { Router } from "express";
import { BlogRouters } from "../Modules/Blog/blog.route";
import { AuthRouters } from "../Modules/Auth/auth.route";
import { AdminRouters } from "../Modules/Admin/admin.route";

const router = Router()

const moduleRouter = [
    {
        path: '/blogs',
        router: BlogRouters
    },
    {
        path: '/auth',
        router: AuthRouters
    },
    {
        path: '/admin',
        router: AdminRouters
    },
]

moduleRouter.forEach((route)=> router.use(route.path, route.router))

export default router;