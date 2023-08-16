import React from "react";
import { cva } from "class-variance-authority";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";
import { Hover } from "./Hover";

const buttonVariants = () => {
   const [theme] = useTheme();

   return cva("rounded-md m-auto font-sans font-bold outline-none", {
      variants: {
         variant: {
            default: cn(theme.buttonColor.default, theme.textColor.background),
            positive: cn(theme.buttonColor.positive, theme.textColor.background),
            negative: cn(theme.buttonColor.negative, theme.textColor.background),
            transparent: cn("bg-transparent", theme.textColor.background),
         },
         size: {
            default: "h-8 w-32 text-md",
            sm: "h-6 w-24 text-sm",
         },
         alignX: {
            l: "ml-0 left-0",
            c: "mx-auto",
            r: "mr-0 right-0",
            none: "mx-0",
         },
         alignY: {
            t: "mt-0 top-0",
            c: "my-auto",
            b: "mb-0 bottom-0",
            none: "my-0",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "default",
         alignX: "c",
         alignY: "c",
      },
   });
};

const Button = React.forwardRef(({ variant, size, className, alignX, alignY, ...props }, ref) => {
   const variants = buttonVariants();

   return (
      <Hover>
         <button ref={ref} className={cn(variants({ variant, size, alignX, alignY, className }))} {...props} />
      </Hover>
   );
});

export { Button, buttonVariants };
