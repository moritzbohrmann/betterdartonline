import * as RadixProgress from "@radix-ui/react-progress";
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";

function Progress({ progress, className, ...props }) {
   const [theme] = useTheme();

   return (
      <RadixProgress.Root
         className={cn("relative h-4 w-32 overflow-hidden rounded-full border-[1px] border-zinc-500 bg-white", className)}
         {...props}>
         <RadixProgress.Indicator
            className="h-full w-full bg-dark-background transition-transform duration-[660ms]"
            style={{ transform: `translateX(${progress}%)` }}
         />
      </RadixProgress.Root>
   );
}

export { Progress };
