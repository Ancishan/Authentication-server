import { z } from "zod";


const LoginValidationSchema = z.object({
 email: z.string({required_error: "Email is required"}).email(),
 password: z.string({required_error: 'password must be need'})
})

export const AuthValidation ={LoginValidationSchema}