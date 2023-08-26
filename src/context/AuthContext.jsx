import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { usePost } from "../hooks/useFetch";
import { setAccount } from "../state/AccountReducer";

const AuthContext = createContext();

const AuthProvider = ({ ...props }) => {
   const [account, setAccount] = useState();
   const dispatch = useDispatch();

   useEffect(() => account && dispatch(setAccount(account)), [account]);

   const register = async (accountData) => {
      return await usePost("http://localhost:3003/account/register", accountData);
   };

   const signup = async (accountData) => {
      return await usePost("http://localhost:3003/account/login", accountData);
   };

   useEffect(() => {
      const unsubscribe = () => {};
   }, []);

   return <AuthContext.Provider value={{ account, signup, register }} {...props} />;
};

export const useAuth = () => {
   return useContext(AuthContext);
};

export { AuthProvider };
