import React from "react";
import { toast } from "react-toastify";
import { Button } from "../components/@ui/Button";
import { Card, Title } from "../components/@ui/Card";
import { Text } from "../components/@ui/Text";
import { useSocket } from "../context/SocketContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useProfile } from "../state/ProfileReducer";
import * as Tabs from "../components/@ui/Tabs";
import X01 from "../components/profile/X01";
import SplitScore from "../components/profile/SplitScore";
import Cricket from "../components/profile/Cricket";

function ProfileCard() {
   const profile = useProfile();
   const [storageProfile, setStorageProfile] = useLocalStorage("profile");
   const [joined, setJoined] = React.useState(false);
   const socket = useSocket();

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
      <Card>
         <Title title="Profile" subTitle="Edit your profile settings." />
         <Tabs.Root className="h-52">
            <Tabs.Trigger className="w-1/3 border-r-[1px]" value="tab1">
               <Text>x01</Text>
            </Tabs.Trigger>
            <Tabs.Result className="mt-4" value="tab1">
               <X01 />
            </Tabs.Result>
            <Tabs.Trigger className="w-1/3" value="tab2">
               <Text>Cricket</Text>
            </Tabs.Trigger>
            <Tabs.Result className="mt-4" value="tab2">
               <Cricket />
            </Tabs.Result>
            <Tabs.Trigger className="w-1/3 border-l-[1px]" value="tab3">
               <Text>Spl.-Score</Text>
            </Tabs.Trigger>
            <Tabs.Result className="mt-4" value="tab3">
               <SplitScore />
            </Tabs.Result>
         </Tabs.Root>
         <div className="mt-8 flex">
            {joined ? (
               <Button variant="negative" onClick={handleQuit}>
                  Quit
               </Button>
            ) : (
               <Button onClick={handleJoin}>Join</Button>
            )}
         </div>
      </Card>
   );
}

export default ProfileCard;
