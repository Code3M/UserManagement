import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";
const ACCESS_TOKEN_SECRET = "VNNQvGOfeZcJ1eoM0ys60sDSf3tMDzxPjObajwqTMW8sChJV7KjGnUECl8hyn5bxPpPPvKqsXsMfhjtbhCBu4U8PLXdJQGoLlaL3"

export const verifyJwt = async (req,res,next) => 
{
    try {
        const token = await req.cookies?.accessToken || 
        req.header("Authorization")?.replace("Bearer ","")
    
        if (!token) {
            console.log("Invalid Token");
        }
    
        //Verify jwt token
        const decodedToken = jwt.verify(token,ACCESS_TOKEN_SECRET)
    
        //fetch user from decodedToken
        const user = await User.findById(decodedToken._id)
        
        if (!user) {
            console.log("Error "+error);
        }
         req.user = user
         res.json({
            user,
            message:"User In Authorize"
         })
         next()
    
    } catch (error) {
        console.log("Error "+error);
    }
}

