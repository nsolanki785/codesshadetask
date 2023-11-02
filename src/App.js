// import ParentComponent from "./parentComponent";
import { useState,useEffect } from 'react';
import axios from 'axios';
import PostCard from './components/postcard';
import {FcNext} from "react-icons/fc"
import {FcPrevious} from "react-icons/fc"
import { useSelector, useDispatch } from 'react-redux'
import { upadateData, deletePost } from './sliced/slicedData'





function App() {
  const postData = useSelector(state => state?.counter?.postData);
  const [postGetdata,setGetPostdata] = useState(postData)
  const sliceData = postData.slice(0,6);
  const [slicedData,setSlicedData] = useState([...sliceData]);
  const [startIndex,setStartindex] = useState(0);
  const [endIndex,setEndindex] = useState(6)
  const dispatch = useDispatch();

  console.log("slicedData",postData);
  
  useEffect(()=>{
    handleFetch()
    const getdbdata = JSON.parse(localStorage.getItem("postData")).slice(0,6);
    setSlicedData(getdbdata)
    dispatch(upadateData())
  },[])
  
  
  



    const handleFetch = () => {
        if (!JSON.parse(localStorage.getItem("postData"))) {
      axios({
        url:"https://jsonplaceholder.typicode.com/posts",
        method:"get"
      }).then((res)=>{
     
        localStorage.setItem("postData",res?.data)
        //  setPostdata(res?.data)
        //  setSlicedData(res?.data?.slice(0,6))
        
      })
    }
    else {
        console.log("already have data");
    }
}

    
   const handleSliceddata = () => {
    const filterData = postData.slice(startIndex,endIndex)
    return filterData
   }
    

    const handleNext = () => { 
      setStartindex( startIndex+6)
      setEndindex(endIndex+6)
      const DD =  handleSliceddata()
      setSlicedData(DD)
    }
    
    const handlePrevious = () => { 
        setStartindex(startIndex > 6   ? startIndex-6 : 0)
        setEndindex(endIndex>6 ? endIndex - 6 : 6)
        const Dc =  handleSliceddata()
        setSlicedData(Dc)
     } 

     const handleDelete = (dd) => {
      dispatch(deletePost(dd.id));
      const Findex = postData.findIndex((item)=> item.id == dd)
      console.log("Findex",Findex);
      setStartindex(Findex)
      setEndindex(Findex+6)
     const mm=  handleSliceddata()
     setSlicedData(mm)
   
    }

  


 return (
 

  <div className="container">
  <div className="m-3">

 {console.log("sld",slicedData)}
    {slicedData?.map((data ,i)=>{
        return(
            <>
             <PostCard postData={data} Index={i} handleDelete={handleDelete} />
           </>
        )
      })
  }
  </div>
  <div className='d-flex justify-content-center'>
    <FcPrevious   onClick={()=>handlePrevious()}/>
    <FcNext  onClick={()=>handleNext()}/>
  </div>
  </div>

 );
}
export default App;