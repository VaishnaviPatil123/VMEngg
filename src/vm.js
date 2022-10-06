const express=require("express")
const hbs=require("hbs")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const app=express()
const routes=require('./routes/main')
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")
const Intro=require("./models/Intro")
const Owner = require("./models/Owner")
const Footer = require("./models/Footer")
const Gettouch = require("./models/Gettouch")
const Gallery = require("./models/Gallery")
const Proj = require("./models/Proj")
const Serv = require("./models/Serv")
const Serv2 = require("./models/Serv2")




app.use(bodyParser.urlencoded({
  extended:true
}))
// /staic/css/style.css
app.use('/static',express.static("public"))

app.use('',routes)


// db connection
  mongoose.connect("mongodb://localhost/vmengg",()=>{
    console.log("db connected");


 




  //     Footer.create({
  //       title:"VM Engineering Projects",
  //       disp:"VM Engineering Projects Manufacturer of fabrication work, rolling shutter fabricators & door fabricators in Pune, Maharashtra.",
  //       add:"Sr No 10,PL 72,Tuljai Chatrachaya,Near Desai Vakhar,Bypass Road Kharadi,Pune-411014",
  //       email:"vmengineeringprojects@gmail.com",
  //       links:[
  //         {
  //           linktext:"Home",
  //          linkurl:"/"
  //         },
  //         {
  //           linktext:"Services",
  //          linkurl:"/services"
  //         },
  //         {
  //           linktext:"Projects",
  //          linkurl:"/projects"
  //         },
  //         {
  //           linktext:"About",
  //          linkurl:"/about"
  //         }
  //       ],
  //       phone:[
  //         {
            
  //           ph:"+ 91 7020810586"
  //         },
  //         {
  //             ph:"+ 91 8888798857"
  //         }
  
  //       ]

  // })


    // Owner.create([
    //   {
    //          img:"/static/images/manoj.jpg",
    //         title:"Manoj Patil",
    //         description:"Provide design for steel-structure,fabrication."
            
    //       },
    //       {
    //         img:"/static/images/manoj.jpg",
    //         title:"Vinayak Sutar",
    //         description:"Provide design for steel-structure,fabrication."
            
    //   }
    // ])

    // Intro.create({
    //   title:'Who We Are',
    //     description:'“VM Engineering Projects” is reliable Fabricator of wide range of  heavy structural steel works and on site erector of Structural steel,Prefabricated-Structures and construction works.',
    //      linkText:'Learn More',
    //      link:'/about'

    // })

    // Service.create([
    //   {
    //     icon:'fa-brands fa-accusoft',
    //     title:'Designing',
    //     description:'Provide design for steel-structure,fabrication.',
    //     linkText:'check',
    //     link:'/services'
    //   },
    //   {
    //     icon:'fa-solid fa-sack-dollar',
    //     title:'Estimation',
    //     description:'Provide design for steel-structure,fabrication.',
    //     linkText:'check',
    //     link:'/services'
    //   },
    //   {
    //     icon:'fa-solid fa-file-certificate',
    //     title:'Sanctioning',
    //     description:'Provide design for steel-structure,fabrication.',
    //     linkText:'check',
    //     link:'/services'
    //   },
    //   {
    //     icon:'fa-solid fa-bridge-suspension',
    //     title:'Structural-Fabrication',
    //     description:'Provide design for steel-structure,fabrication.',
    //     linkText:'check',
    //     link:'/services'
    //   }
    // ])
    

  //  Slider.create([
  //   {
  //     title:"To strengthen the infrastructure fabric by aligning our passion,resources,and capabilities with customer growth.",
  //     imageurl:"/static/images/z5.jpg"
  //   },
  //   {
  //     title:"From up to down it’s made up of the best quality.",
  //     imageurl:"/static/images/z1.jpg"
  //   },
  //   {
  //     title:"We are pro in our passion so you can just leave it on us.",
  //     imageurl:"/static/images/z2.jpg"
  //   }
  //  ])

    // Detail.create({
    //   brandName:"VM ENGINEERING PROJECTS",
    //   brandIconurl:"C:\Users\vaishnavi\Desktop\mywebproject\vmEngg\public\images\logo.jpg",
    //   links:[
    //     {
    //       label:"Home",
    //       url:"/"
    //     },
    //     {
    //       label:"Services",
    //       url:"/services"
    //     },
    //     {
    //       label:"Projects",
    //       url:"/projects"
    //     },
    //     {
    //       label:"About",
    //       url:"/about"
    //     },
    //     {
    //       label:"Contact",
    //       url:"/contact"
    //     }
    //   ]
      
    // })

   

  //   Gettouch.create([
  //     {
  //       icon:'fa-solid fa-location-dot',
  //       title:'Address',
  //       description:'Provide design for steel-structure,fabricaSr No 10,PL 72,Tuljai Chatrachaya,Near Desai Vakhar,Bypass Road Kharadi,Pune-411014.'
  //   },
    
  //     {
  //       icon:'fa-sharp fa-solid fa-phone',
  //       title:'Phone',
  //       description:'9923131564'
  //   },
    
  //     {
  //       icon:'fa-solid fa-envelope',
  //       title:'Email',
  //       description:'vmengineeringprojects@gmail.com'
  //   }
    
  // ])

//     Gallery.create({
//       name:"Our Projects",
//       links:[
//         {
//             url:"static/images/z2.jpg",
//             title:"Baner Site"
//         },
//         {
//           url:"static/images/z2.jpg",
//           title:"Baner Site"
//       },
//       {
//         url:"static/images/z2.jpg",
//         title:"Baner Site"
//     },
//     {
//       url:"static/images/z2.jpg",
//       title:"Baner Site"
//   },
//   {
//     url:"static/images/z2.jpg",
//     title:"Baner Site"
// },
// {
//   url:"static/images/z2.jpg",
//   title:"Baner Site"
// }
//       ]
//     })

// Proj.create({
//   name:"Our Projects",
//          links:[
//           {
//            url:"static/images/z2.jpg"
//          },
//          {
//           url:"static/images/z2.jpg"
//         },
//         {
//           url:"static/images/z2.jpg"
//         },
//         {
//           url:"static/images/z2.jpg"
//         },
//         {
//           url:"static/images/z2.jpg"
//         },
//         {
//           url:"static/images/z2.jpg"
//         },
//         {
//           url:"static/images/z2.jpg"
//         },
//         {
//           url:"static/images/z2.jpg"
//         }
//         ]

// })


// Serv.create([
//       {
//         img:"static/images/z2.jpg",
//         title:"Designing",
//         description:"A good example of a paragraph contains a topic sentence, details and a conclusion.'There are many different kinds of animals that live in China.Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush."
//     },
//     {
//         img:"static/images/z2.jpg",
//         title:"Designing",
//         description:"A good example of a paragraph contains a topic sentence, details and a conclusion.'There are many different kinds of animals that live in China.Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush."
//     },

//   ])


// Serv2.create([
//         {
//           img2:"static/images/z2.jpg",
//           title2:"Designing",
//           description2:"A good example of a paragraph contains a topic sentence, details and a conclusion.'There are many different kinds of animals that live in China.Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush."
//       },
//       {
//           img2:"static/images/z2.jpg",
//           title2:"sanscening",
//           description2:"A good example of a paragraph contains a topic sentence, details and a conclusion.'There are many different kinds of animals that live in China.Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush."
//       },
  
//     ])
})

//(template engine hbs)
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")
 mongoose.con
app.listen(5000);