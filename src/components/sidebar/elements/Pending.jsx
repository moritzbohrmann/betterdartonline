import ContentItem from "../components/ContentItem";
import React from "react";
import { useAccount } from "../../../state/AccountReducer";
import { Text } from "../../@ui/Text";

function Pending() {
   const account = useAccount();
   const [matches, setMatches] = React.useState([]);

   const Matches = () => {
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

   return <>{matches.length > 0 ? <Matches /> : <NoMatch />}</>;
}

export default Pending;
