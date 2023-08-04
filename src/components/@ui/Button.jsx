import React from "react";

function Button(props) {
   return (
      <button
         {...props}
         className={`h-7 w-32 rounded-md bg-amber-500 font-sans font-bold text-dark-background outline-none transition-all hover:bg-opacity-90 ${props.className}`}>
         {props.children}
      </button>
   );
}

export default Button;
