import * as Collabsible from "@radix-ui/react-collapsible";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Search from "./search/Search";
import Avatar from "./Avatar";
import React from "react";
import SettingsMenu from "../elements/SettingsMenu";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ThemeType, useTheme } from "../context/ThemeContext";
import { AccountCard, SignupContent } from "../elements/AccountCard";
import { useAccount } from "../state/AccountReducer";
import { cn } from "../utils/style";
import { Badge, Button, Card, Flex, ReactiveIcon, Separator, Text, Title, ToolTip } from "./@ui/_collection";
import { AccountContent } from "./account/Account";

import {
   Cross1Icon,
   ExitIcon,
   HamburgerMenuIcon,
   LightningBoltIcon,
   MagnifyingGlassIcon,
   MoonIcon,
   PersonIcon,
   SunIcon,
} from "@radix-ui/react-icons";

const PC = () => {
   const account = useAccount();
   const [theme] = useTheme();
   const navigate = useNavigate();
   const { signout } = useAuth();

   return (
      <>
         <Flex gap="8" align="center" className="h-full">
            <Flex>
               <NavigationMenu.Item>
                  <div className="rounded-md bg-red-100 bg-gradient-to-tr from-indigo-600 via-purple-800 to-pink-700 px-2">
                     <Text size="xl" weight="b" className="hidden text-white-default sm:block">
                        Betterdartonline
                     </Text>
                     <Text size="xl" weight="b" className="p-0.5 text-white-default sm:hidden">
                        B
                     </Text>
                  </div>
               </NavigationMenu.Item>
               <NavigationMenu.Item className="md:hidden">
                  <NavigationMenu.Trigger>
                     <ReactiveIcon Icon={<MagnifyingGlassIcon />} />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content>
                     <Search.Tablet />
                  </NavigationMenu.Content>
               </NavigationMenu.Item>
            </Flex>
            <div className="hidden h-full gap-4 md:visible md:flex">
               <ToolTip content="Coming soon...">
                  <Text variant="light" weight="sb" onClick={() => navigate("/home")}>
                     Home
                  </Text>
               </ToolTip>
               <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="h-full">
                     <Text variant="light" weight="sb">
                        Settings
                     </Text>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="data-[state=open]:animate-contentShow">
                     <Card className="absolute">
                        <Title subTitle="Customize the app according to your preferences.">Settings</Title>
                        <SettingsMenu />
                     </Card>
                  </NavigationMenu.Content>
               </NavigationMenu.Item>
               <ToolTip content="Coming soon...">
                  <Text variant="light" weight="sb">
                     Help
                  </Text>
               </ToolTip>
            </div>
         </Flex>
         <Flex>
            <NavigationMenu.Item className="hidden lg:block">
               <Search.Notebook />
            </NavigationMenu.Item>
            <NavigationMenu.Item>
               <NavigationMenu.Trigger>
                  <ToolTip content="Create Tournament">
                     <ReactiveIcon Icon={<LightningBoltIcon />} onClick={() => navigate("/tournament/create")} />
                  </ToolTip>
               </NavigationMenu.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="hidden h-full md:block">
               <Flex justify="center" align="center" className="h-full">
                  <NavigationMenu.Trigger>
                     {account ? (
                        <Avatar />
                     ) : (
                        <Badge color={theme.type === ThemeType.DARK ? "white" : "black"} className="animate-wiggle">
                           Sign in
                        </Badge>
                     )}
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute right-0 top-0">
                     <Sidebar />
                  </NavigationMenu.Content>
               </Flex>
            </NavigationMenu.Item>
         </Flex>
      </>
   );
};

const Mobile = () => {
   const [theme, , toggleTheme] = useTheme();
   const [mobileNavClosed, setMobileNavClosed] = React.useState(true);
   const account = useAccount();
   const navigate = useNavigate();

   return (
      <>
         <Flex>
            <NavigationMenu.Item className="flex cursor-pointer items-center md:hidden">
               <NavigationMenu.Trigger>{account ? <Avatar /> : <ReactiveIcon Icon={<PersonIcon />} />}</NavigationMenu.Trigger>
               <NavigationMenu.Content className="fixed left-0 top-16 w-full data-[state=open]:animate-rollDown">
                  <Flex justify="center" className="w-full border-b-[1px] border-dark-900 bg-dark-background px-8 pb-4">
                     {account ? <AccountContent /> : <SignupContent />}
                  </Flex>
               </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="flex cursor-pointer items-center md:hidden">
               <NavigationMenu.Trigger>
                  <ReactiveIcon Icon={theme.type === ThemeType.DARK ? <SunIcon /> : <MoonIcon />} onClick={toggleTheme} />
               </NavigationMenu.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.Item onMouseLeave={() => setMobileNavClosed(true)} className="flex cursor-pointer items-center md:hidden">
               <NavigationMenu.Trigger onClick={() => setMobileNavClosed(mobileNavClosed ? false : true)}>
                  <ReactiveIcon
                     Icon={mobileNavClosed ? <HamburgerMenuIcon /> : <Cross1Icon />}
                     onClick={() => setMobileNavClosed(!mobileNavClosed)}
                  />
               </NavigationMenu.Trigger>
               <NavigationMenu.Content className="fixed left-0 top-16 max-h-96 data-[state=open]:animate-extendDown">
                  <Flex
                     orientation="vertical"
                     align="center"
                     className={cn("absolute w-screen border-b-[1px]", theme.backgroundColor, theme.borderColor.light)}>
                     <HamburgerItem className={cn("h-16 border-b-[1px]", theme.borderColor.light)}>
                        <Text onClick={() => navigate("/home")}>Home</Text>
                     </HamburgerItem>
                     <HamburgerItem>
                        <Collabsible.Root className="w-full">
                           <Flex orientation="vertical" align="center">
                              <Collabsible.Trigger className="flex h-16 items-center justify-center" asChild>
                                 <Text>Settings</Text>
                              </Collabsible.Trigger>
                              <Collabsible.Content className="w-full rounded-none data-[state=open]:animate-extendDown">
                                 <Flex orientation="vertical" className="h-32 w-full px-10">
                                    <SettingsMenu />
                                 </Flex>
                              </Collabsible.Content>
                           </Flex>
                        </Collabsible.Root>
                     </HamburgerItem>
                  </Flex>
               </NavigationMenu.Content>
            </NavigationMenu.Item>
         </Flex>
      </>
   );
};

const HamburgerItem = ({ className, ...props }) => (
   <Flex align="center" justify="center" className={cn("h-1/3 w-4/5 cursor-pointer hover:brightness-110", className)} {...props} />
);

export { PC, Mobile };
