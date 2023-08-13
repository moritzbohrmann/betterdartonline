import React from "react";
import { Text } from "../@ui/Text";
import { Input } from "../@ui/Input";
import { Select } from "../@ui/Select";
import { setGamemode, setLegamount, setScoremode, setUsername, useProfile } from "../../state/ProfileReducer";

function X01() {
   const profile = useProfile();

   return (
      <div className="flex flex-col gap-2">
         <div className="grid">
            <div className="flex w-full items-center justify-between">
               <Text>Username</Text>
               <Input
                  defaultValue={profile.username}
                  placeholder="your username"
                  maxLength="16"
                  onChange={(e) => dispatch(setUsername(e.target.value))}
               />
            </div>
         </div>
         <div className="grid">
            <div className="flex w-full items-center justify-between">
               <Text>Points</Text>
               <Select onChange={(e) => dispatch(setScoremode(e.target.value))} defaultValue={profile.scoremode}>
                  {[301, 501, 701, 1001, 2001, 3001].map((score) => {
                     return <option value={score}>{score}</option>;
                  })}
               </Select>
            </div>
         </div>
         <div className="grid">
            <div className="flex w-full items-center justify-between">
               <Text>Mode</Text>
               <Select onChange={(e) => dispatch(setGamemode(e.target.value))} value={profile.gamemode}>
                  {["firstto", "bestof"].map((mode) => {
                     return <option value={mode}>{mode}</option>;
                  })}
               </Select>
            </div>
         </div>
         <div className="grid">
            <div className="flex w-full items-center justify-between">
               <Text>Legs</Text>
               <Input defaultValue={profile.legamount} type={"number"} min={1} max={50} onChange={(e) => dispatch(setLegamount(e.target.value))} />
            </div>
         </div>
      </div>
   );
}

export default X01;
