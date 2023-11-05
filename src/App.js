// import ParentComponent from "./parentComponent";
import { useState,useEffect } from 'react';
import axios from 'axios';
import PostCard from './components/postcard';
import {FcNext} from "react-icons/fc"
import {FcPrevious} from "react-icons/fc"
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '@mui/material/Pagination';

import { upadateData, deletePost } from './sliced/slicedData'





function App() {
  const postGetdata = useSelector(state => state?.counter);
  const postData = postGetdata ? postGetdata : []
  // const [postGetdata,setGetPostdata] = useState(postData)
  // const sliceData = postData?.length>0 ?  postData?.slice(0,6) : [] ;
  // const [slicedData,setSlicedData] = useState([]);
 const dispatch = useDispatch();  
  const rowPerpage  = 6;

  const [page,setPage] = useState(1);

  console.log("slicedData", postGetdata);
  
  useEffect(()=>{
    handleFetch()
    // const DB = JSON.parse(localStorage.getItem("postData"))
   
    // dispatch(upadateData())
  },[])
  
  
  



    const handleFetch = () => {
        
      axios({
        url:"https://jsonplaceholder.typicode.com/posts",
        method:"get"
      }).then((res)=>{
        localStorage.setItem("postData",JSON.stringify(res?.data));
        // const getdbdata = res?.data ? res?.data.slice(0,6) : [];
        // setSlicedData(getdbdata)
         dispatch(upadateData(res?.data))

      })
    }
    


    
  //  const handleSliceddata = () => {
  //   // dispatch(upadateData())
  //   console.log("ff",postData);
  //   const filterData = postData.slice(startIndex,endIndex);
  //   return filterData
  //  }
    

    const handleNext = () => {
      setPage(page+1) 
      // setStartindex( startIndex+6)
      // setEndindex(endIndex+6)
      // const DD =  handleSliceddata()
      // setSlicedData(DD)
    }
    
    const handlePrevious = () => {
      setPage(page > 0  ? page -1 : 0) 
        // setStartindex(startIndex > 6   ? startIndex-6 : 0)
        // setEndindex(endIndex>6 ? endIndex - 6 : 6)
        // const Dc =  handleSliceddata()
        // setSlicedData(Dc)
     } 

     const handleDelete = (dd) => {
     
      //  const findex = postData?.findIndex((item)=> item.id == dd)
     dispatch(deletePost(dd));
   
      //  dispatch(upadateData());
    //   setStartindex(findex+1)
    //   setEndindex(findex+7)
    //  const mm=  handleSliceddata()
    //  console.log("mm",mm)
    //  setSlicedData(mm)
    }

    console.log('page',page)
    const handleChange = (event,value) => {

    setPage(value)
    }

  


 return (
 

  <div className="container">
  <div className="m-3">

    {postData?.slice((page-1)*rowPerpage ,(page-1)*rowPerpage + rowPerpage ).map((data ,i)=>{
        return(
            <>
             <PostCard postData={data} Index={i} handleDelete={handleDelete} />
           </>
        )
      })
  }
  </div>
  <div className='d-flex justify-content-center'>
    {/* <FcPrevious   onClick={()=>handlePrevious()}/>
    <FcNext  onClick={()=>handleNext()}/> */}
    <Pagination page={page}  onChange={handleChange} count={Math.ceil(postData?.length/rowPerpage)} color="primary" />
  </div>
  </div>

 );
}
export default App;