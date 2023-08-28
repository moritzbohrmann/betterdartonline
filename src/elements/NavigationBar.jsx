import * as Collabsible from "@radix-ui/react-collapsible";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import DemoIcon from "../assets/demo_user.png";
import React from "react";
import SettingsMenu from "./SettingsMenu";
import { BorderSolidIcon, GearIcon, HamburgerMenuIcon, HomeIcon, MoonIcon, PersonIcon, SunIcon } from "@radix-ui/react-icons";
import { Badge, Card, Flex, Text, Title, ToolTip } from "../components/@ui/_collection";
import { Account, AccountContent } from "../components/account/Account";
import { ThemeType, themeStyle, useTheme } from "../context/ThemeContext";
import { useAccount } from "../state/AccountReducer";
import { cn } from "../utils/style";
import { SignupCard, SignupContent } from "./SignupCard";

function Navigation() {
   const [theme, setTheme] = useTheme();
   const account = useAccount();
   const [mobileNavClosed, setMobileNavClosed] = React.useState(true);

   return (
      <NavigationMenu.Root className={cn("sticky top-0 w-full border-b-[1px]", theme.backgroundColor, theme.borderColor.light)}>
         <NavigationMenu.List className="flex h-16 w-screen items-center justify-between gap-2.5 px-4 sm:px-8 md:justify-normal md:px-16 lg:px-36 2xl:px-64">
            <Flex justify="between" align="center" className="h-full w-full">
               <Flex gap="8" align="center" className="h-full">
                  <NavigationMenu.Item>
                     <div className="rounded-md bg-red-100 bg-gradient-to-tr from-indigo-600 via-purple-800 to-pink-700 px-2">
                        <Text size="xl" weight="b" className="text-white-default">
                           betterdartonline
                        </Text>
                     </div>
                  </NavigationMenu.Item>
                  <div className="hidden h-full gap-4 md:visible md:flex">
                     <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="h-full">
                           <ToolTip content="Coming soon...">
                              <Text variant="light" weight="b" hover>
                                 Home
                              </Text>
                           </ToolTip>
                        </NavigationMenu.Trigger>
                     </NavigationMenu.Item>
                     <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="h-full">
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
                        <NavigationMenu.Trigger className="h-full">
                           <ToolTip content="Coming soon...">
                              <Text variant="light" weight="b" hover>
                                 Help
                              </Text>
                           </ToolTip>
                        </NavigationMenu.Trigger>
                     </NavigationMenu.Item>
                  </div>
               </Flex>
               <NavigationMenu.Item className="hidden h-full md:block">
                  {account ? (
                     <>
                        <Flex justify="center" align="center" className="h-full">
                           <NavigationMenu.Trigger>
                              <img src={account.picture} className="h-8 w-8 rounded-full" />
                           </NavigationMenu.Trigger>
                        </Flex>

                        <NavigationMenu.Content className="absolute data-[state=open]:animate-contentShow">
                           <Account />
                        </NavigationMenu.Content>
                     </>
                  ) : (
                     <>
                        <Flex justify="center" align="center" className="h-full">
                           <NavigationMenu.Trigger>
                              <Badge color="white" className="animate-wiggle">
                                 Sign in
                              </Badge>
                           </NavigationMenu.Trigger>
                        </Flex>

                        <NavigationMenu.Content className="absolute -translate-x-72 animate-contentFade">
                           <SignupCard />
                        </NavigationMenu.Content>
                     </>
                  )}
               </NavigationMenu.Item>
            </Flex>
            <NavigationMenu.Item className="flex cursor-pointer items-center md:hidden">
               <NavigationMenu.Trigger>
                  <button
                     onClick={() => setTheme(theme.type === ThemeType.DARK ? themeStyle(ThemeType.LIGHT) : themeStyle(ThemeType.DARK))}
                     className={cn("rounded-md border-[1px] p-1", theme.borderColor.default)}
                  >
                     {theme.type === ThemeType.DARK ? (
                        <SunIcon className={cn("h-5 w-5", theme.textColor.default)} />
                     ) : (
                        <MoonIcon className={cn("h-5 w-5", theme.textColor.default)} />
                     )}
                  </button>
               </NavigationMenu.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="flex cursor-pointer items-center md:hidden">
               <NavigationMenu.Trigger>
                  <button className={cn("rounded-md border-[1px] p-1", theme.borderColor.default)}>
                     <PersonIcon className={cn("h-5 w-5", theme.textColor.default)} />
                  </button>
               </NavigationMenu.Trigger>
               <NavigationMenu.Content className="fixed left-0 top-16 data-[state=open]:animate-rollDown">
                  <Card className="absolute w-screen rounded-none border-y-0 border-b-[1px] border-t-0">
                     <Flex justify="center" className="w-full">
                        {account ? <AccountContent /> : <SignupContent />}
                     </Flex>
                  </Card>
               </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item onMouseLeave={() => setMobileNavClosed(true)} className="flex cursor-pointer items-center md:hidden">
               <NavigationMenu.Trigger onClick={() => setMobileNavClosed(mobileNavClosed ? false : true)}>
                  <button className={cn("rounded-md border-[1px] p-1", theme.borderColor.default)}>
                     {mobileNavClosed ? (
                        <HamburgerMenuIcon className={cn("h-5 w-5 animate-contentFade", theme.textColor.default)} />
                     ) : (
                        <div className="animate-contentFade">
                           <BorderSolidIcon className={cn("absolute h-5 w-5 rotate-45 animate-rotateCross1", theme.textColor.default)} />
                           <BorderSolidIcon className={cn("h-5 w-5 -rotate-45 animate-rotateCross2", theme.textColor.default)} />
                        </div>
                     )}
                  </button>
               </NavigationMenu.Trigger>
               <NavigationMenu.Content className="fixed left-0 top-16 max-h-96 data-[state=open]:animate-rollDown">
                  <Card className="absolute w-screen rounded-none border-y-0 border-b-[1px] border-t-0">
                     <Flex orientation="vertical" className="w-full">
                        <HamburgerItem className={cn("h-16 border-b-[1px]", theme.borderColor.light)}>
                           <Flex justify="between" className="w-20">
                              <HomeIcon className="h-5 w-5" />
                              <Text>Home</Text>
                           </Flex>
                        </HamburgerItem>
                        <HamburgerItem>
                           <Collabsible.Root className="w-full">
                              <Flex orientation="vertical" align="center">
                                 <Collabsible.Trigger className="flex h-16 items-center justify-center data-[state=open]:font-bold" asChild>
                                    <Flex>
                                       <GearIcon className="h-5 w-5" />
                                       <Text>Settings</Text>
                                    </Flex>
                                 </Collabsible.Trigger>
                                 <Collabsible.Content className="w-full rounded-none data-[state=open]:animate-rollDown">
                                    <Flex orientation="vertical" className="h-32 w-full px-10">
                                       <SettingsMenu />
                                    </Flex>
                                 </Collabsible.Content>
                              </Flex>
                           </Collabsible.Root>
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
