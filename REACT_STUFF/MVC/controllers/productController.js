const Product=require('../models/productModel')

const getProds=async(req,res)=>{
    try{
        const allProds=await Product.find();

        if(allProds.length===0)
        {
            console.log("NO Products available")
           return res.json({
                message:"There is no Product",
                success:false
            })
        }
        else{
          return  res.status(200).json({
                products:allProds,
                success:true
            })
        }
    }
    catch(err)
    {
         res.status(500).json({
                success:false,
                message:err.message
            })
    }
}

const addProds=async(req,res)=>{
    try{
        const {name,price,description,category}=req.body
        const newProd=new Product({name,price,description,category})
        await newProd.save();
        res.status(200).json({
            product:newProd,
            success:true
        })
    }
    catch(err)
    {
         res.status(500).json({
                success:false,
                message:err.message
            })
    }
}

const updProds=async(req,res)=>{
    try{
        const {id}=req.params
        const {price,description,category}=req.body
        const oProd=await Product.findByIdAndUpdate(id,{price,description,category})
        const nProd=await Product.findById(id)
        res.status(200).json({
            old_product:oProd,
            new_product:nProd,
            success:true
        })
    }
    catch(err)
    {
         res.status(500).json({
                success:false,
                message:err.message
            })
    }
}

const delProds=async(req,res)=>{
    try{
        const {id}=req.params;
        const Prod=await Product.findByIdAndDelete(id)
        res.status(200).json({
            product:Prod,
            success:true
        })
    }
    catch(err)
    {
         res.status(500).json({
                success:false,
                message:err.message
            })
    }
}



module.exports = {getProds,addProds,delProds,updProds};