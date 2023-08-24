import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import AccountCard from "./AccountCard";
import ProfileIcon from "../assets/user.png";
import React from "react";
import SettingsMenu from "./SettingsMenu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ToolTip, Badge, Card, Flex, Text } from "../components/@ui/_collection";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/style";
import { useAccount } from "../state/AccountReducer";

function Navigation() {
   const [theme] = useTheme();
   const account = useAccount();

   return (
      <NavigationMenu.Root
         className={cn("sticky top-0 w-full border-b-[1px] backdrop-blur-md md:bg-opacity-80", theme.backgroundColor, theme.borderColor.light)}
      >
         <NavigationMenu.List className="flex h-16 w-screen items-center justify-between gap-8 px-8 md:justify-normal md:px-16 lg:px-36 2xl:px-64">
            <Flex justify="between" align="center" className="w-full">
               <Flex gap="8">
                  <NavigationMenu.Item>
                     <div className="rounded-md bg-red-100 bg-gradient-to-tr from-indigo-600 via-purple-800 to-pink-700 px-2">
                        <Text size="xl" weight="b" className="text-white-default">
                           betterdartonline
                        </Text>
                     </div>
                  </NavigationMenu.Item>
                  <div className="mt-1 hidden gap-4 md:visible md:flex">
                     <NavigationMenu.Item>
                        <ToolTip content="Coming soon...">
                           <NavigationMenu.Trigger>
                              <Text variant="light" weight="b">
                                 Start
                              </Text>
                           </NavigationMenu.Trigger>
                        </ToolTip>
                     </NavigationMenu.Item>
                     <NavigationMenu.Item>
                        <NavigationMenu.Trigger>
                           <Text variant="light" weight="b">
                              Settings
                           </Text>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="absolute data-[state=open]:animate-contentShow">
                           <SettingsMenu />
                        </NavigationMenu.Content>
                     </NavigationMenu.Item>
                     <NavigationMenu.Item>
                        <ToolTip content="Coming soon...">
                           <NavigationMenu.Trigger>
                              <Text variant="light" weight="b">
                                 Help
                              </Text>
                           </NavigationMenu.Trigger>
                        </ToolTip>
                     </NavigationMenu.Item>
                  </div>
               </Flex>
               <NavigationMenu.Item className="hidden md:block">
                  <NavigationMenu.Trigger>
                     {account.isLoggedIn ? (
                        <Flex justify="around" align="center" gap="4" className={`rounded-md border-[1px] ${theme.borderColor.light} px-4 py-1`}>
                           <Text weight="sb">{profile.username}</Text>
                           <img src={ProfileIcon} className="h-8 w-8" />
                        </Flex>
                     ) : (
                        <Badge color="white">Sign in</Badge>
                     )}
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute data-[state=open]:animate-contentShow">
                     <AccountCard />
                  </NavigationMenu.Content>
               </NavigationMenu.Item>
            </Flex>
            <NavigationMenu.Item className="md:hidden">
               <NavigationMenu.Trigger>
                  <HamburgerMenuIcon className="h-8 w-8" />
               </NavigationMenu.Trigger>
               <NavigationMenu.Content className="fixed left-0 mt-3 data-[state=open]:animate-contentShow">
                  <Card className="absolute h-56 w-screen">
                     <HamburgerItem className={cn("border-b-[1px]", theme.borderColor.light)}>
                        <Text>Start</Text>
                     </HamburgerItem>
                     <HamburgerItem>
                        <Text>Settings</Text>
                     </HamburgerItem>
                     <HamburgerItem className={cn("border-t-[1px]", theme.borderColor.light)}>
                        <Text>Help</Text>
                     </HamburgerItem>
                  </Card>
               </NavigationMenu.Content>
            </NavigationMenu.Item>
         </NavigationMenu.List>
      </NavigationMenu.Root>
   );
}

const HamburgerItem = ({ className, ...props }) => (
   <Flex align="center" justify="center" className={cn("h-1/3 w-full cursor-pointer hover:brightness-110", className)} {...props} />
);

export default Navigation;
