const {Schema,model}=require('mongoose')

const hospitalSchema=new Schema({},{timestamps:true})

const Hospital=model('Hospital',hospitalSchema)

module.exports=Hospital