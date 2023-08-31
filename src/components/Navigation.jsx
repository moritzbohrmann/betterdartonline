import * as Collabsible from "@radix-ui/react-collapsible";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Search from "./search/Search";
import Path from "./Path";
import React from "react";
import SettingsMenu from "../elements/SettingsMenu";
import Sidebar from "./sidebar/Sidebar";
import { Cross1Icon, HamburgerMenuIcon, LightningBoltIcon, MagnifyingGlassIcon, MoonIcon, PersonIcon, SunIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { ThemeType, useTheme } from "../context/ThemeContext";
import { SignupContent } from "../elements/AccountCard";
import { useAccount } from "../state/AccountReducer";
import { cn } from "../utils/style";
import { Avatar, Badge, Flex, ReactiveIcon, Text, ToolTip } from "./@ui/_collection";
import { AccountContent } from "./account/Account";

const PC = () => {
   const account = useAccount();
   const [theme] = useTheme();
   const navigate = useNavigate();
   const [isSidebarOpen, setSidebarOpen] = React.useState(false);

   return (
      <>
         <Flex gap="8" align="center" className="h-full">
            <Flex align="center">
               <NavigationMenu.Item>
                  <div className="rounded-md bg-red-100 bg-gradient-to-tr from-indigo-600 via-purple-800 to-pink-700 px-2">
                     <Text size="xl" weight="b" className="hidden text-white-default sm:block">
                        Betterdartonline
                     </Text>
                     <Text size="xl" weight="b" className="text-white-default sm:hidden">
                        B
                     </Text>
                  </div>
               </NavigationMenu.Item>
               <Path className="ml-2" />
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
