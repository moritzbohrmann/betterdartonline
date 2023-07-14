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
         <ul className="w-10/12 h-9 my-8 flex flex-row justify-around items-center text-white-default text-sm font-sans font-semibold ">
            <li>
               <select
                  className="w-20 h-9 text-center bg-dark-title text-white-default outline-none rounded-md"
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
                  className="w-20 h-9 text-center bg-dark-title text-white-default outline-none rounded-md"
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
                  className="w-20 h-9 text-center bg-dark-title outline-none rounded-md"
                  onChange={(e) =>
                     setProfilePreview((profilePreview) => {
                        return { ...profilePreview, legamount: e.target.value };
                     })
                  }
               />
            </li>
         </ul>
         {!joined ? (
            <UIButton className="h-8 transition-all" onClick={handleJoin}>
               Los!
            </UIButton>
         ) : (
            <UIButton className="h-8 bg-red-500" onClick={handleQuit}>
               Verlassen!
            </UIButton>
         )}
         <div className={`mt-5 w-2 h-2 rounded-full ${socket.connected ? "bg-green-600" : "bg-red-600"}`}></div>
      </UIWindow>
   );
}

export default ProfileWindow;
