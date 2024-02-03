import { Router } from "express";
import { createResource,deleteResource } from "../controller/resourcesController.js";

const ResourceapiRout = Router();
ResourceapiRout.route("/createResource").post(createResource)
ResourceapiRout.route("/deleteResource").delete(deleteResource)


export {ResourceapiRout}