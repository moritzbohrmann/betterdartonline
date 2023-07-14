import MatchUIControl from "../elements/MatchUIControl";
import MatchUIHead from "../elements/MatchUIHead";
import MatchUITable from "../elements/MatchUITable";
import React from "react";
import { useDispatch } from "react-redux";
import { useSocket } from "../context/SocketContext";
import { useProfile } from "../hooks/useProfile";
import { ActionType } from "../state/SocketReducer";

function MatchUI() {
   initConnection();

   return (
      <div className="w-full flex flex-col items-center">
         <MatchUIHead />
         <MatchUITable />
         <MatchUIControl />
      </div>
   );
}

const initConnection = () => {
   const dispatch = useDispatch();
   const [profile] = useProfile();
   const socket = useSocket();

   dispatch({ type: ActionType.APPLY_SOCKET, payload: socket });

   socket.emit("join", profile);
};

export default MatchUI;
