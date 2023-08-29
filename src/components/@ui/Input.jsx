import React from "react";
import { cva } from "class-variance-authority";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";

const inputVariants = () => {
   const [theme] = useTheme();

   return cva("rounded-md border-[1px] outline-none px-4 font-sans h-8", {
      variants: {
         variant: {
            default: cn(theme.borderColor.light, theme.backgroundColor, theme.textColor.default),
         },
         size: {
            "sm": "w-40",
            "md": "w-48",
            "lg": "w-52",
            "xl": "w-56",
            "2xl": "w-64",
            "3xl": "w-80",
            "fill": "w-full",
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
