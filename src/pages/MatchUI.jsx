import MatchUIControl from "../elements/MatchUIControlBar";
import MatchUIHead from "../elements/MatchUIHead";
import MatchUITable from "../elements/MatchUITable";
import React from "react";
import { useDispatch } from "react-redux";
import { useSocket } from "../context/SocketContext";
import { useProfile } from "../hooks/useProfile";
import { ActionType } from "../state/SocketReducer";
import CorrectionPopup from "../elements/CorrectionPopup";

function MatchUI() {
   initConnection();

   return (
      <div className="flex w-full flex-col items-center">
         <MatchUIHead />
         <MatchUITable />
         <MatchUIControl />
         <CorrectionPopup />
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
