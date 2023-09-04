import React from "react";
import { useGet } from "./useFetch";

const useTournaments = () => {
   const [tournaments, setTournaments] = React.useState();

   React.useEffect(() => {
      const controller = new AbortController();
      const fetchTournaments = async () =>
         useGet("http://localhost:3001/tournaments", { signal: controller.signal }).then((res) => setTournaments(res.tournaments));

      fetchTournaments();

      return () => controller.abort();
   }, []);

   return tournaments;
};

const useTournament = (id) => {
   const [tournament, setTournament] = React.useState();

   React.useEffect(() => {
      const controller = new AbortController();
      const fetchTournament = async () =>
         useGet("http://localhost:3001/tournament/info/" + id, { signal: controller.signal }).then((res) => setTournament(res.tournament));

      fetchTournament();

      return () => controller.abort();
   }, []);

   return tournament;
};

export { useTournament, useTournaments };
