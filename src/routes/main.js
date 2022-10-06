const { request, response } = require("express");
const express = require("express");
const contactform = require("../models/contactform");
const routes=express.Router()
const Detail=require("../models/Detail");
const Service = require("../models/Service");
const Slider = require("../models/Slider");
 const Intro=require("../models/Intro");
const Owner = require("../models/Owner");
const Footer = require("../models/Footer");
const Gettouch = require("../models/Gettouch");
const Gallery = require("../models/Gallery");
const Proj = require("../models/Proj");
const Serv = require("../models/Serv");
const Serv2 = require("../models/Serv2");




routes.get("/",async(req,res)=>{
  
   const details= await Detail.findOne({"_id":"6308a93244a312da3dd733f9"})
   const slides=await Slider.find()
   const services=await Service.find()
    const intro=await Intro.find()
    const owner=await Owner.find()
    const footer=await Footer.findOne({"_id":"6310c64b443c277aa65c8c16"})
    const gettouch=await Gettouch.find()
    const gallery=await Gallery.findOne({"_id":"6321c4cfa78a2339653ba624"})
    const proj=await Proj.findOne({"_id":"6321fa1437e69f3d78ffc47c"})
    const serv=await Serv.find()
    const serv2=await Serv2.find()
   //console.log(details)
   //console.log(slides)
   //console.log(intro)
    res.render("index",{
        details:details,
        slides:slides,
        services:services,
         intro:intro,
         owner:owner,
         footer:footer,
         gettouch:gettouch,
         gallery:gallery,
         proj:proj,
         Serv:serv,
         Serv2:serv2
    })
})


routes.get("/services",async(req,res)=>{
    const details= await Detail.findOne({"_id":"6308a93244a312da3dd733f9"})
    const footer=await Footer.findOne({"_id":"6310c64b443c277aa65c8c16"})
    const serv=await Serv.find({})
    const serv2=await Serv2.find({})
    res.render("Services",{
        details:details,
        footer:footer,
        serv:serv,
        serv2:serv2
})
})

routes.get("/projects",async(req,res)=>{
  const details= await Detail.findOne({"_id":"6308a93244a312da3dd733f9"})
  const footer=await Footer.findOne({"_id":"6310c64b443c277aa65c8c16"})
  const gallery=await Gallery.findOne({"_id":"6321c4cfa78a2339653ba624"})
  res.render("Projects",{
      details:details,
      footer:footer,
      gallery:gallery
})
})

routes.get("/about",async(req,res)=>{
  const details= await Detail.findOne({"_id":"6308a93244a312da3dd733f9"})
  const footer=await Footer.findOne({"_id":"6310c64b443c277aa65c8c16"})
  const services=await Service.find({})
  res.render("About",{
      details:details,
      footer:footer,
      services:services
})
})

routes.get("/contact",async(req,res)=>{
  const details= await Detail.findOne({"_id":"6308a93244a312da3dd733f9"})
  const footer=await Footer.findOne({"_id":"6310c64b443c277aa65c8c16"})
  const gettouch=await Gettouch.find({})
  res.render("Contact",{
      details:details,
      footer:footer,
      gettouch:gettouch
})
})



routes.post("/contact-form",async(request,response)=>{
    // console.log("data submitted")
    // console.log(request.body)

    //save the data to db
  try
  {
     const data=await contactform.create(request.body)
     console.log(data)
     response.redirect("/")
  }
  catch(e)
  {
    console.log(e)
    response.redirect("/")
  }

})
module.exports=routes
