import React from "react";
import { useDispatch } from "react-redux";
import { setGamemode, setLegamount, setTD, setUsername, useProfile } from "../../state/ProfileReducer";
import { Flex } from "../@ui/Flex";
import { Input } from "../@ui/Input";
import { Select } from "../@ui/Select";
import { Text } from "../@ui/Text";

function SplitScore() {
   const profile = useProfile();
   const dispatch = useDispatch();

   return (
      <Flex orientation="vertical" gap="2">
         <Flex justify="between" align="center" className="w-full">
            <Text>Username</Text>
            <Input
               defaultValue={profile.username}
               placeholder="your username"
               maxLength="16"
               onChange={(e) => dispatch(setUsername(e.target.value))}
            />
         </Flex>
         <Flex justify="between" align="center" className="w-full">
            <Text>Mode</Text>
            <Select onChange={(e) => dispatch(setGamemode(e.target.value))} value={profile.gamemode}>
               {["firstto", "bestof"].map((mode) => {
                  return <option value={mode}>{mode}</option>;
               })}
            </Select>
         </Flex>

         <Flex justify="between" align="center" className="w-full">
            <Text>T&D</Text>
            <Select onChange={(e) => dispatch(setTD(e.target.value))} value={profile.td}>
               {["All", "only triple", "only double", "None"].map((mode) => {
                  return <option value={mode}>{mode}</option>;
               })}
            </Select>
         </Flex>
         <Flex justify="between" align="center" className="w-full">
            <Text>Legs</Text>
            <Input defaultValue={profile.legamount} type={"number"} min={1} max={50} onChange={(e) => dispatch(setLegamount(e.target.value))} />
         </Flex>
      </Flex>
   );
}

export default SplitScore;
