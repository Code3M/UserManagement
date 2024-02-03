import { Router } from "express";
import {registerUser,findUser,updateUser,removeUser,findUserRoleandResource} from "../controller/userController.js"
import { verifyJwt } from "../middleware/auth.js";

const apiRout = Router();
apiRout.route("/register").post(registerUser)
apiRout.route("/findUser/:id").get(findUser)
apiRout.route("/updateUser/:id").put(updateUser)
apiRout.route("/removeUser").delete(removeUser)
//Get a user by User ID with assigned role and nested resources.
apiRout.route("/findUserRoleandResource/:id").get(findUserRoleandResource)
//User Authentication Using JWT
apiRout.route("/validate").post(verifyJwt)
export {apiRout}