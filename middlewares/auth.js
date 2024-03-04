const express=require('express');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const mongoose=require("mongoose");
const users =  require("../models/user.js");

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return res.sendStatus(401);
    }
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) 
      {
        return res.sendStatus(401);
      }
      req.user = user;
      next();
    });
};
  

const verifyUser = (req, res, next) => {
  verifyToken(req, res, (err) => {
      if (err) 
      {
          return res.sendStatus(401);
      }

      if (req.user.id === req.params.id || req.user.role==="admin") 
      {
          next();
      } 
      else 
      {
          return res.sendStatus(403);
      }
  });
};


const verifyAdmin = (req, res, next) => 
{
  verifyToken(req, res, (err) => 
  {
      if (err) 
      {
          return res.sendStatus(401);
      }

      if (req.user.role === "admin") 
      {
          next();
      } 
      else 
      {
          return res.sendStatus(403);
      }
  });
};




module.exports={verifyAdmin,verifyToken,verifyUser};
