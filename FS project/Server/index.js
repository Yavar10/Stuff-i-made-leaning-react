/* const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const db = require("./config/db");
const todoModel = require("./Models/todo.models");

dotenv.config();
db();

const app = express()
app.use(cors())
app.use(express.json())
const port =process.env.PORT||2000

//routing
//app.use('/api',)
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post('/add', (req, res) => {
    const task=req.body.task;
    todoModel.create({
        task:task
    })
    .then(result => res.json(result))
    .catch(err=> res.json(err))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) */




const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const db = require("./config/db");
const Todo = require("./Models/todo.models");

dotenv.config();
db();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 2000;

// Base route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Add task route
app.post("/add", async (req, res) => {
  try {
    const { task } = req.body;

    if (!task || task.trim() === "") {
      return res.status(400).json({ error: "Task field is required" });
    }

    const newTask = await Todo.create({ task });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err });
  }
});

app.get("/get", async(req,res)=>{
  const todos = await Todo.find();
  return res.status(200).json(todos)
})

app.delete("/del",async(req,res)=>{
  const dtx=await Todo.findByIdAndDelete(req.body._id)
  res.status(200).send("yesssss")
})
app.delete("/deleteAll",async(req,res)=>{
  const dtx=await Todo.deleteMany()
  res.status(200).send("yesssss")
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

