import * as _Tabs from "@radix-ui/react-tabs";
import { Children } from "react";
import { cn } from "../../utils/style";
import { useTheme } from "../../context/ThemeContext";

const Root = ({ children, ...props }) => {
   const [theme] = useTheme();

   return (
      <_Tabs.Root defaultValue="tab1" {...props}>
         <_Tabs.List className={cn("rounded-md border-[1px] p-2", theme.borderColor.light)}>
            {Children.map(children, (child, index) => {
               return child.type === Trigger && child;
            })}
         </_Tabs.List>
         {Children.map(children, (child, index) => {
            return child.type === Result && child;
         })}
      </_Tabs.Root>
   );
};

const Trigger = ({ className, ...props }) => {
   const [theme] = useTheme();
   return (
      <_Tabs.Trigger
         className={cn("outline-none data-[state=active]:brightness-125", theme.borderColor.heavy, theme.textColor.hover, className)}
         {...props}
      />
   );
};

const Result = ({ ...props }) => {
   return <_Tabs.Content {...props} />;
};

export { Root, Trigger, Result };
