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
      state.postData = postData?.length >0 ? [...postData] : []
    },
    deletePost: (state, action) => {
      console.log("action",action);
      // state.postData =  
      const db =state.postData.filter((item)=> item.id != action.payload)
      localStorage.setItem("postData",JSON.stringify(db));
      return state.postData.filter((item)=> item.id != action.payload)
      

    },
  },
})

// Action creators are generated for each case reducer function
export const { upadateData,  deletePost} = counterSlice.actions

export default counterSlice.reducer