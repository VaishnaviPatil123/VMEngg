const mongoose=require("mongoose")
const Serv2=mongoose.Schema({
    img2:String,
    title2:String,
    description2:String
})
module.exports=mongoose.model("serv2",Serv2);