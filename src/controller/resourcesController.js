/*
Create/Update/Delete a resource from the Resources Table. 
On Delete Resource should delete all mapped rows from the mapping table.

*/

import { RolesResourceMappingSchema } from "../model/RolesResourceMapping.model.js"
import { Resource } from "../model/resources.model.js"

const createResource = async(req,res) =>{
    const {resource_type,resource_name} = req.body
    const resource = Resource.create({
        resource_type,resource_name
    })
    res.status(200).json({resource,message:"Resource Created"})
}
const deleteResource = async(req,res)=>{
    const {_id} =req.body
    await Resource.findByIdAndDelete(_id)
    await RolesResourceMappingSchema.findOneAndUpdate({resource_id:_id}, 
        {
            $unset: {
                resource_id:1
            }
        })  
    res.status(200).json({Message:"Resource Deleted"})
  }
export {createResource,deleteResource}