import { Router } from "express";
import { mapResourceWithRole,mapRolewithUser,updatePersmision } from "../controller/rolesResourceMappingSchemaController.js";

const ResourceMappingapiRout = Router();
ResourceMappingapiRout.route("/mapRoleWithResource").post(mapResourceWithRole)
ResourceMappingapiRout.route("/mapRolewithUser").post(mapRolewithUser)
ResourceMappingapiRout.route("/updatePersmision").post(updatePersmision)




export {ResourceMappingapiRout}
