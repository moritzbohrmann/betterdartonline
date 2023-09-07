import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setAccount } from "../state/AccountReducer";

const AuthContext = createContext();

const AuthProvider = ({ ...props }) => {
   const [token, setToken] = useState(() => Cookies.get("auth"));
   const dispatch = useDispatch();

   const doLogin = async (account) => {
      const URL = "http://localhost:3003/account/login";

      const loginResponse = await axios.post(URL, account);
      const { error, token } = await loginResponse.data;

      if (loginResponse.status === 401) {
         return { error: loginResponse.statusText };
      }

      if (!error) {
         const { account, error: tokenDataError } = await fetchTokenData();

         if (error) {
            toast.error("Error: " + tokenDataError);
            return;
         }

         Cookies.set("auth", token);
         setToken(token);
         dispatch(setAccount(account));
      }

      return { error, token, account };
   };

   const doRegistration = async (accountData) => {
      const registrationResponse = await axios.post("http://localhost:3003/account/register", accountData);
      const { error } = await registrationResponse.data;

      if (error) {
         return toast.error("Error: " + error);
      }

      signup(accountData);

      return post;
   };

   const doLogout = async () => {
      const { data, loading, error } = await axios.get("http://localhost:3003/account/logout/" + token);

      if (!error) {
         Cookies.remove("auth");
         setToken(null);
         dispatch(setAccount(null));
      }

      return { data, error };
   };

   const fetchTokenData = async () => {
      const tokenDataResponse = await axios.get("http://localhost:3003/account/info/" + token);
      const tokenData = await tokenDataResponse.data;

      return tokenData;
   };

   const fetchTokenExpiration = async () => {
      const expirationRequestResponse = await axios.get("http://localhost:3003/account/expire/" + token);
      const { isExpired } = await expirationRequestResponse.data;

      return isExpired;
   };

   useEffect(() => {
      if (!token) return;

      const doAutoLogin = async () => {
         const { account, error } = await fetchTokenData();

         if (error) {
            toast.error("Error: " + error);
            doLogout();
            return;
         }

         dispatch(setAccount(account));
         toast.success("Successfully signed in as " + account.username);
      };

      doAutoLogin();
   }, []);

   return <AuthContext.Provider value={{ token, doLogin, doRegistration, doLogout }} {...props} />;
};

export const useAuth = () => {
   return useContext(AuthContext);
};

export { AuthProvider };
