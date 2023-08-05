import React from "react";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { Card, Title } from "../components/@ui/Card";
import { useSocket } from "../context/SocketContext";
import { addRequestSent, removeRequestSent } from "../state/PlayerlistReducer";
import { isPlayer } from "../utils/MatchUtils";

function PlayerlistCard() {
   const list = useSelector((state) => state.list);
   const socket = useSocket();
   const dispatch = useDispatch();

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
         <div className="flex w-full justify-between text-center">
            <h2 className="w-1/3 border-r-[1px] border-zinc-900">Name</h2>
            <h2 className="w-1/3">Setting</h2>
            <h2 className="w-1/3 border-l-[1px] border-zinc-900">State</h2>
         </div>
         <div className="h-full overflow-auto">
            <ul className="mt-8 flex w-full flex-grow flex-col items-center gap-2 overflow-auto">
               {list.ready
                  .sort((player) => list.requests.sent.find((sent) => isPlayer(sent, player)))
                  .filter((player) => `${player.username} ${player.gamemode} ${player.scoremode} ${player.legamount}`.includes(list.filter))
                  .map((player) => {
                     const username = player.username.length > 10 ? `${player.username.substring(0, 10)}.` : player.username;

                     return (
                        <li
                           className="flex h-10 w-full cursor-pointer items-center justify-between rounded-md border-[1px] border-zinc-900 text-center text-sm transition-all hover:border-zinc-500"
                           onClick={() => toggleRequest(player)}>
                           <h2 className="w-1/3">{username}</h2>
                           <h2 className="w-1/3">
                              {player.scoremode} {player.gamemode} {player.legamount}
                           </h2>
                           <div className="flex w-1/3">
                              {list.requests.sent.find((sent) => isPlayer(sent, player)) ? (
                                 <div className="m-auto flex h-6 w-6 rounded-md bg-green-500">
                                    <CheckIcon className="m-auto" />
                                 </div>
                              ) : (
                                 <div className="m-auto flex h-6 w-6 rounded-md bg-red-500">
                                    <Cross2Icon className="m-auto" />
                                 </div>
                              )}
                           </div>
                        </li>
                     );
                  })}
            </ul>
         </div>
         <div className="flex w-full border-t-[1px] border-zinc-900 pt-8">
            <h2 className="m-auto text-zinc-500">{list.ready.length} Spieler</h2>
         </div>
      </Card>
   );
}

export default PlayerlistCard;
