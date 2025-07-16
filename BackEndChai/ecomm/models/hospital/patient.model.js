const {Schema,model}=require('mongoose')

const patientSchema=new Schema({
    name:
    {
    type:String,
    required:true,
}
},
{timestamps:true})

const Patient=model('Patient',patientSchema)

module.exports=Patient