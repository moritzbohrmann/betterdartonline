import * as Collabsible from "@radix-ui/react-collapsible";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Search from "./search/Search";
import React from "react";
import SettingsMenu from "../elements/SettingsMenu";
import { Cross1Icon, HamburgerMenuIcon, MagnifyingGlassIcon, MoonIcon, PersonIcon, SunIcon } from "@radix-ui/react-icons";
import { ThemeType, useTheme } from "../context/ThemeContext";
import { SignupCard, SignupContent } from "../elements/SignupCard";
import { useAccount } from "../state/AccountReducer";
import { cn } from "../utils/style";
import { Badge, Card, Flex, ReactiveIcon, Text, Title, ToolTip } from "./@ui/_collection";
import { Account, AccountContent } from "./account/Account";

const PC = () => {
   const account = useAccount();

   return (
      <>
         <Flex gap="8" align="center" className="h-full">
            <Flex>
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
               <NavigationMenu.Item>
                  <NavigationMenu.Trigger>
                     <ReactiveIcon Icon={<MagnifyingGlassIcon />} />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content>
                     <Search.Tablet />
                  </NavigationMenu.Content>
               </NavigationMenu.Item>
            </Flex>
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
      </>
   );
};

const Mobile = () => {
   const [theme, , toggleTheme] = useTheme();
   const [mobileNavClosed, setMobileNavClosed] = React.useState(true);
   const account = useAccount();

   return (
      <>
         <Flex>
            <NavigationMenu.Item className="flex cursor-pointer items-center md:hidden">
               <NavigationMenu.Trigger>
                  {account ? <img src={account.picture} className="h-7 w-7 rounded-full" /> : <ReactiveIcon Icon={<PersonIcon />} />}
               </NavigationMenu.Trigger>
               <NavigationMenu.Content className="fixed left-0 top-16 w-full data-[state=open]:animate-rollDown">
                  <Flex justify="center" className="w-full border-b-[1px] border-dark-900 bg-dark-background px-8 py-4">
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
               <NavigationMenu.Content className="fixed left-0 top-16 max-h-96 data-[state=open]:animate-rollDown">
                  <Card className="absolute w-screen rounded-none border-y-0 border-b-[1px] border-t-0">
                     <Flex orientation="vertical" className="w-full">
                        <HamburgerItem className={cn("h-16 border-b-[1px]", theme.borderColor.light)}>
                           <Text>Home</Text>
                        </HamburgerItem>
                        <HamburgerItem>
                           <Collabsible.Root className="w-full">
                              <Flex orientation="vertical" align="center">
                                 <Collabsible.Trigger className="flex h-16 items-center justify-center data-[state=open]:font-bold" asChild>
                                    <Text>Settings</Text>
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
         </Flex>
      </>
   );
};

const HamburgerItem = ({ className, ...props }) => (
   <Flex align="center" justify="center" className={cn("h-1/3 w-full cursor-pointer hover:brightness-110", className)} {...props} />
);

export { PC, Mobile };
