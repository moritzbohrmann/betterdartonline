import React from "react";
import { Flex } from "../@ui/_collection";
import { Gamemode, Legs, Points, Username } from "./components/_collection";

function X01() {
   return (
      <Flex orientation="vertical" gap="2">
         <Username />
         <Points />
         <Gamemode />
         <Legs />
      </Flex>
   );
}

export default X01;
