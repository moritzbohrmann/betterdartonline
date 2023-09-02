import NavBar from "../elements/NavigationBar";
import React from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Flex, Text, Title } from "../components/@ui/_collection";
import { useGet } from "../hooks/useFetch";
import { useAccount } from "../state/AccountReducer";

function ViewTournament() {
   const account = useAccount();
   const { id } = useParams();
   const [tournament, setTournament] = React.useState();

   React.useEffect(() => {
      const controller = new AbortController();
      const fetchTournament = async () =>
         useGet("http://localhost:3001/tournament/info/" + id, { signal: controller.signal }).then(({ tournament }) => setTournament(tournament));

      fetchTournament();

      return () => controller.abort();
   }, []);

   return (
      <>
         <Flex orientation="vertical">
            <Card className="md:mt-4">
               <Title subTitle={tournament?.description}>{tournament?.name}</Title>
               {tournament &&
                  Object.keys(tournament).map((key) => {
                     return <Text>{`${key}: ${tournament[key]}`}</Text>;
                  })}
            </Card>
            <Card className="flex h-12 w-full items-center justify-center">
               <Flex gap="4">
                  <Button type="submit" variant="positive">
                     Save
                  </Button>
                  <Button type="button" variant="negative">
                     Cancel
                  </Button>
               </Flex>
            </Card>
         </Flex>
      </>
   );
}

export default ViewTournament;
