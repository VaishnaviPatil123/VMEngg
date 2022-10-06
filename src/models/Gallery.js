const mongoose=require("mongoose")
const Gallery=mongoose.Schema({
    name:String,
    links:[
        {
  url:String,
  title:String
        },
    ],

})
module.exports=mongoose.model("gallery",Gallery)