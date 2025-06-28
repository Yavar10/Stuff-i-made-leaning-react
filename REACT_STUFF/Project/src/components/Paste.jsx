import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Paste = () => {

const pastes=useSelector((state)=>state.PSlice.pastes);
console.log(pastes)
const [searchTerm, setSearchTerm] = useState("");
const dispatch=useDispatch();

const filteredData=pastes.filter(
  (paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase())
)
console.log("Rendered paste:", pastes);
  return (
    <div>
      <br />
      <h1>
      PASTEY GOON
    </h1>
    <br />
    <div>
    <input className='rounded-[8px] p-2' type="search" placeholder='Search Here' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
    </div>
    <div>
      {
        filteredData.length>0&&filteredData.map(
          (paste)=>{

            return(
              <div className='border-solid flex flex-col min-h-[50px]'>
                {paste.title}
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
