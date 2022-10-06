const mongoose=require("mongoose")
const Serv=mongoose.Schema({
    img:String,
    title:String,
    description:String
})
module.exports=mongoose.model("serv",Serv);

