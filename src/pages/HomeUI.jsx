import ChallengeDialog from "../elements/ChallengeDialog";
import CookieConsent from "react-cookie-consent";
import FilterCard from "../elements/FilterCard";
import NewsletterCard from "../elements/NewsletterCard";
import PlayerlistCard from "../elements/PlayerlistCard";
import ProfileCard from "../elements/ProfileCard";
import React from "react";
import TournamentCard from "../elements/TournamentCard";
import axios from "axios";

const doLogin = async (loginData) => {
   const URL = "http://localhost:3003/account/login";
   const { data } = await axios.post(URL, loginData);

   console.log(data);
};

function HomeUI() {
   React.useEffect(() => {
      const doLogin = async (loginData) => {
         const URL = "http://localhost:3003/account/login";
         const { data } = await axios.post(URL, loginData);

         console.log(data);
      };

      doLogin({ email: "bettenbelag@gmail.com" });
   }, []);

   return (
      <>
         <div className="flex w-5/6 flex-wrap justify-center gap-2 pb-2 sm:mt-4 sm:gap-4 xl:pb-0">
            <div className="flex flex-col gap-2 sm:gap-4">
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
         <CookieConsent
            style={{
               fontFamily: "sans-serif",
               background: "rgba(52, 52, 52, 0.52)",
               backdropFilter: "blur(8px)",
               flex: "wrap",
               justifyContent: "center",
            }}
            contentClasses="text-center sm:text-left"
            expires={1}
         >
            This site uses cookies.{" "}
            <a href="" className="underline">
               See more.
            </a>
         </CookieConsent>
      </>
   );
}

export default HomeUI;
