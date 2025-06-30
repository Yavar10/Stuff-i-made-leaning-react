import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'
const initialState = {
  pastes:localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [],
}


export const PSlice = createSlice({
  name: 'PSlice',
  initialState,
  reducers: {
    addTOting: (state,action) => {
      const paste =action.payload

      state.pastes.push(paste)
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully")

    },
    udpT: (state,action) => {
      const paste=action.payload;
      const index=state.pastes.findIndex((item)=>
      item._id==paste._id);

      if(index>=0)
      {
        state.pastes[index]=paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste updated");
      }
    },
    rst: (state) => {
      state.pastes=[];
      localStorage.removeItem("pastes")
    },
    removeFrTing:(state,action)=>{
        const pasteId=action.payload;

        console.log(pasteId)
        const index =state.pastes.findIndex((item)=>
        item._id===pasteId);

        if(index>=0)
        {
          state.pastes.splice(index,1);

          localStorage.setItem("pastes",JSON.stringify(state.pastes));

          toast.success("Paste deleted");
        }
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTOting, udpT, rst, removeFrTing } = PSlice.actions

export default PSlice.reducer