const {Schema,model}=require('mongoose')

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    maxlength: 100
  },
  category: {
    type: String,
    required: true,
    maxlength: 50
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //createdBy:{
   //type:Schema.Types.ObjectId,
   //ref:"test"}
});

const productModel = model("test",productSchema )

module.exports = productModel;