import Foot from "../elements/game/Foot";
import Head from "../elements/game/Head";
import React from "react";
import { Flex } from "../components/@ui/Flex";
import { useSocket } from "../context/SocketContext";
import { useTheme } from "../context/ThemeContext";
import { useProfile } from "../state/ProfileReducer";

function MatchUI() {
   const [theme] = useTheme();

   initConnection();

   return (
      <Flex orientation="vertical" align="center" className={`w-full ${theme.background}`}>
         <Head />
         <Table />
         <Foot />
      </Flex>
   );
}

const initConnection = () => {
   const profile = useProfile();
   const socket = useSocket();

   socket.emit("join", profile);
};

export default MatchUI;
