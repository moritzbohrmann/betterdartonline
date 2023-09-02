import * as _Avatar from "@radix-ui/react-avatar";
import React from "react";
import { useAccount } from "../../state/AccountReducer";
import { Text } from "./Text";

const AvatarImage = ({ image }) => {
   const className = "h-8 min-h-[2rem] w-8 min-w-[2rem] rounded-full";
   return <_Avatar.Image src={image} className={className} />;
};

const AvatarFallback = ({ initials }) => {
   const className = "flex h-8 w-8 items-center justify-center rounded-full bg-amber-100";
   return (
      <_Avatar.Fallback className={className}>
         <Text weight="b" className="text-amber-400">
            {initials}
         </Text>
      </_Avatar.Fallback>
   );
};

function Avatar({ initials, ...props }) {
   const account = useAccount();

   return (
      <_Avatar.Root className="cursor-pointer" {...props}>
         <AvatarImage image={account?.picture} />
         <AvatarFallback initials={initials} />
      </_Avatar.Root>
   );
}

export default Avatar;
