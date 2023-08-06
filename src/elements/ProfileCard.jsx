import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button } from "../components/@ui/Button";
import { Card, Title } from "../components/@ui/Card";
import { Input } from "../components/@ui/Input";
import { Select } from "../components/@ui/Select";
import { Text } from "../components/@ui/Text";
import { useSocket } from "../context/SocketContext";
import { useTheme } from "../context/ThemeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { setGamemode, setLegamount, setScoremode, setUsername, useProfile } from "../state/ProfileReducer";

function ProfileCard() {
   const profile = useProfile();
   const [storageProfile, setStorageProfile] = useLocalStorage("profile");
   const dispatch = useDispatch();
   const [joined, setJoined] = React.useState(false);
   const socket = useSocket();
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

      setJoined(false);

      toast.info("You left the server!");
   };

   return (
      <Card>
         <Title title="Profile" subTitle="Edit your profile settings." />
         <div className="flex flex-col gap-2">
            <div className="grid">
               <div className="flex w-full justify-between">
                  <Text>Username</Text>
                  <Input
                     defaultValue={profile.username}
                     placeholder="your username"
                     maxLength="16"
                     onChange={(e) => dispatch(setUsername(e.target.value))}
                  />
               </div>
            </div>
            <div className="grid">
               <div className="flex w-full justify-between">
                  <Text>Points</Text>
                  <Select onChange={(e) => dispatch(setScoremode(e.target.value))} defaultValue={profile.scoremode}>
                     {[301, 501, 701, 1001, 2001, 3001].map((score) => {
                        return <option value={score}>{score}</option>;
                     })}
                  </Select>
               </div>
            </div>
            <div className="grid">
               <div className="flex w-full justify-between">
                  <Text>Mode</Text>
                  <Select onChange={(e) => dispatch(setGamemode(e.target.value))} value={profile.gamemode}>
                     {["firstto", "bestof"].map((mode) => {
                        return <option value={mode}>{mode}</option>;
                     })}
                  </Select>
               </div>
            </div>
            <div className="grid">
               <div className="flex w-full justify-between">
                  <Text>Legs</Text>
                  <Input defaultValue={profile.legamount} type={"number"} min={1} max={50} onChange={(e) => dispatch(setLegamount(e.target.value))} />
               </div>
            </div>
         </div>
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
