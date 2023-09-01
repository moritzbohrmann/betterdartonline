import * as _Avatar from "@radix-ui/react-avatar";
import React from "react";
import { useAccount } from "../../state/AccountReducer";
import { initialsOf } from "../../utils/match";
import { Text } from "./Text";

function Avatar({ initials, ...props }) {
   const account = useAccount();

   const AvatarImage = () => {
      const className = "h-8 min-h-[2rem] w-8 min-w-[2rem] rounded-full";
      return <_Avatar.Image src={account?.picture} className={className} />;
   };

   const AvatarFallback = () => {
      const className = "flex h-8 w-8 items-center justify-center rounded-full bg-amber-100";
      return (
         <_Avatar.Fallback className={className}>
            <Text weight="b" className="text-amber-400">
               {account ? initialsOf(account?.username) : initials}
            </Text>
         </_Avatar.Fallback>
      );
   };

   return (
      <_Avatar.Root className="cursor-pointer" {...props}>
         <AvatarImage />
         <AvatarFallback />
      </_Avatar.Root>
   );
}

export default Avatar;
