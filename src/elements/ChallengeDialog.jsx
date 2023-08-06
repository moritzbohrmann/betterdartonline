import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/@ui/Button";
import { Card, Title } from "../components/@ui/Card";
import { Text } from "../components/@ui/Text";
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
            <Card>
               <Title title="Request" subTitle={`${challenger?.username} wants to play a match against you!`} />
               <Text
                  weight="b"
                  text="c"
                  className="rounded-md bg-amber-500 py-1">{`${challenger?.scoremode} ${challenger?.gamemode} ${challenger?.legamount}`}</Text>
               <div className="mt-4 flex items-center justify-around">
                  <Button className="bg-green-500" onClick={() => handleAccept()}>
                     Accept
                  </Button>
                  <Button className="bg-red-500" onClick={() => handleDecline()}>
                     Decline
                  </Button>
               </div>
            </Card>
         </Dialog.Content>
      </Dialog.Root>
   );
}

export default ChallengeDialog;
