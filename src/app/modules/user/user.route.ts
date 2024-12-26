import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { UserValidation } from "./user.validation";
import { userController } from "./user.controller";

const userRouter = Router()

userRouter.post('/create-user', validateRequest(UserValidation.userValidationSchema), userController.createUser)

export default userRouter;