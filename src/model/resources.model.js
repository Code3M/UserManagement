/**
 * resource_id uuid PK 
resource_type ENUM(API/WIDGET/MODULE)
resource_name varchar(50)
created_on timestamp
updated_on timestamp

 */

import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
    resource_type: {
      type: String,
      enum: ['API', 'WIDGET', 'MODULE'],
      required: true,
    },
    resource_name: {
      type: String,
      maxlength: 50,
      required: true,
    },
   
  },{timestamps:true});

export const Resource = mongoose.model("Resource",resourceSchema)