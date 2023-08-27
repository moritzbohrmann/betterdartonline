import ChallengeDialog from "../elements/ChallengeDialog";
import FilterCard from "../elements/FilterCard";
import Navigation from "../elements/NavigationBar";
import NewsletterCard from "../elements/NewsletterCard";
import PlayerlistCard from "../elements/PlayerlistCard";
import ProfileCard from "../elements/ProfileCard";
import React from "react";
import TournamentCard from "../elements/TournamentCard";
import { Flex } from "../components/@ui/Flex";

function HomeUI() {
   return (
      <Flex orientation="vertical" align="center" className="min-h-screen">
         <Navigation />
         <div className="mt-4 flex w-5/6 flex-wrap justify-center gap-4 pb-10 xl:pb-0">
            <div className="flex flex-col gap-4">
               <ProfileCard />
               <FilterCard />
            </div>
            <PlayerlistCard />
            <TournamentCard />
            <div className="w-96 2xl:w-[74rem]">
               <NewsletterCard />
            </div>
         </div>
         <ChallengeDialog />
      </Flex>
   );
}

export default HomeUI;
