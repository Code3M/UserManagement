/**
 Users
user_id uuid(v4) PK 
name varchar(50)
email varchar(50)
role_id uuid FK (roles)
phone float
is_active boolean
created_on timestamp
updated_on timestamp
 */
import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema({
    user_id: {
      type: String
    },
    userName: {
      type: String
    },
    email: {
      type: String
    },
    role_id: {
      type: Schema.Types.ObjectId,
      ref: 'Roles',
    },
    phone: {
      type: Number,
    },
    is_active: {
      type: Boolean,
      default: true,
    }
  },{timestamps:true});
  const ACCESS_TOKEN_SECRET = "VNNQvGOfeZcJ1eoM0ys60sDSf3tMDzxPjObajwqTMW8sChJV7KjGnUECl8hyn5bxPpPPvKqsXsMfhjtbhCBu4U8PLXdJQGoLlaL3"
  userSchema.methods.generateAccessToken = function (){
    return jwt.sign({
        _id :this._id,
        email :this.email,
    },
    ACCESS_TOKEN_SECRET
    )
}
export const User = mongoose.model('User', userSchema);
