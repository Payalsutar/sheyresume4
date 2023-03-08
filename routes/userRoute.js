const express = require('express')
const router = express.Router();

const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const fs = require('fs');
const app = express();


app.use(express.json());

require('./userRoute')
const User = require('../models/userSchema');

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());



router.post("/login", async (req, res) => {
  try {
    const result = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (result) {
      res.send(result);
    } else {
      res.status(400).json("Login failed");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    const newuser = new User(req.body);
    await newuser.save();

    res.send("Registration Successfull");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/update", async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.body._id }, req.body);
    const user = await User.findOne({ _id: req.body._id });
    res.send(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

// router.post('/',upload,function(req,res,next){
//   const empDetails = new empModel({
//     image:req.body.filename
//   })
// })





module.exports=router



