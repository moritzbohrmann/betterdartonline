import React from "react";
import { Flex } from "../@ui/Flex";
import { Gamemode, Legs, Username } from "./components/_collection";

function Cricket() {
   return (
      <Flex orientation="vertical" gap="2">
         <Username />
         <Gamemode />
         <Legs />
      </Flex>
   );
}

export default Cricket;
