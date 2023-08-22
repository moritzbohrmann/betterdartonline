import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/style";
import { Flex } from "./Flex";

const hoverVariants = () => {
   return cva("transition-all w-full h-full ease-in-out bg-black bg-opacity-0 rounded-md", {
      variants: {
         variant: {
            default: "hover:bg-opacity-10",
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
