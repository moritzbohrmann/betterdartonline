import Button from "../components/@ui/Button";
import React from "react";
import Select from "../components/@ui/Select";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Card, Title } from "../components/@ui/Card";
import { useSocket } from "../context/SocketContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { setGamemode, setLegamount, setScoremode, setUsername, useProfile } from "../state/ProfileReducer";

function ProfileCard() {
   const profile = useProfile();
   const [storageProfile, setStorageProfile] = useLocalStorage("profile");
   const dispatch = useDispatch();
   const [joined, setJoined] = React.useState(false);
   const socket = useSocket();

   const handleJoin = () => {
      setStorageProfile(profile);

      if (!socket.connected) return;

      socket.emit("join", profile);

      setJoined(true);

      toast.success("Verbindung zum Server aufgebaut!");
   };

   const handleQuit = () => {
      if (!socket.connected) return;
      socket.emit("quit", profile);

      setJoined(false);

      toast.info("Verbindung zum Server getrennt!");
   };

   return (
      <Card>
         <Title title="Profile" subTitle="Edit your profile settings." />
         <div className="flex flex-col gap-2">
            <div className="grid">
               <div className="flex w-full justify-between">
                  <h2 className="text-md text-white-default">Username</h2>
                  <input
                     className="h-8 w-48 rounded-md border-[1px] border-zinc-900 bg-dark-background px-4 text-white-default outline-none"
                     type="text"
                     placeholder="your username"
                     defaultValue={profile.username}
                     maxLength={16}
                     onChange={(e) => dispatch(setUsername(e.target.value))}
                  />
               </div>
            </div>
            <div className="grid">
               <div className="flex w-full justify-between">
                  <h2 className="text-md text-white-default">Points</h2>
                  <Select onChange={(e) => dispatch(setScoremode(e.target.value))} defaultValue={profile.scoremode}>
                     {[301, 501, 701, 1001, 2001, 3001].map((score) => {
                        return <option value={score}>{score}</option>;
                     })}
                  </Select>
               </div>
            </div>
            <div className="grid">
               <div className="flex w-full justify-between">
                  <h2 className="text-md text-white-default">Mode</h2>
                  <Select onChange={(e) => dispatch(setGamemode(e.target.value))} value={profile.gamemode}>
                     {["firstto", "bestof"].map((mode) => {
                        return <option value={mode}>{mode}</option>;
                     })}
                  </Select>
               </div>
            </div>
            <div className="grid">
               <div className="flex w-full justify-between">
                  <h2 className="text-md text-white-default">Legs</h2>
                  <input
                     className="h-8 w-48 rounded-md border-[1px] border-zinc-900 bg-dark-background px-4 text-white-default outline-none"
                     value={profile.legamount}
                     type={"number"}
                     min={1}
                     max={50}
                     onChange={(e) => dispatch(setLegamount(e.target.value))}
                  />
               </div>
            </div>
         </div>
         {joined ? (
            <Button className="mx-auto mt-7 bg-red-500 text-dark-background" onClick={handleQuit}>
               Quit
            </Button>
         ) : (
            <Button className="mx-auto mt-7" onClick={handleJoin}>
               Join
            </Button>
         )}
      </Card>
   );
}

export default ProfileCard;
