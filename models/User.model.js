const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    username:{type:String},
    email: String,
    password: String,
    number: Number
})

const User = mongoose.model("User", UserSchema)

module.exports=User