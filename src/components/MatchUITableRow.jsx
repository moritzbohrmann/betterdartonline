import React from "react";
import { useMatch } from "../state/MatchReducer";
import { useProfile } from "../hooks/useProfile";

function MatchUITableRow({ socket, index }) {
   const { currentLeg } = useMatch();
   const [profile] = useProfile();
   const throwFirst = currentLeg.throw === profile.id;
   const lastScore = currentLeg.scores.at(-1);
   const nextToThrow = lastScore?.next.id === profile.id;
   const equalRound = index === (throwFirst ? lastScore?.round + 1 : lastScore?.round);
   const inputAvailable = currentLeg.scores.length === 0 ? throwFirst && index === 0 : nextToThrow && equalRound;

   const emitScore = (score) => {
      socket.emit("score", score);
   };

   return (
      <tr
         key={`${profile.id} ${index}`}
         className={`bg-dark-background ${index % 2 === 0 && "brightness-110"} text-3xl font-bold text-white-default `}
      >
         <td className="h-20 w-1/5 transition-opacity hover:opacity-80">
            <input
               className={`h-full w-full ${inputAvailable ? "bg-yellow-400" : "bg-transparent"} text-center outline-none`}
               type="number"
               value={currentLeg.scores.filter((score) => score.player.id === profile.id)[index]?.value}
               readOnly={!inputAvailable}
               onKeyUp={(e) => !e.target.readOnly && e.key === "Enter" && emitScore({ player: profile, value: Number(e.target.value) })}
            />
         </td>
         <td className="w-1/5 transition-opacity hover:opacity-80">
            {currentLeg.scores.filter((score) => score.player.id === profile.id)[index]?.left}
         </td>
         <td className="w-1/5">{(index + 1) * 3}</td>
         <td className="w-1/5 transition-opacity hover:opacity-80">
            {currentLeg.scores.filter((score) => score.player.id !== profile.id)[index]?.left}
         </td>
         <td className="h-20 w-1/5 transition-opacity hover:opacity-80">
            <input
               defaultValue={currentLeg.scores.filter((score) => score.player.id !== profile.id)[index]?.value}
               readOnly
               className="h-full w-full bg-transparent text-center outline-none"
            />
         </td>
      </tr>
   );
}

export default MatchUITableRow;
