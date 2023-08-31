import ContentItem from "../components/ContentItem";
import React from "react";
import { useAccount } from "../../../state/AccountReducer";
import { Text } from "../../@ui/Text";

function Pending() {
   const account = useAccount();
   const [matches, setMatches] = React.useState([]);

   return (
      <>
         {matches.map((match) => {
            return (
               <ContentItem>
                  <Text size="sm" weight="b">
                     {match.players.guest.username}
                  </Text>
                  <Text size="sm">
                     {match.state.host}:{match.state.guest}
                  </Text>
               </ContentItem>
            );
         })}
         {matches.length === 0 && (
            <ContentItem>
               <Text size="sm">No matches</Text>
            </ContentItem>
         )}
      </>
   );
}

export default Pending;
