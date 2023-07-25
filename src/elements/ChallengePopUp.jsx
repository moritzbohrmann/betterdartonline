import React from "react";
import UIButton from "../components/UIButton";
import UIWindow from "../components/UIWindow";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../context/SocketContext";
import { removeCurrentRequest, removeRequestReceived } from "../state/PlayerlistReducer";

function Challenge() {
   const socket = useSocket();
   const dispatch = useDispatch();
   const challenger = useSelector((state) => state.list.requests.current);

   const accept = () => {
      if (!challenger) return;
      socket.emit("request-accept", challenger);
   };

   const decline = () => {
      if (!challenger) return;
      socket.emit("request-decline", challenger);
      dispatch(removeRequestReceived(challenger));
      dispatch(removeCurrentRequest());
   };

   return (
      <UIWindow id="settings" title="Herausforderung" className="top-80z-10 fixed h-80 gap-4 drop-shadow-xl lg:w-144">
         <div className="flex w-11/12 flex-col items-center gap-2 text-center text-xl font-bold">
            <h2 className="w-5/6 rounded-md bg-yellow-500 py-1 text-dark-window">{challenger?.username}</h2>
            <h2 className="m-auto text-white-default">fordert Dich zu einem Duell heraus!</h2>
            <h2 className="w-5/6 rounded-md bg-teal-500 py-1 text-dark-background">
               {challenger?.scoremode} {challenger?.gamemode} {challenger?.legamount}
            </h2>
         </div>
         <div className="flex gap-8">
            <UIButton onClick={accept} className="bg-green-500">
               Annehmen
            </UIButton>
            <UIButton onClick={decline} className="bg-red-500">
               Ablehnen
            </UIButton>
         </div>
      </UIWindow>
   );
}

export default Challenge;
