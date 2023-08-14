import * as _Tabs from "@radix-ui/react-tabs";
import React from "react";
import { Children } from "react";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";

const Root = React.forwardRef(({ children, ...props }, ref) => {
   const [theme] = useTheme();

   return (
      <_Tabs.Root ref={ref} defaultValue="tab2" {...props}>
         <_Tabs.List className={cn("flex items-center justify-around rounded-md border-[1px]", theme.borderColor.light)}>
            {Children.map(children, (child, index) => {
               return child.type === Trigger && child;
            })}
         </_Tabs.List>
         {Children.map(children, (child, index) => {
            return child.type === Result && child;
         })}
      </_Tabs.Root>
   );
});

const Trigger = React.forwardRef(({ className, ...props }, ref) => {
   const [theme] = useTheme();
   return (
      <_Tabs.Trigger
         ref={ref}
         className={cn(
            "flex items-center justify-center outline-none data-[state=active]:bg-zinc-900",
            theme.borderColor.heavy,
            theme.textColor.hover,
            className
         )}
         {...props}
      />
   );
});

const Result = ({ ...props }) => {
   return <_Tabs.Content {...props} />;
};

export { Root, Trigger, Result };
