import InputField from "../components/InputField";
import React from "react";
import UIButton from "../components/UIButton";
import UIWindow from "../components/UIWindow";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useSocket } from "../context/SocketContext";
import { setGamemode, setLegamount, setScoremode, setUsername, useProfile } from "../state/ProfileReducer";

function ProfileWindow() {
   const profile = useProfile();
   const dispatch = useDispatch();
   const [joined, setJoined] = React.useState(false);
   const socket = useSocket();

   const handleJoin = () => {
      localStorage.setItem("profile", JSON.stringify(profile));

      if (!socket.connected) return;

      socket.emit("join", profile);

      setJoined(true);

      toast.success("Erfolgreich mit Server verbunden!");
   };

   const handleQuit = () => {
      if (!socket.connected) return;
      socket.emit("quit", profile);

      setJoined(false);

      toast.info("Verbindung zum Server getrennt!");
   };

   return (
      <UIWindow title="Profil" className="">
         <InputField
            placeholder="Benutzername"
            defaultValue={profile.username}
            maxLength={16}
            className="mt-10"
            onChange={(e) => dispatch(setUsername(e.target.value))}
         />
         <ul className="my-8 flex h-9 w-10/12 flex-row items-center justify-around font-sans text-sm font-semibold text-white-default ">
            <li>
               <select
                  className="h-9 w-20 rounded-md bg-dark-title text-center text-white-default outline-none"
                  onChange={(e) => dispatch(setScoremode(e.target.value))}
                  defaultValue={profile.scoremode}>
                  <option value={301}>301</option>
                  <option value={501}>501</option>
               </select>
            </li>
            <li>
               <select
                  className="h-9 w-20 rounded-md bg-dark-title text-center text-white-default outline-none"
                  onChange={(e) => dispatch(setGamemode(e.target.value))}
                  value={profile.gamemode}>
                  <option value={"firstto"}>First to</option>
                  <option value={"bestof"}>Best of</option>
               </select>
            </li>
            <li>
               <input
                  value={profile.legamount}
                  type={"number"}
                  min={1}
                  max={50}
                  className="h-9 w-20 rounded-md bg-dark-title text-center outline-none"
                  onChange={(e) => dispatch(setLegamount(e.target.value))}
               />
            </li>
         </ul>
         {joined ? (
            <UIButton className="bg-red-500" onClick={handleQuit}>
               Verlassen!
            </UIButton>
         ) : (
            <UIButton onClick={handleJoin}>Los!</UIButton>
         )}
         <div className={`mt-5 h-2 w-2 rounded-full ${socket.connected ? "bg-green-600" : "bg-red-600"}`}></div>
      </UIWindow>
   );
}

export default ProfileWindow;
