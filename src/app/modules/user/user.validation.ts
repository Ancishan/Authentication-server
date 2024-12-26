import { object, z } from "zod";


const userValidationSchema = z.object({
    body:z.object({
        name:z.string({
            required_error: "Name must be String",
        }),
        email:z.string({
            required_error: "email must be String",
        }),
        password:z.string({
            required_error: 'Password is required for your safety',

        }),
        photo:z.string({
            required_error: 'pic errr'
        })

    })
})
export const UserValidation = {
    userValidationSchema
}