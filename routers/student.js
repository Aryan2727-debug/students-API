const express = require("express");
const Student = require("../models/students");

//initializing the Router
const router = new express.Router();

//create a new student

// //USING PROMISES :-
// app.post("/students", (req,res) => {

//     console.log(req.body);

//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((err) => {
//         res.status(400).send(err);
//     });

// });


//USING ASYNC/AWAIT :-
router.post("/students", async (req,res) => {                     //we are using the POST http request as we want to CREATE the data

    try{
        console.log(req.body);

        const user = new Student(req.body);
    
        const createUser = await user.save();
        
        res.status(201).send(createUser);
    }catch(err){
        res.status(400).send(err);
    };

});

//READING the data using GET http request

router.get("/students", async (req,res) => {

    try{
      const result = await Student.find();
      res.send(result);
    }catch(err){
      res.send(err);
    };

});

//Reading data of individual student using GET http request

// app.get("/students", async (req,res) => {

//     try{
//       const result = await Student.find({name : "Armaan Shourie"});
//       res.send(result);
//     }catch(err){
//         res.send(err);
//     };

// });


//DELETING the data using DELETE http request

router.delete("/students", async (req,res) => {

    try{
        const result = await Student.deleteMany({name : "Arti Shourie"});
        res.send(result);
    }catch(err){
        res.send(err);
    };

});


//UPDATING the data using PUT and PATCH http requests

router.patch("/students", async (req,res) => {                //using PATCH http request
    
    try{
      const result = await Student.updateOne({name : "Aryan Dev"}, {$set : {email : "shouriearyandev@gmail.com"}});
      res.send(result);
    }catch(err){
      res.send(err);
    };

});

module.exports = router;