import * as Collabsible from "@radix-ui/react-collapsible";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import DemoIcon from "../assets/demo_user.png";
import React from "react";
import SettingsMenu from "./SettingsMenu";
import { BorderSolidIcon, HamburgerMenuIcon, PersonIcon } from "@radix-ui/react-icons";
import { Badge, Card, Flex, Text, Title, ToolTip } from "../components/@ui/_collection";
import { Account, AccountContent } from "../components/account/Account";
import { useTheme } from "../context/ThemeContext";
import { useAccount } from "../state/AccountReducer";
import { cn } from "../utils/style";
import { SignupCard, SignupContent } from "./SignupCard";

function Navigation() {
   const [theme] = useTheme();
   const account = useAccount();
   const [mobileNavClosed, setMobileNavClosed] = React.useState(true);

   return (
      <NavigationMenu.Root className={cn("sticky top-0 w-full border-b-[1px]", theme.backgroundColor, theme.borderColor.light)}>
         <NavigationMenu.List className="flex h-16 w-screen items-center justify-between gap-4 px-4 sm:px-8 md:justify-normal md:px-16 lg:px-36 2xl:px-64">
            <Flex justify="between" align="center" className="h-full w-full">
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
               <NavigationMenu.Item className="hidden h-full md:block">
                  {account ? (
                     <>
                        <Flex justify="center" align="center" className="h-full">
                           <NavigationMenu.Trigger>
                              <img src={DemoIcon} className="h-8 w-8 rounded-full" />
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
                  <div className="rounded-md border-[1px] p-1">
                     <PersonIcon className={cn("h-5 w-5", theme.textColor.default)} />
                  </div>
               </NavigationMenu.Trigger>
               <NavigationMenu.Content className="fixed left-0 top-16 max-h-96 data-[state=open]:animate-rollDown">
                  <Card className="absolute w-screen rounded-none border-y-0 border-b-[1px] border-t-0">
                     <Flex justify="center">{account ? <AccountContent /> : <SignupContent />}</Flex>
                  </Card>
               </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item onMouseLeave={() => setMobileNavClosed(true)} className="flex cursor-pointer items-center md:hidden">
               <NavigationMenu.Trigger onClick={() => setMobileNavClosed(mobileNavClosed ? false : true)}>
                  <div className="rounded-md border-[1px] p-1">
                     {mobileNavClosed ? (
                        <HamburgerMenuIcon className={cn("h-5 w-5 animate-contentFade", theme.textColor.default)} />
                     ) : (
                        <div className="animate-contentFade">
                           <BorderSolidIcon className={cn("absolute h-5 w-5 rotate-45 animate-rotateCross1", theme.textColor.default)} />
                           <BorderSolidIcon className={cn("h-5 w-5 -rotate-45 animate-rotateCross2", theme.textColor.default)} />
                        </div>
                     )}
                  </div>
               </NavigationMenu.Trigger>
               <NavigationMenu.Content className="fixed left-0 top-16 max-h-96 data-[state=open]:animate-rollDown">
                  <Card className="absolute w-screen rounded-none border-y-0 border-b-[1px] border-t-0">
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
                                 <Collabsible.Content className="w-full rounded-none data-[state=open]:animate-rollDown">
                                    <Flex orientation="vertical" className="h-32 w-full px-10">
                                       <SettingsMenu />
                                    </Flex>
                                 </Collabsible.Content>
                              </Flex>
                           </Collabsible.Root>
                        </HamburgerItem>
                        <HamburgerItem className={cn("border-t-[1px]", theme.borderColor.light)}>
                           <Collabsible.Root>
                              <Flex orientation="vertical" align="center">
                                 <Collabsible.Trigger className="flex h-16 items-center justify-center data-[state=open]:font-bold" asChild>
                                    <Flex>
                                       {account ? (
                                          <img src={DemoIcon} className="h-8 w-8 rounded-full" />
                                       ) : (
                                          <Badge color="white" className="animate-wiggle">
                                             Sign in
                                          </Badge>
                                       )}
                                    </Flex>
                                 </Collabsible.Trigger>
                                 <Collabsible.Content className="w-full rounded-none data-[state=open]:animate-rollDown">
                                    <Flex justify="center">{account ? <AccountContent /> : <SignupContent />}</Flex>
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
