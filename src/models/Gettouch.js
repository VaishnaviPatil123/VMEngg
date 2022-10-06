const mongoose=require("mongoose")
const Gettouch=mongoose.Schema({
    icon:String,
    title:String,
    description:String
})
module.exports=mongoose.model("gettouch",Gettouch);