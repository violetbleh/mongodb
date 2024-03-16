//import
const express= require("express");
const morgan= require("morgan");
const db= require("./mongodb");
const studentRoute =require('./routes/studentRoute');
//initialize
const app=express();
app.use(morgan('dev'));
app.use('/api',studentRoute)


app.listen(7000,()=>{
    console.log("crashed");
})


