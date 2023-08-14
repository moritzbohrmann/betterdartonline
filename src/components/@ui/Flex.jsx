import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/style";

const flexVariants = cva("flex", {
   variants: {
      orientation: {
         horizontal: "flex-row",
         vertical: "flex-col",
         wrap: "flex-wrap",
      },
      gap: {
         0: "gap-0",
         1: "gap-1",
         2: "gap-2",
         3: "gap-3",
         4: "gap-4",
         6: "gap-6",
         8: "gap-8",
         10: "gap-10",
         12: "gap-12",
         16: "gap-16",
      },
      justify: {
         start: "justify-start",
         end: "justify-end",
         center: "justify-center",
         around: "justify-around",
         between: "justify-between",
      },
      align: {
         start: "items-start",
         end: "items-end",
         center: "items-center",
      },
   },
   defaultVariants: {
      orientation: "horizontal",
      gap: "2",
      justify: "start",
      align: "start",
   },
});

const Flex = React.forwardRef(({ orientation, gap, justify, align, className, ...props }, ref) => {
   return <div ref={ref} className={cn(flexVariants({ orientation, gap, justify, align, className }))} {...props} />;
});

export { Flex, flexVariants };
