import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/style";
import { Text } from "./Text";

const badgeVariants = cva("ring-1 ring-inset bg-opacity-20 inline-flex items-center justify-center rounded-md", {
   variants: {
      size: {
         default: "px-2 py-1",
      },
      color: {
         default: "ring-zinc-500 border-zinc-500 text-zinc-500",
         white: "ring-slate-500 border-white text-white-default",
         black: "ring-zinc-500 border-black text-black",
         red: "ring-red-500 border-red-500 text-red-500",
         green: "ring-green-500 border-green-500 text-green-500",
         yellow: "ring-yellow-500 border-yellow-500 text-yellow-500",
         orange: "ring-orange-500 border-orange-500 text-orange-500",
         blue: "ring-blue-500 border-blue-500 text-blue-500",
      },
   },
   defaultVariants: {
      size: "default",
      color: "default",
   },
});

function Badge({ color, className, ...props }) {
   return <Text size="md" className={cn(badgeVariants({ color, className }))} {...props} />;
}

export { Badge, badgeVariants };
