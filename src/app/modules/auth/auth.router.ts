import { Router } from "express";
import { AuthController } from "./authController";


const AuthRouter = Router();

AuthRouter.post('/register', AuthController.register)

export default AuthRouter;