import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";
import SettingsMenu from "./SettingsMenu";
import ToolTip from "../components/@ui/ToolTip";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Card } from "../components/@ui/Card";
import { Flex } from "../components/@ui/Flex";
import { Text } from "../components/@ui/Text";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/style";

function Navigation() {
   const [theme] = useTheme();

   return (
      <NavigationMenu.Root
         className={cn("sticky top-0 border-b-[1px] bg-opacity-50 backdrop-blur-lg", theme.backgroundColor, theme.borderColor.light)}>
         <NavigationMenu.List className="flex h-16 w-screen items-center justify-between gap-8 px-8 md:justify-normal md:px-0">
            <NavigationMenu.Item>
               <div className="rounded-md bg-red-100 bg-gradient-to-tr from-indigo-600 via-purple-800 to-pink-700 px-2 md:ml-16 lg:ml-32 xl:ml-48">
                  <Text size="xl" weight="b" className="text-white-default">
                     betterdartonline
                  </Text>
               </div>
            </NavigationMenu.Item>
            <div className="mt-1 hidden gap-4 md:visible md:flex">
               <NavigationMenu.Item>
                  <ToolTip content="Coming soon...">
                     <NavigationTrigger>Start</NavigationTrigger>
                  </ToolTip>
               </NavigationMenu.Item>
               <NavigationMenu.Item>
                  <NavigationTrigger>Settings</NavigationTrigger>
                  <NavigationMenu.Content className="fixed data-[state=open]:animate-contentShow">
                     <SettingsMenu />
                  </NavigationMenu.Content>
               </NavigationMenu.Item>
               <NavigationMenu.Item>
                  <ToolTip content="Coming soon...">
                     <NavigationTrigger>Rules</NavigationTrigger>
                  </ToolTip>
               </NavigationMenu.Item>
            </div>
            <NavigationMenu.Item className="md:hidden">
               <NavigationTrigger>
                  <HamburgerMenuIcon className="h-8 w-8" />
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
   <Flex align="center" justify="center" className={cn("h-1/3 w-full cursor-pointer hover:brightness-110", className)} {...props} />
);

export default Navigation;
