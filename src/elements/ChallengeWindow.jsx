import ListWindow from "../components/ListWindow";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../context/SocketContext";
import { ActionType } from "../state/PlayerlistReducer";

function ChallengeWindow() {
   const requests = useSelector((state) => state.list.requests.sent);
   const dispatch = useDispatch();
   const socket = useSocket();

   const unchallengePlayer = (player) => {
      dispatch({ type: ActionType.REMOVE_SENT, payload: player });
      socket.emit("request-revoke", player);
   };

   return (
      <ListWindow title="Herausgefordert" list={requests} onClick={unchallengePlayer}>
         <div className="w-32 h-10 bg-dark-background bg-opacity-50 rounded-md flex">
            <p className="m-auto font-secondary font-bold text-white-default">{requests.length} Spieler</p>
         </div>
      </ListWindow>
   );
}

export default ChallengeWindow;
