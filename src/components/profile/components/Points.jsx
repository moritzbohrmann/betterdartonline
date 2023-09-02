import React from "react";
import { useDispatch } from "react-redux";
import { setScoremode, useProfile } from "../../../state/ProfileReducer";
import { Flex, Select, Text } from "../../@ui/_collection";

function Points() {
   const dispatch = useDispatch();
   const profile = useProfile();

   return (
      <Flex justify="between" align="center" className="w-full">
         <Text>Points</Text>
         <Select onChange={(e) => dispatch(setScoremode(e.target.value))} defaultValue={profile.scoremode}>
            {[301, 501, 701, 1001, 2001, 3001].map((score) => {
               return <option value={score}>{score}</option>;
            })}
         </Select>
      </Flex>
   );
}

export default Points;
