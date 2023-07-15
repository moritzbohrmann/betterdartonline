import React from "react";

function UIWindowTitle(props) {
   return (
      <div className="flex h-28 w-full items-center justify-center rounded-md bg-dark-title">
         <h4 className="font-secondary text-3xl font-semibold text-white-default">{props.text}</h4>
      </div>
   );
}

export default UIWindowTitle;
