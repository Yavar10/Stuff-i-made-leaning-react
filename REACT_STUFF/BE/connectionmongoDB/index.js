const express =require('express');
const app=express();
// express
const cdb=require("./db")
/* const mongoose = require('mongoose'); */
const users=require('./routes/users')
const port=3000;

//body parser
app.use(express.json());
cdb();
app.use('/api',users)
// /api/users hits get

/* const connectDB = async () => {
  try {
    const conn = await mongoose.connect(``, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected:mongodb+srv://zuri00014:2Ub1wePJwT8t8zHV@cluster0.pb3zzu4.mongodb.net/`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
} */

app.get('/',(req,res)=>{
    console.log("I am inside home page router handler");
    res.send("Hello Bitches");
})

app.listen(port,()=>{
    console.log("App is strating")
})
