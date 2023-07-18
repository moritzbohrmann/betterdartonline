import $ from "jquery";
import React from "react";
import { initialsOf, isPlayer, legAverageOf, matchAverageOf } from "../utils/MatchUtils";

const PlayerProfileWindow = ({ match, currentLeg, profile }) => {
   const left = currentLeg.scores.filter((score) => isPlayer(score.player, profile)).at(-1)?.left;
   const [showStats, setShowStats] = React.useState(false);
   const filteredAchievements = match.achievements.filter((a) => a.player.id === profile.id);
   const achievements = {
      HIGHSCORE: filteredAchievements.filter((a) => a.type === "HIGHSCORE").map((a) => a.value),
      HIGHFINISH: filteredAchievements.filter((a) => a.type === "HIGHFINISH").map((a) => a.value),
      SHORTLEG: filteredAchievements.filter((a) => a.type === "SHORTLEG").map((a) => a.value),
   };

   React.useEffect(() => {
      $(`#sw-${profile.id}`).mouseenter(() => {
         setShowStats(true);
      });
      $(`#sw-${profile.id}`).mouseleave(() => {
         setShowStats(false);
      });

      return () => {
         $(`#sw-${profile.id}`).off("mouseenter");
         $(`#sw-${profile.id}`).off("mouseleave");
      };
   }, []);

   return (
      <div
         id={`sw-${profile.id}`}
         className={`bg-blue-secondary mx-auto flex h-48 w-5/12 bg-dark-background md:my-auto md:rounded-md ${
            currentLeg.scores.length > 0
               ? isPlayer(profile, currentLeg.scores.at(-1)?.next) === true && "border-4 border-yellow-400"
               : isPlayer(profile, { id: currentLeg.throw }) === true && "border-4 border-yellow-400"
         }`}
      >
         {showStats === false ? (
            <div className="m-auto flex flex-col items-center justify-center xl:flex-row xl:gap-8 2xl:gap-16">
               <div className="flex h-16 w-20 rounded-md bg-gray-300 font-sans text-4xl font-bold text-gray-500 md:w-48 lg:text-6xl xl:h-36 xl:w-36">
                  <h3 className="m-auto">{initialsOf(profile.username)}</h3>
               </div>
               <div className="flex flex-col md:flex-row">
                  <h4 className="text-center font-sans text-5xl font-black text-white-default md:text-7xl xl:text-9xl">
                     {left !== null && left !== undefined ? left : match.settings.scoremode}
                  </h4>
                  <div className="flex items-center justify-center gap-2 font-sans text-lg font-light md:ml-2 md:flex-col md:gap-0 md:text-2xl xl:my-auto xl:text-4xl">
                     <h1 className="text-yellow-300">{matchAverageOf(match, currentLeg, profile)}</h1>
                     <h1 className="text-orange-700">{legAverageOf(currentLeg, profile)}</h1>
                  </div>
               </div>
            </div>
         ) : (
            <div className="flex h-full w-full flex-col items-center justify-center font-primary text-sm text-white-default sm:text-lg">
               <h2>
                  ♛-Leg:{" "}
                  <span className="font-bold text-yellow-500">{achievements.SHORTLEG.length > 0 ? Math.min(achievements.SHORTLEG) * 3 : "✖"}</span>
               </h2>
               <h2>
                  ♛-Checkout:{" "}
                  <span className="font-bold text-yellow-500">{achievements.HIGHFINISH.length > 0 ? Math.max(achievements.HIGHFINISH) : "✖"}</span>
               </h2>
               <h2>
                  180: <span className="font-bold text-yellow-500">{achievements.HIGHSCORE.filter((a) => a === 180).length}</span>
               </h2>
               <h2>
                  162+: <span className="font-bold text-yellow-500">{achievements.HIGHSCORE.filter((a) => a >= 162).length}</span>
               </h2>
            </div>
         )}
      </div>
   );
};

export default PlayerProfileWindow;
