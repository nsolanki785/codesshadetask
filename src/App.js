// import ParentComponent from "./parentComponent";
import { useState, useEffect } from 'react';
import Home from './pages/home';
import SetViewContext from './utils/context/setviewcontext';






function App() {
  return(
    <>
    <SetViewContext>
      <Home/>
    </SetViewContext>
    </>
  )
 
}
export default App;