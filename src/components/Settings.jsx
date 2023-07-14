import React from "react";
import Toggler from "./Toggler";
import UIWindow from "./UIWindow";

function Settings() {
   return (
      <UIWindow id="settings" title="Einstellungen" className="z-10 m-auto h-96 drop-shadow-xl gap-2">
         <Setting title="Sprache" className="mt-2">
            <select className="bg-dark-background py-1 px-2 rounded-md text-sans text-white-default font-semibold outline-none">
               <option value="DE">Deutsch</option>
               <option value="EN">Englisch</option>
            </select>
         </Setting>
         <Setting title="Audio">
            <Toggler />
         </Setting>
      </UIWindow>
   );
}

const Setting = (props) => {
   return (
      <div {...props} className={`w-11/12 h-10 bg-dark-background rounded-md flex px-8 items-center justify-between ${props.className}`}>
         <h2 className="text-white-default font-sans font-semibold">{props.title}</h2>
         {props.children}
      </div>
   );
};

export default Settings;
