import * as Tabs from "../components/@ui/Tabs";
import Cricket from "../components/profile/Cricket";
import React from "react";
import SplitScore from "../components/profile/SplitScore";
import X01 from "../components/profile/X01";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button } from "../components/@ui/Button";
import { Card, Title } from "../components/@ui/Card";
import { Flex } from "../components/@ui/Flex";
import { Text } from "../components/@ui/Text";
import { useSocket } from "../context/SocketContext";
import { useTheme } from "../context/ThemeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { clear } from "../state/PlayerlistReducer";
import { setSelected, useProfile } from "../state/ProfileReducer";

function ProfileCard() {
   const profile = useProfile();
   const [, setStorageProfile] = useLocalStorage("profile");
   const [joined, setJoined] = React.useState(false);
   const socket = useSocket();
   const dispatch = useDispatch();
   const [theme] = useTheme();

   const handleJoin = () => {
      setStorageProfile(profile);

      if (!socket.connected) return;

      socket.emit("join", profile);
      setJoined(true);
      toast.success("You joined the server!");
   };

   const handleQuit = () => {
      if (!socket.connected) return;
      socket.emit("quit", profile);
      dispatch(clear());

      setJoined(false);

      toast.info("You left the server!");
   };

   return (
      <Card>
         <Title subTitle="Edit your profile settings.">Profile</Title>
         <Tabs.Root className="h-52 w-full">
            <Tabs.Trigger className="h-10 w-1/3" value="tab1" onClick={() => dispatch(setSelected("X01"))}>
               <Text weight="sb">x01</Text>
            </Tabs.Trigger>
            <Tabs.Result className="mt-6" value="tab1">
               <X01 />
            </Tabs.Result>
            <Tabs.Trigger className="h-10 w-1/3 border-x-[1px]" value="tab2" onClick={() => dispatch(setSelected("Cricket"))}>
               <Text weight="sb">Cricket</Text>
            </Tabs.Trigger>
            <Tabs.Result className="mt-6" value="tab2">
               <Cricket />
            </Tabs.Result>
            <Tabs.Trigger className="h-10 w-1/3" value="tab3" onClick={() => dispatch(setSelected("Split"))}>
               <Text weight="sb">Split</Text>
            </Tabs.Trigger>
            <Tabs.Result className="mt-6" value="tab3">
               <SplitScore />
            </Tabs.Result>
         </Tabs.Root>
         <Flex align="center" className="mt-8">
            {joined ? (
               <Button variant="negative" onClick={() => handleQuit()}>
                  Quit
               </Button>
            ) : (
               <Button onClick={() => handleJoin()}>Join</Button>
            )}
         </Flex>
      </Card>
   );
}

export default ProfileCard;
