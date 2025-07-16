const {Schema,model}=require('mongoose')

const orderItemSchema=new Schema({
    productId:{
        type:Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema=new Schema({
ordPrice:
{
type:Number,
required:true
},
customer:
{
type:Schema.Types.ObjectId,
required:true
},
ordItems:{
    type:[orderItemSchema]
},
adress:{
    type:String,
    enum:["PENDING","CANCELLED","DELIVERED"],
    default:"PENDING"

}
},{timestamps:true})

const Order=model("Order",orderSchema)

module.exports=Order