import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/style";

const badgeVariants = cva("ring-1 ring-inset bg-opacity-20 inline-flex items-center justify-center rounded-md font-sans", {
   variants: {
      size: {
         default: "px-2 py-1",
         icon: "h-5 w-5",
      },
      color: {
         default: "ring-zinc-500 border-zinc-500 text-zinc-500",
         white: "ring-white-default border-white-default text-white-default",
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

function Badge({ color, className, children, src, ...props }) {
   return (
      <div size="md" className={cn(badgeVariants({ color, className }))} {...props}>
         {src ? src : <p>{children}</p>}
      </div>
   );
}

function BadgeIcon({ color, className, ...props }) {
   return;
}

export { Badge, badgeVariants };
