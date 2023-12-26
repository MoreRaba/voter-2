"use client";

import { createContext, useEffect, useState, useRef } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const authIntervalRef = useRef(null);

  const getAuth = () => {
    // Get user_email from localstorage
  };

  // useEffect(() => {
  //   authIntervalRef.current = setInterval(() => {
  // getAuth();
  //   }, 60000);

  //   return () => clearInterval(authIntervalRef.current);
  // }, []);

  // console.log(auth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
};
