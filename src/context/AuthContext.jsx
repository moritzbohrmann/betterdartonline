import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useGet, usePost } from "../hooks/useFetch";
import { setAccount } from "../state/AccountReducer";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ ...props }) => {
   const [token, setToken] = useState(Cookies.get("auth"));
   const dispatch = useDispatch();

   const useAccount = async () => {
      return await useGet("http://localhost:3003/account/info/" + token);
   };

   const doLogin = async (account) => {
      const fetchToken = usePost("http://localhost:3003/account/", account);
      const { error, token } = await fetchToken;

      if (!error) {
         Cookies.set("auth", token);
         setToken(token);
         dispatch(setAccount(token));
      }

      return { error, token };
   };

   const signup = async (accountData) => {
      const post = await usePost("http://localhost:3003/account/login", accountData);

      if (!(await post).error) {
         Cookies.set("auth", post.token);
         setToken(post.token);

         dispatch(setAccount(jwtDecode(post.token)));
      }
      return await post;
   };

   const register = async (accountData) => {
      const post = await usePost("http://localhost:3003/account/register", accountData);

      if (!(await post).error) signup(accountData);
      return post;
   };

   const signout = async () => {
      const { data, loading, error } = await useGet("http://localhost:3003/account/logout/" + token);

      if (!error) {
         Cookies.remove("auth");
         setToken(null);
         dispatch(setAccount(null));
      }

      return data;
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

   return <AuthContext.Provider value={{ token, isExpired, useAccount, doLogin, signup, register, signout }} {...props} />;
};

export const useAuth = () => {
   return useContext(AuthContext);
};

export { AuthProvider };
