/**
 * RolesResourceMapping
role_resource_id uuid PK 
role_id  uuid FK 
resource_id  uuid FK 
permission ENUM(READ/EDIT)
created_on timestamp
updated_on timestamp

 */
import mongoose,{Schema} from "mongoose";

const rolesResourceMappingSchema = new Schema({
    role_id: {
      type: Schema.Types.ObjectId,
      ref: 'Roles', 
    },
    resource_id: {
      type: Schema.Types.ObjectId,
      ref: 'Resource', 
    },
    permission: {
      type: String,
      enum: ['READ', 'EDIT'],
      default:'READ'
    }},{timestamps:true});

export const RolesResourceMappingSchema = mongoose.model("RolesResourceMappingSchema",rolesResourceMappingSchema)