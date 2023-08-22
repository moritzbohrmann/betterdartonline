import React from "react";
import { Card, Title } from "../components/@ui/Card";
import { Text } from "../components/@ui/Text";
import { useTheme } from "../context/ThemeContext";
import { Flex } from "../components/@ui/Flex";
import Separator from "../components/@ui/Separator";

function MatchlistCard() {
   const [theme] = useTheme();
   const list = [
      { name: "Summer Cup", size: 32, endOfRegistrationDate: "19.08.23", startDate: "20.08.23", endDate: "21.08.23" },
      { name: "Summer Cup", size: 32, endOfRegistrationDate: "19.08.23", startDate: "20.08.23", endDate: "21.08.23" },
      { name: "Summer Cup", size: 32, endOfRegistrationDate: "19.08.23", startDate: "20.08.23", endDate: "21.08.23" },
   ];

   return (
      <Card>
         <Title subTitle="All tournaments currently available to register for.">Tournaments</Title>
         <div className="h-full w-full overflow-auto pb-8">
            <ul className="flex flex-grow flex-col items-center gap-2 overflow-auto">
               {list.map((tournament) => {
                  return (
                     <li
                        className={`relative flex w-full cursor-pointer flex-col items-center justify-between gap-4 rounded-md border-[1px] px-2 py-4 ${theme.borderColor.light} text-center text-sm transition-all hover:${theme.borderColor.heavy}`}
                     >
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
            <Text>{list.length} Tournaments</Text>
         </Flex>
      </Card>
   );
}

export default MatchlistCard;
