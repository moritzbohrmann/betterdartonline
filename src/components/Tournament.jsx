import NavBar from "../elements/NavigationBar";
import React from "react";
import { useParams } from "react-router-dom";
import { useGet } from "../hooks/useFetch";
import { Badge, Flex, Input, Select, Text, Title, ToolTip } from "./@ui/_collection";

function Tournament() {
   const { id } = useParams();

   const fetchTournament = async () => {
      return await useGet("http://localhost:3001/tournament/info/" + id);
   };

   const tournament = fetchTournament();

   const [invitations, setInvitations] = React.useState([]);

   const addInvitation = (e) => {
      setInvitations((invitations) => [...invitations, e.target.value]);

      e.target.value = "";
   };

   const removeInvitation = (invitation) => {
      const _invitations = invitations.splice(invitations.indexOf(invitation), 1);

      setInvitations(_invitations);
   };

   return (
      <Flex orientation="vertical" align="center" className="min-h-screen">
         <NavBar />
         <Flex orientation="vertical" className="mx-2 min-w-[16rem] max-w-[48rem]">
            <Flex orientation="vertical" className="rounded-md border-[1px] border-dark-900 bg-dark-background bg-opacity-30 p-8 md:mt-4">
               <Title subTitle="Create your own tournaments including your rules.">Tournament Creator</Title>
               <Flex orientation="vertical" gap="8">
                  <Flex orientation="wrap" justify="center" gap="16">
                     <Flex orientation="vertical">
                        <Text size="xl" weight="b">
                           Tournament
                        </Text>
                        <Flex orientation="vertical" className="ml-4 mt-2">
                           <Flex align="center" justify="between" className="w-72">
                              <Text>Name</Text>
                              <Input placeholder="e.g. Dartscup" />
                           </Flex>
                           <Flex align="center" justify="between" className="w-72">
                              <Text>Size</Text>
                              <Select>
                                 <option>8</option>
                                 <option>12</option>
                                 <option>16</option>
                                 <option>24</option>
                                 <option>32</option>
                              </Select>
                           </Flex>
                           <Flex align="center" justify="between" className="w-72">
                              <Text>Minimum</Text>
                              <Input type="number" defaultValue={4} />
                           </Flex>
                           <Flex align="center" justify="between" className="w-72">
                              <Text align="l">Mode</Text>
                              <Select>
                                 <option>K.O.</option>
                                 <option>Groupstage - K.O.</option>
                              </Select>
                           </Flex>
                           <Flex align="center" justify="between" className="w-72">
                              <Text align="l">Elemination</Text>
                              <Select>
                                 <option>Single</option>
                                 <option>Double</option>
                              </Select>
                           </Flex>
                        </Flex>
                     </Flex>
                     <Flex orientation="vertical">
                        <Text size="xl" weight="b">
                           Match
                        </Text>
                        <Flex orientation="vertical" className="ml-4 mt-2">
                           <Flex align="center" justify="between" className="w-72">
                              <Text align="l">Gamemode</Text>
                              <Select>
                                 <option>First to</option>
                                 <option>Best of</option>
                              </Select>
                           </Flex>
                           <Flex align="center" justify="between" className="w-72">
                              <Text align="l">Points</Text>
                              <Select>
                                 <option>301</option>
                                 <option>501</option>
                                 <option>701</option>
                                 <option>1001</option>
                                 <option>2001</option>
                                 <option>3001</option>
                              </Select>
                           </Flex>
                           <Flex align="center" justify="between" className="w-72">
                              <Text align="l">Legs</Text>
                              <Input type="number" defaultValue={5} />
                           </Flex>
                        </Flex>
                     </Flex>
                  </Flex>
                  <Flex orientation="wrap" className="w-full">
                     <Text size="xl" weight="b">
                        Time
                     </Text>
                     <Flex orientation="wrap" justify="around" className="w-full">
                        <Flex orientation="wrap" align="center" justify="between" className="w-48">
                           <Text>End of Reg.</Text>
                           <Input type="date" />
                           <Input type="time" />
                        </Flex>
                        <Flex orientation="wrap" align="center" justify="between" className="w-48">
                           <Text>Start</Text>
                           <Input type="date" />
                           <Input type="time" />
                        </Flex>
                     </Flex>
                  </Flex>
               </Flex>
            </Flex>
            <Flex orientation="vertical" className="mb-2 w-full rounded-md border-[1px] border-dark-900 bg-dark-background bg-opacity-30 p-8 ">
               <Title subTitle="Gift your friends a wildcard!">Invite players</Title>
               <Flex gap="8" align="top">
                  <Input placeholder="Playername" onKeyUp={(e) => e.key === "Enter" && e.target.value !== "" && addInvitation(e)} />
                  <Flex orientation="wrap" className="max-w-[28rem]">
                     {invitations.map((invitation) => {
                        return (
                           <Badge onClick={() => removeInvitation(invitation)} className="cursor-pointer">
                              <ToolTip content="Click to delete">{invitation}</ToolTip>
                           </Badge>
                        );
                     })}
                  </Flex>
               </Flex>
            </Flex>
         </Flex>
      </Flex>
   );
}

export default Tournament;
