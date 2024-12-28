import { IUser } from "../user/user.interface";
import User from "../user/user.model";
import { ILoginUser } from "./auth.interface";
import  bcrypt from 'bcrypt';

const register = async (payload: IUser) => {
    const result = await User.create(payload)
    return result;
}

const login = async(payload: ILoginUser) =>{
    const user = await User.findOne({email: payload?.email})

    if(!user){
        throw new Error('user not found')
    };

    const isPasswordMatch = await bcrypt.compare(payload?.password, user?.password);
    if(!isPasswordMatch){
        throw new Error('password did not matched')
    }

} 


export const AuthServices = {
    register,
    login
}