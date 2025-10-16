/* eslint-disable react-refresh/only-export-components */

// src/context/UserContext.jsx
import { createContext, useContext, useState, useMemo } from "react";

const UserContext = createContext(null);

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser debe usarse dentro de <UserProvider>");
  return ctx;
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userObject) => setUser(userObject);
  const logout = () => setUser(null);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated: !!user,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}





// import { createContext, useContext, useState, useMemo, useEffect } from "react";

// const UserContext = createContext(null);

// // hook de conveniencia

// export function useUser(){
//     const ctx = useContext(UserContext);
//     if (!ctx) throw new Error("useUser debe usarse dentro de <UserProvider>");
//     return ctx:
// }

// export function UserProvider = useState(null);
// //acepta un objeto
// const login = (userObject) => setUser(userObject);

// const logout = () => 

// export function UserProvider({children}) {


//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// }