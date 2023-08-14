import React from "react";
import { useSocket } from "../context/SocketContext";
import { useMatch, useNextPlayer, useScores } from "../state/MatchReducer";
import { useProfile } from "../state/ProfileReducer";
import { isPlayer } from "../utils/match";

function ScoreTableRow({ index }) {
   const { currentLeg } = useMatch();
   const socket = useSocket();
   const profile = useProfile();
   const [nextPlayer, nextRound] = useNextPlayer();
   const inputAvailable = React.useMemo(() => isPlayer(nextPlayer, profile) && nextRound === index, [nextPlayer]);
   const score = {
      host: currentLeg.scores.filter((s) => isPlayer(s.player, profile))[index],
      guest: currentLeg.scores.filter((s) => !isPlayer(s.player, profile))[index],
   };
   const scoreRef = React.useRef([]);

   React.useEffect(() => {
      currentLeg.scores.length === 0 && scoreRef.current.forEach((ref) => (ref.value = ""));
   }, [currentLeg]);

   return (
      <tr key={`${profile.id} ${index}`} className={`bg-dark-background ${index % 2 === 0 && "brightness-110"}`}>
         <td className="h-20 w-1/5 transition-opacity hover:opacity-80">
            <input
               ref={(element) => (scoreRef.current[0] = element)}
               className={`h-full w-full ${
                  inputAvailable ? "bg-yellow-400 text-dark-background" : "bg-transparent text-white-default"
               } text-center outline-none`}
               type="number"
               value={score.host?.value}
               readOnly={!inputAvailable}
               onKeyUp={(e) => !e.target.readOnly && e.key === "Enter" && socket.emit("score", { player: profile, value: Number(e.target.value) })}
            />
         </td>
         <td ref={(element) => (scoreRef.current[1] = element)} className="w-1/5 transition-opacity hover:opacity-80">
            {score.host?.left}
         </td>
         <td className={`w-1/5 border-slate-200 ${score.host?.value >= 91 && "border-l-4"} ${score.guest?.value >= 91 && "border-r-4"}`}>
            {(index + 1) * 3}
         </td>
         <td ref={(element) => (scoreRef.current[2] = element)} className="w-1/5 transition-opacity hover:opacity-80">
            {score.guest?.left}
         </td>
         <td className="h-20 w-1/5 transition-opacity hover:opacity-80">
            <input
               ref={(element) => (scoreRef.current[3] = element)}
               value={score.guest?.value}
               readOnly
               className="h-full w-full bg-transparent text-center outline-none"
            />
         </td>
      </tr>
   );
}

export default ScoreTableRow;
