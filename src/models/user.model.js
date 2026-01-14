import mongoose,{Schema}from "mongoose";
//if we dont write {Schema} then we have to write mongoose.Schema every time
const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true, //removes spaces before and after the string
            index:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true,
        },
        avatar:{
            type:String, // cloudinary url
            required:true,
        },
        coverImage:{
            type:String, // cloudinary url
            required:false,
        },
        watchHistory:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Video",
            }
        ],
        password:{
            type:String,
            required:[true,'Password is required'],

        },
        refreshTokens:{
            type:String
        },
        
    },{timestamp:true}
)
export const User=mongoose.model("User",userSchema);