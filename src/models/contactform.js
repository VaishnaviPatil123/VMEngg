const mongoose=require("mongoose");
const contactform=mongoose.Schema({
    email:String,
    phone:String,
    msg:String

})
module.exports=mongoose.model("queries",contactform)