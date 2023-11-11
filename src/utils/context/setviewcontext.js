import React, {  useState } from "react";
import { viewcontext } from "../config/config";

const SetViewContext = ({children}) => {
    const [view,setview] = useState(false);

    return(
        <>
        <viewcontext.Provider value={{view,setview}}>
            {children}
        </viewcontext.Provider>
        </>
    )

}

export default SetViewContext;