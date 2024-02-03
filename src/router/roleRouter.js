import { Router } from "express";
import {createRole,deleteRole} from "../controller/roleController.js"

const RoleapiRout = Router();
RoleapiRout.route("/createRole").post(createRole)
RoleapiRout.route("/deleteRole").delete(deleteRole)


export {RoleapiRout}