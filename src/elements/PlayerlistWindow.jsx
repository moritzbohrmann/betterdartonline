import ListWindow from "../components/ListWindow";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../context/SocketContext";
import { ActionType } from "../state/PlayerlistReducer";

function PlayerlistWindow() {
   const playerlist = useSelector((state) => state.list.ready);
   const socket = useSocket();
   const dispatch = useDispatch();

   return (
      <ListWindow
         title="Spielerliste"
         list={playerlist}
         onClick={(player) => {
            if (socket.connected) {
               dispatch({ type: ActionType.ADD_SENT, payload: player });
               socket.emit("request", player);
            } else toast.error("Fehler: Du bist nicht eingeloggt!");
         }}>
         <div className="w-32 h-10 bg-black/20 rounded-md flex">
            <p className="m-auto font-secondary font-bold text-white-default">{playerlist.length} Spieler</p>
         </div>
      </ListWindow>
   );
}

export default PlayerlistWindow;
