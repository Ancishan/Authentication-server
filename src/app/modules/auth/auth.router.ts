import { Router } from "express";
import { AuthController } from "./authController";
import validateRequest from "../../middleware/validateRequest";
import { UserValidation } from "../user/user.validation";
import { AuthValidation } from "./auth.validation";


const AuthRouter = Router();

AuthRouter.post('/register',validateRequest(UserValidation.userValidationSchema), AuthController.register)
AuthRouter.post('/login', validateRequest(AuthValidation.LoginValidationSchema), AuthController.login)
export default AuthRouter;