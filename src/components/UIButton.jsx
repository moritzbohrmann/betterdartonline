import React from "react";

function UIButton(props) {
   return (
      <button
         {...props}
         className={`h-10 w-32 rounded-md bg-dark-button font-sans font-semibold text-white-default transition-all hover:bg-[#993bff]/70 ${props.className}`}
      >
         {props.children}
      </button>
   );
}

export default UIButton;
