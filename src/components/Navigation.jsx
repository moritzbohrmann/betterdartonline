import React, { useState } from "react";
import UIButton from "./UIButton";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

function Navigation(props) {
   const [settingsVisible, setSettingsVisible] = useState(false);

   const toggleSettingsVisibility = () => {
      return setSettingsVisible(settingsVisible === true ? false : true);
   };

   return (
      <div {...props} className="w-full h-28 lg:h-28 p-4 lg:px-20 flex flex-col md:flex-row items-center justify-around lg:justify-between">
         <img src={logo} className="w-52 xl:w-60" />
         <ul className="flex gap-2 lg:flex-row">
            <UIButton>Start</UIButton>
            <UIButton onClick={toggleSettingsVisibility}>
               <Link to={settingsVisible ? "/home/settings" : "/home"}>Einstellungen</Link>
            </UIButton>
         </ul>
      </div>
   );
}

export default Navigation;
