import ContentItem from "../components/ContentItem";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGet } from "../../../hooks/useFetch";
import { Text, Button, ToolTip } from "../../@ui/_collection";

const TournamentItems = () => {
   const navigate = useNavigate();
   const { data, loading, error } = useGet("http://localhost:3001/tournaments");

   if (loading || error) {
      return (
         <ContentItem>
            <Text size="sm">{loading ? "Loading..." : "Could not load"}</Text>
         </ContentItem>
      );
   }

   return (
      <>
         {data?.tournaments.map((tournament) => {
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
   return (
      <>
         <TournamentItems />
         <AddTournament />
      </>
   );
}

export default Tournaments;
