import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";
import SettingsMenu from "./SettingsMenu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Card } from "../components/@ui/Card";
import { useTheme } from "../context/ThemeContext";

function Navigation() {
   const [theme] = useTheme();

   return (
      <div className="sticky top-0 w-screen border-b-[1px] border-zinc-900 py-4 backdrop-blur-lg lg:flex-row">
         <NavigationMenu.Root>
            <NavigationMenu.List className="flex h-8 justify-between px-10 md:justify-normal">
               <NavigationMenu.Item>
                  <h4 className={`px-3 font-sans text-xl font-bold ${theme.textColor} lg:ml-80`}>betterdartonline</h4>
               </NavigationMenu.Item>
               <div className="hidden md:visible md:flex">
                  <NavigationMenu.Item>
                     <Trigger>Start</Trigger>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                     <Trigger>Settings</Trigger>
                     <NavigationMenu.Content className="fixed data-[state=open]:animate-contentShow">
                        <SettingsMenu />
                     </NavigationMenu.Content>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                     <Trigger>Playing</Trigger>
                  </NavigationMenu.Item>
               </div>
               <NavigationMenu.Item className="md:hidden">
                  <Trigger>
                     <div>
                        <HamburgerMenuIcon className="h-6 w-6" />
                     </div>
                  </Trigger>
                  <NavigationMenu.Content className="fixed left-0 mt-3 data-[state=open]:animate-contentShow">
                     <Card className={`absolute h-56 w-screen ${theme.backgroundColor} py-2 text-center shadow-xl`}>
                        <HamburgerItem className="border-b-[1px] border-zinc-900">Start</HamburgerItem>
                        <HamburgerItem>Settings</HamburgerItem>
                        <HamburgerItem className="border-t-[1px] border-zinc-900">Playing</HamburgerItem>
                     </Card>
                  </NavigationMenu.Content>
               </NavigationMenu.Item>
            </NavigationMenu.List>
         </NavigationMenu.Root>
      </div>
   );
}

const Trigger = (props) => {
   const [theme] = useTheme();

   return (
      <NavigationMenu.Trigger
         {...props}
         className={`rounded-sm px-3 py-1 font-sans text-base font-semibold text-zinc-400 transition-all hover:${theme.textColor}`}
      >
         {props.children}
      </NavigationMenu.Trigger>
   );
};

const HamburgerItem = (props) => {
   return (
      <div className={`flex h-1/3 w-full cursor-pointer hover:brightness-110 ${props.className}`}>
         <h2 className="m-auto text-white-default">{props.children}</h2>
      </div>
   );
};

export default Navigation;
