import React, { createContext } from "react";
import { usePost } from "../hooks/useFetch";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ ...props }) => {
   const doLogin = async (loginData) => {
      const URL = "http://localhost:3003/account/login";
      const { data } = await axios.post(URL, loginData);

      console.log(data);
   };

   const useLogout = () => {};

   const doRegistration = () => {};

   return <AuthContext.Provider value={{ doLogin, doLogout, doRegistration }} {...props} />;
};

export default AContext;
