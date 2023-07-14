import React from "react";

function UIWindowTitle(props) {
   return (
      <div className="w-full h-28 bg-dark-title flex justify-center items-center rounded-md">
         <h4 className="font-secondary font-semibold text-3xl text-white-default">{props.text}</h4>
      </div>
   );
}

export default UIWindowTitle;
