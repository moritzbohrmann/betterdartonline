import ChallengeDialog from "../elements/ChallengeDialog";
import FilterCard from "../elements/FilterCard";
import MatchlistCard from "../elements/MatchlistCard";
import Navigation from "../elements/NavigationBar";
import NewsletterCard from "../elements/NewsletterCard";
import PlayerlistCard from "../elements/PlayerlistCard";
import ProfileCard from "../elements/ProfileCard";
import React from "react";

function HomeUI() {
   return (
      <div className="m-0 flex flex-col items-center p-0">
         <Navigation id="homeui-navigation" />
         <div className="mt-4 flex w-full flex-wrap justify-center pb-10 xl:mt-12 xl:pb-0 ">
            <div id="homeui-windows" className="mt-0 flex flex-wrap justify-center gap-4">
               <div className="flex flex-col gap-4">
                  <ProfileCard />
                  <FilterCard />
               </div>
               <PlayerlistCard />
               <MatchlistCard />
            </div>
            <NewsletterCard />
         </div>
         <ChallengeDialog />
      </div>
   );
}

export default HomeUI;
