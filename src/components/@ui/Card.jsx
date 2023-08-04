import * as RadixForm from "@radix-ui/react-form";
import React from "react";

export const Card = (props) => {
   return (
      <RadixForm.Root
         onSubmit={(e) => e.preventDefault()}
         className={`flex w-[24rem] flex-col rounded-lg border-[1px] border-zinc-900 px-10 py-8 font-sans ${props.className}`}>
         {props.children}
      </RadixForm.Root>
   );
};

export const Title = ({ title, subTitle }) => {
   return (
      <div className="pb-8">
         <h4 className="text-3xl font-bold text-white-default">{title}</h4>
         <p className="text-lg text-zinc-500">{subTitle}</p>
      </div>
   );
};
