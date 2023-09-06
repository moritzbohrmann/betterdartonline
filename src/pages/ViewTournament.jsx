import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Badge, Button, Card, Flex, Text, Title } from "../components/@ui/_collection";
import { usePlayer } from "../hooks/usePlayer";
import { useTournament } from "../hooks/useTournament";
import { calcTimeUntilNow } from "../utils/date";
import { cn } from "../utils/style";

const Section = ({ className, ...props }) => <Flex orientation="vertical" gap="8" className={cn("w-64", className)} {...props} />;

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

   const sectionList = [
      [
         convertToInfoJson("Administrator", "elimination"),
         convertToInfoJson("Size"),
         convertToInfoJson(
            "Entries",
            "entries",
            <Flex orientation="wrap" className="mt-2 h-48 w-56 rounded-md bg-zinc-700 bg-opacity-10 p-2">
               {tournament?.entries.map((playername) => (
                  <Badge>{playername}</Badge>
               ))}
            </Flex>
         ),
      ],
      [convertToInfoJson("Elimination"), convertToInfoJson("Groupstage")],
      [
         convertToInfoJson("Time remaining", "remaining", "0d 1h 29m"),
         convertToInfoJson("Start", "start", new Date(tournament?.startDate).toLocaleDateString()),
      ],
   ];

   return (
      <Card className="mx-2 w-fit md:mt-2">
         <Flex justify="between" align="start" className="w-full">
            <Title subTitle={tournament?.description}>{tournament?.name}</Title>
            <Badge color="green">Open</Badge>
         </Flex>
         <Flex className="flex-col lg:flex-row">
            {sectionList.map((section) => {
               return (
                  <Section>
                     {section.map((information) => {
                        return <Information title={information.title} name={information.name} children={information.content} />;
                     })}
                  </Section>
               );
            })}
         </Flex>
      </Card>
   );
}

const convertToInfoJson = (title, name, content) => {
   return {
      title,
      name: name ? name : title.toLowerCase(),
      content:
         content && typeof content === "string" ? (
            <Text size="xl" weight="b">
               {content}
            </Text>
         ) : (
            content
         ),
   };
};

export default ViewTournament;
