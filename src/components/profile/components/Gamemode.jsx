import React from "react";
import { useDispatch } from "react-redux";
import { setGamemode, useProfile } from "../../../state/ProfileReducer";
import { Flex, Select, Text } from "../../@ui/_collection";

function Gamemode() {
   const dispatch = useDispatch();
   const profile = useProfile();

   return (
      <Flex justify="between" align="center" className="w-full">
         <Text>Mode</Text>
         <Select onChange={(e) => dispatch(setGamemode(e.target.value))} value={profile.gamemode}>
            {["firstto", "bestof"].map((mode) => {
               return <option value={mode}>{mode}</option>;
            })}
         </Select>
      </Flex>
   );
}

export default Gamemode;
