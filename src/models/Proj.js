const mongoose=require("mongoose")
const Proj=mongoose.Schema({
    title:String,
    links:[
        {
    url:String
}
    ],
})
module.exports=mongoose.model("proj",Proj)
    