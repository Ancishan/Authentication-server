import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
import config from "../../config";
import bcrypt from 'bcrypt'

const userSchema = new Schema<IUser>({
 name: {
    type: String,
    required: [true, 'Please Provide your name'],
 },
 email:{
    type: String,
    required: [true, 'Please Provide your email'],
   unique: true,
   },
 password:{
    type: String,
    required: true,
    select: false,
 },
 photo: String,
})

userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; 
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds),
    );
  
    next();
  });

  userSchema.post('save', function(doc, next){
    doc.password = '';
    next();

  });

  const User = model<IUser>('User', userSchema)

  export default User;