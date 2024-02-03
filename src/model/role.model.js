/**
 * Roles
role_id uuid PK 
title varchar(50)
description text
created_on timestamp
updated_on timestamp

 */

import mongoose,{Schema} from "mongoose";

const rolesSchema = new Schema({

    title: {
      type: String
    },
    description: {
      type: String,
    },
    created_on: {
      type: Date,
      default: Date.now,
    },
    updated_on: {
      type: Date,
      default: Date.now,
    },
  });
  
export const Roles = mongoose.model("Roles",rolesSchema)