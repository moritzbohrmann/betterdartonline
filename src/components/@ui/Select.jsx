import React from "react";

function Select(props) {
   return (
      <select
         {...props}
         className={`h-8 w-48 rounded-md border-[1px] border-zinc-900 bg-dark-background px-4 text-white-default outline-none ${props.className}`}>
         {props.children}
      </select>
   );
}

export default Select;
