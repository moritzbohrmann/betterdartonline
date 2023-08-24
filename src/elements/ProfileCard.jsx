import Cricket from "../components/profile/Cricket";
import React from "react";
import SplitScore from "../components/profile/SplitScore";
import X01 from "../components/profile/X01";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button, Card, Flex, Tabs, Text, Title } from "../components/@ui/_collection";
import { useSocket } from "../context/SocketContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { clear } from "../state/PlayerlistReducer";
import { setSelected, useProfile } from "../state/ProfileReducer";

function ProfileCard() {
   const profile = useProfile();
   const [, setStorageProfile] = useLocalStorage("profile");
   const [joined, setJoined] = React.useState(false);
   const socket = useSocket();
   const dispatch = useDispatch();

   const handleJoin = () => {
      setStorageProfile(profile);

      if (!socket.connected) {
         toast.error("Could not connect to server.");
         return;
      }

      socket.emit("join", profile);
      setJoined(true);
      toast.success("Connected to server.");
   };

   const handleQuit = () => {
      if (!socket.connected) return;
      socket.emit("quit", profile);
      dispatch(clear());

      setJoined(false);

      toast.info("Disconnected from server.");
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
