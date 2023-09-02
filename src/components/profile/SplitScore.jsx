import React from "react";
import { Flex } from "../@ui/_collection";
import { Gamemode, Legs, TnD, Username } from "./components/_collection";

function SplitScore() {
   return (
      <Flex orientation="vertical" gap="2">
         <Username />
         <Gamemode />
         <TnD />
         <Legs />
      </Flex>
   );
}

export default SplitScore;
