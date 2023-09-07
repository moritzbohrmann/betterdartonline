import * as RadixProgress from "@radix-ui/react-progress";
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";

function Progress({ progress = 0, className, ...props }) {
   const [theme] = useTheme();

   return (
      <RadixProgress.Root
         className={cn("bg-white relative h-2 w-24 overflow-hidden rounded-full border-[1px]", theme.borderColor.default, className)}
         {...props}
      >
         <RadixProgress.Indicator
            className={cn("h-full w-full transition-transform", theme.backgroundColor)}
            style={{ transform: `translateX(${progress}%)` }}
         />
      </RadixProgress.Root>
   );
}

export { Progress };
