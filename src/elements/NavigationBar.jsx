import React, { useState } from "react";
import UIButton from "../components/UIButton";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

function Navigation(props) {
   const [settingsVisible, setSettingsVisible] = useState(false);

   const toggleSettingsVisibility = () => {
      return setSettingsVisible((settingsVisible) => (settingsVisible === true ? false : true));
   };

   return (
      <div {...props} className="flex h-28 w-full flex-col items-center justify-around p-4 md:flex-row lg:h-28 lg:justify-between lg:px-20">
         <img src={logo} className="w-52 xl:w-60" />
         <div className="hidden w-96 items-center justify-center gap-2 rounded-md bg-yellow-500 py-1 xl:visible xl:flex">
            <button className="w-8 rounded-md bg-yellow-600 py-0.5 font-bold text-dark-background">{"<"}</button>
            <h1 className="text-md font-secondary text-dark-background">
               Moritz Bohrmann <span className="font-bold">4 : 1</span> Michael Mietasch
            </h1>
            <button className="w-8 rounded-md bg-yellow-600 py-0.5 font-bold text-dark-background">{">"}</button>
         </div>
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
