import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useGet, usePost } from "../hooks/useFetch";
import { setAccount } from "../state/AccountReducer";

const AuthContext = createContext();

const AuthProvider = ({ ...props }) => {
   const [token, setToken] = useState(Cookies.get("auth"));
   const dispatch = useDispatch();

   const useAccount = async () => {
      return await useGet("http://localhost:3003/account/info/" + token);
   };

   const signup = async (accountData) => {
      const post = await usePost("http://localhost:3003/account/login", accountData);

      if (!(await post).error) {
         Cookies.set("auth", post.token);
         setToken(post.token);

         window.location.reload();
      }
      return await post;
   };

   const register = async (accountData) => {
      const post = await usePost("http://localhost:3003/account/register", accountData);

      if (!(await post).error) signup(accountData);
      return post;
   };

   const signout = async () => {
      const post = await useGet("http://localhost:3003/account/logout/" + token);

      if (!(await post).error) {
         Cookies.remove("auth");
         setToken(null);
         dispatch(setAccount(null));
      }
      return post;
   };

   const isExpired = async () => {
      const post = await useGet("http://localhost:3003/account/expire/" + token);

      return await post.isExpired;
   };

   useEffect(() => {
      const unsubscribe = async () => {
         const { error, account } = await useAccount();

         if (error) {
            toast.error("Error: " + error);
            signout();
            return;
         }

         dispatch(setAccount(account));
         toast.success("Successfully signed in as " + account.username);
      };

      unsubscribe();
   }, []);

   return <AuthContext.Provider value={{ token, isExpired, useAccount, signup, register, signout }} {...props} />;
};

export const useAuth = () => {
   return useContext(AuthContext);
};

export { AuthProvider };
