import NavBar from "../elements/NavigationBar";
import React from "react";
import { useGet } from "../hooks/useFetch";
import { Badge, Button, Flex, Input, Select, Text, Title, ToolTip } from "./@ui/_collection";

function Tournament() {
   const [template, setTemplate] = React.useState({});

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
                  <Flex orientation="wrap" justify="between" gap="8" className="w-full">
                     <Flex orientation="vertical">
                        <Text size="xl" weight="b">
                           Tournament
                        </Text>
                        <Flex orientation="vertical" className="ml-4 mt-2">
                           <Setting name="Name">
                              <Input placeholder="e.g. Dartscup" onChange={(e) => setTemplate()} />
                           </Setting>
                           <Setting name="Size">
                              <Select>
                                 <option>8</option>
                                 <option>12</option>
                                 <option>16</option>
                                 <option>24</option>
                                 <option>32</option>
                              </Select>
                           </Setting>
                           <Setting name="Minimum">
                              <Input type="number" defaultValue={4} />
                           </Setting>
                           <Setting name="Mode">
                              <Select>
                                 <option>K.O.</option>
                                 <option>Groupstage - K.O.</option>
                              </Select>
                           </Setting>
                           <Setting name="Elimination">
                              <Select>
                                 <option>Single</option>
                                 <option>Double</option>
                              </Select>
                           </Setting>
                        </Flex>
                     </Flex>
                     <Flex orientation="vertical">
                        <Text size="xl" weight="b">
                           Match
                        </Text>
                        <Flex orientation="vertical" className="ml-4 mt-2">
                           <Setting name="Mode">
                              <Select>
                                 <option>First to</option>
                                 <option>Best of</option>
                              </Select>
                           </Setting>
                           <Setting name="Points">
                              <Select>
                                 <option>301</option>
                                 <option>501</option>
                                 <option>701</option>
                                 <option>1001</option>
                                 <option>2001</option>
                                 <option>3001</option>
                              </Select>
                           </Setting>
                           <Setting name="Legs">
                              <Input type="number" defaultValue={5} />
                           </Setting>
                        </Flex>
                     </Flex>
                  </Flex>
                  <Flex orientation="wrap" className="w-full">
                     <Text size="xl" weight="b">
                        Time
                     </Text>
                     <Flex orientation="wrap" justify="between" gap="4" className="ml-4 w-full">
                        <Setting name="Registration">
                           <Input type="date" />
                           <Input type="time" />
                        </Setting>
                        <Setting name="Start">
                           <Input type="date" />
                           <Input type="time" />
                        </Setting>
                     </Flex>
                  </Flex>
               </Flex>
            </Flex>
            <Flex justify="between" className="mb-2 w-full rounded-md border-[1px] border-dark-900 bg-dark-background bg-opacity-30 p-8 ">
               <Flex orientation="vertical">
                  <Title subTitle="Add players you would like to participate.">Invitations</Title>
                  <Flex gap="8" align="top">
                     <Input placeholder="Playername" onKeyUp={(e) => e.key === "Enter" && e.target.value !== "" && addInvitation(e)} />
                  </Flex>
               </Flex>
               <div className="max-h-[7.5rem] overflow-auto">
                  <Flex orientation="wrap" className="max-w-[24rem]">
                     {invitations.map((invitation) => {
                        return (
                           <Badge onClick={() => removeInvitation(invitation)} className="cursor-pointer">
                              <ToolTip content="Click to delete">{invitation}</ToolTip>
                           </Badge>
                        );
                     })}
                  </Flex>
               </div>
            </Flex>
            <Flex justify="center" gap="4" className="mb-2 w-full rounded-md border-[1px] border-dark-900 bg-dark-background bg-opacity-30 p-4">
               <Button>Submit</Button>
               <Button variant="negative">Reset</Button>
            </Flex>
         </Flex>
      </Flex>
   );
}

const Setting = ({ name, children, ...props }) => {
   return (
      <Flex align="center" justify="between" className="w-72" {...props}>
         <Text align="l">{name}</Text>
         {children}
      </Flex>
   );
};

export default Tournament;
