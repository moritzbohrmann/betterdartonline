import React from "react";
import { useGet } from "./useFetch";

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

export { useTournament };
