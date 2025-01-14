import { Router } from "express";
import { BlogRouters } from "../Modules/Blog/blog.route";

const router = Router()

const moduleRouter = [
    {
        path: '/blogs',
        router: BlogRouters
    }
]

moduleRouter.forEach((route)=> router.use(route.path, route.router))

export default router;