import React from "react";
import { useGet } from "./useFetch";

const usePlayer = (id) => {
   const [player, setPlayer] = React.useState();

   React.useEffect(() => {
      const controller = new AbortController();
      const fetchPlayer = async () =>
         useGet("http://localhost:3003/account/username/" + id, { signal: controller.signal }).then((player) => setPlayer(player));

      fetchPlayer();

      return () => controller.abort();
   }, []);

   return player;
};

export { usePlayer };
