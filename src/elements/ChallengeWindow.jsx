import ListWindow from "./ListWindow";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../context/SocketContext";
import * as List from "../state/PlayerlistReducer";

function ChallengeWindow() {
   const requests = useSelector((state) => state.list.requests.sent);
   const dispatch = useDispatch();
   const socket = useSocket();

   const unchallengePlayer = (player) => {
      dispatch(List.removeRequestSent(player));
      socket.emit("request-revoke", player);
   };

   return (
      <ListWindow title="Herausgefordert" list={requests} onClick={unchallengePlayer}>
         <div className="flex h-10 w-32 rounded-md bg-dark-background bg-opacity-50">
            <p className="m-auto font-secondary font-bold text-white-default">{requests.length} Spieler</p>
         </div>
      </ListWindow>
   );
}

export default ChallengeWindow;
