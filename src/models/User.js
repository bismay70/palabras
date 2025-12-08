import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { lowercase } from "zod";
import { required } from "zod/v4/core/util.cjs";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    isPremiumUser:{
        type:Boolean,
        default:false
    }
})

export default mongoose.models.User || mongoose.model("User",UserSchema)