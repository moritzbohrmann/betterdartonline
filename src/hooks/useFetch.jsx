import axios from "axios";

const useGet = async (url, options = {}) => {
   const fetch = axios.get(url, options);
   const data = (await fetch).data;

   return data;
};

const usePost = async (url, postObject, options = {}) => {
   const post = axios.post(url, postObject, { ...options, method: "POST" });
   const data = (await post).data;

   return data;
};

export { useGet, usePost };
