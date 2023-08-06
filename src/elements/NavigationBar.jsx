import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";
import SettingsMenu from "./SettingsMenu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Card } from "../components/@ui/Card";
import { Text } from "../components/@ui/Text";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/style";

function Navigation() {
   const [theme] = useTheme();

   return (
      <NavigationMenu.Root className={cn("sticky top-0 border-b-[1px] backdrop-blur-lg", theme.borderColor.light)}>
         <NavigationMenu.List className="flex h-16 w-screen items-center justify-between gap-8 px-8 md:justify-normal md:px-0">
            <NavigationMenu.Item>
               <Text size="xl" weight="b" className="md:ml-16 lg:ml-32 xl:ml-48">
                  betterdartonline
               </Text>
            </NavigationMenu.Item>
            <div className="mt-1 hidden gap-4 md:visible md:flex">
               <NavigationMenu.Item>
                  <NavigationTrigger>Start</NavigationTrigger>
               </NavigationMenu.Item>
               <NavigationMenu.Item>
                  <NavigationTrigger>Settings</NavigationTrigger>
                  <NavigationMenu.Content className="fixed data-[state=open]:animate-contentShow">
                     <SettingsMenu />
                  </NavigationMenu.Content>
               </NavigationMenu.Item>
               <NavigationMenu.Item>
                  <NavigationTrigger>Playing</NavigationTrigger>
               </NavigationMenu.Item>
            </div>
            <NavigationMenu.Item className="md:hidden">
               <NavigationTrigger>
                  <div>
                     <HamburgerMenuIcon className="h-8 w-8" />
                  </div>
               </NavigationTrigger>
               <NavigationMenu.Content className="fixed left-0 mt-3 data-[state=open]:animate-contentShow">
                  <Card className="absolute h-56 w-screen">
                     <HamburgerItem className={cn("border-b-[1px]", theme.borderColor.light)}>
                        <Text>Start</Text>
                     </HamburgerItem>
                     <HamburgerItem>
                        <Text>Settings</Text>
                     </HamburgerItem>
                     <HamburgerItem className={cn("border-t-[1px]", theme.borderColor.light)}>
                        <Text>Playing</Text>
                     </HamburgerItem>
                  </Card>
               </NavigationMenu.Content>
            </NavigationMenu.Item>
         </NavigationMenu.List>
      </NavigationMenu.Root>
   );
}

const NavigationTrigger = ({ ...props }) => (
   <NavigationMenu.Trigger className={`font-sans font-semibold text-zinc-400 transition-all hover:brightness-110`} {...props} />
);

const HamburgerItem = ({ className, ...props }) => (
   <div className={cn("flex h-1/3 w-full cursor-pointer items-center justify-center hover:brightness-110", className)} {...props} />
);

export default Navigation;
