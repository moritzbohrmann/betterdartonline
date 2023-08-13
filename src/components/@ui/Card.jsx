import React from "react";
import { cva } from "class-variance-authority";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/style";

const cardVariants = () => {
   const [theme] = useTheme();

   return cva("flex flex-col rounded-lg font-sans border-[1px]", {
      variants: {
         variant: {
            default: cn("min-w-[24rem]", theme.borderColor.light, theme.textColor.default, theme.backgroundColor),
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

   return <div ref={ref} className={cn(variants({ variant, size, className }))} {...props} />;
});

const Title = ({ title, subTitle }) => {
   const [theme] = useTheme();

   return (
      <div className="pb-8">
         <h4 className={`text-3xl font-bold ${theme.textColor.default}`}>{title}</h4>
         <p className="text-lg text-zinc-500">{subTitle}</p>
      </div>
   );
};

export { Card, Title };
