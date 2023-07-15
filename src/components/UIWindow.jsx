import React from "react";
import UIWindowTitle from "./UIWindowTitle";

function UIWindow(props) {
   return (
      <div id={props.id} className={`flex w-96 flex-col items-center rounded-md bg-dark-window p-4 ${props.className}`}>
         <UIWindowTitle text={props.title} />
         {props.children}
      </div>
   );
}

export default UIWindow;
