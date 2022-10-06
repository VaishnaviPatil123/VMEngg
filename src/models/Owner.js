const mongoose=require("mongoose")
const Owner=mongoose.Schema({
    img:String,
    title:String,
    description:String
    
})
module.exports=mongoose.model("owner",Owner)