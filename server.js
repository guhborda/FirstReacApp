const express = require('express');
const app = express();
const mongoose = require('mongoose');
const requireDir = require('require-dir');

mongoose.connect('mongodb://localhost:80/mongodb',{useUnifiedTopology:true,useNewUrlParser:true});
requireDir('./src/models');
app.get('/',(req,res)=>{
   document.load('./src/App.js');
});
app.listen(3000);