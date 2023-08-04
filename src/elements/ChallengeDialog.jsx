import * as Dialog from "@radix-ui/react-dialog";
import Button from "../components/@ui/Button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Title } from "../components/@ui/Card";
import { useSocket } from "../context/SocketContext";
import { removeCurrentRequest, removeRequestReceived } from "../state/PlayerlistReducer";

function ChallengeDialog() {
   const socket = useSocket();
   const dispatch = useDispatch();
   const challenger = useSelector((state) => state.list.requests.current);

   const handleAccept = () => {
      if (!challenger) return;
      socket.emit("request-accept", challenger);
   };

   const handleDecline = () => {
      if (!challenger) return;
      socket.emit("request-decline", challenger);
      dispatch(removeRequestReceived(challenger));
      dispatch(removeCurrentRequest());
   };

   return (
      <Dialog.Root open={challenger !== null}>
         <Dialog.Overlay className="fixed inset-0 z-10 backdrop-blur-xl data-[state=open]:animate-overlayShow" />
         <Dialog.Content className="fixed left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%] data-[state=open]:animate-contentShow">
            <Card className="">
               <Title title="Request" subTitle={`${challenger?.username} wants to play a match against you!`} />
               <h2 className="rounded-md bg-amber-500 py-1 text-center font-bold text-dark-background">{`${challenger?.scoremode} ${challenger?.gamemode} ${challenger?.legamount}`}</h2>
               <Dialog.Close>
                  <div className="mt-4 flex items-center justify-around">
                     <Button className="bg-green-500" onClick={() => handleAccept()}>
                        Accept
                     </Button>
                     <Button className="bg-red-500" onClick={() => handleDecline()}>
                        Decline
                     </Button>
                  </div>
               </Dialog.Close>
            </Card>
         </Dialog.Content>
      </Dialog.Root>
   );
}

export default ChallengeDialog;
