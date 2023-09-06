import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Search from "./search/Search";
import Path from "./Path";
import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { HomeIcon, MagnifyingGlassIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { ThemeType, useTheme } from "../context/ThemeContext";
import { useAccount } from "../state/AccountReducer";
import { Avatar, Badge, Flex, ReactiveIcon, Separator, Text } from "./@ui/_collection";

const Logo = () => {
   return (
      <Flex align="center" className="h-8 rounded-md bg-red-100 bg-gradient-to-tr from-indigo-600 via-purple-800 to-pink-700">
         <Text size="xl" weight="b" className="hidden px-2 text-white-default sm:block">
            Betterdartonline
         </Text>
         <Text size="xl" weight="b" className="w-8 text-white-default sm:hidden">
            B
         </Text>
      </Flex>
   );
};

const Left = () => {
   const navigate = useNavigate();

   return (
      <>
         <Flex align="center" gap="2" className="h-4">
            <Logo />
            <Separator orientation="vertical" className="mx-0.5 md:mx-2" />
            <Flex align="center">
               <ReactiveIcon Icon={<HomeIcon />} onClick={() => navigate("/home")} />
               <Path className="hidden sm:flex" />
            </Flex>
         </Flex>
      </>
   );
};

const _Search = () => {
   return (
      <>
         <Search.Notebook className="hidden lg:block" />
         <NavigationMenu.Item className="lg:hidden">
            <NavigationMenu.Trigger>
               <ReactiveIcon Icon={<MagnifyingGlassIcon />} />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
               <Search.Tablet />
            </NavigationMenu.Content>
         </NavigationMenu.Item>
      </>
   );
};

const Theme = () => {
   const [theme, , toggleTheme] = useTheme();

   return (
      <NavigationMenu.Item className="flex cursor-pointer items-center">
         <NavigationMenu.Trigger>
            <ReactiveIcon Icon={theme.type === ThemeType.DARK ? <SunIcon /> : <MoonIcon />} onClick={toggleTheme} />
         </NavigationMenu.Trigger>
      </NavigationMenu.Item>
   );
};

const Account = () => {
   const account = useAccount();
   const [theme] = useTheme();
   const [isSidebarOpen, setSidebarOpen] = React.useState(false);

   return (
      <>
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
      </>
   );
};

const Right = () => {
   return (
      <>
         <Flex className="min-w-[7rem]">
            <_Search />
            <Theme />
            <Account />
         </Flex>
      </>
   );
};

export { Left, Right };
