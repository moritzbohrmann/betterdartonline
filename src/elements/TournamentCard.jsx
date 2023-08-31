import React from "react";
import { Card, Flex, Separator, Text, Title } from "../components/@ui/_collection";
import { useTheme } from "../context/ThemeContext";
import { useGet } from "../hooks/useFetch";

function MatchlistCard() {
   const [theme] = useTheme();
   const [tournaments, setTournaments] = React.useState([]);

   React.useEffect(() => {
      const applyTournaments = async () => {
         const get = async () => {
            const { tournaments } = await useGet("http://localhost:3001/tournaments");

            return await tournaments;
         };

         const list = await get();

         setTournaments(list);
      };

      setInterval(applyTournaments, 10000);
   }, []);

   return (
      <Card className="max-h-144">
         <Title subTitle="All tournaments currently available to register for.">Tournaments</Title>
         <div className="h-full w-full overflow-auto pb-8">
            <ul className="flex flex-grow flex-col items-center gap-2 overflow-auto">
               {tournaments.map((tournament) => {
                  return (
                     <li
                        className={`flex w-full cursor-pointer flex-col items-center justify-between gap-4 rounded-md border-[1px] px-2 py-4 ${theme.borderColor.light} text-center text-sm transition-all hover:${theme.borderColor.heavy}`}>
                        <Flex align="center" justify="around" className="h-8 w-full">
                           <Text weight="bl" className="w-1/2">
                              {tournament.name}
                           </Text>
                           <Separator orientation="vertical" />
                           <Text className="w-1/2">
                              <span className="font-semibold">Players</span>:<br />
                              {tournament.players.length}/{tournament.size}
                           </Text>
                        </Flex>
                        <Flex align="center" justify="around" className="h-8 w-full">
                           <Text className="w-1/2">
                              <span className="font-semibold">Start</span>:
                              <br />
                              {tournament.startDate}
                           </Text>
                           <Separator orientation="vertical" />
                           <Text className="w-1/2">
                              <span className="font-semibold">Registration</span>:
                              <br />
                              {tournament.registrationDate}
                           </Text>
                        </Flex>
                     </li>
                  );
               })}
            </ul>
         </div>
         <Flex orientation="vertical" gap="8" align="center" className="w-full">
            <Separator orientation="horizontal" />
            <Text>{tournaments ? tournaments.length : 0} Tournaments</Text>
         </Flex>
      </Card>
   );
}

export default MatchlistCard;
