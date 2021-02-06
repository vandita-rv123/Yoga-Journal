const express = require("express");
const bodyParser = require("body-parser");
const mongoose =require('mongoose');


mongoose.connect("mongodb://localhost:27017/infosDB",{ useNewUrlParser:true , useUnifiedTopology: true}) ;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');





const infoSchema = new mongoose.Schema({
  yname : {
    type:String,
    required:true,
  },
  cname : {
    type:String,
    required:true,
  },
  email : {
    type:String,
    required:true,
    unique:true,
  },
  password : {
  type:String,
  required:true,
},

});

const Info = mongoose.model("Info",infoSchema);




app.get("/sign_up",function(req,res){
  res.render( "signup");
})

app.post("/sign_up",function(req,res){
var yourname = req.body.name;
var colname= req.body.collegename;
var eml=req.body.email;
var paswrd = req.body.psw;
const infos = new Info({
  yname:yourname,
  cname:colname,
  email:eml,
  password:paswrd,
});




Info.create(infos,function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("success");
  }
})
})















app.get("/",function(req,res){
  res.render( "index");
})

app.get("/HOME",function(req,res){
  res.render( "index");
})
app.get("/ABOUT_US",function(req,res){
  res.render( "us");
})
app.get("/HISTORY",function(req,res){
  res.render( "history");
})
app.get("/POSES",function(req,res){
  res.render( "poses");
})
app.get("/MEDETATION",function(req,res){
  res.render( "med");
})
app.get("/THERAPIES",function(req,res){
  res.render( "thpy");
})
app.get("/LIFE_HOPE",function(req,res){
  res.render( "l&h");
})
app.get("/diet_plan",function(req,res){
  res.render( "index1");
})
app.get("/attain_peace",function(req,res){
  res.render( "index3");
})
app.get("/health_drinks",function(req,res){
  res.render( "index2");
})
app.get("/pranayama",function(req,res){
  res.render( "index4");
})
app.get("/restoration_yoga",function(req,res){
  res.render("index5");
})
app.get("/medtyp",function(req,res){
  res.render( "medtyp");
})
app.get("/itlvl",function(req,res){
  res.render("itlvl");
})





app.listen(3000,function(){
  console.log("server is up and running on port 3000.");
})
