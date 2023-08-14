import * as Match from "../state/MatchReducer";
import React from "react";
import { Flex } from "../components/@ui/Flex";
import { Text } from "../components/@ui/Text";
import { initialsOf, isPlayer } from "../utils/match";

const ScoreCard = ({ player }) => {
   const { match } = Match.useMatch();
   const [nextPlayer] = Match.useNextPlayer();
   const lastScore = Match.useLastScore(player);
   const achievements = Match.useAchievements(player);
   const legAverage = Match.useLegAverage(player);
   const matchAverage = Match.useMatchAverage(player);
   const [showStats, setShowStats] = React.useState(false);

   const sortedAchievements = {
      HIGHSCORE: achievements.filter((a) => a.type === "HIGHSCORE").map((a) => a.value),
      HIGHFINISH: achievements.filter((a) => a.type === "HIGHFINISH").map((a) => a.value),
      SHORTLEG: achievements.filter((a) => a.type === "SHORTLEG").map((a) => a.value),
   };

   const handleMouse = (e) => {
      switch (e.type) {
         case "mouseenter":
            setShowStats(true);
            break;
         case "mouseleave":
            setShowStats(false);
            break;
      }
   };

   return (
      <Flex
         onMouseEnter={(e) => handleMouse(e)}
         onMouseLeave={(e) => handleMouse(e)}
         className={`mx-auto h-48 w-5/12 bg-dark-background ring-zinc-900 brightness-110 md:my-auto md:rounded-md 2xl:ring-1 ${
            isPlayer(player, nextPlayer) && "border-4 border-yellow-400"
         }`}>
         {showStats ? (
            <Flex orientation="vertical" align="center" justify="center" className="h-full w-full sm:text-lg">
               <Text>
                  ♛-Leg:{" "}
                  <span className="font-bold text-yellow-500">
                     {sortedAchievements.SHORTLEG.length > 0 ? `${Math.min.apply(Math, sortedAchievements.SHORTLEG)}. Runde` : "✖"}
                  </span>
               </Text>
               <Text>
                  ♛-Checkout:{" "}
                  <span className="font-bold text-yellow-500">
                     {sortedAchievements.HIGHFINISH.length > 0 ? Math.max.apply(Math, sortedAchievements.HIGHFINISH) : "✖"}
                  </span>
               </Text>
               <Text>
                  180: <span className="font-bold text-yellow-500">{sortedAchievements.HIGHSCORE.filter((a) => a === 180).length}</span>
               </Text>
               <Text>
                  162+: <span className="font-bold text-yellow-500">{sortedAchievements.HIGHSCORE.filter((a) => a >= 162).length}</span>
               </Text>
            </Flex>
         ) : (
            <Flex orientation="vertical" align="center" justify="center" className="m-auto xl:flex-row xl:gap-8 2xl:gap-16">
               <Flex className="h-16 w-20 rounded-md bg-gray-300 font-sans text-4xl font-bold text-gray-500 md:w-48 lg:text-5xl xl:h-36 xl:w-36">
                  <Text weight="b" className="m-auto text-dark-background">
                     {initialsOf(player.username)}
                  </Text>
               </Flex>
               <Flex orientation="vertical" className="md:flex-row">
                  <Text className="text-center font-sans text-5xl font-black text-white-default md:text-7xl xl:text-9xl">
                     {lastScore ? lastScore.left : match.settings.scoremode}
                  </Text>
                  <Flex
                     align="center"
                     justify="center"
                     gap="2"
                     className="text-lg font-light md:ml-2 md:flex-col md:gap-0 md:text-2xl xl:my-auto xl:text-4xl">
                     <Text className="text-yellow-300">{legAverage}</Text>
                     <Text className="text-orange-700">{matchAverage}</Text>
                  </Flex>
               </Flex>
            </Flex>
         )}
      </Flex>
   );
};

export default ScoreCard;
