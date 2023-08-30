import * as _Avatar from "@radix-ui/react-avatar";
import React from "react";
import { useAccount } from "../state/AccountReducer";
import { initialsOf } from "../utils/match";
import { Flex } from "./@ui/Flex";
import { Text } from "./@ui/Text";

function Avatar({ initials }) {
   const account = useAccount();

   return (
      <_Avatar.Root>
         <_Avatar.Image src={account?.picture} className="h-8 w-8 rounded-full" />
         <_Avatar.Fallback>
            <Flex justify="center" align="center" className="h-8 w-8 rounded-full bg-amber-100">
               <Text weight="b" className="text-amber-400">
                  {account ? initialsOf(account?.username) : initials}
               </Text>
            </Flex>
         </_Avatar.Fallback>
      </_Avatar.Root>
   );
}

export default Avatar;
