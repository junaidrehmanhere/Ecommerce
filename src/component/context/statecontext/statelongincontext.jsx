import { useState } from "react";
import LoggInContext from "../createcontext/createlogincontext";


const StateContext =(props)=>{
    const [IsLoggedIn,setIsLoggedIn]= useState(false);
   
    return(
        <LoggInContext.Provider value={{IsLoggedIn,setIsLoggedIn}}>
            {props.children}
        </LoggInContext.Provider>
        )
}
export default StateContext;


