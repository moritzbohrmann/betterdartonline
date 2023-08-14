import React from "react";
import Separator from "../components/@ui/Separator";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { Card, Title } from "../components/@ui/Card";
import { Flex } from "../components/@ui/Flex";
import { Text } from "../components/@ui/Text";
import { useSocket } from "../context/SocketContext";
import { useTheme } from "../context/ThemeContext";
import { addRequestSent, removeRequestSent } from "../state/PlayerlistReducer";
import { isPlayer } from "../utils/match";

function PlayerlistCard() {
   const list = useSelector((state) => state.list);
   const socket = useSocket();
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
      <Card>
         <Title title="Playerlist" subTitle="Challenge a player of your choice." />
         <Flex justify="around" className="w-11/12">
            <Text>Name</Text>
            <Separator orientation="vertical" />
            <Text>Setting</Text>
            <Separator orientation="vertical" />
            <Text toolTip="The state shows you, whether you have requested the player.">State</Text>
         </Flex>
         <div className="h-full w-full overflow-auto pb-8">
            <ul className="mt-8 flex flex-grow flex-col items-center gap-2 overflow-auto">
               {list.ready
                  .sort((player) => list.requests.sent.find((sent) => isPlayer(sent, player)))
                  .filter((player) => `${player.username} ${player.gamemode} ${player.scoremode} ${player.legamount}`.includes(list.filter))
                  .map((player) => {
                     return (
                        <li
                           className={`flex h-10 w-full cursor-pointer items-center justify-between rounded-md border-[1px] ${theme.borderColor.light} text-center text-sm transition-all hover:${theme.borderColor.heavy}`}
                           onClick={() => toggleRequest(player)}>
                           <Text weight="sb" className="w-1/3">
                              {player.username.substring(0, 10)}
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
         <Flex orientation="vertical" className="w-full" gap="8">
            <Separator orientation="horizontal" />
            <h2 className="text-zinc-500">{list.ready.length} Players</h2>
         </Flex>
      </Card>
   );
}

export default PlayerlistCard;
