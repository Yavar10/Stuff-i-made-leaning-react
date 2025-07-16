const express=require('express');//including the express framework
const app=express();//initialise an application

const port=5000;
   
//starting app ya fir server jo bhi h
app.get('/',(req,res)=>{
    res.send("helooooo boooogieeeeee")
});
app.get('/tab',(req,res)=>{
    res.send("helooooo loooogieeeeee")
});
app.listen(port,()=>{//app listens to this port and serves it ie triggers a function on its start
    console.log("Application has started")
});
