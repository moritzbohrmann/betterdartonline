import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/style";
import { Flex } from "./Flex";

const hoverVariants = () => {
   return cva("transition-all w-full h-full rounded-md", {
      variants: {
         variant: {
            default: "hover:bg-opacity-50",
            invert: "hover:invert",
         },
      },
      defaultVariants: {
         variant: "default",
      },
   });
};

const Hover = React.forwardRef(({ variant, className, ...props }, ref) => {
   const variants = hoverVariants();

   return <Flex ref={ref} align="center" justify="center" className={cn(variants({ variant, className }))} {...props} />;
});

export { Hover, hoverVariants };
