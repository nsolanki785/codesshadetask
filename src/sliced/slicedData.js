import { createSlice } from '@reduxjs/toolkit'

const initialState =  []
  

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    upadateData: (state,action) => {
      console.log("updateData",action);
    // const postData = JSON.parse(localStorage.getItem("postData"));
      return  action.payload 
    },
    deletePost: (state, action) => {
      
      console.log("action",action,state);
      // state.postData =  

      return state.filter((item)=> item.id != action.payload)
      // localStorage.setItem("postData",JSON.stringify(db));
      // return db;
      // return state.postData.filter((item)=> item.id != action.payload)
      

    },
  },
})

// Action creators are generated for each case reducer function
export const { upadateData,  deletePost} = counterSlice.actions

export default counterSlice.reducer