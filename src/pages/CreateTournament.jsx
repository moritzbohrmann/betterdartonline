import React from "react";
import Switch from "../components/@ui/Switch";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Badge, Button, Card, Flex, Input, Select, Text, Title, ToolTip } from "../components/@ui/_collection";
import { usePost } from "../hooks/useFetch";
import { useAccount } from "../state/AccountReducer";
import { cn } from "../utils/style";

function CreateTournament() {
   const account = useAccount();
   const navigate = useNavigate();
   const initialState = {
      admin: account?.uuid,
      name: "",
      description: "Just another tournament!",
      size: 8,
      minimum: 4,
      groupStage: true,
      elimination: "singleko",
      gamemode: "firstto",
      points: 501,
      legamount: 5,
      checkout: "double",
      invitations: [],
   };
   const [preview, setPreview] = React.useState(initialState);

   const handleChange = (e, object) => setPreview((prev) => ({ ...prev, [e.target.name]: object ? object : e.target.value }));

   const handleSubmit = () => {
      const controller = new AbortController();
      const postTournament = async () => {
         usePost("http://localhost:3001/tournament/create", { ...preview, minimum: preview.size / 2 }, { signal: controller.signal })
            .then(({ error, tournament }) => {
               if (error) throw error;

               toast.success("Tournament created successfully.");
               navigate("/tournament/info/" + tournament.id);
            })
            .catch((error) => toast.error("Error: " + error));
      };

      postTournament();

      return () => controller.abort();
   };

   return (
      <>
         <Flex orientation="wrap" justify="center" align="center" gap="4" className="mx-2 md:mt-4">
            <Flex orientation="vertical" gap="4" className="h-full max-w-[48rem]">
               <TournamentCard handleChange={handleChange} />
               <DateTimeCard handleChange={handleChange} />
            </Flex>
            <Flex orientation="vertical" gap="4" className="w-full max-w-[48rem] xl:w-fit">
               <InvitationCard
                  invitations={preview.invitations}
                  size={preview.size}
                  onAddInvitation={(val) => setPreview((prev) => ({ ...prev, invitations: [...prev.invitations, val] }))}
               />
               <ButtonCard handleSubmit={handleSubmit} handleReset={() => setPreview(initialState)} />
            </Flex>
         </Flex>
      </>
   );
}
const TournamentCard = ({ handleChange }) => {
   return (
      <Card className="w-full">
         <Title subTitle="Create your own tournament with your rules.">Tournament Creator</Title>
         <Flex orientation="wrap" justify="between" gap="8" className="w-full">
            <Flex orientation="vertical" gap="4">
               <Text size="xl" weight="b">
                  Tournament
               </Text>
               <Flex orientation="vertical" className="ml-2">
                  <Setting label="Name">
                     <Input name="name" placeholder="e.g. Dartscup" onChange={handleChange} required />
                  </Setting>
                  <Setting label="Size">
                     <Select name="size" onChange={handleChange} required>
                        {[8, 12, 16, 24, 32].map((size) => {
                           return <option value={size}>{size}</option>;
                        })}{" "}
                     </Select>
                  </Setting>
                  <Setting label="Description">
                     <Input name="description" onChange={handleChange} placeholder="Just another tournament!" />
                  </Setting>
                  <Setting label="Elimination">
                     <Select name="elimination" onChange={handleChange} required>
                        <option>Singe K.O.</option>
                        <option>Double K.O.</option>
                     </Select>
                  </Setting>
                  <Setting label="Groupstage">
                     <Flex justify="center" className="w-full">
                        <Switch name="groupstage" onChange={handleChange} required />
                     </Flex>
                  </Setting>
               </Flex>
            </Flex>

            {/**---------------------------------------------------------**/}

            <Flex orientation="vertical" gap="4">
               <Text size="xl" weight="b">
                  Match
               </Text>
               <Flex orientation="vertical" className="ml-2">
                  <Setting label="Gamemode">
                     <Select name="gamemode" onChange={handleChange} required>
                        <option value="firstto">First to</option>
                        <option value="bestof">Best of</option>
                     </Select>
                  </Setting>
                  <Setting label="Points">
                     <Select name="points" defaultValue={501} onChange={handleChange} required>
                        {[301, 501, 701].map((points) => {
                           return <option value={points}>{points}</option>;
                        })}
                     </Select>
                  </Setting>
                  <Setting label="Legs">
                     <Input type="number" defaultValue={5} name="legamount" onChange={handleChange} required />
                  </Setting>
                  <Setting label="Checkout">
                     <Select name="checkout" onChange={handleChange} required>
                        <option>Single</option>
                        <option>Master</option>
                        <option>Double</option>
                     </Select>
                  </Setting>
               </Flex>
            </Flex>
         </Flex>
      </Card>
   );
};

const DateTimeCard = ({ handleChange }) => {
   return (
      <Card className="w-full">
         <Title>Date & Time</Title>
         <Flex orientation="wrap" justify="between" gap="8" className="w-full">
            {["Registration", "Start"].map((val) => {
               return (
                  <Flex>
                     <Text>Registration</Text>
                     <Flex orientation="wrap" justify="between">
                        <Input type="date" name={`${val.toLowerCase()}Date`} onChange={handleChange} required />
                        <Input type="time" name={`${val.toLowerCase()}Time`} onChange={handleChange} required />
                     </Flex>
                  </Flex>
               );
            })}
         </Flex>
      </Card>
   );
};

const InvitationCard = ({ invitations, size, onAddInvitation }) => {
   const handleAdd = (e) => {
      if (e.key === "Enter") {
         if (invitations.length >= size / 2) {
            toast.error("Error: You must only invite an amount of players half of the tournament's size.");
            return;
         }
         onAddInvitation(e.target.value);
         e.target.value = "";
      }
   };

   return (
      <Card className="w-full max-w-[48rem]">
         <Title subTitle="Invite your friends to the tournament!">Invitations</Title>
         <Flex orientation="vertical" className="w-full py-3">
            <div className="h-72 w-full overflow-auto">
               <Flex orientation="wrap" gap="2" className="w-full">
                  {invitations.map((invitation) => {
                     return (
                        <Badge color="yellow" className="cursor-pointer">
                           <ToolTip content="Click to delete">{invitation}</ToolTip>
                        </Badge>
                     );
                  })}
               </Flex>
            </div>
         </Flex>
         <Input placeholder="Playername" onKeyDown={handleAdd} className="w-full" />
      </Card>
   );
};

const ButtonCard = ({ handleSubmit, handleReset }) => {
   return (
      <Card className="w-full max-w-[48rem]">
         <Flex orientation="wrap" className="w-full">
            <Button onClick={handleSubmit}>Create</Button>
            <Button onClick={handleReset} variant="negative">
               Reset
            </Button>
         </Flex>
      </Card>
   );
};

const Setting = ({ label, className, children, ...props }) => {
   return (
      <Flex align="center" justify="between" className={cn("w-72", className)} {...props}>
         <Text align="l">{label}</Text>
         {children}
      </Flex>
   );
};
export default CreateTournament;
