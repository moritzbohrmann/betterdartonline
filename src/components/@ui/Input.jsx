import React from "react";
import { cva } from "class-variance-authority";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";

const inputVariants = () => {
   const [theme] = useTheme();

   return cva("rounded-md border-[1px] outline-none px-4 font-sans", {
      variants: {
         variant: {
            default: cn(theme.borderColor.light, theme.backgroundColor, theme.textColor.default),
         },
         size: {
            sm: "w-40 h-8",
            md: "w-48 h-8",
            lg: "w-52 h-8",
            xl: "w-56 h-8",
            fill: "w-full h-8",
         },
         text: {
            l: "text-left",
            c: "text-center",
            r: "text-right",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "md",
      },
   });
};

const Input = React.forwardRef(({ variant, size, text, className, ...props }, ref) => {
   const variants = inputVariants();
   return <input ref={ref} className={cn(variants({ variant, size, text, className }))} {...props} />;
});

export { Input, inputVariants };
