const express=require('express')
const router=express.Router();

const User = require('../models/userModel')

//show
router.get('/users',async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        }
    )
    } 
})

//create
router.post('/users',async(req,res)=>{
    try{
        console.log("PPOSTTTTT")
       const {name,age,weight}=req.body;
       const newUser=new User({name,age,weight});
       await newUser.save(newUser);
       res.status(200).json({
        success:true,
        message:newUser.name+" is stored"})
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        }
    )
    }
})

//edit
router.put('/users/:id',async(req,res)=>{
    const {id}=req.params;
    const {name,age,weight}=req.body;
    try{
        const updatedUser=await User.findByIdAndUpdate(id,{name,age,weight});
        if(!updatedUser)
        {
            res.json({
                message:"USER not found"
            })
        }
        res.status(200).json({
            success:true,
            user:updatedUser
        })
    }

    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        }
    )
    }
})


router.delete('/users/:id',async(req,res)=>{
    const {id}=req.params;
    const {name,age,weight}=req.body;
    try{
        const deletedUser=await User.findByIdAndDelete(id,{name,age,weight});
        if(!deletedUser)
        {
            res.json({
                message:"USER not found"
            })
        }
        res.status(200).json({
            success:true,
            user:deletedUser
        })
    }

    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        }
    )
    }
})

module.exports=router