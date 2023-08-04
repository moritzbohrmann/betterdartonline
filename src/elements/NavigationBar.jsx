import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";
import { Card, Title } from "../components/@ui/Card";

function Navigation() {
   return (
      <div className="sticky top-0 w-screen border-b-[1px] border-zinc-900 py-4 backdrop-blur-lg lg:flex-row">
         <NavigationMenu.Root>
            <NavigationMenu.List className="flex justify-center lg:justify-normal">
               <NavigationMenu.Item>
                  <h4 className="m-auto px-3 font-sans text-xl font-bold text-white-default lg:ml-80">betterdartonline</h4>
               </NavigationMenu.Item>
               <NavigationMenu.Item>
                  <Trigger>Start</Trigger>
               </NavigationMenu.Item>
               <NavigationMenu.Item>
                  <Trigger>Settings</Trigger>
                  <NavigationMenu.Content className="fixed data-[state=open]:animate-contentShow">
                     <Card className="absolute h-96 -translate-x-[14.5rem] bg-dark-background shadow-xl lg:-translate-x-0">
                        <Title title="Settings" subTitle="Adjust the program to your preferences." />
                     </Card>
                  </NavigationMenu.Content>
               </NavigationMenu.Item>
               <NavigationMenu.Item>
                  <Trigger>Playing</Trigger>
               </NavigationMenu.Item>
            </NavigationMenu.List>
         </NavigationMenu.Root>
      </div>
   );
}

const Trigger = (props) => (
   <NavigationMenu.Trigger
      {...props}
      className="rounded-sm px-3 py-1 font-sans text-base font-semibold text-zinc-400 transition-all hover:text-white-default">
      {props.children}
   </NavigationMenu.Trigger>
);

export default Navigation;
