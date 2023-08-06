import ChallengeDialog from "../elements/ChallengeDialog";
import FilterCard from "../elements/FilterCard";
import MatchlistCard from "../elements/MatchlistCard";
import Navigation from "../elements/NavigationBar";
import NewsletterCard from "../elements/NewsletterCard";
import PlayerlistCard from "../elements/PlayerlistCard";
import ProfileCard from "../elements/ProfileCard";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/style";

function HomeUI() {
   const [theme] = useTheme();

   return (
      <div className={cn("flex flex-col items-center pb-8", theme.background)}>
         <Navigation id="homeui-navigation" />
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
