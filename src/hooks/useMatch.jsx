import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useMatch() {
   const [match, setMatch] = useLocalStorage("match", null);

   useEffect(() => {
      localStorage.setItem("match", JSON.stringify(match));
   }, [match]);

   return [match, setMatch];
}
