import React from "react";

function UIButton(props) {
   return (
      <button
         {...props}
         className={`w-32 h-10 font-sans font-semibold bg-dark-button text-white-default rounded-md hover:bg-[#993bff]/70 transition-all ${props.className}`}>
         {props.children}
      </button>
   );
}

export default UIButton;
