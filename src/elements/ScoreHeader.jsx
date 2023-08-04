import React from "react";
import ScoreCard from "../components/ScoreCard";
import { useMatch } from "../state/MatchReducer";

function ScoreHeader() {
   const { match } = useMatch();

   return (
      <div id="matchuihead" className="flex w-full sm:p-2 md:p-4">
         <ScoreCard player={match.players.host} />
         <div className="mx-auto flex h-48 w-2/12 items-center justify-center rounded-md border-dark-background text-5xl ring-zinc-900 md:my-auto md:w-48 md:border-x-8 lg:w-64 2xl:ring-1">
            <h4 className="flex flex-col items-center gap-4 font-sans text-4xl font-black text-white-default md:flex-row lg:text-6xl">
               {match?.state.host} <span className="text-2xl lg:text-4xl">Legs</span> {match?.state.guest}
            </h4>
         </div>
         <ScoreCard player={match.players.guest} />
      </div>
   );
}

export default ScoreHeader;
