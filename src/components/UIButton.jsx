import React from "react";

function UIButton(props) {
   return (
      <button
         {...props}
         ref={props.innerRef}
         className={`h-8 w-32 rounded-md bg-dark-button font-sans font-semibold text-white-default transition-all hover:bg-opacity-70 ${props.className}`}
      >
         {props.children}
      </button>
   );
}

export default UIButton;
