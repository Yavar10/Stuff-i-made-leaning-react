const {Schema,model}=require('mongoose')

const productSchema=new Schema({
name:{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
},
productImg:{
    type:String,
},
price:{
    type:Number,
    default:0
},
category:{
    type:Schema.Types.ObjectId,
    ref:"Category",
    required:true
},
owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
}
},{timestamps:true})

const Product=model('Product',productSchema)

module.exports=Product