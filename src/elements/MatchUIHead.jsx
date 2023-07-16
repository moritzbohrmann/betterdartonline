import PlayerProfileWindow from "../components/MatchUIPlayerWindow";
import React from "react";
import { useMatch } from "../state/MatchReducer";

function MatchUIHead() {
   const { match, currentLeg } = useMatch();

   return (
      <div className="flex w-full bg-dark-background p-0 sm:p-2 md:p-4">
         <PlayerProfileWindow match={match} currentLeg={currentLeg} profile={match.players.host} />
         <div className="bg-blue-secondary mx-auto flex h-48 w-2/12 items-center justify-center border-dark-background bg-dark-background text-5xl md:my-auto md:w-48 md:border-x-8 lg:w-64">
            <h4 className="flex flex-col items-center gap-4 font-sans text-4xl font-black text-white-default md:flex-row lg:text-6xl">
               {match?.state.host} <span className="text-2xl lg:text-4xl">Legs</span> {match?.state.guest}
            </h4>
         </div>
         <PlayerProfileWindow match={match} currentLeg={currentLeg} profile={match.players.guest} />
      </div>
   );
}

export default MatchUIHead;
