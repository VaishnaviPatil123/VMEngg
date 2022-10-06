const mongoose=require("mongoose");
const Footer=mongoose.Schema({
    title:String,
    disp:String,
    add:String,
    email:String,
    links:[
        {
           linktext:String,
           linkurl:String
        },
    ]
    
     
});
module.exports=mongoose.model("footer",Footer)