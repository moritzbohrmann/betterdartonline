import CricketUI from "../elements/game/cricket/CricketUI";
import React from "react";
import SplitUI from "../elements/game/split/SplitUI";
import X01UI from "../elements/game/x01/X01UI";
import { useSocket } from "../context/SocketContext";
import { useProfile } from "../state/ProfileReducer";

const Game = {
   X01: <X01UI />,
   Cricket: <CricketUI />,
   Split: <SplitUI />,
};

function MatchUI() {
   initConnection();
   const profile = useProfile();

   return Game[profile.selected];
}

const initConnection = () => {
   const profile = useProfile();
   const socket = useSocket();

   socket.emit("join", profile);
};

export default MatchUI;
