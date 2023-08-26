import React from "react";
import { cva } from "class-variance-authority";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";
import { Flex } from "../@ui/Flex";
import { Text } from "./Text";

const cardVariants = () => {
   const [theme] = useTheme();

   return cva("rounded-lg font-sans border-[1px] min-w-[24rem]", {
      variants: {
         variant: {
            default: cn(theme.borderColor.light, theme.textColor.default, theme.backgroundColor),
            transparent: cn(theme.borderColor.light, theme.textColor.default, "bg-transparent"),
         },
         size: {
            default: "w-112 py-8 px-10",
            sm: "96 py-4 px-6",
            fill: "w-full h-full py-8 px-10",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "default",
         border: "sm",
      },
   });
};

const Card = React.forwardRef(({ variant, size, className, ...props }, ref) => {
   const variants = cardVariants();

   return <Flex orientation="vertical" align="center" ref={ref} className={cn(variants({ variant, size, className }))} {...props} />;
});

const Title = ({ subTitle, className, ...props }) => {
   return (
      <div className="w-full pb-4" {...props}>
         <Text size="3xl" weight="b" align="l">
            {props.children}
         </Text>
         <Text variant="light" size="lg" align="l">
            {subTitle}
         </Text>
      </div>
   );
};

export { Card, Title };
