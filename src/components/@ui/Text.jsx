import * as ToolTip from "@radix-ui/react-tooltip";
import React from "react";
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
            sm: "text-sm",
            md: "text-md",
            lg: "text-lg",
            xl: "text-xl",
            xxl: "text-2xl",
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
         <ToolTip.Provider>
            <ToolTip.Root>
               <ToolTip.Trigger>
                  <p ref={ref} className={cn(variants({ variant, weight, size, align, className }))} {...props} />
               </ToolTip.Trigger>
               <ToolTip.Portal>
                  <ToolTip.Content>
                     <div className="w-48 rounded-md bg-zinc-200 p-2">
                        <p className="font-sans text-sm text-black-default">{toolTip}</p>
                     </div>
                     <ToolTip.Arrow className="fill-zinc-200" />
                  </ToolTip.Content>
               </ToolTip.Portal>
            </ToolTip.Root>
         </ToolTip.Provider>
      );
   }

   return <p ref={ref} className={cn(variants({ variant, weight, size, align, className }))} {...props} />;
});

export { Text };
