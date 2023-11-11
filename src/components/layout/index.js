import React,{useContext} from "react";
import "../../style.css";
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import {AiOutlineUnorderedList} from 'react-icons/ai';
import { viewcontext } from "../../utils/config/config";





const Layout = ({children}) => {
  const {view,setview} = useContext(viewcontext);
  console.log("setview",view);
    return(
        <>
       <div className="row spacing bg-color" >
           <div className="col-md-3 p-4" >
            <div className="m-3 bg-light p-3 rounded">
                          <div className="row spacing">
                          <div className="col-md-4 spacing">
                          <img src="./logo192.png" width="50" height='50' className="round-circle"   />
                          </div>
                            <div className="col-md-8 spacing">
                               <div> <h5>Hii Reader</h5></div>
                               <div>Here your News</div> 
                            </div>
                          </div>                            
            </div>
            <div className="">
            <div  className="toggle-view bg-light m-3 p-3">
               <div className="text-center"><h3>View Toggle</h3></div>
               <div  className="d-flex justify-content-center"><button
               style={{
                background:view ? "#61dafb" :""
               }}
                onClick={()=>setview(true)} className="grid"><BsFillGrid3X3GapFill/></button>
                <button
                 style={{
                background:!view ? "#61dafb" :""
               }}
                 onClick={()=>setview(view ? !view : view)} className="list"><AiOutlineUnorderedList/></button></div>
            </div>
            </div>
            <div className="d-flex justify-content-center" >Feedback</div>
        
           </div>
           <div className="col-md-9 spacing">
             {children}
           </div>
       </div>
        </>
    )
}

export default Layout;