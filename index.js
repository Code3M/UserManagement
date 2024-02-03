import express from 'express'
import mongoose from 'mongoose';
import { apiRout } from './src/router/userRouter.js';
import { RoleapiRout } from './src/router/roleRouter.js';
import { ResourceapiRout } from './src/router/resourceRouter.js';
import { ResourceMappingapiRout } from './src/router/resourceMappingRouter.js';
import cookieParser from 'cookie-parser';
const app = express()
app.listen(8099,()=>{
    console.log(`server running at 8099`);
})
const mongoDB_URL = "mongodb://localhost:27017"
const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/userManagment')
        console.log("DB connected");
    } catch (error) {
        console.log("MongoDB connetion fail: ",error);
    }
}

connectDB()
app.use(cookieParser())
app.use(express.json())
app.use("/api/users",apiRout)
app.use("/api/role",RoleapiRout)
app.use("/api/resource",ResourceapiRout)
app.use("/api/resourceMapping",ResourceMappingapiRout)

//Create an API for User Authentication using JWT Token.
//app.use("/api/userValidation",)
