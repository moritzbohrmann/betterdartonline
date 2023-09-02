import Login from "../account/Login";
import React from "react";
import Register from "../account/Register";
import Unit from "./components/Unit";
import { Cross1Icon, EnterIcon, ExitIcon, GearIcon, LightningBoltIcon, PersonIcon, QuestionMarkCircledIcon, TimerIcon } from "@radix-ui/react-icons";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { useAccount } from "../../state/AccountReducer";
import { cn } from "../../utils/style";
import { Avatar, Flex, Separator, Text } from "../@ui/_collection";
import { Content, ContentItem, Item, Trigger } from "./components/_collection";
import { Account, Pending, Settings, Tournaments } from "./elements/_collection";

function Sidebar({ onClose }) {
   const account = useAccount();
   const [theme] = useTheme();

   return (
      <Flex justify="end" className={cn("z-40 h-screen w-screen animate-contentFade bg-opacity-40", theme.backgroundColor)}>
         <Flex
            orientation="vertical"
            justify="between"
            gap="4"
            className={cn(
               "z-50 h-screen w-80 animate-extendLeft rounded-l-xl border-[1px] border-r-[0] p-8",
               theme.backgroundColor,
               theme.borderColor.light
            )}>
            <Flex orientation="vertical" gap="4" className="w-full">
               <Header onClose={onClose} />
               {account ? <UserOptions account={account} /> : <GuestOptions />}
            </Flex>
            <Unit>
               <Item>
                  <Trigger icon={<QuestionMarkCircledIcon />} text="Help" />
               </Item>
            </Unit>
         </Flex>
      </Flex>
   );
}

const UserOptions = () => {
   const { signout } = useAuth();

   return (
      <Flex orientation="vertical" className="mt-4 w-full">
         <Item>
            <Trigger icon={<PersonIcon />} text="Your account" />
            <Content element={<Account />} />
         </Item>
         <Unit>
            <Item>
               <Trigger icon={<GearIcon />} text="Settings" />
               <Content element={<Settings />} />
            </Item>
            <Item>
               <Trigger icon={<TimerIcon />} text="Pending matches" />
               <Content element={<Pending />} />
            </Item>
            <Item>
               <Trigger icon={<LightningBoltIcon />} text="Your tournaments" />
               <Content element={<Tournaments />} />
            </Item>
         </Unit>
         <Unit>
            <Item>
               <Trigger icon={<ExitIcon />} text="Sign out" onClick={signout} />
            </Item>
         </Unit>
      </Flex>
   );
};

const GuestOptions = () => {
   return (
      <Flex orientation="vertical" className="relative mt-4 w-full">
         <Item>
            <Trigger icon={<PersonIcon />} text="Sign in" />
            <Content
               element={
                  <ContentItem>
                     <Login />
                  </ContentItem>
               }
            />
         </Item>
         <Item>
            <Trigger icon={<EnterIcon />} text="Create account" />
            <Content
               element={
                  <ContentItem>
                     <Register />
                  </ContentItem>
               }
            />
         </Item>
      </Flex>
   );
};

const Header = ({ onClose }) => {
   const account = useAccount();

   return (
      <Flex justify="between" align="center" className="w-full">
         <Flex justify="center" align="center" className="rounded-md bg-zinc-400 bg-opacity-20 px-2 py-1">
            <Avatar initials="G" />
            <Text size="sm" weight="b">
               {account ? account.username : "Welcome, Guest!"}
            </Text>
         </Flex>
         <Item>
            <Trigger icon={<Cross1Icon />} onClick={onClose}></Trigger>
         </Item>
      </Flex>
   );
};

export default Sidebar;
