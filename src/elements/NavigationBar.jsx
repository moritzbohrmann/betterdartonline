import * as Collabsible from "@radix-ui/react-collapsible";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import AccountCard from "./AccountCard";
import ProfileIcon from "../assets/user.png";
import React from "react";
import SettingsMenu from "./SettingsMenu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, Card, Flex, Text, Title, ToolTip } from "../components/@ui/_collection";
import { useTheme } from "../context/ThemeContext";
import { useAccount } from "../state/AccountReducer";
import { cn } from "../utils/style";

function Navigation() {
   const [theme] = useTheme();
   const account = useAccount();

   return (
      <NavigationMenu.Root
         className={cn("sticky top-0 w-full border-b-[1px] bg-opacity-50 backdrop-blur-md", theme.backgroundColor, theme.borderColor.light)}>
         <NavigationMenu.List className="flex h-16 w-screen items-center justify-between gap-8 px-4 md:justify-normal md:px-16 lg:px-36 2xl:px-64">
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
                              <Text variant="light" weight="b" hover>
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
                           <Card className="absolute">
                              <Title subTitle="Customize the app according to your preferences.">Settings</Title>
                              <SettingsMenu />
                           </Card>
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
                        <Button variant="neutral">Sign up</Button>
                     )}
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute data-[state=open]:animate-contentShow">
                     <AccountCard />
                  </NavigationMenu.Content>
               </NavigationMenu.Item>
            </Flex>
            <NavigationMenu.Item className="md:hidden">
               <NavigationMenu.Trigger>
                  <HamburgerMenuIcon className={cn("h-8 w-8", theme.textColor.default)} />
               </NavigationMenu.Trigger>
               <NavigationMenu.Content className="fixed left-0 mt-3 data-[state=open]:animate-contentFade">
                  <Card className="absolute w-screen rounded-none">
                     <Flex orientation="vertical" className="w-full">
                        <HamburgerItem className={cn("h-16 border-b-[1px]", theme.borderColor.light)}>
                           <Text>Start</Text>
                        </HamburgerItem>
                        <HamburgerItem>
                           <Collabsible.Root className="w-full">
                              <Flex orientation="vertical" align="center">
                                 <Collabsible.Trigger className="flex h-16 items-center justify-center data-[state=open]:font-bold" asChild>
                                    <Text>Settings</Text>
                                 </Collabsible.Trigger>
                                 <Collabsible.Content className="w-full animate-rollDown rounded-none">
                                    <Flex orientation="vertical" align="center" className="h-32 w-full px-10">
                                       <SettingsMenu />
                                    </Flex>
                                 </Collabsible.Content>
                              </Flex>
                           </Collabsible.Root>
                        </HamburgerItem>
                        <HamburgerItem className={cn("h-16 border-t-[1px]", theme.borderColor.light)}>
                           <Text>Help</Text>
                        </HamburgerItem>
                     </Flex>
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
