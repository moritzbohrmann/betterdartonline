import ContentItem from "../components/ContentItem";
import React from "react";
import { Text } from "../../@ui/Text";

const Matches = ({ matches }) => {
   return (
      <>
         {matches.map((match) => {
            return (
               <ContentItem stretch>
                  <Text size="sm" weight="b">
                     {match.players.guest.username}
                  </Text>
                  <Text size="sm">
                     {match.state.host}:{match.state.guest}
                  </Text>
               </ContentItem>
            );
         })}
      </>
   );
};

const NoMatch = () => {
   return (
      <ContentItem>
         <Text size="sm">No matches</Text>
      </ContentItem>
   );
};

function Pending() {
   const [matches] = React.useState([]);

   return <>{matches.length > 0 ? <Matches matches={matches} /> : <NoMatch />}</>;
}

export default Pending;
