import * as Collapsible from "@radix-ui/react-collapsible";
import Avatar from "./Avatar";
import Login from "./account/Login";
import React from "react";
import Register from "./account/Register";
import Separator from "./@ui/Separator";
import Switch from "./@ui/Switch";
import { Cross1Icon, EnterIcon, ExitIcon, GearIcon, LightningBoltIcon, PersonIcon, QuestionMarkCircledIcon, TimerIcon } from "@radix-ui/react-icons";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useAccount } from "../state/AccountReducer";
import { cn } from "../utils/style";
import { Flex } from "./@ui/Flex";
import { Select } from "./@ui/Select";
import { Text } from "./@ui/Text";
import { AccountContent } from "./account/Account";

function Sidebar() {
   const account = useAccount();

   return (
      <Flex justify="end" className="z-40 h-screen w-screen animate-contentFade bg-dark-background bg-opacity-40">
         <Flex
            orientation="vertical"
            justify="between"
            gap="4"
            className="z-50 h-screen w-80 animate-extendLeft rounded-l-xl border-[1px] border-r-[0] border-dark-900 bg-dark-background p-8 shadow-lg">
            <Flex orientation="vertical" gap="4" className="w-full">
               <Flex justify="between" align="center" className="w-full">
                  <Flex justify="between" align="center" gap="2" className="rounded-md bg-zinc-800 px-2 py-1">
                     {account ? <Item icon={<Avatar />} text={account?.username} /> : <Item icon={<Avatar initials="G" />} text="Welcome, user!" />}
                  </Flex>
                  <Cross1Icon color="white" />
               </Flex>
               {account ? <Account /> : <Guest />}
            </Flex>
            <Flex orientation="vertical" gap="8" className="w-full">
               <Separator />
               <Item icon={<QuestionMarkCircledIcon />} text="Help" />
            </Flex>
         </Flex>
      </Flex>
   );
}

const Account = () => {
   const { signout } = useAuth();

   return (
      <Flex orientation="vertical" className="mt-4 w-full">
         <Collapsible.Root>
            <Collapsible.Trigger>
               <Item icon={<PersonIcon />} text="Your profile" />
            </Collapsible.Trigger>
            <Collapsible.Content className="my-4 animate-contentFade border-l-[1px] border-dark-900 pl-4">
               <AccountContent />
            </Collapsible.Content>
         </Collapsible.Root>
         <Separator className="my-2" />
         <Flex orientation="vertical">
            <Collapsible.Root>
               <Collapsible.Trigger>
                  <Item icon={<GearIcon />} text="Settings" />
               </Collapsible.Trigger>
               <Collapsible.Content className="my-4 animate-contentFade border-l-[1px] border-dark-900 pl-4">
                  <Flex orientation="vertical">
                     <Flex justify="between" className="w-48">
                        <Text>Lightmode</Text>
                        <Switch />
                     </Flex>
                     <Flex justify="between" className="w-48">
                        <Text>Caller</Text>
                        <Switch />
                     </Flex>
                     <Flex justify="between" className="w-48">
                        <Text>Language</Text>
                        <Select className="w-20">
                           <option>DE</option>
                           <option>EN</option>
                        </Select>
                     </Flex>
                  </Flex>
               </Collapsible.Content>
            </Collapsible.Root>
            <Item icon={<TimerIcon />} text="Pending matches" />
            <Item icon={<LightningBoltIcon />} text="Create tournament" onClick={() => navigate("/tournament/create")} />
         </Flex>
         <Separator className="my-2" />
         <Item icon={<ExitIcon />} text="Sign out" onClick={() => signout()} />
      </Flex>
   );
};

const Guest = () => {
   return (
      <Flex orientation="vertical" className="relative mt-4 w-full">
         <Collapsible.Root>
            <Collapsible.Trigger>
               <Item icon={<PersonIcon />} text="Sign in" />
            </Collapsible.Trigger>
            <Collapsible.Content className="my-4 animate-contentFade border-l-[1px] border-dark-900 pl-4">
               <Login />
            </Collapsible.Content>
         </Collapsible.Root>
         <Collapsible.Root>
            <Collapsible.Trigger>
               <Item icon={<EnterIcon />} text="Create account" />
            </Collapsible.Trigger>
            <Collapsible.Content className="my-4 animate-contentFade border-l-[1px] border-dark-900 pl-4">
               <Register />
            </Collapsible.Content>
         </Collapsible.Root>
      </Flex>
   );
};

const Item = ({ icon, text, ...props }) => {
   const [theme] = useTheme();

   return (
      <Flex align="center" {...props} className="cursor-pointer">
         {React.cloneElement(icon, { className: cn("w-4 h-4", theme.textColor.default) })}
         <Text size="sm" weight="sb">
            {text}
         </Text>
      </Flex>
   );
};

export default Sidebar;
