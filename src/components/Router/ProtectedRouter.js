
import * as api from "../API/API";

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectRouter({ children }) {
  console.log("hhhh"+children);
  const [currentUser, setCurrentUser] = useState(false);

  const authorization = new Promise((resolve, reject) => async () => {
    try {
      const response = await api.auth();
      resolve(response.data);
    } catch (error) {
      reject(error);
    }  
  }); 
  useEffect(() => {
    const user = localStorage.getItem("token");
    console.log(user);
authorization.then((res)=>console.log(res)).catch(err=>console.log(err))
    if (user)
     {setCurrentUser(true);
    }else{
       setCurrentUser(false);
      }
  }, []);
  console.log(currentUser);

  return currentUser ? children : <Navigate to={"/login"}replace />;
}

export default ProtectRouter;
