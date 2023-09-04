import CreateTournament from "./CreateTournament";
import React from "react";
import ViewTournament from "./ViewTournament";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button, Card, Flex, Text } from "../components/@ui/_collection";
import { useTournaments } from "../hooks/tournament";

const TournamentOptions = () => {
   const navigate = useNavigate();
   const tournaments = useTournaments();
   return (
      <Flex orientation="vertical" justify="center">
         <Card>
            <Text size="3xl" weight="b">
               View
            </Text>
            {tournaments?.map((t) => {
               return (
                  <Button onClick={() => navigate("./" + t.id)} className="w-fit px-4">
                     {t.name}
                  </Button>
               );
            })}
         </Card>
         <Card>
            <Button onClick={() => navigate("./create")}>Create</Button>
         </Card>
      </Flex>
   );
};

function Tournament() {
   return (
      <Routes>
         <Route path="*" element={<TournamentOptions />} />
         <Route path="create" element={<CreateTournament />} />
         <Route path=":id" element={<ViewTournament />} />
      </Routes>
   );
}

export default Tournament;
