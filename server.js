const express=require('express');
const jsonBodyParser=require('body-parser').json;
const hbs=require('hbs');
const mongoose=require('mongoose');
var morgan       = require('morgan');
var User=require('./models/newSchema')
mongoose.connect("mongodb://localhost:27017/newDB");
var app=express();
const router=require('./route');
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');
app.use(jsonBodyParser());
app.use(morgan('dev'))
// app.use(express.static(__dirname+'/public'));
// app.get('/',function(req,res){
//
//   res.send({
//     name:"akshay",
//     Like:[
//       "Biking",
//       "Cities"
//     ]
//   });
// });
// app.use(function(req,res,next){
//      console.log("First middleware");
//      next();
// });
//
// app.use("/different/:id",function(req,res,next){
//      console.log("Second middleware"+ req.params.id);
//      next();
// });
app.use("/questions",router);

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/',function(req,res){
     res.render('home.hbs',{
       pageTitle: 'Home Page',
       welcomeMessage: 'Welcome to my website'
     });
});

app.get('/about',function(req,res){
    res.render('about.hbs',{
      pageTitle: 'About Page'
    });
});
var port=process.env.PORT || 3000;

app.listen(port,function(){
    console.log("App is running on "+ port);
});
