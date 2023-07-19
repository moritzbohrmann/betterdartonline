import ListWindow from "./ListWindow";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../context/SocketContext";
import { addRequestSent } from "../state/PlayerlistReducer";

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
               dispatch(addRequestSent(player));
               socket.emit("request", player);
            } else toast.error("Fehler: Du bist nicht eingeloggt!");
         }}
      >
         <div className="flex h-10 w-32 rounded-md bg-black/20">
            <p className="m-auto font-secondary font-bold text-white-default">{playerlist.length} Spieler</p>
         </div>
      </ListWindow>
   );
}

export default PlayerlistWindow;
