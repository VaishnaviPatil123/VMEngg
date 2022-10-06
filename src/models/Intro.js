const mongoose=require("mongoose")
const Intro=mongoose.Schema({
    
    title:String,
    description:String,
    linkText:String,
    link:String
})
module.exports=mongoose.model("intro",Intro)