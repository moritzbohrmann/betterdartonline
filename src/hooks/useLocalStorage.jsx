import { useEffect, useState } from "react";

const getItemOfLocalStorage = (itemName, initalValue) => {
   const item = JSON.parse(localStorage.getItem(itemName));

   if (item) return item;

   if (initalValue instanceof Function) return initalValue();

   return initalValue;
};

export function useLocalStorage(itemName, initalValue) {
   const [value, setValue] = useState(() => {
      return getItemOfLocalStorage(itemName, initalValue);
   });

   useEffect(() => {
      localStorage.setItem(itemName, JSON.stringify(value));
   }, [value]);

   return [value, setValue];
}
