import React from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "../../context/ThemeContext";
import { useAccount } from "../../state/AccountReducer";
import { setGamemode, setLegamount, setScoremode, useProfile } from "../../state/ProfileReducer";
import { Flex, Input, Select, Text } from "../@ui/_collection";

function X01() {
   const profile = useProfile();
   const dispatch = useDispatch();
   const account = useAccount();
   const [theme] = useTheme();

   return (
      <Flex orientation="vertical" gap="2">
         <Flex justify="between" align="center" className="w-full">
            <Text>Username</Text>
            <Input value={account ? account?.username : "x"} className={account ? theme.borderColor.positive : theme.borderColor.negative} readOnly />
         </Flex>
         <Flex justify="between" align="center" className="w-full">
            <Text>Points</Text>
            <Select onChange={(e) => dispatch(setScoremode(e.target.value))} defaultValue={profile.scoremode}>
               {[301, 501, 701, 1001, 2001, 3001].map((score) => {
                  return <option value={score}>{score}</option>;
               })}
            </Select>
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
            <Text>Legs</Text>
            <Input defaultValue={profile.legamount} type={"number"} min={1} max={50} onChange={(e) => dispatch(setLegamount(e.target.value))} />
         </Flex>
      </Flex>
   );
}

export default X01;
