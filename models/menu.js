const mongoose = require('mongoose');
const express=require("express");

const Schema=mongoose.Schema;


const MenuSchema = new Schema({
  restaurant_id: 
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required:true,
    unique:true
  },
  food_items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'food',
  }],
});

module.exports = mongoose.model('Menu', MenuSchema);
