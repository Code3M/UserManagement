import { User } from "../model/user.model.js"
import { RolesResourceMappingSchema } from "../model/RolesResourceMapping.model.js"
import { Roles } from "../model/role.model.js"
import cookieParser from "cookie-parser"

/**
 * Create/Update/Delete/Get an user from the Users Table. 
 * Also to get a user by User ID.
 */
const registerUser = async(req,res)=>{
    const {userName, email,phone,is_active} =req.body

    const user = await User.create({
        userName,
        email,
        phone,
        is_active
    })
    const accessToken = user.generateAccessToken()
    const options = {
        httpOnly: true,
        secure: true
    }
    return res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .json({
        user,
        message : "User Created"
    })
}

// to get a User base on email

const findUser = async(req,res) => {
    const _id = req.params.id
    const user = await User.findOne({
        _id
    })
    return res.status(200).json({
        user,
        message : "User Found"
    })

}

const findUserRoleandResource = async(req,res) => {
    const _id = req.params.id
    const user = await User.findOne({
        _id
    })
    const userRole = await Roles.findOne({
        _id:user.role_id,
    })
    const userResource = await RolesResourceMappingSchema.findOne({
        role_id:userRole._id,
    })
    return res.status(200).json({
        user,
        userRole,
        userResource,
        message : "User Found"
    })

}

//update user details base on id

const updateUser = async(req,res) =>{
    const userid = req.params.id;
    console.log(userid);
    const { userName, email } = req.body;

    const user = await User.findOneAndUpdate(
        {_id:userid}, 
        {
            $set: {
                userName,
                email
            }
        }
    );

    return res.status(200).json({
        user,
        message: "User Detail Updated"
    });
};
// Delete User 
const removeUser = async (req,res) =>{
    const user_id = req._id
    const user = await User.findOneAndDelete(user_id)

    return res.status(200).json({
        user,
        message : "User Removed"
    })
}
export {
    registerUser,
    findUser,
    updateUser,
    removeUser,
    findUserRoleandResource,

}