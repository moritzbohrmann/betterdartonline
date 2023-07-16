import InputField from "../components/InputField";
import React from "react";
import UIButton from "../components/UIButton";
import UIWindow from "../components/UIWindow";
import { useSocket } from "../context/SocketContext";
import { useProfile } from "../hooks/useProfile";

function ProfileWindow() {
   const [profile, setProfile] = useProfile();
   const [profilePreview, setProfilePreview] = React.useState(profile);
   const [joined, setJoined] = React.useState(false);

   const socket = useSocket();

   const handleJoin = () => {
      setProfile(profilePreview);

      if (!socket.connected) return;

      socket.emit("join", profilePreview);

      setJoined(true);
   };

   const handleQuit = () => {
      if (!socket.connected) return;
      socket.emit("quit", profilePreview);

      setJoined(false);
   };

   return (
      <UIWindow title="Profil" className="">
         <InputField
            placeholder="Benutzername"
            defaultValue={profile.username}
            className="mt-10"
            onChange={(e) =>
               setProfilePreview((profilePreview) => {
                  return { ...profilePreview, username: e.target.value };
               })
            }
         />
         <ul className="my-8 flex h-9 w-10/12 flex-row items-center justify-around font-sans text-sm font-semibold text-white-default ">
            <li>
               <select
                  className="h-9 w-20 rounded-md bg-dark-title text-center text-white-default outline-none"
                  onChange={(e) =>
                     setProfilePreview((profilePreview) => {
                        return { ...profilePreview, scoremode: e.target.value };
                     })
                  }
                  defaultValue={profile.scoremode}>
                  <option value={"301"}>301</option>
                  <option value={"501"}>501</option>
               </select>
            </li>
            <li>
               <select
                  className="h-9 w-20 rounded-md bg-dark-title text-center text-white-default outline-none"
                  onChange={(e) =>
                     setProfilePreview((profilePreview) => {
                        return { ...profilePreview, gamemode: e.target.value };
                     })
                  }
                  defaultValue={profile.gamemode}>
                  <option value={"firstto"}>First to</option>
                  <option value={"bestof"}>Best of</option>
               </select>
            </li>
            <li>
               <input
                  defaultValue={profile.legamount}
                  type={"number"}
                  min={1}
                  max={50}
                  className="h-9 w-20 rounded-md bg-dark-title text-center outline-none"
                  onChange={(e) =>
                     setProfilePreview((profilePreview) => {
                        return { ...profilePreview, legamount: e.target.value };
                     })
                  }
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
