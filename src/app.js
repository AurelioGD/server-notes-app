const express=require('express')
const app=express()
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors=require('cors')
//importing routes
const Routes= require('./routes/index.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//connecting with mongodb
mongoose.connect('mongodb://localhost:27017/notesapp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("BD connected"))
    .catch((e)=>console.log(e))

//using the routes
app.use('/api',Routes)


module.exports=app;