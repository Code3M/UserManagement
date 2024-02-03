import { Router } from "express";
import {createRole,deleteRole} from "../controller/roleController.js"
//Create/Update/Delete a role from the Roles Table. 
//On delete should also delete the corresponding Roles Resource Mappings.
const RoleapiRout = Router();
RoleapiRout.route("/createRole").post(createRole)
RoleapiRout.route("/deleteRole").delete(deleteRole)


export {RoleapiRout}