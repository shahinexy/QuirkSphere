import { Router } from "express";
import { BlogRouters } from "../Modules/Blog/blog.route";
import { AuthRouters } from "../Modules/Auth/auth.route";

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
]

moduleRouter.forEach((route)=> router.use(route.path, route.router))

export default router;