import * as Tabs from "../components/@ui/Tabs";
import Cricket from "../components/profile/Cricket";
import React from "react";
import SplitScore from "../components/profile/SplitScore";
import X01 from "../components/profile/X01";
import { toast } from "react-toastify";
import { Button } from "../components/@ui/Button";
import { Card, Title } from "../components/@ui/Card";
import { Flex } from "../components/@ui/Flex";
import { Text } from "../components/@ui/Text";
import { useSocket } from "../context/SocketContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useProfile } from "../state/ProfileReducer";

function ProfileCard() {
   const profile = useProfile();
   const [, setStorageProfile] = useLocalStorage("profile");
   const [joined, setJoined] = React.useState(false);
   const socket = useSocket();
   const tabRef = React.useRef([]);

   const GameType = {
      X01: 0,
      CRICKET: 1,
      SPLIT_SCORE: 2,
   };

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

      setJoined(false);

      toast.info("You left the server!");
   };

   return (
      <Card className="m-auto">
         <Title subTitle="Edit your profile settings.">Profile</Title>
         <Tabs.Root className="h-52 w-full">
            <Tabs.Trigger className="h-10 w-1/3" value="tab1" ref={(el) => (tabRef.current[GameType.X01] = el)}>
               <Text weight="sb">x01</Text>
            </Tabs.Trigger>
            <Tabs.Result className="mt-4" value="tab1">
               <X01 />
            </Tabs.Result>
            <Tabs.Trigger className="h-10 w-1/3 border-x-[1px] border-dark-900" value="tab2" ref={(el) => (tabRef.current[GameType.CRICKET] = el)}>
               <Text weight="sb">Cricket</Text>
            </Tabs.Trigger>
            <Tabs.Result className="mt-4" value="tab2">
               <Cricket />
            </Tabs.Result>
            <Tabs.Trigger className="h-10 w-1/3" value="tab3" ref={(el) => (tabRef.current[GameType.SPLIT_SCORE] = el)}>
               <Text weight="sb">Split</Text>
            </Tabs.Trigger>
            <Tabs.Result className="mt-4" value="tab3">
               <SplitScore />
            </Tabs.Result>
         </Tabs.Root>
         <Flex align="center" className="mt-8">
            {joined ? (
               <Button variant="negative" onClick={handleQuit}>
                  Quit
               </Button>
            ) : (
               <Button onClick={handleJoin}>Join</Button>
            )}
         </Flex>
      </Card>
   );
}

export default ProfileCard;
