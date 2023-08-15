import React from "react";
import ScoreCard from "../../components/ScoreCard";
import { Flex } from "../../components/@ui/Flex";
import { useMatch } from "../../state/MatchReducer";

function Head() {
   const { match } = useMatch();

   return (
      <Flex className="w-full sm:p-2 md:p-4">
         <ScoreCard player={match.players.host} />
         <Flex
            align="center"
            justify="center"
            className="mx-auto h-48 w-2/12 rounded-md border-dark-background text-5xl ring-zinc-900 md:my-auto md:w-48 md:border-x-8 lg:w-64 2xl:ring-1">
            <Flex orientation="vertical" align="center" gap="4" className="font-sans text-4xl font-black text-white-default md:flex-row lg:text-6xl">
               {match?.state.host} <span className="text-2xl lg:text-4xl">Legs</span> {match?.state.guest}
            </Flex>
         </Flex>
         <ScoreCard player={match.players.guest} />
      </Flex>
   );
}

export default Head;
