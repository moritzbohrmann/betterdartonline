import React from "react";
import { useTheme } from "../../context/ThemeContext";

export const Card = (props) => {
   const [theme] = useTheme();

   return (
      <div
         className={`flex w-[24rem] flex-col rounded-lg border-[1px] ${theme.backgroundColor} border-zinc-900 px-10 py-8 font-sans ${theme.textColor} ${props.className}`}
      >
         {props.children}
      </div>
   );
};

export const Title = ({ title, subTitle }) => {
   const [theme] = useTheme();

   return (
      <div className="pb-8">
         <h4 className={`text-3xl font-bold ${theme.textColor}`}>{title}</h4>
         <p className="text-lg text-zinc-500">{subTitle}</p>
      </div>
   );
};
