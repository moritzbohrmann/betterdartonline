import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/style";
import { useTheme } from "../../context/ThemeContext";

const borderVariants = () => {
   const [theme] = useTheme();

   return cva("", {
      variants: {
         variant: {
            light: theme.borderColor.light,
            heavy: theme.borderColor.heavy,
         },
         size: {
            hidden: "border-0",
            small: "border-[1px]",
            big: "border-[2px]",
         },
         orientation: {
            vertical: "border-x-0",
            horizontal: "border-y-0",
            both: "",
         },
      },
      defaultVariants: {
         variant: "light",
         size: "small",
         orientation: "both",
      },
   });
};

const Border = React.forwardRef(({ variant, size, orientation, className, ...props }, ref) => {
   const variants = borderVariants();

   return <div ref={ref} className={cn(variants({ variant, size, orientation, className }))} {...props} />;
});

export { Border, borderVariants };
