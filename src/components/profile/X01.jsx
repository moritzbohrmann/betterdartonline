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

   const Username = () => {
      return (
         <Flex justify="between" align="center" className="w-full">
            <Text>Username</Text>
            <Input value={account ? account.username : ""} className={account ? theme.borderColor.positive : theme.borderColor.negative} readOnly />
         </Flex>
      );
   };

   const Points = () => {
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
   };

   const Gamemode = () => {
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
   };

   const Legs = () => {
      return (
         <Flex justify="between" align="center" className="w-full">
            <Text>Legs</Text>
            <Input defaultValue={profile.legamount} type={"number"} min={1} max={50} onChange={(e) => dispatch(setLegamount(e.target.value))} />
         </Flex>
      );
   };

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
