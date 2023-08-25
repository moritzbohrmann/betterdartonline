import React from "react";
import { Card, Flex, Progress, Separator, Text, Title } from "../components/@ui/_collection";
import { useTheme } from "../context/ThemeContext";
import { useFetch } from "../hooks/useFetch";

function MatchlistCard() {
   const [theme] = useTheme();
   const fetchedData = useFetch("http://localhost:3001/tournaments");

   console.log(fetchedData);

   const tournaments = fetchedData.data?.tournaments;

   return (
      <Card className="max-h-144">
         <Title subTitle="All tournaments currently available to register for.">Tournaments</Title>
         {fetchedData.isPending && <Progress progress={fetchedData.isPending ? 0 : 1} />}
         <div className="h-full w-full overflow-auto pb-8">
            <ul className="flex flex-grow flex-col items-center gap-2 overflow-auto">
               {tournaments?.map((tournament) => {
                  return (
                     <li
                        className={`flex w-full cursor-pointer flex-col items-center justify-between gap-4 rounded-md border-[1px] px-2 py-4 ${theme.borderColor.light} text-center text-sm transition-all hover:${theme.borderColor.heavy}`}>
                        <Flex align="center" justify="around" className="h-8 w-full">
                           <Text weight="bl" className="w-1/2">
                              {tournament.name}
                           </Text>
                           <Separator orientation="vertical" />
                           <Text className="w-1/2">
                              <span className="font-semibold">Size</span>:<br />
                              {tournament.size} Players
                           </Text>
                        </Flex>
                        <Flex align="center" justify="around" className="h-8 w-full">
                           <Text className="w-1/3">
                              <span className="font-semibold">Reg. until</span>:
                              <br />
                              {tournament.endOfRegistrationDate}
                           </Text>
                           <Separator orientation="vertical" />
                           <Text className="w-1/3">
                              <span className="font-semibold">Start</span>:
                              <br />
                              {tournament.startDate}
                           </Text>
                           <Separator orientation="vertical" />
                           <Text className="w-1/3">
                              <span className="font-semibold">End</span>:
                              <br />
                              {tournament.endDate}
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
