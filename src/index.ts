import { Router } from "express";
import userRouter from "./app/modules/user/user.route";
import AuthRouter from "./app/modules/auth/auth.router";


const router = Router();

const moduleRoutes = [

    {
        path: '/users',
        route: userRouter
    },
    {
        path: '/auth',
        route: AuthRouter
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;