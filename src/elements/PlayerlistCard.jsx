import React from "react";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { Card, Flex, Separator, Text, Title } from "../components/@ui/_collection";
import { useSocket } from "../context/SocketContext";
import { useTheme } from "../context/ThemeContext";
import { useGet } from "../hooks/useFetch";
import { useAccount } from "../state/AccountReducer";
import { addRequestSent, removeRequestSent } from "../state/PlayerlistReducer";
import { useProfile } from "../state/ProfileReducer";
import { isPlayer } from "../utils/match";

function PlayerlistCard() {
   const { ready } = useSelector((state) => state.list);
   const socket = useSocket();
   const account = useAccount();
   const profile = useProfile();
   const dispatch = useDispatch();

   const [theme] = useTheme();

   const handleRevoke = (player) => {
      dispatch(removeRequestSent(player));
      socket.emit("request-revoke", player);
   };

   const handleRequest = (player) => {
      dispatch(addRequestSent(player));
      socket.emit("request", player);
   };

   const toggleRequest = (player) => (list.requests.sent.find((sent) => isPlayer(sent, player)) ? handleRevoke(player) : handleRequest(player));
   return (
      <Card className="max-h-144">
         <Title subTitle="Challenge a player of your choice.">
            Playerlist <span className="text-base">({profile.selected})</span>
         </Title>
         <Flex justify="around" className="w-11/12">
            <Text>Name</Text>
            <Separator orientation="vertical" />
            <Text>Setting</Text>
            <Separator orientation="vertical" />
            <Text toolTip="The state shows you, whether you have requested the player.">State</Text>
         </Flex>
         <div className="h-full w-full overflow-auto pb-8">
            <ul className="mt-8 flex flex-grow flex-col items-center gap-2 overflow-auto">
               {ready
                  .sort((player) => list.requests.sent.find((sent) => isPlayer(sent, player)))
                  .filter((player) => `${player.username} ${player.gamemode} ${player.scoremode} ${player.legamount}`.includes(list.filter))
                  .map((player) => {
                     return (
                        <li
                           className={`flex h-10 w-full cursor-pointer items-center justify-between rounded-md border-[1px] ${theme.borderColor.light} text-center text-sm transition-all hover:${theme.borderColor.heavy}`}
                           onClick={() => toggleRequest(player)}>
                           <Text weight="sb" className="w-1/3">
                              {player.username?.substring(0, 10)}
                           </Text>
                           <Text className="w-1/3">
                              {player.scoremode} {player.gamemode} {player.legamount}
                           </Text>
                           <Flex justify="center" className="w-1/3">
                              {list.requests.sent.find((sent) => isPlayer(sent, player)) ? (
                                 <Flex className="h-6 w-6 rounded-md bg-green-500">
                                    <CheckIcon className="m-auto" />
                                 </Flex>
                              ) : (
                                 <Flex className="h-6 w-6 rounded-md bg-red-500">
                                    <Cross2Icon className="m-auto" />
                                 </Flex>
                              )}
                           </Flex>
                        </li>
                     );
                  })}
            </ul>
         </div>
         <Flex orientation="vertical" gap="8" align="center" className="w-full">
            <Separator orientation="horizontal" />
            <Text>{ready.length} Players</Text>
         </Flex>
      </Card>
   );
}

export default PlayerlistCard;
