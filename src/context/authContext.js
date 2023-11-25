  // PLace it in Context  Folder

//Import all api`s as the api

import { createContext, useState } from "react";

export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [auth,setAuth]=useState(false)

  return (
    <AuthContext.Provider value={{auth,setAuth}}>
      {children}
    </AuthContext.Provider>
  );
}
