import { useState, useEffect } from "react";
import Create from "./Create";
import "./css/Home.css"
import axios from "axios";
import { toast } from 'react-toastify';

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
      toast.success("Deletion successful!");
      fetchTodos(); // <-- refresh the list
    })
    .catch((err) => {console.log(err)
      toast.error("Oops! Something went wrong.");
    });
  }

  const delAll=()=>{
    console.log("DELETTIIIIIIIIIIIIINGGGGGGGGGGGGGGGGGGG ALLLLLLLLLLLLLLLLLLLLL")
    axios
      .delete("https://nots-j68v.onrender.com/deleteAll", {
    })
    .then((res) => {
      console.log("Deleted: ALL", res.data);
      toast.success("Deletion successful!");
      fetchTodos(); // <-- refresh the list
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    
    <div>
      <h1>Anonymous Chirp</h1>

      <Create onTaskAdded={fetchTodos} /> {/* <-- FIXED HERE */}
      {
      todos.length === 0 ? (
        <div>
          <h3>No Chirps Heard</h3>
        </div>
      ) : (
        todos.map(todo => (
         
          <div className="tk" key={todo._id}>
           <div className="dot">•</div> 
          {todo.task}
          <button className="db" onClick={()=>deltask(todo._id)}>
          Delete
          </button></div>
     
        ))
      )
      }


        <button disabled:true onClick={()=>delAll()}>DELETE ALL</button>


    </div>
  );
}

export default Home;