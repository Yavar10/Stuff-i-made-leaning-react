/* import { useState,useEffect } from "react"
import Create from "./Create"
import axios from "axios";
 
function Home() {

    const [todos,setTodos]= useState([]);

useEffect(() => {
    axios.get("http://localhost:2000/get")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
       <h1>
            Notes App
        </h1>
        <Create/>
        {
          (todos.length===0)?
          <div>
            <h3>
                No Record
            </h3>
          </div>
          :
           todos.map(todo => (
  <div key={todo._id}>
    {todo.task}
  </div>
))
            
        }
    </div>
  )
}

export default Home

 */

import { useState, useEffect } from "react";
import Create from "./Create";
import "./css/Home.css"
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    console.log("FETTTTCHIIIIIIIIIIIIIIINGGGGGGGGGGGGGGGGGGG")
    axios
      .get("https://nots-j68v.onrender.com/get")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };

  const deltask=(id)=>{
    console.log("DELETTIIIIIIIIIIIIINGGGGGGGGGGGGGGGGGGG")
    axios
      .delete("https://nots-j68v.onrender.com/del", {
      data: { _id: id }
    })
    .then((res) => {
      console.log("Deleted:", res.data);
      fetchTodos(); // <-- refresh the list
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Notes App</h1>
      <Create onTaskAdded={fetchTodos} /> {/* <-- FIXED HERE */}
      {
      todos.length === 0 ? (
        <div>
          <h3>No Record</h3>
        </div>
      ) : (
        todos.map(todo => (
          <div className="tk" key={todo._id}>{todo.task}
          <button className="db" onClick={()=>deltask(todo._id)}>
          Del
          </button></div>
        ))
      )
      }
    </div>
  );
}

export default Home;
