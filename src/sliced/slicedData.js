import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  postData: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    upadateData: (state) => {
    const postData = JSON.parse(localStorage.getItem("postData"));
      state.postData = [...postData]
    },
    deletePost: (state, action) => {
      console.log("action",action);
   
      state.postData =  state.postData.filter((item)=> item.id != action.payload) 
      localStorage.setItem("postData",JSON.stringify(state.postData))

    },
  },
})

// Action creators are generated for each case reducer function
export const { upadateData,  deletePost} = counterSlice.actions

export default counterSlice.reducer