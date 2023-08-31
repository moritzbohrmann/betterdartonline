import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Search from "./search/Search";
import Path from "./Path";
import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { MagnifyingGlassIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ThemeType, useTheme } from "../context/ThemeContext";
import { useAccount } from "../state/AccountReducer";
import { Avatar, Badge, Flex, ReactiveIcon, Separator, Text } from "./@ui/_collection";

const PC = () => {
   return (
      <>
         <Flex gap="8" align="center" className="h-full">
            <Flex align="center" className="h-4">
               <NavigationMenu.Item>
                  <Flex align="center" className="h-8 rounded-md bg-red-100 bg-gradient-to-tr from-indigo-600 via-purple-800 to-pink-700">
                     <Text size="xl" weight="b" className="hidden px-2 text-white-default sm:block">
                        Betterdartonline
                     </Text>
                     <Text size="xl" weight="b" className="w-8 text-white-default sm:hidden">
                        B
                     </Text>
                  </Flex>
               </NavigationMenu.Item>
               <Separator orientation="vertical" className="mx-0.5 md:mx-2" />
               <Path />
            </Flex>
         </Flex>
         <Flex>
            <NavigationMenu.Item className="hidden lg:block">
               <Search.Notebook />
            </NavigationMenu.Item>
         </Flex>
      </>
   );
};

const Mobile = () => {
   const [theme, , toggleTheme] = useTheme();
   const account = useAccount();
   const [isSidebarOpen, setSidebarOpen] = React.useState(false);

   return (
      <>
         <Flex className="min-w-[7rem]">
            <NavigationMenu.Item className="lg:hidden">
               <NavigationMenu.Trigger>
                  <ReactiveIcon Icon={<MagnifyingGlassIcon />} />
               </NavigationMenu.Trigger>
               <NavigationMenu.Content>
                  <Search.Tablet />
               </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="flex cursor-pointer items-center">
               <NavigationMenu.Trigger>
                  <ReactiveIcon Icon={theme.type === ThemeType.DARK ? <SunIcon /> : <MoonIcon />} onClick={toggleTheme} />
               </NavigationMenu.Trigger>
            </NavigationMenu.Item>
            <Flex>
               {account ? (
                  <Avatar onClick={() => setSidebarOpen(true)} />
               ) : (
                  <Badge
                     color={theme.type === ThemeType.DARK ? "white" : "black"}
                     onClick={() => setSidebarOpen(true)}
                     className="animate-wiggle cursor-pointer">
                     Sign in
                  </Badge>
               )}
               <div className="absolute right-0 top-0">{isSidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}</div>
            </Flex>
         </Flex>
      </>
   );
};

export { PC, Mobile };
