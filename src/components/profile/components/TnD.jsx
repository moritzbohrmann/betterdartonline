import React from "react";
import { useDispatch } from "react-redux";
import { setTD, useProfile } from "../../../state/ProfileReducer";
import { Flex, Select, Text } from "../../@ui/_collection";

function TnD() {
   const dispatch = useDispatch();
   const profile = useProfile();

   return (
      <Flex justify="between" align="center" className="w-full">
         <Text>T&D</Text>
         <Select onChange={(e) => dispatch(setTD(e.target.value))} value={profile.td}>
            {["All", "only triple", "only double", "None"].map((mode) => {
               return <option value={mode}>{mode}</option>;
            })}
         </Select>
      </Flex>
   );
}

export default TnD;
