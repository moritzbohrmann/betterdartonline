import React from "react";
import Toggler from "../components/UIToggler";
import UIWindow from "../components/UIWindow";

function Settings() {
   return (
      <UIWindow id="settings" title="Einstellungen" className="fixed top-80 z-10 m-auto h-96 gap-2 drop-shadow-xl">
         <Setting title="Sprache" className="mt-2">
            <select className="text-sans rounded-md bg-dark-background px-2 py-1 font-semibold text-white-default outline-none">
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
      <div {...props} className={`flex h-10 w-11/12 items-center justify-between rounded-md bg-dark-background px-8 ${props.className}`}>
         <h2 className="font-sans font-semibold text-white-default">{props.title}</h2>
         {props.children}
      </div>
   );
};

export default Settings;
