import React from "react";
import {  useDispatch } from 'react-redux'
import { upadateData, deletePost } from '../sliced/slicedData'



const PostCard = ({postData,Index,handleDelete}) => {
  const dispatch = useDispatch();
   
  
    
 
    return(
        <>
    <div class="card mb-3 position-relative">
    <button onClick={()=>handleDelete(postData.id,Index)} type="button" class="btn-close position-absolute end-0  " data-bs-dismiss="modal" aria-label="Close"></button>

     <div class="row g-0">
       <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="..."/>
      </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{postData?.id + postData?.title}</h5>
        <p class="card-text">{postData?.body}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default PostCard;