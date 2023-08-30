import * as _Switch from "@radix-ui/react-switch";
import React from "react";
import { ThemeType, useTheme } from "../../context/ThemeContext";

function Switch({ ...props }) {
   const [theme] = useTheme();

   return (
      <_Switch.Root
         className={`relative h-[25px] w-[42px] rounded-full border-[1px]  ${
            theme.type === ThemeType.DARK ? "border-white-default bg-white-default" : "border-dark-background bg-dark-background"
         } outline-none`}
         {...props}>
         <_Switch.Thumb
            className={`block h-[21px] w-[21px] translate-x-0.5 rounded-full ${
               theme.type === ThemeType.DARK ? "bg-dark-background" : "bg-white-default"
            } transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[18px]`}
         />
      </_Switch.Root>
   );
}

export default Switch;
