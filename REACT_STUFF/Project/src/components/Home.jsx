import React,{useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addTOting, udpT } from '../redux/PSlice';


const Home = () => {

  const [value, setTitle] = useState("");//for title
  const [text, setText] = useState("");//for content
  const [spara,setSpara] = useSearchParams("");//for
  const pasteId=spara.get("id")
  const dispatch=useDispatch();
  //yaha par on the right its the key jo ki we will search in the url
  const createPaste=()=>{

    const paste ={
      title:value,
      content:text,
      _id:pasteId||
      Date.now().toString(36),
      createdAt:new Date().toISOString(),
    };

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
      <br />
      <div className='flex flex-col border-solid w-[500px]'>
      <h2>Live Gooning at HOME
      </h2>
      <div className='flex flex-row align-center justify-center'>
      <input className=' rounded-[10px]' type="text" value={text} placeholder='Enter Text Here' onChange={(e)=>setText(e.target.value)} />
      <button onClick={createPaste} className='rounded-[10px] m-[5px]'>{pasteId?"Edit":"Add"}</button>
      </div>
      <br />
    <div>
      <textarea placeholder='Text will be shown here' className='p-[5px] rounded-[10px] min-w-[225px] max-w-[225px] ' rows={13} name="" id="" value={pasteId}></textarea>
    </div>
    </div>
    </div>
  )
}

export default Home
