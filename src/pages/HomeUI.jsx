import { useTheme } from "../context/ThemeContext";
import ChallengeDialog from "../elements/ChallengeDialog";
import FilterCard from "../elements/FilterCard";
import MatchlistCard from "../elements/MatchlistCard";
import Navigation from "../elements/NavigationBar";
import NewsletterCard from "../elements/NewsletterCard";
import PlayerlistCard from "../elements/PlayerlistCard";
import ProfileCard from "../elements/ProfileCard";
import React from "react";

function HomeUI() {
   const [theme] = useTheme();

   return (
      <div className={`flex min-h-screen flex-col items-center pb-8 ${theme.background}`}>
         <Navigation />
         <div className="mt-4 flex w-5/6 flex-wrap justify-center gap-4 pb-10 xl:mt-12 xl:pb-0">
            <div className="flex flex-col gap-4">
               <ProfileCard />
               <FilterCard />
            </div>
            <PlayerlistCard />
            <MatchlistCard />
            <div className="w-96 2xl:w-[74rem]">
               <NewsletterCard />
            </div>
         </div>
         <ChallengeDialog />
      </div>
   );
}

export default HomeUI;
