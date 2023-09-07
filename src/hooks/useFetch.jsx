import axios from "axios";
import { useEffect, useState } from "react";

const useGet = (url, options = {}, executeOnMount = true) => {
   const [data, setData] = useState();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState();

   const FETCH_URL = url;

   executeOnMount &&
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

   const redo = () => {
      setLoading(true);

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

   return { data, loading, error, redo };
};

const usePost = (url, object, options = {}, executeOnMount) => {
   const [data, setData] = useState();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState();

   const FETCH_URL = url;

   executeOnMount &&
      useEffect(() => {
         setLoading(true);

         const controller = new AbortController();

         axios
            .get(FETCH_URL, object, { ...options, method: "POST", signal: controller.signal })
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

   const redo = () => {
      axios
         .get(FETCH_URL, object, { ...options, method: "GET" })
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

   return { data, loading, error, redo };
};

export { useGet, usePost };
