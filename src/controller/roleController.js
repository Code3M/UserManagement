import mongoose from 'mongoose';
import {Roles} from '../model/role.model.js';
import { User } from "../model/user.model.js"
import { RolesResourceMappingSchema } from '../model/RolesResourceMapping.model.js';
//Create/Update/Delete a role from the Roles Table. On delete should also delete the corresponding Roles Resource Mappings.
const createRole = async (req,res) => {
  const {title, description,User_id} =req.body
  console.log("UserID "+User_id);
  const role = await Roles.create({
    title, description
  })
  const role_id = role._id;
  return res.status(201).json({
      role_id,
      message : "Role Created"
  })
}

const deleteRole = async (req,res) => {
  const {roles_id} =req.body
  await Roles.findOneAndDelete(roles_id);
  await User.findOneAndUpdate(
    {role_id:roles_id}, 
    {
        $unset: {
          role_id:1
        }
    })
  await RolesResourceMappingSchema.findOneAndUpdate({role_id:roles_id}, 
    {
        $unset: {
          role_id:1
        }
    })  
    res.status(200).json({Role:"DEleted"})
};




export {createRole,deleteRole
  }
