import React from "react";
// Step 4
import UserContext from "./UserContext";  
// Step 5
const UserContextProvider=({children})=>{
    const [user, setUser]=React.useState(null); 
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}
// Step 6
export default UserContextProvider