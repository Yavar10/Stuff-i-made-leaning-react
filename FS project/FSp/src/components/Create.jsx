import { useState } from "react"
import "./css/Create.css"
//import {fetchTodos} from "Home.jsx"
import axios from 'axios'

function Create({onTaskAdded}) {

    const[task,setTask]=useState()
    const handleCreate = () => {
    if (!task.trim()) {return};

    axios.post("https://nots-j68v.onrender.com/add", { task })
      .then(() => {
        setTask("");            // Clear input
        onTaskAdded();    
              // Refresh task list in Home
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
    <input type="text" placeholder="Enter stuff" className="text" onChange={(e)=>setTask(e.target.value)} />
    <button onClick={handleCreate}>Submit</button>
    <div>{task}</div>
    </div>
  )
}

export default Create
