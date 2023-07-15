import ChallengeWindow from "../elements/ChallengeWindow";
import FilterWindow from "../elements/FilterWindow";
import Navigation from "../components/Navigation";
import PlayerlistWindow from "../elements/PlayerlistWindow";
import PopupWindow from "../elements/PopupWindow";
import ProfileWindow from "../elements/ProfileWindow";
import React from "react";

function HomeUI() {
   return (
      <div className="m-0 flex flex-col items-center p-0">
         <Navigation id="homeui-navigation" />
         <div className="mt-4 flex w-full flex-wrap justify-center pb-10 xl:mt-12 xl:w-3/4 xl:pb-0 ">
            <div id="homeui-windows" className="flex w-full flex-wrap justify-center gap-4">
               <div className="flex flex-col gap-4">
                  <ProfileWindow />
                  <FilterWindow />
               </div>
               <PlayerlistWindow />
               <ChallengeWindow />
            </div>
            <PopupWindow />
         </div>
      </div>
   );
}

export default HomeUI;
