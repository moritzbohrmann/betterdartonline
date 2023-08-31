import NavBar from "../elements/NavigationBar";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Flex, Input, Select, Text, Title } from "../components/@ui/_collection";
import { useTheme } from "../context/ThemeContext";
import { usePost } from "../hooks/useFetch";
import { useAccount } from "../state/AccountReducer";
import { cn } from "../utils/style";

function CreateTournament() {
   const account = useAccount();
   const navigate = useNavigate();
   const [theme] = useTheme();

   const initialState = {
      admin: account?.uuid,
      name: "",
      size: 8,
      minimum: 4,
      groupStage: true,
      elimination: "singleko",
      gamemode: "firstto",
      points: 501,
      legamount: 5,
      invitations: [],
   };
   const [template, setTemplate] = React.useState(initialState);

   const applySetting = (setting, value) => {
      setTemplate((template) => {
         return { ...template, [setting]: value };
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const postTournament = async () => {
         return await usePost("http://localhost:3001/tournament/create", {
            ...template,
            registrationDate: `${template.registrationDate}/${template.registrationTime}`,
            startDate: `${template.startDate}/${template.startTime}`,
         });
      };

      const { error, tournament } = await postTournament();

      if (error) {
         toast.error("Error: " + error);
         return;
      }

      toast.success("Tournament created successfully.");
      navigate("/tournament/info/" + tournament.id);
   };

   React.useEffect(() => {
      !account && navigate("/home");
   }, []);

   return (
      <Flex orientation="vertical" align="center" className="min-h-screen">
         <NavBar />
         <form
            onSubmit={(e) => handleSubmit(e)}
            onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            className="mx-2 flex max-w-[48rem] flex-col">
            <Flex orientation="vertical" className={cn("rounded-md border-[1px] p-8 md:mt-4", theme.backgroundColor, theme.borderColor.light)}>
               <Title subTitle="Create your own tournaments including your rules.">Tournament Creator</Title>
               <Flex orientation="vertical" gap="8">
                  <Flex orientation="wrap" justify="between" gap="8" className="w-full">
                     <Flex orientation="vertical">
                        <Text size="xl" weight="b">
                           Tournament
                        </Text>
                        <Flex orientation="vertical" className="ml-4 mt-2">
                           <Setting name="Name">
                              <Input placeholder="e.g. Dartscup" onChange={(e) => applySetting("name", e.target.value)} required />
                           </Setting>
                           <Setting name="Size">
                              <Select onChange={(e) => applySetting("size", e.target.value)} required>
                                 {[8, 12, 16, 24, 32].map((size) => {
                                    return <option value={size}>{size}</option>;
                                 })}
                              </Select>
                           </Setting>
                           <Setting name="Minimum">
                              <Input type="number" defaultValue={4} onChange={(e) => applySetting("minimum", e.target.value)} required />
                           </Setting>
                           <Setting name="Groupstage">
                              <Select onChange={(e) => applySetting("groupstage", e.target.value)} required>
                                 <option value="true">True</option>
                                 <option value="false">False</option>
                              </Select>
                           </Setting>
                           <Setting name="Elimination">
                              <Select onChange={(e) => applySetting("elimination", e.target.value)} required>
                                 <option value="singleko">Single K.O.</option>
                                 <option value="doubleko">Double K.O.</option>
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
                              <Select onChange={(e) => applySetting("gamemode", e.target.value)} required>
                                 <option value="firstto">First to</option>
                                 <option value="bestof">Best of</option>
                              </Select>
                           </Setting>
                           <Setting name="Points">
                              <Select defaultValue={501} onChange={(e) => applySetting("points", e.target.value)} required>
                                 {[301, 501, 701].map((points) => {
                                    return <option value={points}>{points}</option>;
                                 })}
                              </Select>
                           </Setting>
                           <Setting name="Legs">
                              <Input type="number" defaultValue={5} onChange={(e) => applySetting("legamount", e.target.value)} required />
                           </Setting>
                        </Flex>
                     </Flex>
                  </Flex>
                  <Flex orientation="wrap" className="w-full">
                     <Text size="xl" weight="b">
                        Time
                     </Text>
                     <Flex orientation="wrap" justify="between" gap="4" className="ml-4 w-full">
                        {["Registration", "Start"].map((type) => {
                           return (
                              <Setting name={type} className="w-full flex-wrap">
                                 <Flex align="center">
                                    <Text>Date</Text>
                                    <Input type="date" onChange={(e) => applySetting(`${type.toLowerCase()}Date`, e.target.value)} required />
                                 </Flex>
                                 <Flex align="center">
                                    <Text>Time</Text>
                                    <Input type="time" onChange={(e) => applySetting(`${type.toLowerCase()}Time`, e.target.value)} required />
                                 </Flex>
                              </Setting>
                           );
                        })}
                     </Flex>
                  </Flex>
               </Flex>
            </Flex>
            <Flex justify="between" className={cn("my-2 w-full rounded-md border-[1px] p-8", theme.backgroundColor, theme.borderColor.light)}>
               <Flex orientation="vertical">
                  <Title subTitle="Add players you would like to participate.">Invitations</Title>
                  <Flex gap="8" align="top">
                     <Input
                        placeholder="Playername"
                        onKeyUp={(e) => {
                           if (e.key !== "Enter" || e.target.value === "") return;

                           applySetting("invitations", [...template.invitations, e.target.value]);
                           e.target.value = "";
                        }}
                     />
                  </Flex>
               </Flex>
               <div className="max-h-[7.5rem] overflow-auto">
                  <Flex orientation="wrap" className="max-w-[20rem]">
                     {template.invitations.map((invitation) => {
                        return (
                           <Badge color="yellow" className="cursor-pointer">
                              <ToolTip content="Click to delete">{invitation}</ToolTip>
                           </Badge>
                        );
                     })}
                  </Flex>
               </div>
            </Flex>
            <Flex justify="center" gap="4" className={cn("mb-2 w-full rounded-md border-[1px] p-4", theme.backgroundColor, theme.borderColor.light)}>
               <Flex gap="4">
                  <Button type="submit">Submit</Button>
                  <Button
                     type="button"
                     variant="negative"
                     onClick={() => {
                        setTemplate(initialState);
                     }}>
                     Reset
                  </Button>
               </Flex>
            </Flex>
         </form>
      </Flex>
   );
}

const Setting = ({ name, className, children, ...props }) => {
   return (
      <Flex align="center" justify="between" className={cn("w-72", className)} {...props}>
         <Text align="l">{name}</Text>
         {children}
      </Flex>
   );
};

export default CreateTournament;
