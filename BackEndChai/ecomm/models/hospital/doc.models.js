const {Schema,model}=require('mongoose')

const docSchema=new Schema({},{timestamps:true})

const Doctor=model('Doctor',docSchema)

module.exports=Doctor