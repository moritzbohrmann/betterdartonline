import React from "react";
import ToolTip from "./ToolTip";
import { cva } from "class-variance-authority";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";

const textVariants = () => {
   const [theme] = useTheme();

   return cva(cn("font-sans", theme.borderColor.heavy), {
      variants: {
         variant: {
            heavy: theme.textColor.default,
            light: theme.textColor.descent,
            button: theme.textColor.button,
            label: "",
            button: "",
            title: "",
            subTitle: "",
         },
         weight: {
            l: "font-light",
            n: "font-normal",
            m: "font-medium",
            sb: "font-semibold",
            b: "font-bold",
            bl: "font-black",
         },
         size: {
            "sm": "text-sm",
            "md": "text-md",
            "lg": "text-lg",
            "xl": "text-xl",
            "2xl": "text-2xl",
            "3xl": "text-3xl",
            "5xl": "text-5xl",
         },
         align: {
            l: "text-left",
            c: "text-center",
            r: "text-right",
         },
      },
      defaultVariants: {
         variant: "heavy",
         weight: "n",
         size: "md",
         align: "c",
      },
   });
};

const Text = React.forwardRef(({ variant, weight, size, align, className, toolTip, ...props }, ref) => {
   const variants = textVariants();

   if (toolTip) {
      return (
         <ToolTip content={toolTip}>
            <p ref={ref} className={cn(variants({ variant, weight, size, align, className }))} {...props} />
         </ToolTip>
      );
   }

   return <p ref={ref} className={cn(variants({ variant, weight, size, align, className }))} {...props} />;
});

export { Text };
