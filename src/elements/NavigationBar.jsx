import React, { useState } from "react";
import UIButton from "../components/UIButton";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

function Navigation(props) {
   const [settingsVisible, setSettingsVisible] = useState(false);

   const toggleSettingsVisibility = () => {
      return setSettingsVisible(settingsVisible === true ? false : true);
   };

   return (
      <div {...props} className="flex h-28 w-full flex-col items-center justify-around p-4 md:flex-row lg:h-28 lg:justify-between lg:px-20">
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
