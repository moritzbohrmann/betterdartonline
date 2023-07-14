import $ from "jquery";
import React from "react";
import { initialsOf, isPlayer, legAverageOf, matchAverageOf } from "../utils/MatchUtils";

const PlayerProfileWindow = ({ match, currentLeg, profile }) => {
   const left = currentLeg.scores.filter((score) => isPlayer(score.player.id)).at(-1)?.left;

   const [showStats, setShowStats] = React.useState(false);

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
         className={`w-5/12 h-48 bg-blue-secondary mx-auto md:my-auto bg-dark-background md:rounded-md flex ${
            currentLeg.scores.length > 0
               ? isPlayer(currentLeg.scores.at(-1)?.next.id) && "border-4 border-yellow-400"
               : isPlayer(currentLeg.throw) && "border-4 border-yellow-400"
         }`}>
         {showStats === false ? (
            <div className="m-auto flex flex-col xl:flex-row justify-center xl:gap-8 2xl:gap-16 items-center">
               <div className="w-20 md:w-48 xl:w-36 h-16 xl:h-36 bg-gray-300 flex text-4xl lg:text-6xl text-gray-500 font-sans font-bold rounded-md">
                  <h3 className="m-auto">{initialsOf(profile.username)}</h3>
               </div>
               <div className="flex flex-col md:flex-row">
                  <h4 className="text-5xl md:text-7xl xl:text-9xl text-white-default text-center font-sans font-black">
                     {left !== null && left !== undefined ? left : match.settings.scoremode}
                  </h4>
                  <div className="md:ml-2 flex md:flex-col gap-2 md:gap-0 justify-center items-center font-sans text-lg md:text-2xl xl:text-4xl font-light xl:my-auto">
                     <h1 className="text-yellow-300">{matchAverageOf(match, currentLeg, profile)}</h1>
                     <h1 className="text-orange-700">{legAverageOf(currentLeg, profile)}</h1>
                  </div>
               </div>
            </div>
         ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-white-default text-sm sm:text-lg font-primary">
               <h2>♛-Leg: 15</h2>
               <h2>♛-Checkout: 65</h2>
               <h2>180er: 0</h2>
               <h2>130+: 2</h2>
               <h2>90+: 10</h2>
            </div>
         )}
      </div>
   );
};

export default PlayerProfileWindow;
