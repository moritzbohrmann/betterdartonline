import MatchControlBar from "../elements/MatchControlBar";
import React from "react";
import ScoreHeader from "../elements/ScoreHeader";
import ScoreTable from "../elements/ScoreTable";
import { useDispatch } from "react-redux";
import { useSocket } from "../context/SocketContext";
import { useProfile } from "../state/ProfileReducer";

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

   socket.emit("join", profile);
};

export default MatchUI;
