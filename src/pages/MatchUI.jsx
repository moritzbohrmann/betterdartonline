import MatchControlBar from "../elements/MatchControlBar";
import React from "react";
import ScoreHeader from "../elements/ScoreHeader";
import ScoreTable from "../elements/ScoreTable";
import { useDispatch } from "react-redux";
import { useSocket } from "../context/SocketContext";
import { useProfile } from "../state/ProfileReducer";
import { ActionType } from "../state/SocketReducer";

function MatchUI() {
   initConnection();

   return (
      <div className="flex w-full flex-col items-center">
         <ScoreHeader />
         <ScoreTable />
         <MatchControlBar />
      </div>
   );
}

const initConnection = () => {
   const dispatch = useDispatch();
   const profile = useProfile();
   const socket = useSocket();

   dispatch({ type: ActionType.APPLY_SOCKET, payload: socket });

   socket.emit("join", profile);
};

export default MatchUI;
