import React,{useContext} from "react";
import '../style.css'
import { useDispatch } from 'react-redux'
import { viewcontext } from "../utils/config/config";
import { upadateData, deletePost } from '../sliced/slicedData';




const PostCard = ({ postData, Index, handleDelete }) => {
  const {view,setview} = useContext(viewcontext);
  const dispatch = useDispatch();

  return (
    <>
      <div className={` ${view ? "col-md-4" : "d-flex"}`}>
        <div class={`position-relative card mb-3 ${view ? "" : "card-radius"}`}>
        {view  && <button onClick={() => handleDelete(postData.id, Index)} type="button" className="position-absolute end-0 btn-close" data-bs-dismiss="modal" aria-label="Close"></button> }
          <div class={view ? "g-0" : "d-flex "}>
           {!view &&            
              <img src="./logo192.png" width="100" height='100' className="m-2 mt-3 rounded-circle" alt="..." />
            }
            <div class={view ? "" : ""}>
              <div class="card-body">
                <h5 class="card-title" style={{
                     height: "25px",
                     textOverflow: "ellipsis",
                    overflow: "hidden",
                }}>{postData?.id + postData?.title}</h5>
                <div class="card-text card-content" style={{
                     height:view ? "50px" : "30px",
                     textOverflow: "ellipsis",
                    overflow: "hidden",
                }}>{postData?.body}...</div>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              {view  && <div>
              <img
              style={{
                width:"100%"
              }} 
               src="./logo192.png"
              //  width="250"
              //  height="100"
                class="img-fluid round rounded-start" alt="..." />
            </div>}
              </div>
            </div>
          </div>
        </div>
        {!view  && <button onClick={() => handleDelete(postData.id, Index)} type="button" class="btn-close m-5" data-bs-dismiss="modal" aria-label="Close"></button> }
      </div>
    </>
  )
}

export default PostCard;