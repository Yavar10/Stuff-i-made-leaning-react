const {Schema,model}=require('mongoose')

const todoSchema = new Schema({
  task: {
    type: String,
    required: true,
  }
},{
    timestamps:true
});

const Todo = model("Todo", todoSchema);
module.exports = Todo;
