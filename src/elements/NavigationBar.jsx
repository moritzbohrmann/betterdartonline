import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
   const [settingsVisible, setSettingsVisible] = useState(false);

   const toggleSettingsVisibility = () => {
      return setSettingsVisible((settingsVisible) => (settingsVisible === true ? false : true));
   };

   return (
      <div className="flex w-screen flex-col items-center justify-between lg:flex-row">
         <h4 className="ml-12 mt-4 font-sans text-xl font-bold text-white-default">Betterdartonline.</h4>
         <NavigationMenu.Root className="relative flex">
            <NavigationMenu.List className="mr-12 mt-4 flex">
               <NavigationMenu.Item>
                  <Trigger>Start</Trigger>
               </NavigationMenu.Item>
               <NavigationMenu.Item>
                  <Trigger onClick={toggleSettingsVisibility}>
                     <Link to={settingsVisible ? "./" : "./settings"}>Einstellungen</Link>
                  </Trigger>
               </NavigationMenu.Item>
               <NavigationMenu.Item>
                  <Trigger>Live</Trigger>
               </NavigationMenu.Item>
            </NavigationMenu.List>
         </NavigationMenu.Root>
      </div>
   );
}

const Trigger = (props) => (
   <NavigationMenu.Trigger
      {...props}
      className="rounded-sm px-6 py-1 font-secondary text-sm font-medium text-zinc-400 transition-all hover:text-white-default">
      {props.children}
   </NavigationMenu.Trigger>
);

export default Navigation;
