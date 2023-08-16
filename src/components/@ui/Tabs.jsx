import * as _Tabs from "@radix-ui/react-tabs";
import React from "react";
import { Children } from "react";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";
import { Flex } from "./Flex";

const Root = React.forwardRef(({ children, ...props }, ref) => {
   const [theme] = useTheme();

   return (
      <_Tabs.Root ref={ref} defaultValue="tab1" {...props}>
         <_Tabs.List className={cn("flex items-center justify-around rounded-md border-[1px]", theme.borderColor.light)}>
            {Children.map(children, (child) => {
               return child.type === Trigger && child;
            })}
         </_Tabs.List>
         {Children.map(children, (child) => {
            return child.type === Result && child;
         })}
      </_Tabs.Root>
   );
});

const Trigger = React.forwardRef(({ className, children, ...props }, ref) => {
   const [theme] = useTheme();

   return (
      <_Tabs.Trigger ref={ref} className={cn("outline-none", theme.borderColor.light, className)} {...props}>
         <Flex align="center" justify="center">
            {children}
         </Flex>
      </_Tabs.Trigger>
   );
});

const Result = ({ ...props }) => {
   return <_Tabs.Content {...props} />;
};

export { Root, Trigger, Result };
