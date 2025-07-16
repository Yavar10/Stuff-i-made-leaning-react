const {Schema,model}=require('mongoose')

const mrecordSchema=new Schema({},{timestamps:true})

const Mrecord=model('Mrecord',mrecordSchema)

module.exports=Mrecord