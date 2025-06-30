import React,{useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {addTOting, udpT } from '../redux/PSlice';
import { useParams } from 'react-router-dom';



const Home = () => {

  const [value, setTitle] = useState("");//for title
  const [text, setText] = useState("");//for content
  const [spara,setSpara] = useSearchParams("");//for url
  const pasteId=spara.get("id")
  let nam="";
  if(pasteId)
  {
     nam="EDIT-HOUSERY"
  }
  else
     nam="NOTE-HOUSERY"

  const dispatch=useDispatch();
  const {id}=useParams();
  const allpastes=useSelector((state)=>state.PSlice.pastes);
  const paste=allpastes.find((p)=>p._id===id);
  //yaha par on the right its the key jo ki we will search in the url
  //const allpastes=useSelector((state)=>state.PSlice.pastes);
 useEffect(()=>{
      if(pasteId){
        const paste=allpastes.find((p)=>p._id===pasteId)
        setTitle(paste.title)
        setText(paste.content)
      }
    },[pasteId,allpastes])
    
  const createPaste=()=>{

    const paste ={
      title:value,
      content:text,
      _id:pasteId||
      Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }

   

    if(pasteId){
      dispatch(udpT(paste));
    }
    else{
      dispatch(addTOting(paste));
    }
    setTitle("")
    setText("")

    setSpara({});

  }
  
  
  
  return (
    <div className='flex flex-col items-center'>
      <div className=' p-[10px] rounded-[10px] flex flex-col border-solid w-[650px]'>
      <h1 className=' rounded-[50px]'>{nam}
      </h1>
      <div className=' p-[10px] flex flex-row align-center justify-center'>
      <input
    className='min-w-[350px] rounded-[10px] m-[5px]'
    type="text"
    value={value}
    placeholder='Enter Title Here'
    onChange={(e) => setTitle(e.target.value)}
  />
      <button
    onClick={createPaste}
    className='rounded-[10px] m-[5px] bg-blue-500 text-white px-3 py-1'
  >
    {pasteId ? "Edit" : "Add"}
  </button>
      </div>
    
    <div className='pb-[10px]'>
      <textarea
    className='p-[5px] rounded-[10px] min-w-[425px] max-w-[425px] '
    rows={13}
    placeholder='Enter Content Here'
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
    </div>
    </div>
    </div>
  )
}

export default Home
