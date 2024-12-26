import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.services";



const createUser = catchAsync (
    async(req, res) =>{
        const payload = req.body
        const result = await userServices.createUser(payload)

        sendResponse(res, {
            statusCode: StatusCodes.CREATED,
            message:'User created successfully',
            data: result,
        })

    })

export const userController = {
    createUser
}