import * as _Avatar from "@radix-ui/react-avatar";
import React from "react";
import { useAccount } from "../../state/AccountReducer";
import { initialsOf } from "../../utils/match";
import { Flex } from "./Flex";
import { Text } from "./Text";

function Avatar({ initials, ...props }) {
   const account = useAccount();

   return (
      <_Avatar.Root className="cursor-pointer" {...props}>
         <_Avatar.Image src={account?.picture} className="h-8 min-h-[2rem] w-8 min-w-[2rem] rounded-full" />
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
