import React from "react";
import Separator from "../../@ui/Separator";
import { cn } from "../../../utils/style";
import { Flex } from "../../@ui/Flex";

function Unit({ children, className, ...props }) {
   return (
      <Flex orientation="vertical" gap="4" className={cn("w-full", className)} {...props}>
         <Separator className="mt-2" />
         <Flex orientation="vertical">{children}</Flex>
      </Flex>
   );
}

export default Unit;
