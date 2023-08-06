import * as Match from "../state/MatchReducer";
import React from "react";
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
      <div
         onMouseEnter={(e) => handleMouse(e)}
         onMouseLeave={(e) => handleMouse(e)}
         className={`mx-auto flex h-48 w-5/12 ring-zinc-900 brightness-110 md:my-auto md:rounded-md 2xl:ring-1 ${
            isPlayer(player, nextPlayer) && "border-4 border-yellow-400"
         }`}>
         {showStats ? (
            <div className="flex h-full w-full flex-col items-center justify-center font-primary text-sm text-white-default sm:text-lg">
               <h2>
                  ♛-Leg:{" "}
                  <span className="font-bold text-yellow-500">
                     {sortedAchievements.SHORTLEG.length > 0 ? `${Math.min.apply(Math, sortedAchievements.SHORTLEG)}. Runde` : "✖"}
                  </span>
               </h2>
               <h2>
                  ♛-Checkout:{" "}
                  <span className="font-bold text-yellow-500">
                     {sortedAchievements.HIGHFINISH.length > 0 ? Math.max.apply(Math, sortedAchievements.HIGHFINISH) : "✖"}
                  </span>
               </h2>
               <h2>
                  180: <span className="font-bold text-yellow-500">{sortedAchievements.HIGHSCORE.filter((a) => a === 180).length}</span>
               </h2>
               <h2>
                  162+: <span className="font-bold text-yellow-500">{sortedAchievements.HIGHSCORE.filter((a) => a >= 162).length}</span>
               </h2>
            </div>
         ) : (
            <div className="m-auto flex flex-col items-center justify-center xl:flex-row xl:gap-8 2xl:gap-16">
               <div className="flex h-16 w-20 rounded-md bg-gray-300 font-sans text-4xl font-bold text-gray-500 md:w-48 lg:text-5xl xl:h-36 xl:w-36">
                  <h3 className="m-auto">{initialsOf(player.username)}</h3>
               </div>
               <div className="flex flex-col md:flex-row">
                  <h4 className="text-center font-sans text-5xl font-black text-white-default md:text-7xl xl:text-9xl">
                     {lastScore ? lastScore.left : match.settings.scoremode}
                  </h4>
                  <div className="flex items-center justify-center gap-2 font-sans text-lg font-light md:ml-2 md:flex-col md:gap-0 md:text-2xl xl:my-auto xl:text-4xl">
                     <h1 className="text-yellow-300">{legAverage}</h1>
                     <h1 className="text-orange-700">{matchAverage}</h1>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default ScoreCard;
