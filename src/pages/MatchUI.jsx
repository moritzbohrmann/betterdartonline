import MatchControlBar from "../elements/MatchControlBar";
import React from "react";
import ScoreHeader from "../elements/ScoreHeader";
import ScoreTable from "../elements/ScoreTable";
import { useDispatch } from "react-redux";
import { Flex } from "../components/@ui/Flex";
import { useSocket } from "../context/SocketContext";
import { useTheme } from "../context/ThemeContext";
import { useProfile } from "../state/ProfileReducer";

function MatchUI() {
   const [theme] = useTheme();

   initConnection();

   return (
      <Flex orientation="vertical" align="center" className={`w-full ${theme.background}`}>
         <ScoreHeader />
         <ScoreTable />
         <MatchControlBar />
      </Flex>
   );
}

const initConnection = () => {
   const dispatch = useDispatch();
   const profile = useProfile();
   const socket = useSocket();

   socket.emit("join", profile);
};

export default MatchUI;
