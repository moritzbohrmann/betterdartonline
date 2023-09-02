import React from "react";
import { useDispatch } from "react-redux";
import { useProfile } from "../../../state/ProfileReducer";
import { Flex, Input, Text } from "../../@ui/_collection";

function Legs() {
   const dispatch = useDispatch();
   const profile = useProfile();

   return (
      <Flex justify="between" align="center" className="w-full">
         <Text>Legs</Text>
         <Input defaultValue={profile.legamount} type={"number"} min={1} max={50} onChange={(e) => dispatch(setLegamount(e.target.value))} />
      </Flex>
   );
}

export default Legs;
