import * as Alert from "@radix-ui/react-alert-dialog";
import React from "react";
import { Button } from "../components/@ui/Button";
import { Card, Title } from "../components/@ui/Card";
import { Input } from "../components/@ui/Input";
import { useSocket } from "../context/SocketContext";
import { useLastScore, useMatch } from "../state/MatchReducer";
import { useProfile } from "../state/ProfileReducer";
import { isPlayer } from "../utils/match";

function MatchControlBar() {
   const { currentLeg } = useMatch();
   const profile = useProfile();
   const lastScore = useLastScore(profile);
   const [score, setScore] = React.useState(0);
   const socket = useSocket();

   const handleResignition = () => {};

   const handleCorrection = (score) => {
      socket.emit("score-edit", Number(score));
   };

   return (
      <div
         id="matchuicontrolbar"
         className="fixed bottom-0 flex h-20 w-full flex-wrap items-center justify-center gap-8 border-t-[1px] border-zinc-900 bg-dark-background">
         <Alert.Root>
            <Alert.Trigger asChild>
               <Button alignX="none" disabled={currentLeg.scores.length > 1 ? isPlayer(currentLeg.scores.at(-1)?.player, profile) : true}>
                  Correction
               </Button>
            </Alert.Trigger>
            <Alert.Portal>
               <Alert.Overlay className="fixed inset-0 z-10 backdrop-blur-xl data-[state=open]:animate-overlayShow" />
               <Alert.Content className="fixed left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%] data-[state=open]:animate-contentShow">
                  <Card className="flex h-72 w-96 flex-col items-center bg-dark-background">
                     <Title title="Correction" subTitle={`Your last score of ${lastScore?.value} points will be corrected to ${score}.`} />
                     <Input size="sm" text="c" type="number" min={0} max={180} onChange={(e) => setScore(e.target.value)} />
                     <div className="mt-8 flex justify-around gap-6">
                        <Alert.Action>
                           <Button onClick={() => handleCorrection(score)}>Confirm</Button>
                        </Alert.Action>
                        <Alert.Cancel>
                           <Button>Abort</Button>
                        </Alert.Cancel>
                     </div>
                  </Card>
               </Alert.Content>
            </Alert.Portal>
         </Alert.Root>
         <Alert.Root>
            <Alert.Trigger asChild>
               <Button alignX="none" variant="negative">
                  Resign
               </Button>
            </Alert.Trigger>
            <Alert.Portal>
               <Alert.Overlay className="fixed inset-0 z-10 backdrop-blur-xl data-[state=open]:animate-overlayShow" />
               <Alert.Content className="fixed left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%] data-[state=open]:animate-contentShow">
                  <Card className="h-56 w-96 bg-dark-background">
                     <Title title="Resign" subTitle="By resignition, your opponent wins the match receiving all legs left." />
                     <div className="flex justify-around">
                        <Alert.Action>
                           <Button onClick={() => handleResignition()}>Confirm</Button>
                        </Alert.Action>
                        <Alert.Cancel>
                           <Button>Abort</Button>
                        </Alert.Cancel>
                     </div>
                  </Card>
               </Alert.Content>
            </Alert.Portal>
         </Alert.Root>
      </div>
   );
}

export default MatchControlBar;
