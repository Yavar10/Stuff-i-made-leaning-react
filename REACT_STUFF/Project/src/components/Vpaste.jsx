

import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';


const Vpaste = () => {

  const {id}=useParams();
  const allpastes=useSelector((state)=>state.PSlice.pastes);
  const paste=allpastes.find((p)=>p._id===id);
  return (
    <div>
      <div className='flex flex-col items-center'>
      <br />
      <div className='flex flex-col border-solid w-[650px]'>
      <h1>PASTE-HOUSERY
      </h1>
      <div className='flex flex-row align-center justify-center'>
      <textarea
    className='min-w-[300px] rounded-[10px] m-[5px]'
    type="text"
    value={paste.title}
    disabled
    placeholder='Enter Title Here'
   // onChange={(e) => setTitle(e.target.value)}
  />
    {  /* <button
    onClick={createPaste}
    className='rounded-[10px] m-[5px] bg-blue-500 text-white px-3 py-1'
  >
    {pasteId ? "Edit" : "Add"}
  </button> */ }
      </div>
      <br />
    <div className='mb-[50px]'>
      <textarea
    className='p-[5px] rounded-[10px] min-w-[300px] max-w-[300px] '
    rows={13}
    disabled
    placeholder='Enter Content Here'
    value={paste.content}
    //onChange={(e) => setText(e.target.value)}
  />
    </div>
    </div>
    </div>
    </div>
  )
}

export default Vpaste
