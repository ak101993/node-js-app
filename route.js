const express=require('express');
var router=express.Router();
var User=require('./models/newSchema')
//GET request to all questions
router.get('/',function(req,res){
  //console.log("GET request has been made");
  // res.json({
  //    response:"get request has been made"
  // });
  User.find(function(err,user){
      if(err){
         res.send(err);
      }
      res.json(user);
  });
});
//POST request
router.post('/',function(req,res){
  //console.log(req);
  // res.json({
  //    response:"post request has been made",
  //    body:req.body
  // });
  var user=new User();
  user.name=req.body.name;
  user.save(function(err){
     if(err){
       res.send(err);
     }
     res.json({message:'created.......'});
  });
});
//GET request for particluar id
router.get('/:id',function(req,res){
  //console.log("GET request has been made");
  // res.json({
  //    response:"get request has been made on ID "+ req.params.id
  // });
  User.findById(req.params.id,function(err,user){
      if(err){
         res.send(err);
      }
      res.json(user);
  });

});
module.exports=router;
