import React from "react";
import { Card, Flex, Progress, Separator, Text, Title } from "../components/@ui/_collection";
import { useTheme } from "../context/ThemeContext";
import { useGet } from "../hooks/useFetch";

const Skeleton = ({ children, ...props }) => {
   return (
      <Card className="max-h-144" {...props}>
         <Title subTitle="All tournaments currently available to register for.">Tournaments</Title>
         {children}
      </Card>
   );
};

function MatchlistCard() {
   const [theme] = useTheme();
   const { data, loading, error } = useGet("http://localhost:3001/tournaments");

   if (loading)
      return (
         <Skeleton>
            <Progress />
         </Skeleton>
      );

   return (
      <Skeleton>
         <div className="h-full w-full overflow-auto pb-8">
            <ul className="flex flex-grow flex-col items-center gap-2 overflow-auto">
               {data?.tournaments.map((tournament) => {
                  return (
                     <li
                        className={`flex w-full cursor-pointer flex-col items-center justify-between gap-4 rounded-md border-[1px] px-2 py-4 ${theme.borderColor.light} text-center text-sm transition-all hover:${theme.borderColor.heavy}`}
                     >
                        <Flex align="center" justify="around" className="h-8 w-full">
                           <Text weight="bl" className="w-1/2">
                              {tournament.name}
                           </Text>
                           <Separator orientation="vertical" />
                           <Text className="w-1/2">
                              <span className="font-semibold">Players</span>
                              <br />
                              {tournament.entries.length}/{tournament.size}
                           </Text>
                        </Flex>
                        <Flex align="center" justify="around" className="h-8 w-full">
                           <Text className="w-1/2">
                              <span className="font-semibold">Start</span>
                              <br />
                              {new Date(tournament.startDate).toLocaleDateString()}
                           </Text>
                           <Separator orientation="vertical" />
                           <Text className="w-1/2">
                              <span className="font-semibold">Registration</span>
                              <br />
                              {new Date(tournament.registrationDate).toLocaleDateString()}
                           </Text>
                        </Flex>
                     </li>
                  );
               })}
            </ul>
         </div>
         <Flex orientation="vertical" gap="8" align="center" className="w-full">
            <Separator orientation="horizontal" />
            <Text>{data ? data?.tournaments.length : 0} Tournaments</Text>
         </Flex>
      </Skeleton>
   );
}

export default MatchlistCard;
