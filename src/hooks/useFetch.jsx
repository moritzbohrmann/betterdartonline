export const useFetch = async (url, options) => {
   const demo = { data: null, isPending: false, error: null, progress: 0 };

   const fetchData = async () => {
      demo.isPending = true;
      try {
         const response = await fetch(url, options);

         if (!response.ok) throw new Error(response.statusText);
         const json = await response.json();
         demo.isPending = false;
         demo.data = json;
         demo.error = null;
      } catch (error) {
         demo.error = `${error} Could not Fetch Data `;
         demo.isPending = false;
      }
   };
   fetchData();
   return demo;
};
