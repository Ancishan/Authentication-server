import { Request, Response } from "express";
import { AuthServices } from "./auth.services";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";


const register = catchAsync( async(req: Request, res:Response) =>{

    const result = await AuthServices.register(req.body);

    sendResponse(res, {
        status: true,
        statusCode: StatusCodes.CREATED,
        message: 'user is register successfully',
        data: result
    })

})

const login = catchAsync(async(req: Request, res: Response) =>{
 const result = await AuthServices.login(req.body);
 sendResponse(res, {
    status: true,
    statusCode:StatusCodes.CREATED,
    message: 'user is logged in successfully',
    data: result,
 })
})

export const AuthController = {
    register,
    login
}