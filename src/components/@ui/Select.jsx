import React from "react";
import { useTheme } from "../../context/ThemeContext";

function Select(props) {
   const [theme] = useTheme();

   return (
      <select {...props} className={`h-8 w-48 rounded-md border-[1px] border-zinc-900 px-4 outline-none ${theme.backgroundColor} ${props.className}`}>
         {props.children}
      </select>
   );
}

export default Select;
