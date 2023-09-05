import ContentItem from "../components/ContentItem";
import React from "react";
import ToolTip from "../../@ui/ToolTip";
import { useNavigate } from "react-router-dom";
import { useGet } from "../../../hooks/useFetch";
import { useAccount } from "../../../state/AccountReducer";
import { Button } from "../../@ui/Button";
import { Text } from "../../@ui/Text";

const TournamentItems = ({ tournaments }) => {
   const navigate = useNavigate();
   return (
      <>
         {tournaments.map((tournament) => {
            return (
               <ContentItem stretch onClick={() => navigate("/tournament/" + tournament.id)}>
                  <Text size="sm">{tournament.name}</Text>
                  <Text size="sm">
                     {tournament.entries.length}/{tournament.size}
                  </Text>
               </ContentItem>
            );
         })}
      </>
   );
};

const AddTournament = () => {
   const navigate = useNavigate();
   return (
      <ContentItem>
         <Button alignX="l" className="h-4 w-4 rounded-sm" onClick={() => navigate("/tournament/create")}>
            <ToolTip content="New tournament">+</ToolTip>
         </Button>
      </ContentItem>
   );
};

function Tournaments() {
   const account = useAccount();
   const [tournaments, setTournaments] = React.useState([]);

   React.useEffect(() => {
      const controller = new AbortController();
      const applyTournaments = async () => {
         await useGet("http://localhost:3001/tournaments", { signal: controller.signal })
            .then(({ tournaments }) => tournaments.filter((t) => t.admin === account.uuid))
            .then((result) => setTournaments(result));
      };

      applyTournaments();

      return () => controller.abort();
   }, []);

   return (
      <>
         <TournamentItems tournaments={tournaments} />
         <AddTournament />
      </>
   );
}

export default Tournaments;
