import axios from "axios";
import { useEffect, useState } from "react";

const _useGet = (url, options = {}) => {
   const [data, setData] = useState();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState();

   const FETCH_URL = url;

   useEffect(() => {
      setLoading(true);

      const controller = new AbortController();

      axios
         .get(FETCH_URL, { ...options, method: "GET", signal: controller.signal })
         .then(({ data }) => {
            setData(data);
         })
         .catch((error) => {
            setError(error);
         })
         .finally(() => {
            setLoading(false);
         });

      return () => controller.abort();
   }, []);

   const refetch = () => {
      axios
         .get(FETCH_URL, { ...options, method: "GET" })
         .then(({ data }) => {
            setData(data);
         })
         .catch((error) => {
            setError(error);
         })
         .finally(() => {
            setLoading(false);
         });
   };

   return { data, loading, error, refetch };
};

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

export { _useGet, useGet, usePost };
