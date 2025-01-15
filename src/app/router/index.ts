import { Router } from "express";
import { BlogRouters } from "../Modules/Blog/blog.route";
import { UserRouters } from "../Modules/User/user.route";

const router = Router()

const moduleRouter = [
    {
        path: '/blogs',
        router: BlogRouters
    },
    {
        path: '/auth',
        router: UserRouters
    },
]

moduleRouter.forEach((route)=> router.use(route.path, route.router))

export default router;