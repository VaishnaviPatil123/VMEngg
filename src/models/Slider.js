const mongoose=require("mongoose")
const Slider=mongoose.Schema({
    title:String,
    imageurl:String,
    class:String
})
module.exports=mongoose.model(' slider',Slider);