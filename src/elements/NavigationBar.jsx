import React, { useState } from "react";
import UIButton from "../components/UIButton";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

function Navigation(props) {
   const [settingsVisible, setSettingsVisible] = useState(false);

   const toggleSettingsVisibility = () => {
      return setSettingsVisible((settingsVisible) => (settingsVisible === true ? false : true));
   };

   return (
      <NavigationMenu.Root className="relative flex w-screen justify-center bg-blue-500">
         <NavigationMenu.List className="my-2 rounded-lg bg-red-200 p-1">
            <NavigationMenu.Item>
               <NavigationMenu.Trigger className="rounded-lg bg-blue-300 px-6 py-2">Start</NavigationMenu.Trigger>
               <NavigationMenu.Content className="absolute">Hi</NavigationMenu.Content>
            </NavigationMenu.Item>
         </NavigationMenu.List>
      </NavigationMenu.Root>
   );
}

export default Navigation;
