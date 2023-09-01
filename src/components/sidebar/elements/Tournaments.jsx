import ContentItem from "../components/ContentItem";
import React from "react";
import ToolTip from "../../@ui/ToolTip";
import { useNavigate } from "react-router-dom";
import { useGet } from "../../../hooks/useFetch";
import { useAccount } from "../../../state/AccountReducer";
import { Button } from "../../@ui/Button";
import { Text } from "../../@ui/Text";

function Tournaments() {
   const account = useAccount();
   const [tournaments, setTournaments] = React.useState([]);
   const navigate = useNavigate();

   React.useEffect(() => {
      const applyTournaments = async () => {
         await useGet("http://localhost:3001/tournaments")
            .then(({ tournaments }) => tournaments.filter((t) => t.admin === account.uuid))
            .then((result) => setTournaments(result));
      };

      applyTournaments();
   }, []);

   const TournamentItems = () => {
      return (
         <>
            {tournaments.map((tournament) => {
               return (
                  <ContentItem stretch onClick={() => navigate("/tournament/info/" + tournament.id)}>
                     <Text size="sm">{tournament.name}</Text>
                     <Text size="sm">
                        {tournament.players.length}/{tournament.size}
                     </Text>
                  </ContentItem>
               );
            })}
         </>
      );
   };

   const AddTournament = () => {
      return (
         <ContentItem>
            <Button alignX="l" className="h-4 w-4 rounded-sm" onClick={() => navigate("/tournament/create")}>
               <ToolTip content="New tournament">+</ToolTip>
            </Button>
         </ContentItem>
      );
   };

   return (
      <>
         <TournamentItems />
         <AddTournament />
      </>
   );
}

export default Tournaments;
