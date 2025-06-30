import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFrTing } from '../redux/PSlice';
import { rst } from '../redux/PSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import Home from './Home';
const Paste = () => {

const pastes=useSelector((state)=>state.PSlice.pastes);
console.log(pastes)
const [searchTerm, setSearchTerm] = useState("");
const dispatch=useDispatch();

const filteredData=pastes.filter(
  (paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase())
)
console.log("Rendered paste:", pastes);
function handleDel(pid)
{
  dispatch(removeFrTing(pid));
}
function rsts(pid)
{
  dispatch(rst(pid));
}
  return (
    <div >
     {/*  <div className="border-solid">
  IF YOU CAN SEE THIS RED BOX, Tailwind is working
</div> */}

      <br />
      <h1>
      PASTEY BOARD
    </h1>
    <br />
    <div>
    <input className="min-w-[675px] rounded-[10px] min-h-[50px]" type="search" placeholder='Search Here' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
      
    </div>
    <br />
    <div>
      {
        filteredData.length>0&&filteredData.map(
          (paste)=>{

            return(
            <div className='border-solid flex flex-col min-h-[50px]'>
              <button className="rounded-[10px]" onClick={()=>rsts(paste._id)}>Reset</button>
              <h2> {paste.title}
                </h2>
                <div className='flex flex-row place-content-evenly p-[10px]'>
                <button>
                  <NavLink to={`/?id=${paste?._id}`}>EDIT</NavLink>
                </button>
                <button>
                <NavLink to={`/PSlice/${paste?._id}`}>View(NL)</NavLink>
                </button>
                <button>
                <a href={`/PSlice/${paste?._id}`}>
                View(AT)                </a>
                </button>
                <button onClick={()=>handleDel(paste._id)}>Delete</button>
                <button onClick={()=>{
                  navigator.clipboard.writeText(paste?.content)
                  toast.success("Content Copied")
                }
                }>Copy</button>
              </div>
              <div>
           { new Date(paste.createdAt).toLocaleString()}

              </div>
              </div>
            )
          }
        )

      }
    </div>
    </div>
  )
}

export default Paste
