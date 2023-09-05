import Cricket from "../components/profile/Cricket";
import React from "react";
import SplitScore from "../components/profile/SplitScore";
import X01 from "../components/profile/X01";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Badge, Button, Card, Flex, Tabs, Text, Title } from "../components/@ui/_collection";
import { useSocket } from "../context/SocketContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { setProfile, useAccount } from "../state/AccountReducer";
import { clear } from "../state/PlayerlistReducer";
import { setSelected, useProfile } from "../state/ProfileReducer";

function ProfileCard() {
   const account = useAccount();
   const profile = useProfile();
   const [, setStorageProfile] = useLocalStorage("profile");
   const [joined, setJoined] = React.useState(false);
   const socket = useSocket();
   const dispatch = useDispatch();

   const handleJoin = () => {
      setStorageProfile(profile);
      dispatch(setProfile(profile));

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

   const tabList = [
      { value: "tab1", selection: "X01", element: <X01 /> },
      { value: "tab2", selection: "Cricket", element: <Cricket /> },
      { value: "tab3", selection: "Split", element: <SplitScore /> },
   ];

   return (
      <Card>
         <Title subTitle="Edit your profile settings.">Profile</Title>
         <Tabs.Root className="h-52 w-full">
            {tabList.map((tab) => {
               return (
                  <Tabs.Trigger className="h-10 w-1/3" value={tab.value} onClick={() => dispatch(setSelected(tab.selection))}>
                     <Text weight="sb">{tab.selection}</Text>
                  </Tabs.Trigger>
               );
            })}
            {tabList.map((tab) => {
               return (
                  <Tabs.Result className="mt-6" value={tab.value}>
                     {tab.element}
                  </Tabs.Result>
               );
            })}
         </Tabs.Root>
         <Flex align="center" className="mt-8">
            {account ? (
               joined ? (
                  <Button variant="negative" onClick={handleQuit} children="Quit" />
               ) : (
                  <Button onClick={handleJoin} children="Join" />
               )
            ) : (
               <Badge color="red">unavailable</Badge>
            )}
         </Flex>
      </Card>
   );
}

export default ProfileCard;
