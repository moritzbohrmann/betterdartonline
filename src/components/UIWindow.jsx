import React from "react";
import UIWindowTitle from "./UIWindowTitle";

function UIWindow(props) {
   return (
      <div id={props.id} className={`w-96 bg-dark-window p-4 flex flex-col items-center rounded-md ${props.className}`}>
         <UIWindowTitle text={props.title} />
         {props.children}
      </div>
   );
}

export default UIWindow;
