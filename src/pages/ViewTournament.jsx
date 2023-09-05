import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Badge, Button, Card, Flex, Text, Title } from "../components/@ui/_collection";
import { usePlayer } from "../hooks/usePlayer";
import { useTournament } from "../hooks/useTournament";
import { calcTimeUntilNow } from "../utils/date";
import { cn } from "../utils/style";

const Section = ({ className, ...props }) => <Flex orientation="vertical" gap="8" className={cn("w-64 md:h-96", className)} {...props} />;

const Information = ({ title, name, children, ...props }) => {
   const { id } = useParams();
   const tournament = useTournament(id);

   return (
      <Flex orientation="vertical" gap="0" className="w-full" {...props}>
         <Text>{title}</Text>
         <Flex orientation="vertical" gap="0" className="ml-2">
            {children}
            {name && (
               <Text size="xl" weight="b" align="l">
                  {tournament?.[name]}
               </Text>
            )}
         </Flex>
      </Flex>
   );
};

function ViewTournament() {
   const { id } = useParams();
   const tournament = useTournament(id);
   const admin = usePlayer(tournament?.admin);

   return (
      <Flex orientation="vertical" className="mx-2 min-w-[24rem] md:mt-2">
         <Card className="w-full">
            <Flex justify="between" align="start" className="w-full">
               <Title subTitle={tournament?.description}>{tournament?.name}</Title>
               <Badge color="green" className="md:w-96">
                  Open
               </Badge>
            </Flex>
            <Flex orientation="wrap">
               <Section>
                  <Information title="Administrator" name="elimination" />
                  <Information title="Size" name="size" />
                  <Information title="Entries">
                     <div className="mt-2 h-48 w-56 rounded-md bg-zinc-700 bg-opacity-10">
                        <Flex orientation="wrap" className="p-2">
                           {tournament?.entries.map((playername) => (
                              <Badge>{playername}</Badge>
                           ))}
                        </Flex>
                     </div>
                  </Information>
               </Section>
               <Section>
                  <Information title="Elimination" name="elimination" />
                  <Information title="Groupstage" name="groupstage" />
               </Section>
               <Section className="justify-between">
                  <Flex orientation="vertical" gap="8">
                     <Information title="Time remaining">
                        <Text size="xl" weight="b">
                           0d 1h 29m
                        </Text>
                     </Information>
                     <Information title="Start">
                        <Text size="xl" weight="b">
                           {new Date(tournament?.startDate).toLocaleDateString()}
                        </Text>
                     </Information>
                  </Flex>
                  <Button alignX="none" alignY="none" className="w-full">
                     Join
                  </Button>
               </Section>
            </Flex>
         </Card>
      </Flex>
   );
}

export default ViewTournament;
