import Login from "../account/Login";
import React from "react";
import Register from "../account/Register";
import { Cross1Icon, EnterIcon, ExitIcon, GearIcon, LightningBoltIcon, PersonIcon, QuestionMarkCircledIcon, TimerIcon } from "@radix-ui/react-icons";
import { useAuth } from "../../context/AuthContext";
import { useAccount } from "../../state/AccountReducer";
import { cn } from "../../utils/style";
import { Avatar, Card, Flex, Text } from "../@ui/_collection";
import { ContentItem, Item, Trigger, Unit, UserOptions } from "./components/_collection";
import { Account, Pending, Settings, Tournaments } from "./elements/_collection";

function Sidebar({ onClose }) {
   const account = useAccount();

   return (
      <Flex justify="end" className={cn("z-40 h-screen w-screen animate-contentFade bg-black bg-opacity-20")}>
         <Card className="h-screen w-[22rem] animate-extendLeft justify-between border-r-0">
            <Flex orientation="vertical" gap="4" className="w-full">
               <Header onClose={onClose} />
               {account ? <AccountOptions /> : <GuestOptions />}
            </Flex>
            <Unit>
               <Item>
                  <Trigger icon={<QuestionMarkCircledIcon />} text="Help" />
               </Item>
            </Unit>
         </Card>
      </Flex>
   );
}

const AccountOptions = () => {
   const { doLogout } = useAuth();

   const options = [
      {
         options: [{ icon: <PersonIcon />, text: "Your account", element: <Account /> }],
      },
      {
         unit: true,
         options: [
            { icon: <GearIcon />, text: "Settings", element: <Settings /> },
            { icon: <TimerIcon />, text: "Pending matches", element: <Pending /> },
            { icon: <LightningBoltIcon />, text: "Your tournaments", element: <Tournaments /> },
         ],
      },
      { unit: true, options: [{ icon: <ExitIcon />, text: "Sign out", element: null, operation: doLogout }] },
   ];

   return <UserOptions options={options} />;
};

const GuestOptions = () => {
   const options = [
      {
         unit: false,
         options: [
            {
               icon: <PersonIcon />,
               text: "Sign in",
               element: (
                  <ContentItem>
                     <Login />
                  </ContentItem>
               ),
            },
            {
               icon: <EnterIcon />,
               text: "Create account",
               element: (
                  <ContentItem>
                     <Register />
                  </ContentItem>
               ),
            },
         ],
      },
   ];

   return <UserOptions options={options} />;
};

const Header = ({ onClose }) => {
   const account = useAccount();

   return (
      <Flex justify="between" align="center" className="w-full">
         <Flex align="center" className="rounded-md bg-zinc-400 bg-opacity-20 px-2 py-1">
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
