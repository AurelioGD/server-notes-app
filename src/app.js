const express=require('express')
const app=express()
const mongoose = require('mongoose');

//importing routes
const Routes= require('./routes/index.js')

//connecting with mongodb
mongoose.connect('mongodb://localhost:27017/notesapp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("BD connected"))
    .catch((e)=>console.log(e))

//using the routes
app.use(Routes)


module.exports=app;