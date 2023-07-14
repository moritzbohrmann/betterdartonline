import PlayerProfileWindow from "../components/PlayerProfileWindow";
import React from "react";
import { useMatch } from "../state/MatchReducer";

function MatchUIHead() {
   const { match, currentLeg } = useMatch();

   return (
      <div className="w-full flex p-0 sm:p-2 md:p-4 bg-dark-background">
         <PlayerProfileWindow match={match} currentLeg={currentLeg} profile={match.players.host} />
         <div className="w-2/12 md:w-48 lg:w-64 h-48 bg-blue-secondary mx-auto md:my-auto flex justify-center items-center text-5xl bg-dark-background md:border-x-8 border-dark-background">
            <h4 className="text-4xl lg:text-6xl text-white-default font-sans font-black flex flex-col md:flex-row items-center gap-4">
               {match?.state.host} <span className="text-2xl lg:text-4xl">Legs</span> {match?.state.guest}
            </h4>
         </div>
         <PlayerProfileWindow match={match} currentLeg={currentLeg} profile={match.players.guest} />
      </div>
   );
}

export default MatchUIHead;
