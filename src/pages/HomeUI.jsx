import ChallengeWindow from "../elements/ChallengeWindow";
import FilterWindow from "../elements/FilterWindow";
import Navigation from "../components/Navigation";
import PlayerlistWindow from "../elements/PlayerlistWindow";
import PopupWindow from "../elements/PopupWindow";
import ProfileWindow from "../elements/ProfileWindow";
import React from "react";

function HomeUI() {
   return (
      <div className="p-0 m-0 flex flex-col items-center">
         <Navigation id="homeui-navigation" />
         <div className="w-full xl:w-3/4 mt-4 xl:mt-12 pb-10 xl:pb-0 flex flex-wrap justify-center ">
            <div id="homeui-windows" className="w-full flex flex-wrap justify-center gap-4">
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
