import { RolesResourceMappingSchema } from "../model/RolesResourceMapping.model.js"
import { Roles } from "../model/role.model.js"
import { Resource } from "../model/resources.model.js"
import { User } from "../model/user.model.js"
const mapResourceWithRole = async(req,res)=>{
    const {role_id,resource_id,permission,} = req.body

    const mapping = await RolesResourceMappingSchema.create({permission,
        resource_id,
        role_id
    }) 
    res.status(200).json({mss:"Resorce Mapped"})
}
const mapRolewithUser = async(req,res)=>{
    const {role_id,User_id} = req.body
    await User.findOneAndUpdate(
        {_id:User_id}, 
        {
            $set: {
              role_id:role_id
            }
        },
        {
            new: true
        })
        res.json({mss:"Mapped"})
}

//Create an API to Update Role Resource Mapping Permission.
const updatePersmision = async(req,res)=>{
    const {mapResourceWithRole_id,permission} = req.body
    await RolesResourceMappingSchema.findByIdAndUpdate(
        {_id:mapResourceWithRole_id},
        {
            $set:{permission}
        }
   )
   res.json({mss:"Permission Changed"})
}

export {mapResourceWithRole,mapRolewithUser,updatePersmision}